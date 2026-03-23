// app/actions.ts
"use server";

import { Resend } from "resend";
import { google } from "googleapis";

const resend = new Resend(process.env.RESEND_API_KEY);

function getErrorDetails(error: unknown) {
  if (error instanceof Error) {
    const errWithExtra = error as Error & {
      code?: string | number;
      status?: number;
      errors?: unknown;
      response?: unknown;
    };

    return {
      name: errWithExtra.name,
      message: errWithExtra.message,
      code: errWithExtra.code,
      status: errWithExtra.status,
      errors: errWithExtra.errors,
      response: errWithExtra.response,
      stack: errWithExtra.stack,
    };
  }

  return { raw: error };
}

function logActionError(
  action: string,
  stage: "EMAIL_SEND" | "SHEETS_APPEND",
  error: unknown,
  meta: Record<string, unknown> = {}
) {
  console.error(`[${action}] ${stage} failed`, {
    ...meta,
    error: getErrorDetails(error),
  });
}

function createSheetsClient() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
}

export async function submitDemoRequest(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const queryType = formData.get("queryType") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !phone) {
    return { success: false, message: "Name, Email, and Phone are required." };
  }

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "whisprbill@gmail.com",
      subject: `New Lead: ${name} - ${queryType}`,
      html: `
        <h2>New Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Query Type:</strong> ${queryType}</p>
        <p><strong>Message:</strong><br/>${message || "No custom message"}</p>
      `,
    });
  } catch (error) {
    logActionError("submitDemoRequest", "EMAIL_SEND", error, { email, queryType });
    return { success: false, message: "Something went wrong. Please try again." };
  }

  try {
    const sheets = createSheetsClient();

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:F",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            name,
            email,
            phone,
            queryType,
            message,
            new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
          ],
        ],
      },
    });

    return {
      success: true,
      message: "Request received! We'll contact you shortly.",
    };
  } catch (error) {
    logActionError("submitDemoRequest", "SHEETS_APPEND", error, {
      spreadsheetIdPresent: Boolean(process.env.GOOGLE_SHEET_ID),
      clientEmailPresent: Boolean(process.env.GOOGLE_CLIENT_EMAIL),
      privateKeyPresent: Boolean(process.env.GOOGLE_PRIVATE_KEY),
      range: "Sheet1!A:F",
      email,
    });

    return { success: false, message: "Something went wrong. Please try again." };
  }
}

export async function submitWaitlistRequest(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const company = (formData.get("company") as string) || "";
  const notes = (formData.get("notes") as string) || "";
  const source = "Website Waitlist";

  if (!name || !email) {
    return { success: false, message: "Name and Email are required." };
  }

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "whisprbill@gmail.com",
      subject: `New Waitlist Signup: ${name}`,
      html: `
        <h2>New Waitlist Signup</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Notes:</strong><br/>${notes || "No notes provided"}</p>
        <p><strong>Source:</strong> ${source}</p>
      `,
    });
  } catch (error) {
    logActionError("submitWaitlistRequest", "EMAIL_SEND", error, { email, source });
    return { success: false, message: "Something went wrong. Please try again." };
  }

  try {
    const sheets = createSheetsClient();

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Waitlist!A:F",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            name,
            email,
            company,
            notes,
            source,
            new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
          ],
        ],
      },
    });

    return {
      success: true,
      message: "You are on the waitlist.",
    };
  } catch (error) {
    logActionError("submitWaitlistRequest", "SHEETS_APPEND", error, {
      spreadsheetIdPresent: Boolean(process.env.GOOGLE_SHEET_ID),
      clientEmailPresent: Boolean(process.env.GOOGLE_CLIENT_EMAIL),
      privateKeyPresent: Boolean(process.env.GOOGLE_PRIVATE_KEY),
      range: "Waitlist!A:F",
      email,
      source,
    });

    return { success: false, message: "Something went wrong. Please try again." };
  }
}

export async function submitWaitlistEmailOnly(formData: FormData) {
  const email = formData.get("email") as string;
  const source = "ComingSoonModal";

  if (!email) {
    return { success: false, message: "Email is required." };
  }

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "whisprbill@gmail.com",
      subject: `New Waitlist Signup (Modal): ${email}`,
      html: `
        <h2>New Waitlist Signup</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Source:</strong> ${source}</p>
      `,
    });
  } catch (error) {
    logActionError("submitWaitlistEmailOnly", "EMAIL_SEND", error, { email, source });
    return { success: false, message: "Something went wrong. Please try again." };
  }

  try {
    const sheets = createSheetsClient();

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Waitlist!A:F",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            "",
            email,
            "",
            "",
            source,
            new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
          ],
        ],
      },
    });

    return {
      success: true,
      message: "You are on the waitlist.",
    };
  } catch (error) {
    logActionError("submitWaitlistEmailOnly", "SHEETS_APPEND", error, {
      spreadsheetIdPresent: Boolean(process.env.GOOGLE_SHEET_ID),
      clientEmailPresent: Boolean(process.env.GOOGLE_CLIENT_EMAIL),
      privateKeyPresent: Boolean(process.env.GOOGLE_PRIVATE_KEY),
      range: "Waitlist!A:F",
      email,
      source,
    });

    return { success: false, message: "Something went wrong. Please try again." };
  }
}
