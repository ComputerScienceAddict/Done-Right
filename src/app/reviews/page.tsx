import { Reviews } from "@/components/Reviews";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Customer reviews for Done-Right Cleaning from Facebook and Google, including testimonials for Nicole and the team.",
};

export default function ReviewsPage() {
  return <Reviews />;
}
