"use client"
import  { useState, useEffect } from 'react';
import { Header, Skills, Portfolio, MusicNFT } from "@/components/sections"; // Each of the section on the page
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  const [selected, select] = useState(0);
  const elements = [<Header />, <Skills />, <Portfolio />, <MusicNFT />];
  const [element, setElement] = useState(<Header />);

  useEffect(() => {
    setElement(elements[selected])
  }, [selected])

  return (
    <div className="flex items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <Sidebar select={select} />
      {element}

    </div>
  );
}
