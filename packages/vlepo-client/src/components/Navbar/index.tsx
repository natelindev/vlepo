import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { a, useSpring, useSprings } from 'react-spring';
import Dropdown from 'src/components/Dropdown';
import Logo from 'src/components/Logo';
import { ThemeContext } from 'src/pages/_app';
import { darkTheme, lightTheme } from 'src/shared/theme';

import ClientOnly from '../ClientOnly';
import LoginModal from '../Modals/LoginModal';
import NavLink from '../NavLink';
import UserSection from '../UserSection';
import {
  BaseNavbar,
  LeftNavCollapse,
  NavbarNav,
  NavbarToggler,
  NavBrand,
  NavItem,
  NavSearchBar,
  RightNavCollapse,
  TogglerBar,
} from './style';

const Navbar: React.FC = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  const [isToggled, setIsToggled] = useState(false);
  const { x } = useSpring({ config: { duration: 300 }, x: theme?.name === 'dark' ? 1 : 0 });

  const toggleSprings = useSprings(3, [
    {
      transformOrigin: '10% 10%',
      transform: isToggled ? 'rotate(45deg)' : 'rotate(0deg)',
    },
    {
      opacity: isToggled ? '0' : '1',
    },
    {
      transformOrigin: '10% 90%',
      transform: isToggled ? 'rotate(-45deg)' : 'rotate(0deg)',
    },
  ]);

  return (
    <BaseNavbar>
      <NavbarToggler onClick={() => setIsToggled(!isToggled)} display={['block', 'none']}>
        {toggleSprings.map((styles, key) => (
          // eslint-disable-next-line react/no-array-index-key
          <TogglerBar key={key} style={styles} />
        ))}
      </NavbarToggler>
      <Logo display={['none', 'inline-block']} size="32px" ml="1rem" mr="0.5rem" my="auto" />
      <Link href="/" passHref>
        <NavBrand display={['none', 'inline-block']} href="/" mr="auto">
          Nathaniel&#39;s Blog
        </NavBrand>
      </Link>
      <LeftNavCollapse display={['none', 'none', 'block']}>
        <NavbarNav>
          <NavLink href="/portfolio">Portfolio</NavLink>
          <NavLink href="/papers">Papers</NavLink>
          <NavLink href="/about">About</NavLink>
          <Dropdown mt="4px">
            <NavLink href="">More</NavLink>
            <NavLink href="/thoughts">
              <NavItem>Thoughts</NavItem>
            </NavLink>
            <NavLink href="/friends">
              <NavItem>Friends</NavItem>
            </NavLink>
            <NavLink href="/tags">
              <NavItem>Tags</NavItem>
            </NavLink>
          </Dropdown>
        </NavbarNav>
      </LeftNavCollapse>
      <RightNavCollapse>
        <NavbarNav>
          <NavSearchBar />
          <NavItem
            width="1.5rem"
            mt="7px"
            mx="1.2rem"
            onClick={() => setTheme?.(theme.name === 'dark' ? lightTheme : darkTheme)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill={theme.colors.text}
            >
              <a.path
                d={x.to({
                  range: [0, 1],
                  output: [
                    'M 9.1 7.5 C 9.1 11.58 12.42 14.9 16.5 14.9 C 17.18 14.9 17.85 14.81 18.49 14.63 C 17.45 17.19 14.93 19 12 19 C 8.14 19 5 15.86 5 12 C 5 9.07 6.81 6.55 9.37 5.51 C 9.37 5.51 9.37 5.51 9.37 5.51 C 9.19 6.15 9.1 6.82 9.1 7.5 M 12 3 L 12 3 L 12 3 C 12.46 3 12.92 3.04 13.36 3.1 C 11.99 4.08 11.1 5.69 11.1 7.5 C 11.1 8.493 11.369 9.424 11.838 10.224 C 12.307 11.024 12.976 11.693 13.776 12.162 C 14.576 12.631 15.507 12.9 16.5 12.9 C 18.32 12.9 19.92 12.01 20.9 10.64 C 20.96 11.08 21 11.54 21 12 C 21 16.97 16.97 21 12 21 C 7.03 21 3 16.97 3 12 C 3 7.03 7.03 3 12 3 M 3 12 L 3 12 C 3 12 3 12 3 12 C 3 12 3 12 3 12 L 3 12 C 3 12 3 12 3 12 C 3 12 3 12 3 12 L 3 12 M 21 12 L 21 12 C 21 12 21 12 21 12 C 21 12 21 12 21 12 L 21 12 C 21 12 21 12 21 12 C 21 12 21 12 21 12 L 21 12 M 12 3 L 12 3 C 12 3 12 3 12 3 C 12 3 12 3 12 3 L 12 3 C 12 3 12 3 12 3 C 12 3 12 3 12 3 L 12 3 M 12 21 L 12 21 C 12 21 12 21 12 21 C 12 21 12 21 12 21 L 12 21 C 12 21 12 21 12 21 C 12 21 12 21 12 21 L 12 21 M 5.815 5.815 L 5.815 5.815 L 5.815 5.815 C 5.815 5.815 5.815 5.815 5.815 5.815 C 5.815 5.815 5.815 5.815 5.815 5.815 L 5.815 5.815 C 5.815 5.815 5.815 5.815 5.815 5.815 C 5.815 5.815 5.815 5.815 5.815 5.815 M 18.185 18.185 L 18.185 18.185 L 18.185 18.185 C 18.185 18.185 18.185 18.185 18.185 18.185 C 18.185 18.185 18.185 18.185 18.185 18.185 L 18.185 18.185 C 18.185 18.185 18.185 18.185 18.185 18.185 C 18.185 18.185 18.185 18.185 18.185 18.185 M 18.185 5.815 L 18.185 5.815 L 18.185 5.815 C 18.185 5.815 18.185 5.815 18.185 5.815 C 18.185 5.815 18.185 5.815 18.185 5.815 L 18.185 5.815 C 18.185 5.815 18.185 5.815 18.185 5.815 C 18.185 5.815 18.185 5.815 18.185 5.815 M 5.815 18.185 L 5.815 18.185 L 5.815 18.185 C 5.815 18.185 5.815 18.185 5.815 18.185 C 5.815 18.185 5.815 18.185 5.815 18.185 L 5.815 18.185 C 5.815 18.185 5.815 18.185 5.815 18.185 C 5.815 18.185 5.815 18.185 5.815 18.185',
                    'M 12 9 C 13.65 9 15 10.35 15 12 C 15 12.825 14.662 13.575 14.119 14.119 C 13.575 14.662 12.825 15 12 15 C 10.35 15 9 13.65 9 12 C 9 11.45 9.15 10.933 9.411 10.489 C 9.672 10.044 10.044 9.672 10.489 9.411 C 10.933 9.15 11.45 9 12 9 M 12 7 L 12 7 L 12 7 C 12 7 12 7 12 7 C 12.46 7 12.906 7.062 13.329 7.179 C 13.752 7.295 14.153 7.466 14.523 7.683 C 14.893 7.9 15.233 8.163 15.535 8.465 C 15.837 8.767 16.1 9.107 16.317 9.477 C 16.534 9.847 16.705 10.248 16.821 10.671 C 16.938 11.094 17 11.54 17 12 C 17 14.76 14.76 17 12 17 C 9.24 17 7 14.76 7 12 C 7 9.24 9.24 7 12 7 M 2 13 L 2 13 C 1.45 13 1 12.55 1 12 C 1 11.45 1.45 11 2 11 L 4 11 C 4.55 11 5 11.45 5 12 C 5 12.55 4.55 13 4 13 L 2 13 M 20 13 L 20 13 C 19.45 13 19 12.55 19 12 C 19 11.45 19.45 11 20 11 L 22 11 C 22.55 11 23 11.45 23 12 C 23 12.55 22.55 13 22 13 L 20 13 M 11 2 L 11 2 C 11 1.45 11.45 1 12 1 C 12.55 1 13 1.45 13 2 L 13 4 C 13 4.55 12.55 5 12 5 C 11.45 5 11 4.55 11 4 L 11 2 M 11 20 L 11 20 C 11 19.45 11.45 19 12 19 C 12.55 19 13 19.45 13 20 L 13 22 C 13 22.55 12.55 23 12 23 C 11.45 23 11 22.55 11 22 L 11 20 M 5.99 4.58 L 5.99 4.58 L 7.05 5.64 C 7.44 6.02 7.43 6.66 7.05 7.05 C 6.67 7.44 6.03 7.44 5.64 7.05 L 4.58 5.99 C 4.19 5.61 4.19 4.97 4.58 4.58 C 4.96 4.19 5.6 4.19 5.99 4.58 M 18.36 16.95 L 18.36 16.95 L 19.42 18.01 C 19.81 18.39 19.81 19.03 19.42 19.42 C 19.04 19.81 18.4 19.81 18.01 19.42 L 16.95 18.36 C 16.56 17.98 16.56 17.34 16.95 16.95 C 17.33 16.56 17.97 16.56 18.36 16.95 M 19.42 5.99 L 19.42 5.99 L 18.36 7.05 C 17.98 7.44 17.34 7.43 16.95 7.05 C 16.56 6.67 16.56 6.03 16.95 5.64 L 18.01 4.58 C 18.39 4.19 19.03 4.19 19.42 4.58 C 19.81 4.96 19.81 5.6 19.42 5.99 M 7.05 18.36 L 7.05 18.36 L 5.99 19.42 C 5.61 19.81 4.97 19.8 4.58 19.42 C 4.19 19.04 4.19 18.4 4.58 18.01 L 5.64 16.95 C 6.02 16.56 6.66 16.56 7.05 16.95 C 7.44 17.33 7.44 17.97 7.05 18.36',
                  ],
                })}
              />
            </svg>
          </NavItem>
          <ClientOnly>
            <UserSection setShowLoginModal={setShowLoginModal} />
          </ClientOnly>
        </NavbarNav>
      </RightNavCollapse>
      <LoginModal open={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </BaseNavbar>
  );
};

export default Navbar;
