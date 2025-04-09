"use client";
import Image from "next/image";
import { useEffect } from "react";


export default function Home() {
  return (
    <Port />
  );
}

function Port(){
  useEffect(() => {
    alert("web dalam tahap pengembangan");

    const scrollContainer = document.querySelector(".overflow-x-auto");
    const fadeElements = document.querySelectorAll(".scroll-fade");
    const fadeTarget = document.querySelector(".fade-target");

    function updateFade() {
      const scrollLeft = scrollContainer?.scrollLeft || 0;
      const maxScroll = (scrollContainer?.scrollWidth || 0) - (scrollContainer?.clientWidth || 0);

      if (fadeElements[0]) fadeElements[0].style.opacity = scrollLeft > 10 ? "0.8" : "0";
      if (fadeElements[1]) fadeElements[1].style.opacity = scrollLeft < maxScroll - 10 ? "0.8" : "0";
    }

    const observer1 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          fadeElements.forEach(el => el.classList.add("opacity-80"));
        } else {
          fadeElements.forEach(el => el.classList.remove("opacity-80"));
        }
      });
    }, { threshold: 0.2 });

    if (fadeTarget) observer1.observe(fadeTarget);
    scrollContainer?.addEventListener("scroll", updateFade);
    updateFade();

    const listItems = document.querySelectorAll(".fade-li");
    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("show");
          }, index * 100);
        }
      });
    }, { threshold: 0.3 });

    listItems.forEach(li => observer2.observe(li));
    const navbar = document.querySelector(".navbar");
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        navbar?.classList.add("hide");
      } else {
        navbar?.classList.remove("hide");
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    const fadeInElements = document.querySelectorAll(".fade-in");
    const observer3 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.3 });
    fadeInElements.forEach(el => observer3.observe(el));

    const animateEls = document.querySelectorAll(".animate-scroll");
    const observer4 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          entry.target.classList.remove("hide");
        } else {
          entry.target.classList.add("hide");
          entry.target.classList.remove("show");
        }
      });
    }, { threshold: 0.3 });
    animateEls.forEach(el => observer4.observe(el));
    
    return () => {
      scrollContainer?.removeEventListener("scroll", updateFade);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

return (
  <>
  <div className="sticky navbar z-50 inset-0 t-0 bg-white h-12 shadow-md">
    <div className="flex items-center  gap-1">
      <img
        src="img/hyuman.webp"
        className="w-[30px] ml-3 mt-2 h-[30px] object-cover"
        alt=""
      />
      {/* <h1 class=" font-bold text-2xl text-indigo-600 mt-2">Dava</h1> */}
    </div>
  </div>
  <div className="overflow-hidden bg-white py-10">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="lg:pt-4 lg:pr-8">
          <div className="lg:max-w-lg md:-ml-11 lg:ml-0">
            <h2 className="text-base/7 font-semibold text-indigo-600">
              welcome
            </h2>
            <p className=" text-4xl font-bold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Terima kasih telah berkunjung di portofolio aku
            </p>
            <p className="mt-4 text-lg/8 fade-in text-gray-600">
              halaman ini berisi keahlian aku dibidang web developer
            </p>
            {/* todo */}
            <div className="relative mt-5 inline-block group">
              <button
                 onClick={() => {
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                className="relative px-6 py-3 text-sm font-semibold text-white bg-indigo-600/90 rounded-xl hover:bg-indigo-700/90 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl group-hover:opacity-75 transition-opacity" />
                <span className="relative flex items-center gap-2">
                  lihat skill web developer
                </span>
              </button>
              <div className="absolute ml-20 invisible opacity-0 group-hover:visible group-hover:opacity-100 bottom-full left-1/2 -translate-x-1/2 mb-3 w-72 transition-all duration-300 ease-out transform group-hover:translate-y-0 translate-y-2">
                <div className="relative p-4 bg-gradient-to-br from-indigo-900/95 to-indigo-800/95 backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(79,70,229,0.15)]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500/20">
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4 text-indigo-400"
                      >
                        <path
                          clipRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h3 className="text-sm font-semibold text-white">
                      menuju ke skill
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-300">
                      kamu akan dipindahkan ke bagian skill
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-400"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="img/pc.webp"
          alt="desktop"
          className="w-[48rem] max-w-none rounded-xl animate-scroll ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          width={2432}
          height={1442}
        />
        <img
          src="img/mobile.webp"
          className="absolute w-[200px] mt-[300px] lg:-mt-5 right-2 h-auto"
          alt=""
        />
      </div>
    </div>
  </div>
  <div className="flex flex-col md:flex-row-reverse items-center justify-center w-screen mb-12 gap-10">
    <div className="md:w-1/2 px-10 md:px-0">
      <h2 className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
        About Me
      </h2>
      <p className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl fade-in">
        Hai, nama aku <span className="text-indigo-600">Dava Elyanta</span>
      </p>
      <p className="mt-4 text-lg text-gray-600 fade-in">
        Aku seorang siswa SMK jurusan Teknik Jaringan Komputer &amp;
        Telekomunikasi.
        <br />
      </p>
    </div>
    <div className="relative mx-10 md:w-1/2 group fade-target">
      <p className="text-center text-gray-600">
        {" "}
        scroll ke kiri untuk melihat beberapa project yang telah aku buat.
      </p>
      <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-white to-transparent z-10 opacity-0 transition-all duration-500 group-hover:opacity-80 scroll-fade" />
      <div className="flex gap-6 overflow-x-auto scrollbar-hide p-4 relative">
        <img
          src="img/Caaaaaaaaaaaaaaapture.webp"
          className="w-[300px] rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          alt=""
        />
        <img
          src="img/project.webp"
          className="w-[300px] rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          alt=""
        />
        <img
          src="img/4.webp"
          className="w-[300px] rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          alt=""
        />
      </div>
      <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white to-transparent z-10 opacity-0 transition-all duration-500 group-hover:opacity-80 scroll-fade" />
    </div>
  </div>
  <div className="flex justify-center my-12 items-cen">
    <div>
      {/*             <p class="text-center text-gray-600 mx-10">mau buat portofolio biar bisnis atau skill kamu terlihat professional?</p>
      <form action="photographer.html" class="flex mt-4 justify-center items-center" method="get">
           <button class="relative px-6 py-3 text-sm font-semibold text-white bg-indigo-600/90 rounded-xl hover:bg-indigo-700/90 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl group-hover:opacity-75 transition-opacity"></div>

          <span class="relative flex items-center gap-2">
          photographer portofolio
          </span>
      </button>
      </form> */}
      <a
        className="text-indigo-600 hover:underline"
        href="https://example-landing-page-coursus.vercel.app/"
      >
        landing page coursus example
      </a>
      <p className="text-center mt-4">
        whatsapp disini{" "}
        <a
          className="text-indigo-600 hover:underline"
          href="https://wa.me/6288214821134"
        >
          6288214821134
        </a>
      </p>
    </div>
  </div>
  <div
    id="about"
    className="p-2 grid grid-cols-1 place-content-center place-items-center justify-center items-center bg-gray-100 mb-10"
  >
    <h1 className="text-2xl text-center font-semibold mx-5">
      framework dan bahasa yang aku pelajari
    </h1>
    <div className="flex justify-center my-6 gap-3 items-center">
      <img className="max-w-[50px]" src="img/laravel.svg" alt="" />
      <img className="max-w-[50px]" src="img/vue.svg" alt="" />
      <img className="max-w-[50px]" src="img/tailwind-css.svg" alt="" />
      <img className="max-w-[50px]" src="img/python.svg" alt="" />
    </div>
  </div>
  <div>
    <p className=" text-4xl font-bold tracking-tight text-pretty text-gray-900 sm:text-5xl mx-4">
      I have been learning for 1 year
    </p>
    <ul className="xl:grid-cols-3 grid gap-1 grid-cols-1 md:grid-cols-2 md:gap-5 mx-10 mt-10 space-y-4 text-gray-900">
      <li className="fade-li flex items-center p-3 bg-white rounded-lg shadow-md border border-gray-200 hover:bg-indigo-50 transition duration-300">
        <svg
          className="w-6 h-6 text-indigo-600 mr-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span className="font-medium">
          authentikasi,login,logout,register,verify email,forgot password,resert
          password
        </span>
      </li>
      <li className="fade-li flex items-center p-3 bg-white rounded-lg shadow-md border border-gray-200 hover:bg-indigo-50 transition duration-300">
        <svg
          className="w-6 h-6 text-indigo-600 mr-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span className="font-medium">multi role</span>
      </li>
      <li className="fade-li flex items-center p-3 bg-white rounded-lg shadow-md border border-gray-200 hover:bg-indigo-50 transition duration-300">
        <svg
          className="w-6 h-6 text-indigo-600 mr-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span className="font-medium">konsep OOP dan MVC</span>
      </li>
      <li className="fade-li flex items-center p-3 bg-white rounded-lg shadow-md border border-gray-200 hover:bg-indigo-50 transition duration-300">
        <svg
          className="w-6 h-6 text-indigo-600 mr-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span className="font-medium">upload file</span>
      </li>
      <li className="fade-li flex items-center p-3 bg-white rounded-lg shadow-md border border-gray-200 hover:bg-indigo-50 transition duration-300">
        <svg
          className="w-6 h-6 text-indigo-600 mr-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span className="font-medium">
          Create,read,update and delete (CRUD)
        </span>
      </li>
      <li className="fade-li flex items-center p-3 bg-white rounded-lg shadow-md border border-gray-200 hover:bg-indigo-50 transition duration-300">
        <svg
          className="w-6 h-6 text-indigo-600 mr-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span className="font-medium">relasi database</span>
      </li>
      <li className="fade-li flex items-center p-3 bg-white rounded-lg shadow-md border border-gray-200 hover:bg-indigo-50 transition duration-300">
        <svg
          className="w-6 h-6 text-indigo-600 mr-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span className="font-medium">
          liblary alpineJs ,VueJs, GSAP, tailwind, notifyJS, ChartJS
        </span>
      </li>
      <li className="fade-li flex items-center p-3 bg-white rounded-lg shadow-md border border-gray-200 hover:bg-indigo-50 transition duration-300">
        <svg
          className="w-6 h-6 text-indigo-600 mr-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span className="font-medium">Backend restfull API</span>
      </li>
      <li className="fade-li flex items-center p-3 bg-white rounded-lg shadow-md border border-gray-200 hover:bg-indigo-50 transition duration-300">
        <svg
          className="w-6 h-6 text-indigo-600 mr-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span className="font-medium">validasi input</span>
      </li>
      <li className="fade-li flex items-center p-3 bg-white rounded-lg shadow-md border border-gray-200 hover:bg-indigo-50 transition duration-300">
        <svg
          className="w-6 h-6 text-indigo-600 mr-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span className="font-medium">DOM Manipulation</span>
      </li>
      <li className="fade-li flex items-center p-3 bg-white rounded-lg shadow-md border border-gray-200 hover:bg-indigo-50 transition duration-300">
        <svg
          className="w-6 h-6 text-indigo-600 mr-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span className="font-medium">ES6 Javascript</span>
      </li>
      <li className="fade-li flex items-center p-3 bg-white rounded-lg shadow-md border border-gray-200 hover:bg-indigo-50 transition duration-300">
        <svg
          className="w-6 h-6 text-indigo-600 mr-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span className="font-medium">middleware</span>
      </li>
      <li className="fade-li flex items-center p-3 bg-white rounded-lg shadow-md border border-gray-200 hover:bg-indigo-50 transition duration-300">
        <svg
          className="w-6 h-6 text-indigo-600 mr-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span className="font-medium">grid,flex css</span>
      </li>
      <li className="fade-li flex items-center p-3 bg-white rounded-lg shadow-md border border-gray-200 hover:bg-indigo-50 transition duration-300">
        <svg
          className="w-6 h-6 text-indigo-600 mr-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span className="font-medium">emailer send with laravel</span>
      </li>
    </ul>
  </div>
  <p className=" text-4xl font-bold tracking-tight text-pretty text-gray-900 sm:text-5xl mx-4 mt-10">
    Project diluar web yang pernah saya buat
  </p>
  <div className="ml-5">
    <div className="relative max-w-[250px] flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
      <div className="relative m-2.5 overflow-hidden text-white rounded-md">
        <img
          src="img/Navigator_ The Teamwork Assistant.webp"
          alt="card-image"
        />
      </div>
      <div className="p-2">
        <h6 className="mb-2 text-slate-800 text-xl font-semibold">
          Bot AI whatsapp
        </h6>
        <p className="text-slate-600 leading-normal font-light">
          consume API deepseek ke Whatsapp dengan openRouter <br />
          <span className="text-indigo-500">
            ide: memikirkan apa yang dibutuhkan para pembisnis di era AI
          </span>{" "}
          <br />
          <span className="text-green-600">
            learn: Youtube,ChatGPT, Cloude AI,DeepSeek Ai
          </span>
        </p>
      </div>
    </div>
  </div>
  <p className=" text-4xl font-bold tracking-tight text-pretty text-gray-900 sm:text-5xl mx-4 mt-10">
    beberapa link tentang tutorial yang saya publish
  </p>
  <div className="ml-5">
    <div className="relative max-w-[250px] flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
      <div className="p-2">
        <h6 className="mb-2 text-slate-800 text-xl font-semibold">
          laravel list
        </h6>
        <p className="text-slate-600 leading-normal font-light">
          <a
            href="https://www.notion.so/mengirim-email-dengan-laravel-12-1be8d6e809ae80ddbd46fb520ebe04fa?pvs=4"
            className="text-indigo-500 hover:underline"
          >
            email send
          </a>{" "}
          <br />
          <a
            href="https://www.notion.so/Authentikasi-Login-dan-Logout-Laravel-12-1bf8d6e809ae80b0adbfd17cb8d1405d?pvs=4"
            className="text-green-600 hover:underline"
          >
            AUTH,login &amp; register
          </a>
        </p>
      </div>
    </div>
  </div>
  <div></div>
  <footer className="bg-indigo-600 flex-wrap flex text-white py-4">
    <div className="w-full flex items-center mx-4">
      <h1 className="font-extrabold  ml-3 uppercase text-5xl my-12">
        human.let
      </h1>
    </div>
    <div className=" ml-auto grid justify-between items-center px-6">
      <p className="text-sm">be yourself, wong lio ngerti opo.</p>
    </div>
  </footer>
</>
    )
}
