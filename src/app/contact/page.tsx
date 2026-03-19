import { Contact } from "@/components/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request a quote or call Done-Right Cleaning Services.",
};

export default function ContactPage() {
  return <Contact />;
}
