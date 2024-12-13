"use client"

import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaGithub, FaDiscord, FaTwitter, FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import pfp from '../public/pfp.jpg';

function Element({ element, children, select }) {
  return (
    <motion.p
      initial={{ opacity: 0.8, y: 0, scale: 1, backgroundColor: "#00000000" }}
      whileHover={{ opacity: 1.0, y: -10, scale: 1.1, backgroundColor: "#ff770077" }}
      whileTap={{ opacity: 1.0, y: 10, scale: 1.1 }}
      className="py-2 active:bg-gray-300 mb-1 xl:mb-3 cursor-pointer"
      onClick={() => select(element)}
      onMouseEnter={() => select(element)}
    >
      <a>{children}</a>
    </motion.p>
  )
}

function SocialIcon({ href, icon: Icon }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      className="text-2xl sm:text-xl xl:text-2xl 2xl:text-3xl mx-2 text-gray-300 hover:text-orange-300"
    >
      <Icon />
    </motion.a>
  )
}

export const Sidebar = ({ select, isOpen, setIsOpen, isMobile }) => {
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {isMobile && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 p-2 text-white rounded-md"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      )}
      <AnimatePresence>
        {(isOpen || !isMobile) && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`fixed top-0 h-full left-0 text-white p-4 overflow-y-auto ${
              isMobile ? 'w-full pl-12 pr-12' : 'flex items-center w-1/4 pl-8 pr-8 overflow-x-visible'
            }`}
          >
          <div className="w-full">
            <div className="mb-8 text-center">
              <div className="mb-4 flex justify-center">
                <Image
                  src={pfp}
                  alt="Profile picture"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </div>
              <h1 className="text-3xl sm:text-xl xl:text-3xl 2xl:text-4xl font-bold mb-4">@Rael</h1>
              <div className="flex justify-center">
                <SocialIcon href="https://www.linkedin.com/in/rael-de-agrela-292618321/" icon={FaLinkedin} />
                <SocialIcon href="https://github.com/0xRael" icon={FaGithub} />
                <SocialIcon href="https://discordapp.com/users/741644691866648700" icon={FaDiscord} />
                <SocialIcon href="https://twitter.com/0x_rael" icon={FaTwitter} />
              </div>
            </div>
            <nav className="flex flex-col xl:py-2 text-lg sm:text-sm xl:text-lg 2xl:text-2xl">
              <Element element={0} select={select}>About Me</Element>
              <Element element={1} select={select}>Skills</Element>
              <p className="py-2 text-base xl:text-xl mt-3 xl:mt-12 mb-3 font-semibold">- Projects -</p>
              <Element element={2} select={select}>Portfolio</Element>
              <Element element={3} select={select}>Music NFT Marketplace</Element>
            </nav>
          </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

