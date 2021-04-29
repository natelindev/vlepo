import { useTheme } from '@emotion/react';

type LoadingProps = {
  color?: string;
  size?: number;
  height?: number;
  width?: number;
};
const Loading = (props: LoadingProps) => {
  const theme = useTheme();
  const { color = theme.colors.text, size = 24, height = size, width = size } = props;

  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={`${width}px`}
      height={`${height}px`}
      viewBox={`0 0 ${width} ${height}`}
      xmlSpace="preserve"
    >
      <rect x="0" y={0.6 * height} width={width / 6} height={height * 0.3} fill={color}>
        <animate
          attributeName="height"
          attributeType="XML"
          values="5;21;5"
          begin="0s"
          dur="0.6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          attributeType="XML"
          values="13; 5; 13"
          begin="0s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={(width * 5) / 12}
        y={0.6 * height}
        width={width / 6}
        height={height * 0.3}
        fill={color}
      >
        <animate
          attributeName="height"
          attributeType="XML"
          values="5;21;5"
          begin="0.15s"
          dur="0.6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          attributeType="XML"
          values="13; 5; 13"
          begin="0.15s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={(width * 5) / 6}
        y={0.6 * height}
        width={width / 6}
        height={height * 0.3}
        fill={color}
      >
        <animate
          attributeName="height"
          attributeType="XML"
          values="5;21;5"
          begin="0.3s"
          dur="0.6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          attributeType="XML"
          values="13; 5; 13"
          begin="0.3s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  );
};

export default Loading;
