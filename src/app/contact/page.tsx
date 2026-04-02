import type { Metadata } from "next";
import ContactPage from "@/components/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us | Opulence Cabo",
  description:
    "Get in touch with Opulence Cabo to plan your luxury experience in Los Cabos. Private villas, yachting, aviation, dining, and more.",
};

export default function Contact() {
  return <ContactPage />;
}
