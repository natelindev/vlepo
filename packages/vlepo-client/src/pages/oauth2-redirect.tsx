import React, { useEffect, useState } from 'react';

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
  const [message, setMessage] = useState<string | null>();
  useEffect(() => {
    setTimeout(() => {
      window.opener?.location.reload();
      window.close();
    }, 1000);
    const params = new URLSearchParams(window.location.search);
    const error = params.get('error');
    const success = params.get('success');
    if (success) {
      setMessage('Login success');
    } else {
      setMessage(`Login failed ${error}`);
    }
  }, []);
  return (
    <Container>
      {message && (
        <LoginSuccessMessage>{message},this page will close in 1 second</LoginSuccessMessage>
      )}
    </Container>
  );
};

export default Oauth2Redirect;
