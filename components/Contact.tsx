import Link from "next/link"
import ReCAPTCHA from "react-google-recaptcha"
import React, { useState } from 'react';


export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        organization: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const formItems = [
        { id: "name", placeholder: "Full Name*", value: formData.name },
        { id: "organization", placeholder: "Organization*", value: formData.organization },
        { id: "phone", placeholder: "Phone", value: formData.phone },
        { id: "subject", placeholder: "Subject*", value: formData.subject },
        { id: "message", placeholder: "Message*", value: formData.message }
    ]

    function onChange(value:any) {
        console.log("Captcha value:", value);
      }


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        console.log(name)
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('this is form data', formData)

        // try {
        //     const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'Authorization': 'Bearer YOUR_SENDGRID_API_KEY',
        //         },
        //         body: JSON.stringify(formData),
        //     });

        //     if (response.ok) {
        //         console.log('Email sent successfully');
        //         // You can handle success, e.g., display a success message
        //     } else {
        //         console.error('Failed to send email');
        //         // Handle failure, display an error message, etc.
        //     }
        // } catch (error) {
        //     console.error('Error sending email:', error);
        // }
    };

    return (
        <>
            <section className="lg:relative px-6 h-full ">
                <div className="mx-auto px-8 w-full max-w-screen-xl pt-16 pb-20 text-left lg:text-left custom-bg">

                    <div className="xl:pr-8">
                        <h1 className="text-4xl mr-8 font-headings font-bold tracking-tight text-primary flex flex-col ">
                            Let's Talk
                        </h1>
                        <div className="w-full ">
                            <form
                                onSubmit={handleSubmit}
                                className="rounded pr-8 pt-6 pb-8 mb-4 w-4/5"
                            >
                                {formItems.map((item, index) => (
                                    <div key={index} className="mb-4">
                                        {item.id === "message" ?
                                            <textarea
                                                id={item.id}
                                                name={item.id}
                                                placeholder={item.placeholder}
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="shadow appearance-none border-teal-300 border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40"
                                            />
                                            :
                                            <input
                                                id={item.id}
                                                name={item.id}
                                                placeholder={item.placeholder}
                                                value={item.value}
                                                onChange={handleChange}
                                                type="text"
                                                className="shadow appearance-none border-teal-300 border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            />
                                        }
                                    </div>
                                ))}
                                <ReCAPTCHA
                                    sitekey="6Le80HMpAAAAAFPBmsRWz5nqcS6mBoMXyWlVijzr"
                                    onChange={onChange}
                                />
                                <button type="submit">
                                    <span
                                        className="mt-5 block w-36 flex justify-center rounded-md bg-neutral-900 px-4 py-3 font-medium text-slate-50 shadow hover:bg-neutral-800 hover:text-slate "
                                    >
                                        Submit
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
