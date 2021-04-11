import { useForm } from 'react-hook-form';
import { useToasts } from 'react-toast-notifications';
import { useRecoilValue } from 'recoil';
import { useMutation } from 'relay-hooks';
import { ConnectionHandler, graphql } from 'relay-runtime';
import {
  createPostInput,
  CreatePostModal_Mutation,
} from 'src/__generated__/CreatePostModal_Mutation.graphql';
import { currentUserState } from 'src/atoms/user';
import GradientButton from 'src/components/GradientButton';
import { ErrorText, Form, Input, InputGroup, Label, TextArea } from 'src/components/Input';
import { Row } from 'src/components/Layout/style';
import Select from 'src/components/Select';
import Upload from 'src/components/Upload';

import { defaultIds } from '@vlepo/shared';

import BaseModal, { BaseModalProps } from '../BaseModal';

type CreatePostModalProps = BaseModalProps;
const CreatePostModal = (props: CreatePostModalProps) => {
  const { open, onClose } = props;
  const { addToast } = useToasts();
  type createPostInputType = Omit<createPostInput, 'tags' | 'images'> & {
    tags?: string;
    images?: string;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<createPostInputType>();

  const currentUser = useRecoilValue(currentUserState);

  const dashboard_postConnectionId = ConnectionHandler.getConnectionID(
    currentUser!.id,
    'Entity_postsConnection',
  );

  const index_postConnectionId = ConnectionHandler.getConnectionID(
    defaultIds.blog,
    'Index_postsConnection',
  );

  const onSubmit = (data: createPostInputType) => {
    const { tags, images, ...rest } = data;
    mutate({
      variables: {
        connections: [dashboard_postConnectionId, index_postConnectionId],
        input: {
          ...rest,
          images: images?.split(',').map((i) => ({ url: i })),
          tags: tags?.split(',').map((t) => ({ name: t })),
        },
      },
    });
  };

  const onModalClose = () => {
    onClose?.();
    reset();
  };

  const [mutate, { loading }] = useMutation<CreatePostModal_Mutation>(
    graphql`
      mutation CreatePostModal_Mutation($connections: [ID!]!, $input: createPostInput!) {
        creatPostMutation(createPostInput: $input) {
          createPostEdge @prependEdge(connections: $connections) {
            cursor
            node {
              id
              ...PostCard_post
              ...ArticleCard_post
            }
          }
        }
      }
    `,
    {
      onCompleted: () => {
        addToast(`create post succeed`, {
          appearance: 'success',
        });
        onModalClose();
      },
      onError: (error) => {
        addToast(`create post failed, ${error}`, {
          appearance: 'error',
        });
        onModalClose();
      },
    },
  );

  return (
    <BaseModal width={[0.9, 0.5]} open={open} onClose={onModalClose} closeOnOutsideClick={false}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <Label>Title</Label>
          <Input autoComplete="title" {...register('title')} />
          {errors.title && <ErrorText>{errors.title.message}</ErrorText>}
        </InputGroup>
        <Row justifyContent="space-between">
          <InputGroup>
            <Label>Status</Label>
            <Select
              {...register('status')}
              options={['DRAFT', 'PUBLISHED', 'PRIVATE'].map((v) => ({ key: v, value: v }))}
            />
            {errors.status && <ErrorText>{errors.status.message}</ErrorText>}
          </InputGroup>
          <InputGroup mx="1rem">
            <Label>Header Image</Label>
            <Upload />
            <Input autoComplete="headerImageUrl" {...register('headerImageUrl')} />
            {errors.headerImageUrl && <ErrorText>{errors.headerImageUrl.message}</ErrorText>}
          </InputGroup>
          <InputGroup>
            <Label>Tags</Label>
            <Input autoComplete="tags" {...register('tags')} />
            {errors.tags && <ErrorText>{errors.tags.message}</ErrorText>}
          </InputGroup>
        </Row>
        <InputGroup>
          <Label>Content</Label>
          <TextArea height="20rem" autoComplete="content" {...register('content')} />
          {errors.content && <ErrorText>{errors.content.message}</ErrorText>}
        </InputGroup>
        <GradientButton my="0.5rem" type="submit">
          {loading ? 'Create...' : 'Create'}
        </GradientButton>
      </Form>
    </BaseModal>
  );
};

export default CreatePostModal;
