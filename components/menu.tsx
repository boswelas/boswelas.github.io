"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Menu() {
    const [activeHash, setActiveHash] = useState<string>("home");

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            let currentHash = "home";
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    currentHash = section.id;
                }
            });

            setActiveHash(currentHash);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className="fixed top-6 w-[25%] text-white z-50 *:text-sm hidden lg:block">
            <ul className="flex justify-around p-4 font-semibold">
                <li>
                    <Link href="#home" className="flex flex-col items-center gap-px">
                        <span className={activeHash === "home" ? 'text-[#0d7d6d] font-bold' : activeHash === "projects" ? 'text-[#161c33]' : 'text-white'}>
                            Home
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href="#skills" className="flex flex-col items-center gap-px">
                        <span className={activeHash === "skills" ? 'text-[#fff0d5] font-bold' : activeHash === "projects" ? 'text-[#161c33]' : 'text-white'}>
                            Skills
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href="#projects" className="flex flex-col items-center gap-px">
                        <span className={activeHash === "projects" ? 'text-[#ff8e4d] font-bold' : 'text-white'}>
                            Projects
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href="#contact" className="flex flex-col items-center gap-px">
                        <span className={activeHash === "contact" ? 'text-[#0d7d6d] font-bold ' : activeHash === "projects" ? 'text-[#161c33]' : 'text-white'}>
                            Contact
                        </span>
                    </Link>
                </li>
            </ul>
        </nav >
    );
}
