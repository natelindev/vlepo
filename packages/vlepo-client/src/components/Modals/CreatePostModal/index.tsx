import BaseModal, { BaseModalProps } from '../BaseModal';

type CreatePostModalProps = BaseModalProps;
const CreatePostModal = (props: CreatePostModalProps) => {
  const { onClose } = props;

  return <BaseModal onClose={onClose} />;
};

export default CreatePostModal;
