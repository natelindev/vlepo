import BaseModal, { BaseModalProps } from '../BaseModal';

type createPostModalProps = BaseModalProps;
const createPostModal = (props: createPostModalProps) => {
  const { onClose } = props;

  return <BaseModal onClose={onClose} />;
};

export default createPostModal;
