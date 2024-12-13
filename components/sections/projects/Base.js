"use client"
import { Typewriter } from "@/components/Typewriter"
import { Transition } from "@/components/Transition";
import { IoIosGitBranch } from "react-icons/io";
import { TbWorldWww } from "react-icons/tb";

export function Badge({children}){
    return <span className="bg-gray-100 text-amber-900 text-sm font-medium me-2 px-2.5 py-1.5 rounded dark:bg-amber-900 dark:text-gray-200">{children}</span>
}

export function SkillsUsed({skillsUsed}){
    return (
        <div>
            {skillsUsed.map((item) => (
                <Badge key={item}>{item}</Badge>
            ))}
        </div>
    )
}

export function BaseProject({skillsUsed, sourceLink, liveLink, time, title, children}) {
    return (
        <Transition>
            {/* className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold" */}
            <Typewriter  className="text-4xl typewriter" text={title} speed={30} />

            <div className="text-center md:text-left font-[family-name:var(--font-geist-mono)]">
                <div className="flex mb-12">
                    <p className="text-xl mr-3 text-orange-700">{time}</p>
                    {sourceLink ? (<a href={sourceLink} className="flex text-orange-200 hover:underline mr-3" target="_blank" rel="noopener noreferrer"><IoIosGitBranch /> Source Code</a>) : (<div></div>)}
                    {liveLink ? (<a href={liveLink} className="flex text-orange-200 hover:underline mr-3" target="_blank" rel="noopener noreferrer"><TbWorldWww /> See Live</a>) : (<div></div>)}
                </div>
                <p className="whitespace-pre-line text-base 2xl:text-xl">{children}
                </p>
            </div>

            <SkillsUsed skillsUsed={skillsUsed}/>
        </Transition>
    );
}