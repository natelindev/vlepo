import { useCallback, useImperativeHandle, useRef } from 'react';
import { AsyncResult, Controller, Interpolation, useSpring } from 'react-spring';

type Params = {
  ref?: React.Ref<HTMLElement | null>;
  scale?: number;
  mass?: number;
  tension?: number;
  friction?: number;
  zoom?: number;
};
export const useTilt = <T = HTMLElement>(
  params: Params,
): [
  React.RefObject<HTMLElement & T>,
  {
    onMouseMove: ({ clientX: x, clientY: y }: { clientX: number; clientY: number }) => AsyncResult<
      Controller<{
        xys: number[];
      }>
    >[];
    onMouseLeave: () => AsyncResult<
      Controller<{
        xys: number[];
      }>
    >[];
    style: {
      transform: Interpolation<number[], string>;
    };
  },
] => {
  const { ref, scale = 200, mass = 10, tension = 400, friction = 40, zoom = 1.05 } = params;
  const tiltRef = useRef<HTMLElement & T>(null);

  const calc = useCallback(
    (x: number, y: number) => {
      const rect = tiltRef.current?.getBoundingClientRect() ?? {
        left: 0,
        top: 0,
        height: window.innerHeight,
        width: window.innerWidth,
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      };
      return [-(y - rect.top) / rect.height, (x - rect.left) / rect.width, zoom];
    },
    [zoom],
  );
  const trans = (x: number, y: number, s: number) =>
    `perspective(${scale}px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  const [springProps, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass, tension, friction },
  }));

  useImperativeHandle<HTMLElement | null, HTMLElement | null>(ref, () => tiltRef.current, [
    tiltRef,
  ]);

  return [
    tiltRef,
    {
      onMouseMove: ({ clientX: x, clientY: y }: { clientX: number; clientY: number }) =>
        set.start({ xys: calc(x, y) }),
      onMouseLeave: () => set.start({ xys: [0, 0, 1] }),
      style: { transform: springProps.xys.to(trans) },
    },
  ];
};
