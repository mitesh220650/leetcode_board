import React from "react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/mode-toggle"
import Link from "next/link";

const Explore = () => {
    return (
        <div className="container mx-auto px-4 py-8 z-50 ">
            <h1 className="text-3xl font-bold text-center mb-8">Explore LC Board</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="prose lg:prose-xl">
                    <p className="text-gray-700">
                        Welcome to LC Board, your ultimate platform for enhancing your LeetCode problem-solving
                        experience.
                    </p>

                    <h2 className="text-2xl font-bold mt-6 mb-4">What You Can Do with LC Board</h2>

                    <ul className="list-disc list-inside text-gray-800">
                        <li className="mb-4">
                            <strong>Brainstorm and Visualize Solutions:</strong> Enhance your problem-solving process by
                            utilizing LC
                            Board's interactive whiteboard. Visualize and brainstorm solutions directly alongside
                            LeetCode problems.
                        </li>
                        <li className="mb-4">
                            <strong>Save and Access Ideas Anywhere:</strong> Save your brainstorming sessions securely
                            and access them
                            from any device. LC Board ensures your notes are always available, even years later.
                        </li>
                        <li className="mb-4">
                            <strong>Collaborate and Share Insights:</strong> Collaborate with peers by sharing your
                            whiteboard
                            sessions. Receive feedback and insights to refine your problem-solving strategies.
                        </li>
                        <li className="mb-4">
                            <strong>Organize with Personalized Notes:</strong> Create personalized notes for each
                            LeetCode problem.
                            Organize your thoughts, strategies, and solutions efficiently within LC Board.
                        </li>
                        <li>
                            <strong>Seamlessly Integrate with LeetCode:</strong> Integrate LC Board seamlessly with
                            LeetCode problems.
                            Access whiteboard sessions directly from LeetCode challenges for a streamlined experience.
                        </li>
                    </ul>
                </div>

                <div className="flex items-center justify-center">
                    <img
                        src="/src/app/explore/image.jpeg"
                        alt="image"
                        className="rounded-lg shadow-lg"
                        style={{maxWidth: "100%", height: "auto"}}
                    />
                </div>
            </div>

            <div className="mt-12 text-center">
                <h2 className="text-2xl font-bold mb-4">Why Choose LC Board?</h2>
                <p className="text-gray-700">
                    LC Board empowers you to go beyond traditional problem-solving methods. Harness the power of
                    interactive
                    whiteboarding, secure note storage, and collaborative features to excel in LeetCode challenges and
                    coding
                    interviews.
                </p>
            </div>

            <div className="mt-12 text-center">
                <h2 className="text-2xl font-bold mb-4">Get Started Today</h2>
                <p className="text-gray-700">
                    Explore LC Board now and revolutionize your LeetCode learning journey. Start up today to unlock a new
                    level of
                    efficiency and creativity in problem-solving.
                </p>
            </div>
        </div>
    )
}

export default Explore
