import React from 'react';
import Modal from 'styled-modal';

type LoginModalProps = {
  open: boolean;
  onClose: () => void;
};

const LoginModal = (props: LoginModalProps): React.ReactElement => (
  <Modal {...props}>
    <p>Test modal</p>
  </Modal>
);

export default LoginModal;
