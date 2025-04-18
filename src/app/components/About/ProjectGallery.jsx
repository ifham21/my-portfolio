'use client';

const projects = [
  {
    title: 'E-Commerce Website',
    description: 'Built with React, Node, and MongoDB',
  },
  {
    title: 'Portfolio Website',
    description: 'Next.js + Three.js + TailwindCSS',
  },
  {
    title: 'Online Exam System',
    description: 'PHP + MySQL + Bootstrap 5',
  },
];

export default function ProjectGallery() {
  return (
    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((proj, index) => (
        <div key={index} className="bg-gray-800 rounded-lg p-5 shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-bold text-cyan-300">{proj.title}</h3>
          <p className="text-gray-300 mt-2">{proj.description}</p>
        </div>
      ))}
    </div>
  );
}
