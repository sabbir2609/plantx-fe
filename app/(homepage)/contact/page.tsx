import { ContactForm } from '@/components/home';
export default function Page() {
    return (
        <div className="hero min-h-full bg-base-100">
            <div className="hero-content p-0 flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Contact Us!</h1>
                    <p className="py-4 px-6">We would love to hear from you. Please fill out the form below and we will get back to you as soon as possible.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}
