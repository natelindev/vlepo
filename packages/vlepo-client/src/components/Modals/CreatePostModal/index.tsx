import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useFragment } from 'react-relay';
import { useToasts } from 'react-toast-notifications';
import { useMutation } from 'relay-hooks';
import { ConnectionHandler, graphql } from 'relay-runtime';
import { CreatePostModal_image$key } from 'src/__generated__/CreatePostModal_image.graphql';
import {
  createPostInput,
  CreatePostModal_Mutation,
} from 'src/__generated__/CreatePostModal_Mutation.graphql';
import { ImageUpload_MutationResponse } from 'src/__generated__/ImageUpload_Mutation.graphql';
import GradientButton from 'src/components/GradientButton';
import ImageGrid from 'src/components/ImageGrid';
import ImageUpload from 'src/components/ImageUpload';
import { ErrorText, Form, Input, InputGroup, Label, TextArea } from 'src/components/Input';
import { Row } from 'src/components/Layout/style';
import Select from 'src/components/Select';
import { CurrentUserContext } from 'src/pages/_app';

import { defaultIds } from '@vlepo/shared';

import BaseModal, { BaseModalProps } from '../BaseModal';
import { HeaderImage } from './style';

const fragmentSpec = graphql`
  fragment CreatePostModal_image on Image {
    id
    url
    alt
  }
`;

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
  } = useForm<createPostInputType>();

  const [headerImageKey, setHeaderImage] = useState<CreatePostModal_image$key | null>(null);

  const headerImage = useFragment(fragmentSpec, headerImageKey);

  const [images, setImages] = useState<ImageUpload_MutationResponse['uploadImages']>([]);

  const { currentUser } = useContext(CurrentUserContext);

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

  const onImagesUploadSuccess = (uploadedImages: ImageUpload_MutationResponse['uploadImages']) => {
    if (uploadedImages && uploadedImages.length > 0) {
      setImages([...images, ...uploadedImages.filter((i) => i !== null)]);
    }
  };

  const onHeaderImageUploadSuccess = (
    uploadedImages: ImageUpload_MutationResponse['uploadImages'],
  ) => {
    if (uploadedImages && uploadedImages.length > 0) {
      setHeaderImage(uploadedImages[0]);
      setValue('headerImageUrl', headerImage?.url);
    }
  };

  const { ref, ...statusRest } = register('status');

  type ImagesType = typeof images;
  type ImageItemType = ImagesType[number];
  return (
    <BaseModal width={[0.9, 0.5]} open={open} onClose={onModalClose} closeOnOutsideClick={false}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {headerImage && (
          <HeaderImage src={`${headerImage.url}`} layout="responsive" width={2} height={1} />
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
            <ImageUpload onImagesUploadSuccess={onHeaderImageUploadSuccess} />
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
            <ImageUpload multiple onImagesUploadSuccess={onImagesUploadSuccess} />
            {errors.tags && <ErrorText>{errors.tags.message}</ErrorText>}
          </InputGroup>
        </Row>
        {images && (
          <ImageGrid<ReadonlyArray<NonNullable<ImageItemType>>>
            images={images.filter((i): i is NonNullable<ImageItemType> => i !== null)}
          />
        )}
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
