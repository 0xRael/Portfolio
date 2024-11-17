"use client"

import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaDiscord, FaTwitter } from 'react-icons/fa';

function Element({ element, children, select }) {
  return (
    <motion.p
      initial={{ opacity: 0.8, y: 0, scale: 1, backgroundColor: "#00000000" }}
      whileHover={{ opacity: 1.0, y: -10, scale: 1.1, backgroundColor: "#ff770077" }}
      whileTap={{ opacity: 1.0, y: 10, scale: 1.1 }}
      className="py-2 active:bg-gray-300 mb-3 cursor-pointer"
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
      className="text-2xl mx-2 text-gray-300 hover:text-orange-300"
    >
      <Icon />
    </motion.a>
  )
}

export const Sidebar = ({ select }) => {
  return (
    <div className="size-auto md:size-1/4 h-screen block">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-4">@Rael</h1>
        <div className="flex justify-center">
          <SocialIcon href="https://www.linkedin.com/in/rael-de-agrela-292618321/" icon={FaLinkedin} />
          <SocialIcon href="https://github.com/0xRael" icon={FaGithub} />
          <SocialIcon href="https://discordapp.com/users/741644691866648700" icon={FaDiscord} />
          <SocialIcon href="https://twitter.com/0x_rael" icon={FaTwitter} />
        </div>
      </div>
      <nav className="flex flex-col py-2 text-lg">
        <Element element={0} select={select}>About Me</Element>
        <Element element={1} select={select}>Skills</Element>
        <p className="py-2 text-xl mt-12 mb-3 font-semibold">- Projects -</p>
        <Element element={2} select={select}>Portfolio</Element>
        <Element element={3} select={select}>Music NFT Marketplace</Element>
      </nav>
    </div>
  );
};