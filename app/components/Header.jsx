import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { FaArrowRight, FaDownload } from 'react-icons/fa'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
const Header = () => {
    return (
        <div className=" text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 relative -top-20">
        <div>
            <Image src={assets.grace} alt="grace" className="rounded-full w-28 h-25 lg:hidden" />
        </div>
            <h3 className="flex items-end  text-xl md:text-2xl tracking-widest"> Hello! I'm Grace Adegunle 
                         
            </h3>
            <TextGenerateEffect className=" text-4xl sm:text-3xl uppercase font-Ovo" words={"Problem Solver | Innovator |  Developer"} />
            <p className="max-w-2xl mx-auto md:tracking-wider mb-4 text-sm md:text-lg lg:text-lg text-center">
            With a passion for building technology that empowers and inspires, I specialize in frontend, backend, and mobile development, transforming complex challenges into sleek, functional, and scalable solutions.
            I’ve got you covered. I believe every line of code tells a story, and I’m here to make yours unforgettable. <br />
            Ready to build something amazing?
            </p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <a href="#contact"
                className="px-10 py-3 border-white  bg-black text-white gap-2 flex rounded-full items-center "
                > Contact me
                    <FaArrowRight className="w-4" />
                </a>
                <a href="/cv.docx" download className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 "> My Resume 
                <FaDownload/>
                </a>
            </div>
    </div>
  )
}

export default Header