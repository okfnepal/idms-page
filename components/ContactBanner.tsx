import Link from "next/link"

export function Contact() {
    return (
        <>
            <div className="mx-auto w-full pt-16 pb-20 px-8 contact_banner">
                <div className=" lg:w-4/5 xl:w-4/6 2xl:max-w-screen-lg bg-white mx-auto border-teal-300 border-2 rounded-md px-16 py-10">
                    <span className="relative inline-block font-semibold text-3xl text-black overflow-hidden mx-auto">
                        <span className="heading-highlight relative font-headings z-10 mb-10">{`Let's work together`}</span>
                    </span>
                    <div className="mt-4">
                    <p className="text-lg">Interested in collaborating, seeing a demo, or obtaining answers to your questions?</p>
                    <p className="text-lg">{`We're just an email away.`}</p>
                    </div>
                    <Link href="/contact">
                        <span
                            className="mt-5 block w-36 flex justify-center rounded-md bg-neutral-900 px-4 py-3 font-medium text-slate-50 shadow hover:bg-neutral-800 hover:text-slate "
                        >
                            Contact Us
                        </span>
                    </Link>
                </div>
            </div>
        </>
    )
}