import {
  Float,
  MeshReflectorMaterial,
  PresentationControls,
  Stage,
} from '@react-three/drei';
import { Suspense } from 'react';
import Chair from './Chair';

const Experience = () => {
  return (
    <PresentationControls
      speed={1.5}
      global
      zoom={0.2}
      polar={[-0.1, Math.PI / 4]}
    >
      <Stage environment='city' intensity={0.6} contactShadow={false}>
        <Suspense fallback={null}>
          <Float
            speed={1} // Animation speed, defaults to 1
            rotationIntensity={1} // XYZ rotation intensity, defaults to 1
            floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[0, 0.4]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
          >
            <Chair />
          </Float>
        </Suspense>
      </Stage>

      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[170, 170]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={40}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color='#101010'
          metalness={0.5}
        />
      </mesh>
    </PresentationControls>
  );
};

export default Experience;
