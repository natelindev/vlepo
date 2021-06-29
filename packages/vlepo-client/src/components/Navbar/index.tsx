import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useRef, useState } from 'react';
import { a, useSpring, useSprings } from 'react-spring';
import Dropdown from 'src/components/Dropdown';
import Logo from 'src/components/Logo';
import { useMetaData } from 'src/hooks/useMetaData';
import { useOnClickOutside } from 'src/hooks/useOnClickOutside';
import { ThemeContext } from 'src/pages/_app';
import { shapes } from 'src/shared/shapes';
import { darkTheme, lightTheme } from 'src/shared/theme';

import { css } from '@emotion/react';

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

export const SearchBarContext = React.createContext<
  | { showSearch: boolean; setShowSearch: React.Dispatch<React.SetStateAction<boolean>> }
  | Record<string, never>
>({});

const Navbar: React.FC = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  const [isToggled, setIsToggled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const togglerRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const { title } = useMetaData();

  const { x } = useSpring({ config: { duration: 300 }, x: theme?.name === 'dark' ? 1 : 0 });

  const toggleToggler = () => setIsToggled(!isToggled);
  const closeToggler = () => setIsToggled(false);

  useOnClickOutside(togglerRef, closeToggler);

  const toggleSprings = useSprings(3, [
    {
      transformOrigin: '0% 0%',
      transform: isToggled ? 'rotate(45deg)' : 'rotate(0deg)',
    },
    {
      opacity: isToggled ? '0' : '1',
    },
    {
      transformOrigin: '0% 100%',
      transform: isToggled ? 'rotate(-45deg)' : 'rotate(0deg)',
    },
  ]);

  return (
    <SearchBarContext.Provider value={{ showSearch, setShowSearch }}>
      <BaseNavbar>
        <Dropdown mt="4px" show={isToggled}>
          <NavbarToggler
            ref={togglerRef}
            onClick={toggleToggler}
            display={['block', 'block', 'none']}
          >
            {toggleSprings.map((styles, key) => (
              // eslint-disable-next-line react/no-array-index-key
              <TogglerBar key={key} style={styles} />
            ))}
          </NavbarToggler>
          <NavLink href="/posts">Posts</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/papers">Papers</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/thoughts">Thoughts</NavLink>
          <NavLink href="/friends">Friends</NavLink>
          <NavLink href="/tags">Tags</NavLink>
        </Dropdown>
        <Logo
          size="32px"
          onClick={() => router.push('/')}
          css={css`
            cursor: pointer;
          `}
          ml={['0', '0', '0.5rem']}
          mr="0.5rem"
          my="auto"
        />
        <Link href="/" passHref>
          <NavBrand
            display={[showSearch ? 'none' : 'inline-block', 'inline-block']}
            href="/"
            mr="auto"
          >
            {title ?? process.env.NEXT_PUBLIC_DEFAULT_BLOG_NAME}
          </NavBrand>
        </Link>
        <LeftNavCollapse display={['none', 'none', 'block']}>
          <NavbarNav>
            <NavLink href="/posts">Posts</NavLink>
            <NavLink href="/projects">Projects</NavLink>
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
                    output: [shapes.lightMode, shapes.darkMode],
                  })}
                />
              </svg>
            </NavItem>
            <UserSection setShowLoginModal={setShowLoginModal} />
          </NavbarNav>
        </RightNavCollapse>
        <LoginModal open={showLoginModal} onClose={() => setShowLoginModal(false)} />
      </BaseNavbar>
    </SearchBarContext.Provider>
  );
};

export default Navbar;
