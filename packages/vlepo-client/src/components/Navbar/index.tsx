import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { a, useSpring, useSprings } from 'react-spring';
import Dropdown from 'src/components/Dropdown';
import Logo from 'src/components/Logo';
import { ThemeContext } from 'src/pages/_app';
import { shapes } from 'src/shared/shapes';
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
                  output: [shapes.darkMode, shapes.lightMode],
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
