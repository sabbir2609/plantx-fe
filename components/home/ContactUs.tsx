export default function ContactUs() {
    return (
        <div className="flex flex-col justify-between w-full p-5 lg:flex-row md:flex-row" style={{
            backgroundImage: "url('/images/bg/bg_3.jpg')",
        }}>
            <div className="flex flex-col justify-center p-5 text-white rounded-lg select-text">
                <h2 className="mb-4 text-3xl font-bold">Contact Us</h2>
                <p className="mb-2"><span className="font-semibold">Address:</span> 123 Plant Street, Green City, GA 12345</p>
                <p className="mb-2"><span className="font-semibold">Email:</span> <a href="mailto:contact@plantdecor.com" className="underline">contact@plantdecor.com</a></p>
                <p className="mb-2"><span className="font-semibold">Phone:</span> <a href="tel:+11234567890" className="underline">(123) 456-7890</a></p>
            </div>
        </div>
    )
}