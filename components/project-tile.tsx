"use client";
import projects from '@/projects.json';
import { useEffect } from 'react';

export default function ProjectTile() {
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const orangeStripes = document.querySelectorAll('.orange-stripes') as NodeListOf<HTMLElement>;

            orangeStripes.forEach((stripe) => {
                const moveX = (e.clientX / window.innerWidth) * 5;
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
        <div className="mt-[3%] ml-[3%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="group mb-[5%] h-80 w-72 bg-white border-[#0d7d6d] border-[.15rem] rounded-xl shadow-2xl relative overflow-hidden transition-all duration-300 hover:scale-110"
                >
                    <div className="h-52 w-72 rounded-t-xl">
                        <img src={project.image} alt={project.name} className="h-full w-full" />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-32 p-2 bg-white border-t border-[#161c33] transition-all duration-200 group-hover:h-72">
                        <div className="flex justify-center">
                            <span className="font-semibold text-[#161c33]">{project.name}</span>
                        </div>
                        <ul className="text-xs mt-4 flex flex-row items-center justify-center gap-2 max-w-72 flex-wrap">
                            {project.technologies?.map((tech, i) => (
                                <li key={i}>
                                    <span className="bg-[#fff0d5] rounded-lg p-1">{tech}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <span className="text-xs text-center text-[#161c33] mt-4">{project.desc}</span>
                            <div className="flex flex-row items-center justify-center gap-4 mt-6">
                                {project.links.view && (
                                    <div className="relative inline-block">
                                        <div className="absolute inset-0 orange-stripes z-0 opacity-60 h-[83%] w-[95%] rounded-lg " />
                                        <div className="text-[#161c33] shadow-lg relative h-10 w-32 p-2 flex items-center justify-center rounded-xl border-2 border-[#0d7d6d] z-10 hover:bg-[#0d7d6d]">
                                            <a href={project.links.view} target="_blank" rel="noopener noreferrer">
                                                <span>Live</span>
                                            </a>
                                        </div>
                                    </div>
                                )}

                                {project.links.code && (
                                    <div className="relative inline-block">
                                        <div className="absolute inset-0 orange-stripes z-0 opacity-60 h-[83%] w-[95%] rounded-lg" />
                                        <div className="text-[#161c33] shadow-lg  relative h-10 w-32 p-2 flex items-center justify-center rounded-xl border-2 border-[#0d7d6d] z-10 hover:bg-[#0d7d6d]">
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
