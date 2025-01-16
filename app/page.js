"use client"

import { useState, useEffect } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Header, Skills, Portfolio, MusicNFT, AnimeRecommender } from "@/components/sections";

export default function Home() {
  const [selected, setSelected] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const elements = [<Header />, <Skills />, <Portfolio />, <MusicNFT />, <AnimeRecommender />];
  const [element, setElement] = useState(elements[0]);

  useEffect(() => {
    const checkMobile = () => {
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);
      setIsSidebarOpen(!isMobileView);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    setElement(elements[selected]);
  }, [selected]);

  return (
    <div className={`flex items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] ${isMobile ? '' : 'md:pl-[30%]'}`}>
      <Sidebar 
        select={setSelected} 
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        isMobile={isMobile}
      />
      {(!isMobile || !isSidebarOpen) && <main className={`${isMobile && isSidebarOpen ? 'mt-16' : ''}`}>
        {element}
      </main>}
    </div>
  );
};