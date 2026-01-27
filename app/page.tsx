// app/page.tsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import DemoForm from "./components/DemoForm";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import ChatWidget from "./components/ChatWidget";
import PrivacySecurity from "./components/PrivacySecurity";
import UpcomingFeatures from "./components/UpcomingFeatures";
import ComingSoonModal from "./components/ComingSoonModal";

export default function Home() {
  return (
    <>
    <main className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />  
      <PrivacySecurity />
      <UpcomingFeatures />
      <Pricing />
      <ComingSoonModal />
      <DemoForm />
      <Testimonials />
      <Footer />
    </main>
    <ChatWidget />
    </>
  );
}
