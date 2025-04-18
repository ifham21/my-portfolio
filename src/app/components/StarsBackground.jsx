'use client';

import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

export default function StarsBackground() {
  return (
    <Canvas className="bg-canvas" style={{ position: 'absolute', zIndex: -1 }}>
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
    </Canvas>
  );
}
