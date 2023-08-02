import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import Logo_FC from '../public/Logo_FaceBook.png';
import Logo_TW from '../public/Logo_Twitter.png';
import Logo_TT from '../public/Logo_Tiktok.png';
import Logo_IG from '../public/Logo_IG.png';

const Footer = () => {
  return (
    <div className='text-xl'>
       <nav className="fixed w-full h-24 shadow-xl bg-white">
        <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
            <div>
                Copyright claim goes here
            </div>
            <div className='hidden md:flex pr-4 space-x-5'>
                    <Link href=''>
                    <Image
                        src={Logo_FC}
                        alt="Logo"
                        width="35"
                        height="50"
                        className="cursor-pointer"
                        priority
                    />
                    </Link>
                    <Link href='/'>
                        <Image
                            src={Logo_TW}
                            alt="Logo"
                            width="35"
                            height="50"
                            className="cursor-pointer"
                            priority
                        />
                    </Link>
                    <Link href='/'>
                        <Image
                            src={Logo_TT}
                            alt="Logo"
                            width="35"
                            height="50"
                            className="cursor-pointer"
                            priority
                        />
                    </Link>
                    <Link href='https://www.instagram.com/qmcimports/?hl=fr'>
                        <Image
                            src={Logo_IG}
                            alt="Logo"
                            width="35"
                            height="50"
                            className="cursor-pointer"
                            priority
                        />
                    </Link>
            </div>
        </div>
    </nav>
    </div>
  )
}

export default Footer
