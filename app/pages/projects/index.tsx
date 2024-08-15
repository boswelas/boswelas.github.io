"use client"

import ProjectTile from "@/components/project-tile"

export default function Projects() {

    return (
        <div className="lg:h-screen bg-[#fff0d5] border-[#0d7d6d] border-8 relative">
            <div className="relative z-10">
                <h1 className="mt-6 lg:mt-24 ml-6 text-7xl text-[#0d7d6d] font-bold">My Projects
                    <span className='text-[#ff8e4d]'>.</span>
                </h1>
            </div>
            <div className="mb-6">
                <ProjectTile />
            </div>
        </div>
    )
}
