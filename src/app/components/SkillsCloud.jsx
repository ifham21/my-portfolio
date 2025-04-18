'use client';

import { Canvas } from '@react-three/fiber';
import { Text, OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

const skills = [
  'JavaScript', 'React', 'Next.js', 'Node.js', 'Express',
  'MongoDB', 'MySQL', 'HTML', 'CSS', 'Git',
  'Three.js', 'Jest', 'Docker', 'CI/CD'
];

function Skill({ text, position }) {
  return (
    <Text
      position={position}
      fontSize={0.5}
      color="#00ffff"
      font="https://fonts.gstatic.com/s/inter/Inter-Regular.ttf"
    >
      {text}
    </Text>
  );
}

function SphereSkills() {
  const angleStep = (2 * Math.PI) / skills.length;
  const radius = 3;

  const positions = skills.map((_, i) => {
    const angle = i * angleStep;
    return [
      Math.sin(angle) * radius,
      Math.cos(angle) * radius,
      Math.sin(angle + i) * radius,
    ];
  });

  return (
    <>
      {skills.map((skill, i) => (
        <Skill key={skill} text={skill} position={positions[i]} />
      ))}
    </>
  );
}

export default function SkillsCloud() {
  return (
    <Canvas style={{ height: 500 }}>
      <ambientLight />
      <directionalLight position={[0, 0, 5]} />
      <Suspense fallback={null}>
        <SphereSkills />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
      </Suspense>
    </Canvas>
  );
}
