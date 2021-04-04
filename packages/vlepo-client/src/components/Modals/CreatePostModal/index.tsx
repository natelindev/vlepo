import { useForm } from 'react-hook-form';
import { useToasts } from 'react-toast-notifications';
import { useMutation } from 'relay-hooks';
import { graphql } from 'relay-runtime';
import {
  createPostInput as createPostInputType,
  CreatePostModal_Mutation,
  CreatePostModal_MutationResponse,
} from 'src/__generated__/CreatePostModal_Mutation.graphql';

import BaseModal, { BaseModalProps } from '../BaseModal';
import { CreatePostForm } from './style';

type CreatePostModalProps = BaseModalProps;
const CreatePostModal = (props: CreatePostModalProps) => {
  const { open, onClose } = props;
  const { addToast } = useToasts();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<createPostInputType>();

  const onSubmit = (data: createPostInputType) =>
    mutate({
      variables: {
        input: data,
      },
    });

  const [mutate, { loading }] = useMutation<CreatePostModal_Mutation>(
    graphql`
      mutation CreatePostModal_Mutation($input: createPostInput!) {
        creatPostMutation(createPostInput: $input) {
          ok
          error
        }
      }
    `,
    {
      onCompleted: ({ creatPostMutation }: CreatePostModal_MutationResponse) => {
        if (creatPostMutation?.ok) {
          addToast(`create post succeed`, {
            appearance: 'success',
          });
          onClose?.();
        } else if (creatPostMutation?.error) {
          addToast(`create post failed, ${creatPostMutation?.error}`, {
            appearance: 'error',
          });
          onClose?.();
        }
        reset();
      },
      onError: (error) => {
        addToast(`Login failed, ${error}`, {
          appearance: 'error',
        });
        onClose?.();
        reset();
      },
    },
  );

  return (
    <BaseModal open={open} onClose={onClose} closeOnOutsideClick={false}>
      <CreatePostForm />
    </BaseModal>
  );
};

export default CreatePostModal;
