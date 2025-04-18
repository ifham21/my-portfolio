'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Avatar() {
  return (
    <mesh>
      <sphereGeometry args={[1.2, 32, 32]} />
      <meshStandardMaterial color="#00ffff" wireframe />
    </mesh>
  );
}

export default function Avatar3D() {
  return (
    <Canvas style={{ height: 300 }}>
      <ambientLight />
      <directionalLight position={[1, 1, 1]} />
      <Avatar />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
