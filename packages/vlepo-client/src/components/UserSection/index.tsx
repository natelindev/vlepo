import { useRouter } from 'next/router';
import React from 'react';
import { graphql } from 'react-relay';
import { UserSection_user$key } from 'src/__generated__/UserSection_user.graphql';
import Dropdown from 'src/components/Dropdown';
import { NavItem } from 'src/components/Navbar/style';
import NavLink from 'src/components/NavLink';
import { deleteCookie } from 'src/hooks/useCookie';
import { useCurrentUser } from 'src/hooks/useCurrentUser';

import { Dashboard, Logout, Settings } from '@emotion-icons/material-outlined';

import { GreyText, LoginButton, NavbarAvatar } from './style';

type UserSectionProps = {
  setShowLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const currentUserFragment = graphql`
  fragment UserSection_user on User {
    id
    name
    profileImageUrl
    roles {
      value
    }
  }
`;

const UserSection = (props: UserSectionProps) => {
  const currentUser = useCurrentUser<UserSection_user$key>(currentUserFragment);
  const { setShowLoginModal } = props;
  const router = useRouter();

  return (
    <>
      {currentUser ? (
        <Dropdown variant="right" mt="12px">
          <NavbarAvatar size={32} src={currentUser.profileImageUrl} />
          <NavLink
            active={router.pathname.split('/').slice(-1)[0] === 'profile'}
            href={`/user/${currentUser.id}/profile`}
          >
            <NavItem>
              {currentUser.name}
              <GreyText>{currentUser.roles.map((r) => r.value).join(',')}</GreyText>
            </NavItem>
          </NavLink>
          <NavLink
            active={router.pathname.split('/').slice(-1)[0] === 'settings'}
            href={`/user/${currentUser.id}/settings`}
          >
            <NavItem>
              <Settings size={24} /> Settings
            </NavItem>
          </NavLink>
          {currentUser.roles.map((r) => r.value).includes('admin') && (
            <NavLink active={router.pathname.split('/')[1] === 'dashboard'} href="/dashboard/blog">
              <NavItem>
                <Dashboard size={24} /> Dashboard
              </NavItem>
            </NavLink>
          )}
          <NavLink
            onClick={() => {
              deleteCookie('accessToken');
              deleteCookie('accessToken.sig');
              setTimeout(() => router.reload(), 1000);
            }}
          >
            <NavItem>
              <Logout size={24} /> Logout
            </NavItem>
          </NavLink>
        </Dropdown>
      ) : (
        <LoginButton onClick={() => setShowLoginModal(true)} size={28} />
      )}
    </>
  );
};

export default UserSection;
