"use client"
import { motion, AnimatePresence } from 'framer-motion';

function Element ({element, children, select }){
    return (
        <motion.p

        initial = {{ opacity: 0.8, y: 0, scale:1 }}
        whileHover = {{ opacity: 1.0, y:-10, scale:1.1, backgroundColor: "#ff770077" }}
        whileTap={{ opacity: 1.0, y:10, scale:1.1 }}

        className="py-2 active:bg-gray-300 mb-3"
        onClick={() => select(element)}
        onMouseEnter={() => select(element)}
        >
            <a>{children}</a>
        </motion.p>
    )
}

export const Sidebar = ({ select }) => {  
    return (
      <div className="size-auto md:size-1/4 h-screen block">
        <nav className="flex flex-col py-2 text-lg">
          
          <Element element={0} select={select}>About Me</Element>
          <Element element={1} select={select}>Skills</Element>
          <p className="py-2 text-xl mt-12 mb-3">- Projects - - -</p>
          <Element element={2} select={select}>Portfolio</Element>
          <Element element={2} select={select}>Music NFT Marketplace</Element>
        </nav>
      </div>
    );
  };