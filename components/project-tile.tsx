"use client";
import projects from '@/projects.json';
import { useEffect } from 'react';

export default function ProjectTile() {
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const buttonBackground = document.querySelectorAll('.button-background') as NodeListOf<HTMLElement>;

            buttonBackground.forEach((stripe) => {
                const moveX = (e.clientX / window.innerWidth) * 10;
                const moveY = (e.clientY / window.innerHeight) * 10;

                stripe.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="mt-8 ml-[3%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="group mb-[8%] h-96 w-80 ml-[5%] bg-white border-[#fff0d5] border-[.1rem] rounded-xl shadow-xl hover:shadow-2xl relative overflow-hidden transition-all duration-300 hover:scale-110"
                >
                    <div className="h-[60%] w-full rounded-t-xl">
                        <img src={project.image} alt={project.name} className="h-full w-fit" />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-[40%] p-2 bg-white border-t border-[#161c33] transition-all duration-200 group-hover:h-72">
                        <div className="flex justify-center">
                            <span className="font-semibold text-[#161c33] text-lg">{project.name}</span>
                        </div>
                        <ul className="text-xs mt-3 flex flex-row items-center justify-center gap-2 max-w-72 flex-wrap opacity-80 overflow-hidden">
                            {project.technologies?.map((tech, i) => (
                                <li key={i} className='mt-1'>
                                    <span className="bg-[#fff0d5] rounded-lg p-1">{tech}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <span className="text-xs text-center text-[#161c33] mt-4">{project.desc}</span>
                            <div className="flex flex-row items-center justify-center gap-4 mt-6">
                                {project.links.view && (
                                    <div className="relative inline-block">
                                        <div className="absolute inset-0 button-background z-0 opacity-60 h-[83%] w-[95%] rounded-lg " />
                                        <div className="text-[#161c33]  shadow-xl relative h-9 w-24 p-2 flex items-center justify-center rounded-xl border-2 border-[#0d7d6d] z-10 hover:bg-[#0d7d6d] hover:text-[#fff0d5] hover:border-[#fff0d5]">
                                            <a href={project.links.view} target="_blank" rel="noopener noreferrer">
                                                <span>Live</span>
                                            </a>
                                        </div>
                                    </div>
                                )}

                                {project.links.code && (
                                    <div className="relative inline-block">
                                        <div className="absolute inset-0 button-background z-0 opacity-60 h-[83%] w-[95%] rounded-lg" />
                                        <div className="text-[#161c33] shadow-xl  relative h-9 w-24 p-2 flex items-center justify-center rounded-xl border-2 border-[#0d7d6d] z-10 hover:bg-[#0d7d6d] hover:text-[#fff0d5] hover:border-[#fff0d5]">
                                            <a href={project.links.code} target="_blank" rel="noopener noreferrer">
                                                <span>GitHub</span>
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
