"use client";
import React, { useState } from 'react';
import { motion } from "framer-motion";

function Pengalaman(){
const [muter,setMuter] = useState(false);
const gambar = [
    "/img/welcome.webp",
    "/img/tier.webp",
    "/img/fasilitas.webp",
  ];


    return(
        <div id="skill" className="flex py-4 my-22 w-screen justify-center">
            <div className="mx-10">
                <h2 className="text-sm fade-in font-semibold text-indigo-600 uppercase tracking-wide">
                    project
                </h2>
                <p className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl fade-in">
                    Beberapa project yang aku publish
                </p>
                <div className='flex relative  my-12'>
                    <div className='absolute top-1 bg-gradient-to-b z-10 from-white via-white/50 h-[100px] -mt-1 w-full to-transparent'></div>
                    <img src="/img/porto1.webp" className='xl:max-w-[600px] mx-auto fade-in max-w-[400px] md:max-w-[500px]' />
                    <div className='absolute bottom-0 bg-gradient-to-t z-10 from-white via-white/50 h-[100px] w-full to-transparent'></div>
                </div>
                <p className='text-gray-600'>
                    landing page coursus AI, dibuat dengan tailwind dan pengoktimalam peforma.
                </p>
                <a
            className="text-indigo-600 fade-in hover:underline"
            href="https://example-landing-page-coursus.vercel.app/"
            >
            Lihat lebih lengkap tap disini
            </a>
            
            </div>
        </div>
    )
}

export default Pengalaman;