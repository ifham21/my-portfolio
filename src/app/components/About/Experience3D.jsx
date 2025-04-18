'use client';

import { Canvas } from '@react-three/fiber';
import { Float, Text3D } from '@react-three/drei';

export default function Experience3D() {
  return (
    <Canvas style={{ height: 300 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 5]} />
      <Float speed={2} rotationIntensity={2} floatIntensity={2}>
        <mesh>
          <boxGeometry args={[3, 2, 1]} />
          <meshStandardMaterial color="teal" />
        </mesh>
      </Float>
    </Canvas>
  );
}
