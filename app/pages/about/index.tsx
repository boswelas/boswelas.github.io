import GithubButton from "@/components/github-button";
import LinkedInButton from "@/components/linkedin-button";
import ResumeButton from "@/components/resume-button";

export default function Home() {
    return (
        <div className="h-screen border-[#fff0d5] border-8 bg-[#161c33] text-white relative overflow-hidden">
            <div>
                <div className="absolute top-0 left-[28%] rotate-[24deg] w-full animate-pulse-once z-10">
                    <div className="border-b-[1.75rem] border-[#0d7d6d] w-full"></div>
                    <div className="border-b-[2rem] border-[#fff0d5] w-full mt-1"></div>
                    <div className="border-b-[1rem] border-[#ff8e4d] w-full mt-1"></div>
                </div>
                <div className="mt-[16%]">
                    <div className="flex flex-col ml-28 max-w-[38%]">
                        <h1 className="font-semibold text-7xl">Hi, I'm <span className="text-[#0d7d6d]">Ashley</span>.</h1>
                        <span className="mt-2 text-2xl">Thanks for dropping by!</span>
                        <span className="mt-6 text-xl">I'm a <span className="text-[#0d7d6d] font-semibold">fullstack developer</span> based in Los Angeles.</span>
                        <span className="text-xl">I love building intuitive, user-friendly projects using <span className="text-[#0d7d6d] font-semibold">Python, Typescript, and React</span>.</span>
                    </div>
                    <div className="flex items-center mt-5 ml-28 space-x-4">
                        <div className="">
                            <ResumeButton />
                        </div>
                        <LinkedInButton />
                        <GithubButton />
                    </div>
                </div>
                <img
                    src="./computer.png"
                    alt="Computer"
                    className="absolute top-0 right-0 h-[55%] object-cover  mt-40 mr-48 hidden md:block hover:h-[60%] hover:mt-36 hover:mr-44"
                />
            </div>
        </div>
    );
}
