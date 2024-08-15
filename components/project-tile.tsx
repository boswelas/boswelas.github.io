import projects from '@/projects.json';

export default function ProjectTile() {
    return (
        <div className="mt-8 ml-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="group h-96 w-72 bg-white rounded-xl shadow-sm relative overflow-hidden transition-all duration-300"
                >
                    <div className="h-60 w-72 rounded-t-xl">
                        <img src={project.image} alt={project.name} />
                    </div>
                    <div className="flex flex-col items-center h-32 z-10 transition-all duration-300">
                        <span className="mt-1 font-semibold">{project.name}</span>
                        <ul className="text-xs mt-2 flex flex-row items-center justify-center gap-2 max-w-72 flex-wrap">
                            {project.technologies?.map((tech, i) => (
                                <li key={i}><span className="bg-slate-100 rounded-lg p-1">{tech}</span></li>
                            ))}
                        </ul>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-32 p-2 bg-white border-t border-slate-300 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:h-72">
                        <span className="mt-2 font-semibold flex justify-center">{project.name}</span>
                        <ul className="text-xs mt-2 flex flex-row items-center justify-center gap-2 max-w-72 flex-wrap">
                            {project.technologies?.map((tech, i) => (
                                <li key={i}><span className="bg-slate-100 rounded-lg p-1">{tech}</span></li>
                            ))}
                        </ul>
                        <div className="flex justify-center mt-3">
                            <span className="text-xs text-center">{project.desc}</span>
                        </div>

                        <div className="flex flex-row items-center justify-center gap-12 mt-6">
                            {project.links.view && (
                                <a href={project.links.view} target="_blank" rel="noopener noreferrer">
                                    <button className="py-1 px-4 bg-[#0d7d6d] rounded-lg text-white text-sm">Live</button>
                                </a>
                            )}
                            {project.links.code && (
                                <a href={project.links.code} target="_blank" rel="noopener noreferrer">
                                    <button className="py-1 px-4 bg-[#0d7d6d] rounded-lg text-white text-sm">Github</button>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
