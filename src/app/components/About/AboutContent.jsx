'use client';

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function AboutContent() {
  return (
    <section className="text-white p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-cyan-400">About Me</h1>
      <p className="text-lg mb-6 leading-7 text-gray-300">
        Hey there! I’m a passionate <span className="text-yellow-300 font-semibold">Developer</span>, 
        <span className="text-pink-400 font-semibold"> Designer</span>, and 
        <span className="text-red-400 font-semibold"> Tester</span>. I love building cool stuff using code and making experiences interactive.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
        <div className="bg-gradient-to-br from-cyan-800 to-blue-900 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-cyan-300">Experience</h2>
          <p className="mt-2 text-gray-300">3+ Years in Full-Stack Development</p>
          <p className="text-gray-300">UI/UX Designing and QA Testing</p>
        </div>
        <div className="bg-gradient-to-br from-purple-800 to-pink-700 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-pink-300">Projects</h2>
          <p className="mt-2 text-gray-200">20+ Web Projects Completed</p>
          <p className="text-gray-200">Frontend / Backend / 3D / Testing</p>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-2">Connect with me</h3>
        <div className="flex gap-6 text-2xl text-white">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-cyan-400 transition" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-cyan-400 transition" />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-cyan-400 transition" />
          </a>
        </div>
      </div>
    </section>
  );
}
