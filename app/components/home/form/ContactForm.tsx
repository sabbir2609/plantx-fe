'use client'
import { useState, ChangeEvent, FormEvent } from 'react'

export default function ContactForm() {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [status, setStatus] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/home/contact/`,
                {
                    method: 'POST',
                    body: JSON.stringify({
                        name,
                        email,
                        message
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

            if (response.ok) {
                setStatus('Message sent successfully!')
            } else {
                setStatus('Failed to send message.')
            }
        } catch (error) {
            setStatus('An error occurred.')
        }

        setIsLoading(false)
        setName('')
        setEmail('')
        setMessage('')
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
    const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)

    return (
        <div className="w-full rounded-md shadow-md bg-base-200 p-4 md:p-8">
            <form className="p-3" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered"
                            value={name}
                            onChange={handleNameChange}
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="input input-bordered"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                    </div>
                </div>
                <div className="form-control mt-2">
                    <label className="label">
                        <span className="label-text">Message</span>
                    </label>
                    <textarea
                        placeholder="Your Message"
                        className="textarea textarea-bordered"
                        value={message}
                        onChange={handleMessageChange}
                        required
                    ></textarea>
                </div>
                <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary flex items-center justify-center" disabled={isLoading}>
                        {isLoading ? (
                            <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                            </svg>
                        ) : (
                            'Submit'
                        )}
                    </button>
                </div>
                {status && <p className="mt-4 text-center">{status}</p>}
            </form>
        </div>
    )
}