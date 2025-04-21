"use client";
import Image from "next/image";
import { useEffect,useRef } from "react";
import * as motion from "motion/react-client";
import { Skill } from "@/components/skill.jsx";
import { Navbar } from "@/components/navbar.jsx";
import { Welcome } from "@/components/welcome.jsx";
import { Aboutme } from "@/components/aboutme.jsx";
import { Footer } from "@/components/footer.jsx";
import Penutup from "@/components/penutup";


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
  <div className="bg-white">
    <Navbar />
    <Welcome />
    <Aboutme />
    <Skill />
    <div></div>
    <Penutup />
    <Footer />
    
</div>
    )
}