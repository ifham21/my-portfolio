'use client';

import { Canvas } from '@react-three/fiber';
import { Float, Html } from '@react-three/drei';

export default function DevelopmentSkill() {
  return (
    <Canvas style={{ height: 300 }}>
      <ambientLight />
      <Float floatIntensity={1.5}>
        <mesh>
          <boxGeometry args={[3.5, 2, 0.5]} />
          <meshStandardMaterial color="#00ffff" />
          <Html center>
            <div style={{
              fontFamily: 'monospace',
              fontSize: '14px',
              color: '#0f0',
              background: 'black',
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0 0 20px #00ffff',
              width: '220px',
              height: '120px'
            }}>
              <code>
                {'<h1>Hello World</h1>'}<br />
                {'<button>Click Me</button>'}
              </code>
            </div>
          </Html>
        </mesh>
      </Float>
    </Canvas>
  );
}
