"use client"
import { useEffect } from "react";

export default function ResumeButton() {
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const orange_stripes = document.querySelector('.orange-stripes') as HTMLElement;

            if (orange_stripes) {
                const moveX = (e.clientX / window.innerWidth) * 5;
                const moveY = (e.clientY / window.innerHeight) * 10;

                orange_stripes.style.transform = `translate(${moveX}px, ${moveY}px)`;
            }

        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="relative inline-block ">
            <div className="absolute inset-0 orange-stripes z-0 opacity-60 h-[83%] w-[95%] rounded-lg" />
            <div className="relative h-10 w-32 p-2 flex flex-col items-center justify-center rounded-xl border-2 border-[#0d7d6d] z-10 hover:bg-[#0d7d6d]">
                <a href="https://drive.google.com/file/d/1Jq79wG_Zq-aBTrytyvMPnWwoXI_GCQpV/view?usp=sharing"
                    target="_blank" ><span>Resume</span>
                </a>
            </div>

        </div>
    );
}
