import { DefaultToast } from 'react-toast-notifications';

import styled from '@emotion/styled';

export const Toast = styled(DefaultToast)`
  .react-toast-notifications__toast__icon-wrapper {
    display: none;
  }
  .react-toast-notifications__toast__content {
    line-height: 1.5;
    padding: 10px 20px;
  }
`;
