import { RouterContext } from 'next/dist/next-server/lib/router-context';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useFragment } from 'relay-hooks';
import { graphql } from 'relay-runtime';
import { tagsScene_Tags$key } from 'src/__generated__/tagsScene_Tags.graphql';
import { ThemeContext } from 'src/pages/_app';
import { height, HeightProps } from 'styled-system';
import * as THREE from 'three';

import styled from '@emotion/styled';
import { Text, TrackballControls, useContextBridge } from '@react-three/drei';
import { Canvas, ThreeEvent, useFrame } from '@react-three/fiber';

type WordProps = {
  hoverColor: string;
  position: THREE.Vector3;
  word: string;
};
const Word = (props: WordProps) => {
  const { hoverColor, word, ...rest } = props;
  const color = new THREE.Color();
  const fontProps = {
    fontSize: 2.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    'material-toneMapped': false,
  };

  const ref = useRef<React.ComponentProps<typeof Text> | null>(null);
  const [hovered, setHovered] = useState(false);
  const router = useRouter();
  const handleClick = () => {
    router.push(`tags/${word}`);
  };

  const over = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setHovered(true);
  };
  const out = () => setHovered(false);
  // Change the mouse cursor on hover
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
  }, [hovered]);

  const { theme } = useContext(ThemeContext);
  // Tie component to the render-loop
  useFrame(({ camera }) => {
    // Make text face the camera
    if (ref.current && ref.current.quaternion && 'copy' in ref.current.quaternion) {
      ref.current?.quaternion?.copy(camera.quaternion);
    }

    // Animate font color
    if (ref.current && ref.current.material) {
      // @ts-expect-error three types are not accurate
      ref.current.material.color.lerp(color.set(hovered ? hoverColor : theme.colors.text), 0.1);
    }
  });

  return (
    <Text
      ref={ref}
      onPointerOver={over}
      onPointerOut={out}
      onClick={handleClick}
      {...rest}
      {...fontProps}
    >
      {word}
    </Text>
  );
};

type CloudProps = {
  radius: number;
  tags: ReadonlyArray<{
    readonly name: string;
    readonly mainColor: string | null;
  }>;
};

const CanvasContainer = styled.div<HeightProps>`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  ${height}
`;

const Cloud = (props: CloudProps) => {
  const { radius = 30, tags } = props;
  const count = Math.floor(Math.sqrt(tags.length));
  // Create a count x count random words with spherical distribution
  const words = useMemo(() => {
    const temp: [
      THREE.Vector3,
      {
        readonly name: string;
        readonly mainColor: string | null;
      },
    ][] = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    let ctr = 0;
    for (let i = 1; i < count + 1; i += 1) {
      for (let j = 0; j < count; j += 1) {
        temp.push([
          new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)),
          tags[ctr % tags.length],
        ]);
        ctr += 1;
      }
    }
    return temp;
  }, [count, radius, tags]);

  const { theme } = useContext(ThemeContext);
  return (
    <>
      {words.map(([pos, word]) => (
        <Word
          key={word.name}
          word={word.name}
          hoverColor={word.mainColor ?? theme.colors.link}
          position={pos}
        />
      ))}
    </>
  );
};

const tagSceneFragment = graphql`
  fragment tagsScene_Tags on Blog {
    tags {
      name
      mainColor
    }
  }
`;

type TagsSceneProps = {
  blog: tagsScene_Tags$key | null;
};

const TagsScene = (prop: TagsSceneProps) => {
  const { blog } = prop;
  const ContextBridge = useContextBridge(ThemeContext, RouterContext);
  const data = useFragment(tagSceneFragment, blog);
  return (
    <CanvasContainer height={['500px', '550px', '600px']}>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
        <ContextBridge>
          <fog attach="fog" args={['#202025', 0, 80]} />
          <Cloud radius={25} tags={data?.tags ?? []} />
          <TrackballControls />
        </ContextBridge>
      </Canvas>
    </CanvasContainer>
  );
};

export default TagsScene;
