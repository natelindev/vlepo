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
import ImageUpload, { UploadImageResponseType } from 'src/components/ImageUpload';
import { ErrorText, Form, Input, InputGroup, Label, TextArea } from 'src/components/Input';
import { Row } from 'src/components/Layout/style';
import Select from 'src/components/Select';

import { defaultIds } from '@vlepo/shared';

import BaseModal, { BaseModalProps } from '../BaseModal';
import { HeaderImage } from './style';

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
    setValue,
    watch,
  } = useForm<createPostInputType>();

  const headerImageUrl = watch('headerImageUrl');

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
          images: images && images.length > 0 ? images.split(',').map((i) => ({ url: i })) : [],
          tags: tags && tags.length > 0 ? tags.split(',').map((t) => ({ name: t })) : [],
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

  const onImageUploadSuccess = (uploadedImage: UploadImageResponseType) => {
    if (navigator && navigator.clipboard && uploadedImage) {
      navigator.clipboard.writeText(`![${uploadedImage.alt}](${uploadedImage.url})`);
    }
  };

  const onHeaderImageUploadSuccess = (uploadedImage: UploadImageResponseType) => {
    setValue('headerImageUrl', uploadedImage.url);
  };

  const { ref, ...statusRest } = register('status');
  return (
    <BaseModal width={[0.9, 0.5]} open={open} onClose={onModalClose} closeOnOutsideClick={false}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {headerImageUrl && (
          <HeaderImage src={`${headerImageUrl}`} layout="responsive" width={2} height={1} />
        )}
        <InputGroup>
          <Label>Title</Label>
          <Input autoComplete="title" {...register('title')} />
          {errors.title && <ErrorText>{errors.title.message}</ErrorText>}
        </InputGroup>
        <Row justifyContent="space-between">
          <InputGroup>
            <Label>Status</Label>
            <Select
              {...statusRest}
              innerRef={ref}
              options={['DRAFT', 'PUBLISHED', 'PRIVATE'].map((v) => ({ key: v, value: v }))}
            />
            {errors.status && <ErrorText>{errors.status.message}</ErrorText>}
          </InputGroup>
          <InputGroup mx="1rem">
            <Label>Header Image</Label>
            <ImageUpload onImageUploadSuccess={onHeaderImageUploadSuccess} />
            <Input type="hidden" autoComplete="headerImageUrl" {...register('headerImageUrl')} />
            {errors.headerImageUrl && <ErrorText>{errors.headerImageUrl.message}</ErrorText>}
          </InputGroup>
          <InputGroup>
            <Label>Tags</Label>
            <Input autoComplete="tags" {...register('tags')} />
            {errors.tags && <ErrorText>{errors.tags.message}</ErrorText>}
          </InputGroup>
        </Row>
        <Row>
          <InputGroup>
            <Label>Images</Label>
            <ImageUpload multiple onImageUploadSuccess={onImageUploadSuccess} />
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
