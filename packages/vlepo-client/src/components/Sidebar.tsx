import React from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { OAuthConsts } from '@vlepo/shared';

type SidebarProps = {
  expand?: boolean;
  width?: string;
  className?: string;
};

const BaseSidebar = styled.div<SidebarProps>`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 11.5rem);

  overflow: scroll;
  width: ${(props) => (props.expand ? props.width : '1rem')};
`;

const SidebarGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const SidebarHeader = styled.h2`
  display: flex;
  padding: 0;
  margin: 0;
`;

const SidebarItem = styled.div`
  display: flex;
  border-radius: 0.4rem;
  margin-left: 0.4rem;
  padding-left: 0.75rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-right: 0.75rem;
  transition: 0.1s background-color ease-in;
  &:hover {
    background-color: #f2f2f2;
  }
`;

const Sidebar = (props: SidebarProps): React.ReactElement => {
  const { width = '14rem', expand = true, className } = props;
  return (
    <BaseSidebar width={width} expand={expand} className={className}>
      <SidebarItem
        css={css`
          margin-top: 0.5rem;
        `}
      >
        <SidebarHeader>Dashboard</SidebarHeader>
      </SidebarItem>

      <SidebarGroup>
        {OAuthConsts.entities.map((e) => (
          <SidebarItem key={e}>
            {e.charAt(0).toUpperCase()}
            {e.slice(1)}
          </SidebarItem>
        ))}
      </SidebarGroup>
    </BaseSidebar>
  );
};

export default Sidebar;
