import { useEffect, useState } from 'react';

import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
const LoginSuccessMessage = styled.h1`
  margin: auto;
  margin-left: 2rem;
  margin-right: 2rem;
`;

const Oauth2Redirect = () => {
  const [message, setMessage] = useState<string | null>();
  const [closeTime, setCloseTime] = useState(1);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const error = params.get('error');
    const success = params.get('success');
    if (success) {
      setMessage('Login success');
      setCloseTime(1);
    } else {
      setMessage(`Login failed ${error}`);
      setCloseTime(3);
    }
    setTimeout(
      () => {
        window.opener?.location.reload();
        window.close();
      },
      success ? 1000 : 3000,
    );
  }, []);
  return (
    <Container>
      {message && (
        <LoginSuccessMessage>
          {message},this page will close in {closeTime} second
        </LoginSuccessMessage>
      )}
    </Container>
  );
};

export default Oauth2Redirect;
