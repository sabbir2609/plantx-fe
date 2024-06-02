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
            {/* Google Map */}
            <div className="w-full md:w-1/2 h-96 md:h-full rounded-lg p-5 mt-5 md:mt-0">
                <iframe
                    className="w-full h-full md:h-96 rounded-lg"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8937930309953!2d90.38806817533597!3d23.751166478669973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8bcd681372b%3A0x5c2b8755e4327004!2sBashundhara%20City%20Shopping%20Complex!5e0!3m2!1sen!2sbd!4v1717360757036!5m2!1sen!2sbd"
                    loading="lazy"
                    allowFullScreen
                ></iframe>
            </div>

        </div>
    )
}