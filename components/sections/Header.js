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
            <p className="whitespace-pre-line"> My name is Rael. I have multiple certificates I've got online in Blockchain and Coding fields, and I am currently studying Computer Science. I'm from Venezuela and I'm 16 years old.
<br/><br/>
Since I was a kid I felt attracted towards the creation process of software and games. So I started learning english and coding for fun, doing games in Scratch at first.
<br/><br/>
One day, I decided to try something new, and I started learning Python, Javascript and then got into Web Development. In August 2024, I started taking this more seriously, I learnt Solidity at Alchemy's University Bootcamp, and built a final project I feel proud of, while getting familiar with Next.js.
            </p>
        </div>
    </Transition>
  );
}
