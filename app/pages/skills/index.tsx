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
        <div className="h-screen bg-[#0d7d6d] border-[#161c33] border-8 relative overflow-hidden">
            <div className="absolute mt-20 ml-4 left-4 w-[50%] h-24 z-0 dot opacity-80" />
            <div className="relative z-10">
                <h1 className="mt-6 lg:mt-24 ml-6 text-7xl text-white font-bold">My skills
                    <span className='text-[#161c33]'>.</span>
                </h1>
            </div>

            <div className="grid grid-cols-2 mt-4 relative z-10">
                <div className="skills-container">
                    {skillsData.map((category) => (
                        <div key={category.category} className="mb-4">
                            <h2 className="text-4xl font-semibold ml-4 text-[#fff0d5]">{category.category}</h2>
                            <div className="skills-row ml-8 mt-2">
                                {category.skills.map((skill) => (
                                    <div key={skill.name} className="bar">
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

                <div className="education w-[85%] h-[50%] mt-4 ml-12 relative">
                    <h2 className="text-4xl ml-4 text-[#fff0d5] mb-5 font-semibold">Education</h2>
                    <div className="absolute w-[94%] h-[80%] blue-lines-container rounded-xl opacity-80">
                        <div className="blue-lines w-full h-full rounded-lg"></div>
                    </div>

                    <div className="box-container z-20 relative ml-5 mt-8">
                        <div className="box">
                            <div className="image">
                                <img src='../osu.jpg' />
                            </div>
                            <div className="content">
                                <h3 className="degree">Bachelor of Science in Computer Science</h3>
                                <h4 className="school">Oregon State University</h4>
                                <p className="gpa">GPA: 3.75/4.0</p>
                                <p>Coursework: Web Development, Software Engineering, Mobile App Development,
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
