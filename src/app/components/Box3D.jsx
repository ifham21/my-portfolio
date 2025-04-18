'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function RotatingBox() {
  const ref = useRef();
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}

export default function Box3D() {
  return (
    <Canvas style={{ width: '100%', height: '400px' }}>
      <ambientLight />
      <directionalLight position={[2, 2, 5]} />
      <RotatingBox />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
