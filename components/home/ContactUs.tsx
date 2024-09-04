import { Fetch } from "@/app/lib"
import { Mail, MapPin, PhoneCall } from "lucide-react"
import { ContactForm } from "."

interface ContactInfo {
    address: string
    email: string
    phone: number
}

export default async function ContactUs() {
    const data = await Fetch({ endpoint: "home/contact-info/" })
    const contactInfo: ContactInfo[] = data

    return (
        <div className="flex flex-col lg:flex-row w-full p-5 bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="flex flex-col justify-center p-8 text-white bg-opacity-75 bg-gray-900 rounded-lg lg:w-1/2 w-full select-text shadow-lg">
                <h2 className="mb-6 text-4xl font-extrabold">Contact Us</h2>
                {contactInfo && contactInfo.map((info, index) => (
                    <div key={index} className="space-y-4 mb-4">
                        <p className="flex items-center text-lg">
                            <MapPin size={24} className="inline-block text-yellow-400" />
                            <span className="ml-3">{info.address}</span>
                        </p>
                        <p className="flex items-center text-lg">
                            <Mail size={24} className="inline-block text-yellow-400" />
                            <a href={`mailto:${info.email}`} className="ml-3 underline hover:text-yellow-300">
                                {info.email}
                            </a>
                        </p>
                        <p className="flex items-center text-lg">
                            <PhoneCall size={24} className="inline-block text-yellow-400" />
                            <a href={`tel:${info.phone}`} className="ml-3 underline hover:text-yellow-300">
                                {info.phone}
                            </a>
                        </p>
                    </div>
                ))}
            </div>
            <div className="flex-1 mt-5 lg:mt-0 lg:ml-5">
                <ContactForm />
            </div>
        </div>
    )
}