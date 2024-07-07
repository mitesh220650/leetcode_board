import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import logo from "@/components/ui/header/LeetCode_Logo_black_with_text.svg.png"; // Ensure this image path is correct

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto text-center">
          <img src={logo} alt="LeetCode Logo" className="h-12 mx-auto mb-4" /> {/* LeetCode Logo */}
          <h1 className="text-4xl font-bold">LeetCode Board</h1>
          <p className="text-xl mt-2">Brainstorm, save, and retrieve your LeetCode problem-solving ideas</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col justify-center py-10 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            {/* Description */}
            <div className="max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl font-semibold mb-4">About LeetCode Board</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Welcome to LeetCode Board, your ultimate companion for solving LeetCode problems. Our platform integrates a powerful open-source whiteboard API, allowing you to brainstorm and take notes for each problem. Save your ideas and access them across devices, even years later. Sign up to start saving your brainstorming sessions, and if needed, opt for lifetime storage with our secure payment integration.
              </p>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex space-x-4 mb-10">
              <Link href="/forms" passHref>
                <Button className="bg-blue-600 text-white hover:bg-blue-700">
                  Get Started
                </Button>
              </Link>
              <Link href="/learn-more" passHref>
                <Button className="bg-gray-200 text-blue-600 hover:bg-gray-300">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Key Features */}
            <div className="bg-white p-8 rounded-lg shadow-md mb-10">
              <h2 className="text-xl font-semibold mb-4">Key Features</h2>
              <ul className="list-disc list-inside text-left text-gray-700 leading-relaxed">
                <li>Integrated whiteboard for brainstorming LeetCode problems.</li>
                <li>Persistent notes accessible across different devices.</li>
                <li>User authentication for secure note saving and retrieval.</li>
                <li>Optional lifetime storage with secure payment integration.</li>
              </ul>
            </div>

            {/* How It Works */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">How It Works</h2>
              <ol className="list-decimal list-inside text-left text-gray-700 leading-relaxed">
                <li>Sign up and log in to access your personal whiteboard.</li>
                <li>Start brainstorming and taking notes on any LeetCode problem.</li>
                <li>Save your notes to access them from any device at any time.</li>
                <li>Opt for lifetime storage to keep your notes indefinitely.</li>
              </ol>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 LeetCode Board. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
