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
            Not your usual NFT market, but a Music-oriented one. Basically, a platform where musicians can mint NFTs with their music, put them to sell,
            and users can easily buy these NFTs, with all the Market logic happening on-chain. (I made and deployed the contracts.)
<br/><br/>
            You need an Ethereum Wallet to use this! This supports WalletConnect! Contracts were deployed to Sepolia, when minting, NFT metadata uploads
            to IPFS via Pinata API! So you can now view them in other Markets too!
<br/><br/>
            There's even a Share button on each NFT that allows you see it on Etherscan, OpenSea or just get a link to it in this app. I learnt Next.js
            doing this project, so the Source Code can be a bit messy!
<br/><br/>
            Later on, I also added framer-motion and it started to look better! Hope you like it!
 
        </BaseProject>
    );
}