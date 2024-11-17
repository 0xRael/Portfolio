"use client"
import { Transition } from "@/components/Transition"
import { motion } from 'framer-motion';
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiVisualstudio } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaEthereum, FaPython, FaGitAlt } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { SiWagmi, SiIpfs, SiSolidity } from "react-icons/si";

const TECHNOLOGIES = [
	{
		category: "Front-end",
		items: [
			{ name: "HTML", icon: <AiFillHtml5 size={32} /> },
			{ name: "CSS", icon: <DiCss3 size={32} /> },
			{ name: "JS", icon: <IoLogoJavascript size={32} /> },
			{ name: "React", icon: <FaReact size={32} /> },
			{ name: "Next.js", icon: <TbBrandNextjs size={32} /> },
			{ name: "Tailwind CSS", icon: <TbBrandTailwind size={32} /> },
			{ name: "Bootstrap", icon: <BsBootstrap size={32} /> }
		]
	},
  {
		category: "Blockchain / Web3",
		items: [
			{ name: "Solidity", icon: <SiSolidity size={32} /> },
			{ name: "Ethers.js", icon: <FaEthereum size={32} /> },
			{ name: "Wagmi Provider", icon: <SiWagmi size={32} /> },
			{ name: "Ipfs", icon: <SiIpfs size={32} /> }
		]
	},
	{
		category: "Other tools",
		items: [
			{ name: "Git", icon: <FaGitAlt size={32} /> },
			{ name: "VsCode", icon: <DiVisualstudio size={32} /> },
			{ name: "Python", icon: <FaPython size={32} /> }
		]
	}
];

export function Skills() {
    return (
      <Transition>
          <div className="text-center md:text-left font-[family-name:var(--font-geist-mono)]">
              <p className="mb-2">I have experience with:</p>
              {!!TECHNOLOGIES.length && (
					<div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
						{TECHNOLOGIES.map((tech, index) => {
							return (
								<div
									key={tech.category}
									className="flex flex-col gap-4 flex-1 md:flex-auto"
								>
									<h3 tabIndex="0" className="text-2xl font-bold text-orange-300">
										{tech.category}
									</h3>
									<div className="flex items-center flex-wrap gap-x-5 gap-y-8">
										{tech.items.map((item) => (
											<motion.div
											
											initial = {{ opacity: 0.8, y: 0, scale:1 }}
											whileHover = {{ opacity: 1.0, y:-10, scale:1.2 }}

											key={item.name} className="group relative flex"
											>
												<span tabIndex="0" role="img">
													{item.icon}
												</span>
												<span
													className="group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity bg-gray-800 text-sm text-gray-100 rounded-md absolute left-1/2
    -translate-x-1/2 translate-y-full opacity-0 mt-3 mx-auto px-2 w-max"
												>
													{item.name}
												</span>
											</motion.div>
										))}
									</div>
								</div>
							);
						})}
					</div>
				)}
          </div>
      </Transition>
    );
  }
  