"use client"
import { BaseProject } from "./Base";
import screenshot from '@/public/UpYarc.png';

export function RedditClone() {
    const skillsUsed = ["Next.js","Tailwind CSS","TypeScript","Supabase"]
    return (
        <BaseProject
        title="Reddit Clone"
        skillsUsed={skillsUsed}
        sourceLink={"https://github.com/0xRael/reddit-clone"}
        liveLink={"https://upyarc.vercel.app/"}
        image={screenshot}
        time="10/08/2025 - Now"
        >
            A full-stack social media platform inspired by Reddit, built with Next.js and Supabase.
            UpYarc aims to feature a dynamic content feed, community-driven post management, and a custom local history tracking system to enhance user navigation and engagement.
            <br/><br/>
            Key Features:
                <li>Leverages Supabase for seamless backend integration, handling complex relational queries for posts, user votes, and community metadata.</li>
                <li>Implements a custom React hook and LocalStorage synchronization to track and display a user's recently viewed posts without unnecessary database overhead.</li>
                <li>Utilizes Next.js App Router and Server Components to optimize initial page loads while maintaining high interactivity for voting and navigation.</li>
                <li>Features a fully responsive, high-fidelity dark-mode interface built with Tailwind CSS.</li>
        </BaseProject>
    );
}