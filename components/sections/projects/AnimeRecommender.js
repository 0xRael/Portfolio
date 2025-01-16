"use client"
import { BaseProject } from "./Base";
import screenshot from '@/public/AnimeRecommender.png';

export function AnimeRecommender() {
    const skillsUsed = ["Next.js","Tailwind CSS","TypeScript","GraphQL"]
    return (
        <BaseProject
        title="Anime Recommender"
        skillsUsed={skillsUsed}
        sourceLink={"https://github.com/0xRael/anime-recommender"}
        liveLink={"https://anime-recommender-xi.vercel.app/"}
        image={screenshot}
        time="01/11/2025 - 01/15/2025"
        >
            A personalized anime recommendation system that utilizes Anilist's GraphQL API to fetch user data and calculate tailored suggestions. By analyzing a user's viewing history, preferences, and ratings, the system provides a weighted ranking of anime recommendations, taking into account watch time, genre, and tag similarity.
            <br/><br/>
            Key Features:
                <li>Integrates with Anilist account to fetch user data and preferences</li>
                <li>Utilizes GraphQL API to fetch data and calculate recommendations</li>
                <li>Calculates recommendations using a weighted system, considering user ratings, watch time, and genre/tag similarity</li>
                <li>Provides a personalized and accurate recommendation experience for users</li>
        </BaseProject>
    );
}