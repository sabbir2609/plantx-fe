'use client'
import { useState, ChangeEvent, FormEvent } from 'react'

export default function Page() {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [status, setStatus] = useState<string>('')

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

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

        setName('')
        setEmail('')
        setMessage('')
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
    const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)

    return (
        <div className="hero min-h-full bg-base-100">
            <div className="hero-content p-0 flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Contact Us!</h1>
                    <p className="py-4 px-2">We would love to hear from you. Please fill out the form below and we will get back to you as soon as possible.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
                    <form className="card-body" onSubmit={handleSubmit}>
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
                        <div className="form-control">
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
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                        {status && <p className="mt-4 text-center">{status}</p>}
                    </form>
                </div>
            </div>
        </div>
    )
}
