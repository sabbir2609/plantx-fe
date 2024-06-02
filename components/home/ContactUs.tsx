export default function ContactUs() {
    return (
        <div className="flex flex-col md:flex-row w-full h-screen p-5 shadow-sm">

            {/* Contact Information */}
            <div className="w-full flex flex-col justify-center rounded-lg shadow-lg p-5">

                <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                <p className="mb-2"><strong>Address:</strong> 123 Plant Street, Green City, GA 12345</p>
                <p className="mb-2"><strong>Email:</strong> contact@plantdecor.com</p>
                <p className="mb-2"><strong>Phone:</strong> (123) 456-7890</p>

                <form className="mt-4">
                    <div className="mb-4">
                        <div className="label">
                            <span className="label-text">Name</span>
                        </div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="input input-bordered input-warning w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <div className="label">
                            <span className="label-text">Email</span>
                        </div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="input input-bordered input-warning w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <div className="label">
                            <span className="label-text">Message</span>
                        </div>
                        <textarea
                            name="message"
                            placeholder="Message"
                            className="textarea textarea-bordered textarea-warning w-full"
                        ></textarea>
                    </div>
                    <div className="text-right">
                        <button type="submit" className="btn hover:bg-blue-600">
                            Send Message
                        </button>
                    </div>
                </form>

            </div>

            {/* Google Map */}
            <div className="w-full mt-10 h-96">
                <iframe
                    className="w-full h-full md:h-96 rounded-lg shadow-lg"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10401.578171001234!2d89.5407512606299!3d22.820493956581856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff9b88661bd67d%3A0x75a5a08dd1a4aa9f!2sSonadanga%20Bus%20Terminal!5e0!3m2!1sen!2sbd!4v1717345666468!5m2!1sen!2sbd"
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    )
}