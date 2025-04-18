'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshWobbleMaterial } from '@react-three/drei';

function RGBBox() {
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.y += 0.01;
    ref.current.rotation.x += 0.005;
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[3, 2, 0.5]} />
      <MeshWobbleMaterial
        attach="material"
        color="hotpink"
        speed={1}
        factor={0.5}
      />
    </mesh>
  );
}

export default function DesignSkill() {
  return (
    <Canvas style={{ height: 300 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 2, 5]} />
      <RGBBox />
    </Canvas>
  );
}
