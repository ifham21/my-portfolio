'use client';

import { Canvas, useFrame } from '@react-three/fiber'; // ✅ ADD useFrame
import { useRef } from 'react';
import { OrbitControls } from '@react-three/drei';

function Bug() {
  const ref = useRef();
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.02;
      ref.current.position.x = Math.sin(Date.now() * 0.001) * 2;
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.5, 16, 16]} />
      <meshStandardMaterial color="#ff0000" />
    </mesh>
  );
}

export default function TestingSkill() {
  return (
    <Canvas style={{ height: 300 }}>
      <ambientLight />
      <directionalLight position={[3, 3, 3]} />
      <Bug />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
