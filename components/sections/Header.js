"use client"
import { Typewriter } from "@/components/Typewriter"
import { Transition } from "@/components/Transition"

export function Header() {
  return (
    <Transition>
        {/* className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold" */}
        <Typewriter className="text-5xl typewriter" text="Hey There!    I'm Rael" speed={80} />

        <div className="text-center md:text-left font-[family-name:var(--font-geist-mono)]">
            <p className="text-xl mb-12 text-orange-700">Blockchain Developer | Front-End Developer.</p>
            <p className="text-3xl mb-2 text-orange-300">ABOUT ME</p>
            <p className="whitespace-pre-line">
A passionate and dedicated programmer with a keen interest in blockchain technology. Currently pursuing a Computer Science degree, I've honed my skills through online
certifications in blockchain and coding. <br/><br/>

My journey began with a childhood fascination for software development and game creation. This early interest ignited a passion for learning and experimentation. I
started with foundational programming languages like Python and JavaScript, and delved into web development. <br/><br/>

In August 2024, I took a significant step forward by enrolling in Alchemy's University Bootcamp. This intensive program allowed me to dive deep into Solidity, the
language of smart contracts. I successfully completed a challenging final project, demonstrating my proficiency in both Solidity and Next.js. <br/><br/>

I'm eager to apply my technical skills and problem-solving abilities to real-world projects. I'm confident in my ability to contribute to innovative solutions and
collaborate effectively with teams. Let's connect and explore opportunities together. <br/><br/>
            </p>
        </div>
    </Transition>
  );
}
