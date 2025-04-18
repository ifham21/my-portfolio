'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function Globe() {
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.8, 32, 32]} />
      <meshStandardMaterial color="#00bfff" wireframe />
    </mesh>
  );
}

export default function RotatingGlobe() {
  return (
    <Canvas style={{ height: 300 }}>
      <ambientLight />
      <directionalLight position={[3, 3, 3]} />
      <Globe />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
