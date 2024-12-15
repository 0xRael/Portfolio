"use client"
import { BaseProject } from "./Base";

export function Portfolio() {
    const skillsUsed = ["Next.js", "Framer-Motion", "Tailwind CSS", "CSS"]
    return (
        <BaseProject
        title="My Portfolio (This one)"
        skillsUsed={skillsUsed}
        sourceLink={"https://github.com/0xRael/Portfolio"}
        time="11/16/2024 - Now"
        >
            Building my portfolio was an exciting journey that allowed me to put my skills in front-end development into a dynamic web experience.
            I think the best feature of this project is the Navigation and maybe the skill maps section.
<br/><br/>
            The source code for my portfolio is available on GitHub. Feel free to explore the repository to see the implementation details and learn more
            about the technologies used.
        </BaseProject>
    );
}