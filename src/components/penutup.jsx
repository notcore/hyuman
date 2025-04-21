"use client";
import React, { useState } from 'react';
import { motion } from "framer-motion"; // ✅ BENAR


function Penutup(){
const [muter,setMuter] = useState(false);

    return(
        <div id="skill" className="flex py-4 my-22 w-screen justify-center">
            <div className="mx-10">
                <h2 className="text-sm fade-in font-semibold text-indigo-600 uppercase tracking-wide">
                terima kasih
                </h2>
                <p className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl fade-in">
                tiket untuk ke instagram hyuman.let
                </p>
                <motion.img
                    onClick={()=>setMuter(!muter)}
                    animate={{ rotate: muter ? 8 : 0 }}
                    transition={{ duration: 0.5 }}
                    className="md:max-w-[650px] mx-auto lg:max-w-[800px] max-w-[310px] sm:max-w-[440px]" 
                    src="/img/hyumanticket1.png" 
                />
            </div>
        </div>
    )
}

export default Penutup;