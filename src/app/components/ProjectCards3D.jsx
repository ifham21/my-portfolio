'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html, Float } from '@react-three/drei';

function ProjectCard({ title }) {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh>
        <boxGeometry args={[3, 2, 0.5]} />
        <meshStandardMaterial color="#00ffff" transparent opacity={0.2} />
        <Html center>
          <div style={{
            width: '220px',
            height: '120px',
            backdropFilter: 'blur(12px)',
            background: 'rgba(0,0,0,0.4)',
            border: '1px solid #00ffff',
            borderRadius: '15px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1rem',
            color: '#fff',
            textAlign: 'center'
          }}>
            {title}
          </div>
        </Html>
      </mesh>
    </Float>
  );
}

export default function ProjectCards3D() {
  const projects = ['3D Portfolio', 'Weather App', 'E-Commerce Dashboard'];

  return (
    <Canvas style={{ height: 500 }}>
      <ambientLight />
      <directionalLight position={[5, 5, 5]} />
      <OrbitControls enableZoom={false} />
      {projects.map((title, i) => (
        <ProjectCard key={title} title={title} />
      ))}
    </Canvas>
  );
}
