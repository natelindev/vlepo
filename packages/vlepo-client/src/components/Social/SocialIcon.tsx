import React, { ReactElement } from 'react';

import { useTheme } from '@emotion/react';

import {
  SocialGroupIcon,
  SocialGroupInnerCircle,
  SocialGroupOutline,
  SocialLink,
  SocialSvg,
} from './style';

const TelegramSocialIcon = ({ color }: { color: string }) => {
  const theme = useTheme();
  return (
    <g fill="none" fillRule="evenodd">
      <SocialGroupOutline stroke={theme.colors.text} strokeWidth="3" cx="50" cy="50" r="43.75" />
      <SocialGroupInnerCircle cx="50" cy="50" fill={color} r="42" />
      <SocialGroupIcon
        d="M51.474,60.754c-1.733,1.688-3.451,3.348-5.153,5.021   c-0.595,0.586-1.264,0.91-2.118,0.865c-0.583-0.031-0.909-0.287-1.088-0.84c-1.304-4.047-2.627-8.084-3.924-12.135   c-0.126-0.393-0.312-0.584-0.71-0.707c-3.072-0.938-6.138-1.898-9.199-2.871c-0.471-0.15-0.946-0.346-1.353-0.623   c-0.629-0.426-0.721-1.121-0.157-1.621c0.521-0.461,1.143-0.863,1.789-1.119c3.755-1.488,7.53-2.928,11.299-4.381   c9.565-3.693,19.13-7.383,28.696-11.076c1.819-0.703,3.217,0.287,3.028,2.254c-0.121,1.258-0.447,2.496-0.71,3.738   c-2.077,9.807-4.156,19.615-6.244,29.42c-0.496,2.328-2.131,2.936-4.047,1.523c-3.209-2.365-6.415-4.738-9.622-7.107   C51.808,60.984,51.649,60.877,51.474,60.754z M44.271,63.732c0.036-0.01,0.072-0.02,0.108-0.029   c0.02-0.092,0.049-0.182,0.057-0.273c0.206-2.223,0.424-4.445,0.603-6.672c0.04-0.496,0.21-0.848,0.583-1.182   c2.958-2.645,5.898-5.307,8.844-7.963c3.261-2.941,6.523-5.879,9.772-8.832c0.201-0.182,0.285-0.492,0.423-0.744   c-0.306-0.033-0.634-0.156-0.912-0.084c-0.379,0.098-0.738,0.318-1.076,0.531c-7.197,4.533-14.388,9.074-21.59,13.598   c-0.407,0.256-0.483,0.473-0.328,0.92c0.531,1.525,1.014,3.064,1.515,4.6C42.937,59.646,43.604,61.689,44.271,63.732z"
        fill="#fff"
        fillRule="nonzero"
      />
    </g>
  );
};

const GithubSocialIcon = ({ color }: { color: string }): React.ReactElement => {
  const theme = useTheme();
  return (
    <g fill="none" fillRule="evenodd">
      <SocialGroupOutline
        stroke={theme.colors.background}
        strokeWidth="20"
        cx="300"
        cy="300"
        r="262.5"
      />
      <SocialGroupInnerCircle fill={color} cx="300" cy="300" r="252.5" />
      <SocialGroupIcon
        d="M300 150c-82.8348 0-150 68.8393-150 153.817 0 67.9687 42.991 125.558 102.5893 145.9151 7.5 1.4063 10.2455-3.3482 10.2455-7.433 0-3.683-.134-13.3259-.2009-26.183-41.7187 9.308-50.558-20.625-50.558-20.625-6.8304-17.7456-16.6741-22.5-16.6741-22.5-13.5938-9.576 1.0044-9.375 1.0044-9.375 15.067 1.0714 22.9688 15.8705 22.9688 15.8705 13.3929 23.5045 35.0893 16.741 43.6607 12.7902 1.3393-9.9107 5.2232-16.741 9.509-20.558-33.2813-3.884-68.3036-17.076-68.3036-76.0045 0-16.808 5.8259-30.5357 15.4018-41.25-1.5402-3.884-6.6965-19.5536 1.4732-40.7143 0 0 12.5893-4.1518 41.25 15.7366 11.9866-3.4152 24.7768-5.0893 37.567-5.1562 12.7231.067 25.5803 1.741 37.5669 5.1562 28.6607-19.8884 41.183-15.7366 41.183-15.7366 8.1697 21.1607 3.0134 36.8304 1.4733 40.7143 9.5758 10.7812 15.4017 24.509 15.4017 41.25 0 59.0625-35.0892 72.0536-68.5044 75.8705 5.3571 4.7545 10.1785 14.1295 10.1785 28.4598 0 20.558-.2009 37.1652-.2009 42.1875 0 4.0849 2.6786 8.9063 10.3125 7.3661C407.076 429.308 450 371.7187 450 303.817 450 218.8393 382.8348 150 300 150z"
        fill={theme.colors.background}
        fillRule="nonzero"
      />
    </g>
  );
};

interface SocialIconProps {
  name: 'telegram' | 'github';
  href?: string;
}

const SocialIcon = (props: SocialIconProps): ReactElement => {
  const { name, href } = props;

  const theme = useTheme();

  const [size, color, SocialIconContent] = ((): [number, string, React.FC<{ color: string }>] => {
    switch (name) {
      case 'github':
        return [600, theme.colors.text, GithubSocialIcon];
      case 'telegram':
        return [100, '#139BD0', TelegramSocialIcon];
      default:
        return [0, '#000', () => null];
    }
  })();

  return (
    <SocialLink color={color} href={href} target="_blank" rel="noopener noreferrer">
      <SocialSvg viewBox={`0 0 ${size} ${size}`} xmlns="http://www.w3.org/2000/svg">
        <title>{name}</title>
        <SocialIconContent color={color} />
      </SocialSvg>
    </SocialLink>
  );
};
export default SocialIcon;
