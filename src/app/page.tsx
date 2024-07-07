import React from "react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/mode-toggle"
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      {/* Main Content */}
      <main className="flex-grow py-12">
        <div className="container mx-auto px-6">
          {/* Introduction */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-sans mb-4 text-gray-800">Elevate Your Coding Practice with Innovative Note-Taking</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              LC Board empowers you with a robust whiteboard designed for capturing, organizing, and retrieving your brainstorming notes, making coding interviews a breeze.
            </p>
          </div>

          {/* Feature Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Box 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <h3 className="text-2xl font-semibold mb-3 font-sans">Versatile Whiteboard</h3>
              <p className="text-gray-600 mb-5">
                Brainstorm and jot down ideas on our flexible whiteboard as you tackle LeetCode problems.
              </p>
              <Link href="/forms">
                <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-indigo-600 transition-colors duration-300">
                  Start Brainstorming
                </button>
              </Link>
            </div>

            {/* Box 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <h3 className="text-2xl font-semibold mb-3 font-sans">Persistent Notes</h3>
              <p className="text-gray-600 mb-5">
                Save and access your notes anytime, ensuring your ideas are always at hand.
              </p>
              <Link href="/forms">
                <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-indigo-600 transition-colors duration-300">
                  Save Your Ideas
                </button>
              </Link>
            </div>

            {/* Box 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <h3 className="text-2xl font-semibold mb-3 font-sans">Secure Access</h3>
              <p className="text-gray-600 mb-5">
                Log in to protect your notes and access them securely from any device.
              </p>
              <Link href="/forms">
                <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-indigo-600 transition-colors duration-300">
                  Sign Up Now
                </button>
              </Link>
            </div>

            {/* Box 4 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <h3 className="text-2xl font-semibold mb-3 font-sans">Cross-Device Sync</h3>
              <p className="text-gray-600 mb-5">
                Seamlessly sync your brainstorming notes across all your devices without any hassle.
              </p>
              <Link href="/forms">
                <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-indigo-600 transition-colors duration-300">
                  Sync Your Notes
                </button>
              </Link>
            </div>

            {/* Box 5 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <h3 className="text-2xl font-semibold mb-3 font-sans">Lifetime Storage</h3>
              <p className="text-gray-600 mb-5">
                Opt for lifetime storage to keep your brainstorming notes safe and accessible forever.
              </p>
              <Link href="/forms">
                <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-indigo-600 transition-colors duration-300">
                  Learn More
                </button>
              </Link>
            </div>

            {/* Box 6 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <h3 className="text-2xl font-semibold mb-3 font-sans">Open Source Integration</h3>
              <p className="text-gray-600 mb-5">
                Leverage open-source whiteboard APIs for a rich and feature-packed brainstorming experience.
              </p>
              <Link href="https://excalidraw.com/">
                <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-indigo-600 transition-colors duration-300">
                  Explore Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default HomePage
