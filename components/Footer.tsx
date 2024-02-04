
import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'


import Logo from '../public/images/okn-logo-gray.svg'
import { HTMLDivProps } from './propsType'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faHeart, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

interface FooterProps extends HTMLDivProps {
    active?: string
}
const footerSocials = [
    { title: "About", favIcon: faUsers, href: "/about-idms"},
    { title: "Email", favIcon: faEnvelopeOpen, href: "/about-idms"},
    { title: "Support", favIcon: faHeart, href: "/about-idms" },
    { title: "Twitter/X", favIcon: faXTwitter, href: "/about-idms"},
    { title: "Facebook", favIcon: faFacebookF, href: "/about-idms"}]

const Footer: FC<FooterProps> = (props: FooterProps) => {
    const { active, children, ...rest } = props
    return (
        <div className="bg-gray-100">
            <div className="relative  mx-auto w-full max-w-screen-xl pt-16 px-8">
                <div className="border-b-2 pb-4 md:flex-1 md:flex md:flex-wrap md:flex-row justify-between items-center">
                    <div className="w-24 md:w-40 pr-2 mx-auto md:mx-0">
                        <Link href='/'>
                            <span className='hover:shadow-none'><Image src={Logo} priority={true} alt='Footer Logo'/></span>
                        </Link>
                    </div>
                    <ul className="flex flex-col md:flex-row py-4 md:py-0">
                        {footerSocials.map((item, key) => (
                            <li  key={key} className="px-1 sm:px-1 flex flex-row ">
                                <Link href={item.href}>
                                    <span className='hidden md:inline-block'><FontAwesomeIcon icon={item.favIcon} className='hidden' /></span> <span className="mr-4 ml-1">{item.title}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <hr />
                <div className="flex-1 flex flex-col md:flex-row justify-between py-4">
                    <p className="text-sm md:text-base pb-2 md:pb-0 w-full md:w-4/6">Content on this site, made by &nbsp;
                        <Link href='/'><span>Open Knowledge Nepal</span></Link>, is licensed under a <Link href="https://creativecommons.org/licenses/by/4.0/"><span >Creative Commons Attribution 4.0 International License.</span></Link>
                    </p>
                    <div className="text-sm md:text-base pr-2 no-underline" >
                        <a href="https://oknp.org/privacy" target='_blank'> <span className='mr-4'>Privacy Policy</span></a>
                        <a href="https://oknp.org/cookiee" target='_blank'> Cookiee Policy</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer