import { ContactForm } from "@/app/components/home";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Viriditas for plant-based interior design services.",
};

export default async function Page() {
  const contactInfo = [
    {
      address: "H-36, R-2, Block-B, Aftabnagar, Dhaka, Bangladesh",
      email: "hello@thviriditas.com",
      phone: "+8801918426908",
    },
  ];

  return (
    <div className="dark:bg-base-900 hero my-10 min-h-full bg-base-100">
      <div className="hero-content flex-col p-6 lg:flex-row-reverse lg:p-12">
        <div className="text-center lg:mr-12">

          <h1 className="text-5xl font-bold">Contact Us!</h1>
          <p className="py-4 text-lg">
            We would love to hear from you. Please fill out the form below and
            we will get back to you as soon as possible.
          </p>

          <div className="mt-4 flex flex-row justify-center gap-2 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Link
              href={`https://wa.me/${contactInfo[0].phone}`}
              className="hover:bg-primary-focus rounded bg-primary px-4 py-2 font-bold text-white"
            >
              WhatsApp
            </Link>
            <Link
              href={`mailto:${contactInfo[0].email}`}
              className="hover:bg-secondary-focus rounded bg-secondary px-4 py-2 font-bold text-white"
            >
              Email
            </Link>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
