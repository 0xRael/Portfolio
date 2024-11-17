"use client"
import { Transition } from "@/components/Transition";
import Image from "next/image";

export function Portfolio() {
  return (
    <Transition>
        {/* className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold" */}
        <p className="text-4xl typewriter">My Portfolio (This One)</p>

        <div className="text-center md:text-left font-[family-name:var(--font-geist-mono)]">
            <p className="text-xl mb-12">11/16/2024 - 11/18/2024</p>
            <p className="whitespace-pre-line">Lorem Ipsum Dolor Sit Anem
            </p>
        </div>
    </Transition>
  );
}
