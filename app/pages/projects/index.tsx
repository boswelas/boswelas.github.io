"use client";

import ProjectTile from "@/components/project-tile";
import { useEffect } from "react";

export default function Projects() {
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const orange_stripes = document.querySelector('.orange-stripe-background') as HTMLElement;
            const orange_dots = document.querySelector('.orange-dot') as HTMLElement;

            if (orange_stripes) {
                const moveX = (e.clientX / window.innerWidth) * 5;
                const moveY = (e.clientY / window.innerHeight) * 10;
                orange_stripes.style.transform = `translate(${moveX}px, ${moveY}px)`;
            }

            if (orange_dots) {
                const moveX = (e.clientX / window.innerWidth) * 5;
                const moveY = (e.clientY / window.innerHeight) * 10;
                orange_dots.style.transform = `translate(${moveX}px, ${moveY}px)`;
            }
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="min-h-screen bg-[#fff0d5] border-[#0d7d6d] border-8 relative overflow-hidden">
            <div className="orange-stripe-background absolute top-0 left-5 h-10 w-[38%] mt-[9%] z-5" />
            <div className="orange-dot absolute bottom-0 right-0 h-[60%] w-[15%]  z-10" />

            <div className="relative z-20">
                <h1 className="mt-6 lg:mt-24 ml-6 text-7xl text-[#0d7d6d] font-bold">
                    My Projects
                    <span className="text-[#ff8e4d]">.</span>
                </h1>
            </div>

            <div className="mb-10">
                <ProjectTile />
            </div>
        </div>
    );
}
