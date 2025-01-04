import { ContactForm } from '@/app/components/home';
import Link from 'next/link';
import { Fetch } from '@/app/lib';
import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: "Contact Us",
    description: "Contact Viriditas for plant-based interior design services.",
}

interface Contact {
    phone: string;
    email: string;
}

export default async function Page() {
    const data = await Fetch({ endpoint: "home/contact-info" });
    const contact: Contact[] = data;

    return (
        <div className="hero min-h-full bg-base-100 my-10">
            <div className="hero-content p-0 flex-col lg:flex-row-reverse">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Contact Us!</h1>
                    <p className="py-4 px-4">We would love to hear from you. Please fill out the form below and we will get back to you as soon as possible.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
                    <ContactForm />
                </div>

                <div className="flex flex-row mt-4">
                    <Link
                        href={`https://wa.me/${contact[0].phone}`}
                        className="mr-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                        WhatsApp
                    </Link>
                    <Link
                        href={`mailto:${contact[0].email}`}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                        Email
                    </Link>
                </div>

            </div>
        </div>
    )
}
