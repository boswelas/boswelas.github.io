import GithubButton from "@/components/github-button";
import LinkedInButton from "@/components/linkedin-button";
import ResumeButton from "@/components/resume-button";

export default function Home() {
    return (
        <div className="max-h-[90%] md:h-screen p-10 border-[#fff0d5] border-8 bg-[#161c33] text-white relative overflow-hidden">
            <div>
                <div className="absolute top-0 left-[28%] rotate-[24deg] w-full animate-pulse-once z-10">
                    <div className="border-b-[1.75rem] border-[#0d7d6d] w-full"></div>
                    <div className="border-b-[2rem] border-[#fff0d5] w-full mt-1"></div>
                    <div className="border-b-[1rem] border-[#ff8e4d] w-full mt-1"></div>
                </div>
                <div className="mt-[15%] ml-[3%] lg:mt-[13%] lg:ml-[8%]">
                    <div className="flex flex-col max-w-full lg:max-w-[40%]">
                        <h1 className="font-semibold text-7xl">Hi, I'm <span className="text-[#0d7d6d]">Ashley</span>.</h1>
                        <span className="mt-2 text-2xl">Thanks for dropping by!</span>
                        <span className="mt-6 text-xl">I'm a <span className="text-[#0d7d6d] font-semibold">fullstack developer</span> based in Los Angeles.</span>
                        <span className="text-xl">I love building intuitive, user-friendly applications.</span>
                        <span className="text-xl">I especially like using <span className="text-[#0d7d6d] font-semibold">Python, Typescript, and React</span>.</span>
                    </div>
                    <div className="flex items-center mt-6 space-x-4">
                        <div className="">
                            <ResumeButton />
                        </div>
                        <LinkedInButton />
                        <GithubButton />
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        src="./computer.png"
                        alt="Computer"
                        className="absolute top-0 right-0 h-[55%] object-cover mt-[12%] mr-[15%] hidden lg:block hover:h-[60%] hover:mt-[10%] hover:mr-[13%]"
                    />
                </div>
            </div>
        </div>
    );
}
