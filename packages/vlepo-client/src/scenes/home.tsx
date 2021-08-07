import { Suspense, useState } from 'react';
import { useSpring } from 'react-spring';
import Model from 'src/components/Model';

import { a as three } from '@react-spring/three';
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const HomeScene = () => {
  const [laptopOpen, setLaptopOpen] = useState(true);
  const props = useSpring({ open: Number(laptopOpen) });

  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, -24], fov: 35 }}>
      <three.pointLight position={[10, 10, 10]} intensity={1.5} />
      <Suspense fallback={null}>
        <group
          rotation={[0, Math.PI, 0]}
          onClick={(e) => {
            e.stopPropagation();
            setLaptopOpen(!laptopOpen);
          }}
        >
          <Model open={laptopOpen} hinge={props.open.to([0, 1], [1.575, -0.425])} />
        </group>
        <Environment preset="city" />
      </Suspense>
      <ContactShadows
        rotation-x={Math.PI / 2}
        position={[0, -4.5, 0]}
        opacity={0.4}
        width={20}
        height={20}
        blur={2}
        far={4.5}
      />
      <OrbitControls regress enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

export default HomeScene;
