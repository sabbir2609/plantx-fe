export default function ContactUs() {
    return (
        <div className="flex flex-col justify-between lg:flex-row md:flex-row w-full p-5" style={{
            backgroundImage: "url('/images/bg/bg_3.jpg')",
        }}>
            {/* Contact Information */}
            <div className="flex flex-col text-white justify-center rounded-lg p-5">
                <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                <p className="mb-2"><strong>Address:</strong> 123 Plant Street, Green City, GA 12345</p>
                <p className="mb-2"><strong>Email:</strong> contact@plantdecor.com</p>
                <p className="mb-2"><strong>Phone:</strong> (123) 456-7890</p>
            </div>
        </div>
    )
}