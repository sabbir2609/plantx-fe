import { Fetch } from "@/app/lib"
import { Mail, MapPin, PhoneCall } from "lucide-react"

interface ContactInfo {
    address: string
    email: string
    phone: number
}

export default async function ContactUs() {
    const data = await Fetch({ endpoint: "home/contact-info/" })
    const contactInfo: ContactInfo[] = data

    return (
        <div
            className="flex flex-col justify-between w-full p-5 lg:flex-row md:flex-row bg-cover bg-center"
            style={{ backgroundImage: "url('/images/bg/bg_3.jpg')" }}
        >
            <div className="flex flex-col justify-center p-5 text-white bg-opacity-75 bg-gray-900 rounded-lg select-text">
                <h2 className="mb-4 text-3xl font-bold">Contact Us</h2>
                {contactInfo && contactInfo.map((info, index) => (
                    <div key={index} className="space-y-2">
                        <p className="flex items-center">
                            <MapPin size={20} className="inline-block sm:size-[24px] md:size-[20px]" />
                            <span className="ml-2">{info.address}</span>
                        </p>
                        <p className="flex items-center">
                            <Mail size={20} className="inline-block" />
                            <a href={`mailto:${info.email}`} className="ml-2 underline hover:text-gray-300">
                                {info.email}
                            </a>
                        </p>
                        <p className="flex items-center">
                            <PhoneCall size={20} />
                            <a href={`tel:${info.phone}`} className="ml-2 underline hover:text-gray-300">
                                {info.phone}
                            </a>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}