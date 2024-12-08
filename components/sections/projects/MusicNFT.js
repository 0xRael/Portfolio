"use client"
import { BaseProject } from "./Base";
import Image from "next/image";

export function MusicNFT() {
    const skillsUsed = ["Next.js", "Solidity", "Wagmi", "Ethers.js", "Framer-Motion", "Tailwind CSS", "Pinata", "IPFS"]
    return (
        <BaseProject
        title="Music NFT Marketplace"
        skillsUsed={skillsUsed}
        sourceLink={"https://github.com/0xRael/Music-Nft-Next.js"}
        liveLink={"https://music-nft-next-js.vercel.app/"}
        time="09/15/2024 - Now (I add stuff from time to time)"
        >
            A Dedicated Platform for Music NFTs:
                <li>Empower musicians to mint and sell their music as unique digital assets.</li>
                <li>Provide fans with the opportunity to own and support their favorite artists.</li>
            <br/>
            Seamless On-Chain Transactions:
                <li>Efficient and secure buying and selling of music NFTs directly on the blockchain.</li>
                <li>Transparent and verifiable ownership records.</li>
            <br/>
            IPFS Integration for Enhanced Metadata:
                <li>Store and access NFT metadata on the decentralized IPFS network.</li>
                <li>Ensure long-term accessibility and immutability of music assets.</li>
        </BaseProject>
    );
}