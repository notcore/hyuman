
import * as motion from "motion/react-client";
import Image from "next/image"
import { useRef } from "react";

function Aboutme(){
    const constraintsRef = useRef(null);
  
    return (
      <div id="aboutme" className="flex flex-col mt-12 md:flex-row-reverse items-center justify-center w-screen mb-12 gap-10">
      <div className="px-10 md:-ml-10 animate-scroll md:px-0">
        <h2 className="text-sm fade-in font-semibold text-indigo-700 uppercase tracking-wide">
          About Me
        </h2>
        <p className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl fade-in">
          Hai, nama aku <span className="text-indigo-700">Dava Elyanta</span>
        </p>
        <p className="mt-4 text-lg text-gray-600 fade-in">
          Aku seorang siswa kelas 11 SMK jurusan Teknik Jaringan Komputer &amp;
          Telekomunikasi. <br />
          selalu belajar untuk beradaptasi dengan teknologi. <br />
          <span className="text-gray-400/70">"cuma mau ngasih tau kalo fotonya bisa di seret"</span>
          <br />
        </p>
        <h2 id="contact" className="text-sm fade-in mt-12 font-semibold text-indigo-700 uppercase tracking-wide">
          contact pribadi
        </h2>
          <p className="text-lg fade-in text-gray-600">
          davaelyanta@gmail.com
          </p>
          <a
            className="text-indigo-700 fade-in hover:underline"
            href="https://wa.me/6281215997620"
          >
            62-812-1599-7620
          </a>
          {/* <h2 id="contact" className="text-sm fade-in mt-12 font-semibold text-indigo-700 uppercase tracking-wide">
          contact publik
          </h2>
           <a
            className="text-indigo-700 fade-in hover:underline"
            href="https://wa.me/6288214821134"
          >
            62-882-1482-1134
          </a> */}
      </div>
      <div className="relative mx-10 group fade-target">
        <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-white to-transparent z-10 opacity-0 transition-all duration-500 group-hover:opacity-80 scroll-fade" />
        <motion.div ref={constraintsRef} className="flex">
          <img src="img/klip.webp" className="z-40 pointer-events-none  max-w-[89%] sm:w-auto sm:max-w-[400px]"/>
            <motion.img
                drag
                // dragConstraints={constraintsRef}
                dragElastic={0.2}
                whileDrag={{ rotate: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                src="/img/foto.png"
                alt="Foto"
                className="z-30 absolute will-change-transform bottom-0 left-0 max-w-[89%] sm:w-auto sm:max-w-[400px]"
              />
        </motion.div>
  
  
  
          {/* <img
            src="img/profile.png"
            className="rounded-lg mx-auto max-w-[89%] sm:w-auto sm:max-w-[400px]"
            alt="profile"
          /> */}
        <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white to-transparent z-10 opacity-0 transition-all duration-500 group-hover:opacity-80 scroll-fade" />
      </div>
    </div>
    )
  }

  
  export { Aboutme }