import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useFragment } from 'react-relay';
import { useToasts } from 'react-toast-notifications';
import { useMutation } from 'relay-hooks';
import { ConnectionHandler, graphql } from 'relay-runtime';
import { CreatePostModal_headerImage$key } from 'src/__generated__/CreatePostModal_headerImage.graphql';
import { CreatePostModal_images$key } from 'src/__generated__/CreatePostModal_images.graphql';
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
import Loading from 'src/components/Loading';
import Select from 'src/components/Select';
import { useCurrentUser } from 'src/hooks/useCurrentUser';

import { Check } from '@emotion-icons/material-outlined';

import BaseModal, { BaseModalProps } from '../BaseModal';
import { HeaderImage } from './style';

const headerImageFragment = graphql`
  fragment CreatePostModal_headerImage on Image {
    id
    url
  }
`;

const imagesFragment = graphql`
  fragment CreatePostModal_images on Image @relay(plural: true) {
    id
    url
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

  const [headerImageKey, setHeaderImage] = useState<CreatePostModal_headerImage$key | null>(null);

  const headerImage = useFragment(headerImageFragment, headerImageKey);

  const [images, setImages] = useState<ImageUpload_MutationResponse['uploadImages']>([]);

  const inputImages = useFragment<CreatePostModal_images$key>(
    imagesFragment,
    images as CreatePostModal_images$key,
  );

  const currentUser = useCurrentUser();

  const dashboard_postConnectionId = ConnectionHandler.getConnectionID(
    currentUser!.id as string,
    'Entity_postsConnection',
  );

  const index_postConnectionId = ConnectionHandler.getConnectionID(
    process.env.NEXT_PUBLIC_DEFAULT_BLOG_ID,
    'Index_postsConnection',
  );

  const onSubmit = (data: createPostInputType) => {
    const { tags, ...rest } = data;
    mutate({
      variables: {
        connections: [dashboard_postConnectionId, index_postConnectionId],
        input: {
          ...rest,
          images: inputImages.map((i) => ({ url: i.url })),
          tags: tags && tags.length > 0 ? tags.split(',').map((t) => ({ name: t.trim() })) : [],
        },
      },
    });
  };

  const onModalClose = () => {
    onClose?.();
    reset();
    setHeaderImage(null);
    setImages([]);
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
    }
  };

  useEffect(() => setValue('headerImageUrl', headerImage?.url), [setValue, headerImage]);

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
              options={['PUBLISHED', 'PRIVATE', 'DRAFT'].map((v) => ({ key: v, value: v }))}
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
          {loading ? <Loading size={24} /> : <Check size={24} />}
        </GradientButton>
      </Form>
    </BaseModal>
  );
};

export default CreatePostModal;
