import React, { useEffect } from 'react';

import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
const LoginSuccessMessage = styled.h1`
  margin: auto;
`;
const Oauth2Redirect = () => {
  useEffect(() => {
    setTimeout(() => {
      window.opener?.location.reload();
      window.close();
    }, 1000);
  }, []);
  return (
    <Container>
      <LoginSuccessMessage>Login success, this page will close in 1 second</LoginSuccessMessage>
    </Container>
  );
};

export default Oauth2Redirect;
