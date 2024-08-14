"use client"
import Link from "next/link";
import { useEffect } from "react";

export default function Contact() {
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const green_lines = document.querySelector('.green-lines') as HTMLElement;

            if (green_lines) {
                const moveX = (e.clientX / window.innerWidth) * 10;
                const moveY = (e.clientY / window.innerHeight) * 10;

                green_lines.style.transform = `translate(${moveX}px, ${moveY}px)`;
            }

        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    return (
        <div className="h-screen bg-[#161c33] border-[#fff0d5] border-8 relative flex flex-col lg:overflow-hidden">
            <div className="relative z-10">
                <h1 className="mt-6 lg:mt-24 ml-6 text-7xl text-[#ff8e4d] font-bold">Contact
                    <span className='text-white'>.</span>
                </h1>
            </div>
            <div>
                <img src="./keyboard.png" className="h-[50%] absolute top-0 right-0 z-0 rotate-[30deg] hidden lg:block" />
            </div>
            <div className="flex-grow flex mt-[5%] ml-[10%] lg:ml-20 lg:mt-14">
                <div className="green-lines h-[55%] w-[70%] lg:h-[45%] lg:w-[47%] rounded-2xl z-0 absolute"></div>
                <div className="bg-[#fff0d5] border-[#0d7d6d] border-4 h-[70%] w-[80%] lg:h-[60%] lg:w-[50%] rounded-2xl z-10 mt-[5%] ml-[5%] lg:mt-10 lg:ml-12">
                    <div className="flex flex-col justify-center h-full ml-5 mr-5 lg:ml-10">
                        <h2 className="text-2xl font-semibold">I'm always up for a chat.</h2>
                        <span className="text-xl mt-6 mb-2 ">
                            <Link
                                href="mailto:anboswell10@gmail.com"
                                className="underline text-[#0d7d6d] decoration-[#0d7d6d] underline-offset-4 font-semibold relative hover:text-[#109c87] hover:decoration-[#109c87]">
                                Send me an email
                            </Link> at anboswell10@gmail.com </span>
                        <span className="text-xl">or reach out to me on social media.</span>
                        <div className="flex flex-row gap-8 items-center mt-4">
                            <div className="w-10 h-10 hover:opacity-80">
                                <Link href={"https://www.linkedin.com/in/ashley-boswell-79334a207/"} target="blank">
                                    <img src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000"></img>
                                </Link>
                            </div>
                            <div className="w-10 h-10 hover:opacity-80">
                                <Link href={"https://github.com/boswelas"} target="blank">
                                    <img src="https://img.icons8.com/?size=100&id=12599&format=png&color=000000"></img>
                                </Link>
                            </div>
                        </div>
                        <div className="mt-6 text-xl">
                            <span>Did you get a chance to check out my <Link href={"https://drive.google.com/file/d/1Jq79wG_Zq-aBTrytyvMPnWwoXI_GCQpV/view?usp=sharing"} target="blank" className="underline text-[#0d7d6d] decoration-[#0d7d6d] underline-offset-4 font-semibold hover:text-[#109c87] hover:decoration-[#109c87]">resume</Link>
                                ?
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 w-full opacity-90">
                <div className="border-b-[.9rem] border-[#fff0d5] w-full"></div>
                <div className="border-b-[1.8rem] border-[#0d7d6d] w-full mt-1"></div>
                <div className="border-b-[.7rem] mt-1 mb-5 border-[#ff8e4d] w-full"></div>
            </div>
        </div >
    )
}
