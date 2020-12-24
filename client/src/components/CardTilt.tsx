import React, { useRef, useState } from 'react';
import { useFrame, useThree } from 'react-three-fiber';
import { DoubleSide } from 'three';

const CardTilt = (props: any): React.ReactElement => {
  // This reference will give us direct access to the mesh
  const mesh: any = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [center, setCenter] = useState({
    x: window.innerWidth * 0.5,
    y: window.innerHeight * 0.5,
  });
  const mouseTolerance = 0.2;
  const { clock } = useThree();
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {});

  return (
    <mesh
      {...props}
      ref={mesh}
      onPointerOver={(e) => {
        const t = clock.getElapsedTime();
        while (
          mesh.current.scale.x < 1.5 ||
          mesh.current.scale.y < 1.5 ||
          mesh.current.scale.z < 1.5
        ) {
          mesh.current.scale.x += t / 3.0;
          mesh.current.scale.y += t / 3.0;
          mesh.current.scale.z += t / 3.0;
        }
        setHover(true);
        const {
          offsetTop,
          offsetLeft,
          offsetWidth,
          offsetHeight,
        } = e.currentTarget;
        setCenter({
          x: offsetLeft + offsetWidth * 0.5,
          y: offsetTop + offsetHeight * 0.5,
        });
      }}
      onPointerOut={(e) => {
        setHover(false);
        const t = clock.getElapsedTime();
        while (mesh.current.rotation.y > 0 || mesh.current.rotation.x > 0) {
          mesh.current.rotation.x -= t / 3.0;
          mesh.current.rotation.y -= t / 3.0;
        }
        mesh.current.rotation.x = 0;
        mesh.current.rotation.y = 0;
        if (mesh.current.scale) {
          while (
            mesh.current.scale.x > 1 ||
            mesh.current.scale.y > 1 ||
            mesh.current.scale.z > 1
          ) {
            mesh.current.scale.x -= t / 3.0;
            mesh.current.scale.y -= t / 3.0;
            mesh.current.scale.z -= t / 3.0;
          }
        }
      }}
      onPointerMove={(e) => {
        if (hovered) {
          mesh.current.rotation.y =
            ((e.clientX - center.x) / center.x) * mouseTolerance;
          mesh.current.rotation.x =
            ((e.clientY - center.y) / center.y) * mouseTolerance;
        }
      }}
    >
      <planeBufferGeometry attach="geometry" args={[20, 20, 32]} />
      <meshBasicMaterial attach="material" color={0xffff00} side={DoubleSide} />
    </mesh>
  );
};

export default CardTilt;
