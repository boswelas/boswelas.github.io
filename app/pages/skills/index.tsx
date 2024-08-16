"use client"
import { useEffect } from 'react';
import skillsData from '@/skills.json';

export default function Skills() {
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const dot = document.querySelector('.dot') as HTMLElement;
            const blueLinesContainer = document.querySelector('.blue-lines-container') as HTMLElement;

            if (dot) {
                const moveX = (e.clientX / window.innerWidth) * 10;
                const moveY = (e.clientY / window.innerHeight) * 10;

                dot.style.transform = `translate(${moveX}px, ${moveY}px)`;
            }

            if (blueLinesContainer) {
                const moveX = (e.clientX / window.innerWidth) * 5;
                const moveY = (e.clientY / window.innerHeight) * 5;

                blueLinesContainer.style.transform = `translate(${moveX}px, ${moveY}px)`;
            }
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="max-h-[90%] lg:h-screen bg-[#0d7d6d] border-[#161c33] border-8 relative overflow-x-hidden">
            <div className="absolute mt-[4%] h-20 lg:mt-20 ml-[2%] lg:ml-4 left-4 w-[95%] lg:w-[50%] lg:h-24 z-0 dot opacity-80" />
            <div className="relative z-10">
                <h1 className="mt-[6%] lg:mt-24 ml-[6%] text-7xl text-white font-bold">My skills
                    <span className='text-[#161c33]'>.</span>
                </h1>
            </div>

            <div className="lg:grid lg:grid-cols-2 mt-4 relative z-10">
                <div className="skills-container">
                    {skillsData.map((category) => (
                        <div key={category.category} className="mb-3 md:mb-4">
                            <h2 className="text-4xl font-semibold ml-4 text-[#fff0d5]">{category.category}</h2>
                            <div className="skills-row ml-8 mt-2">
                                {category.skills.map((skill) => (
                                    <div key={skill.name} className="bar hover:scale-105 hover:shadow-lg">
                                        <div className="info">
                                            <img src={skill.icon} alt={skill.name} />
                                            <span>{skill.name}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="education w-[90%] ml-4 lg:w-[85%] lg:h-[50%] lg:mt-4 lg:ml-12 relative">
                    <h2 className="text-4xl ml-4 text-[#fff0d5] mb-2 lg:mb-3 font-semibold">Education</h2>
                    <div className="absolute w-[94%] h-[80%] blue-lines-container rounded-xl opacity-80 hidden md:block">
                        <div className="blue-lines w-full h-full rounded-lg"></div>
                    </div>

                    <div className="box-container z-20 pb-6 mt-2 relative md:ml-5 md:mt-8">
                        <div className="box hover:scale-105 hover:shadow-lg">
                            <div className="image hidden md:block">
                                <img src='../osu.jpg' />
                            </div>
                            <div className="content lg:ml-4 ml-3 lg:p-1 p-0.5">
                                <h3 className="degree mt-1 lg:mt-2">Bachelor of Science in Computer Science</h3>
                                <h4 className="school mt-1 lg:mt-2">Oregon State University</h4>
                                <p className="gpa mt-1 lg:mt-2">GPA: 3.75/4.0</p>
                                <p className='mt-1 lg:mt-2 mb-1 lg:mb-2'>Coursework: Web Development, Software Engineering, Mobile App Development,
                                    Databases,
                                    Data Structures, Algorithms, Operating Systems, Parallel Programming
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='scallop opacity-80' />
        </div>
    );
}
