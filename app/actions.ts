// app/actions.ts
"use server";

import { Resend } from "resend";
import { google } from "googleapis";

const resend = new Resend(process.env.RESEND_API_KEY);

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
    // 1. Send Email Notification
    await resend.emails.send({
      from: "onboarding@resend.dev", // Use verified domain later
      to: "whisprbill@gmail.com", // YOUR EMAIL
      subject: `New Lead: ${name} - ${queryType}`,
      html: `
        <h2>New Inquiry 🚀</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Query Type:</strong> ${queryType}</p>
        <p><strong>Message:</strong><br/>${message || "No custom message"}</p>
      `,
    });

    // 2. Save to Google Sheets
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:F", // Columns: Name, Email, Phone, Type, Message, Date
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
    console.error("Submission error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}
