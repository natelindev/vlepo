import { ChangeEvent, useRef } from 'react';
import { graphql } from 'react-relay';
import { useToasts } from 'react-toast-notifications';
import { useMutation } from 'relay-hooks';
import {
  ImageUpload_Mutation,
  ImageUpload_MutationResponse,
} from 'src/__generated__/ImageUpload_Mutation.graphql';
import GradientButton from 'src/components/GradientButton';

import { Upload } from '@emotion-icons/material-outlined';

import Loading from '../Loading';
import { FileInput } from './style';

type UploadProps = {
  multiple?: boolean;
  accept?: string;
  onImagesUploadSuccess?: (image: ImageUpload_MutationResponse['uploadImages']) => void;
};

const ImageUpload = (props: UploadProps) => {
  const { onImagesUploadSuccess, multiple, accept = '.png, .jpg, .jpeg, .gif, .svg' } = props;
  const { addToast } = useToasts();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [mutate, { loading }] = useMutation<ImageUpload_Mutation>(
    graphql`
      mutation ImageUpload_Mutation($files: [Upload!]!) {
        uploadImages(files: $files) {
          ...ImageCell_image
          ...CreatePostModal_headerImage
          ...CreatePostModal_images
        }
      }
    `,
    {
      onCompleted: (response) => {
        addToast(`upload image succeed`, {
          appearance: 'success',
        });
        onImagesUploadSuccess?.(response.uploadImages!);
      },
      onError: (error) => {
        addToast(`upload image failed, ${error}`, {
          appearance: 'error',
        });
      },
    },
  );

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget?.files;
    if (files && files.length > 0 && files.length <= 5) {
      mutate({
        variables: {
          files: Array.from(files),
        },
      });
    } else if (files && files.length > 5) {
      addToast(`cannot upload more than 5 files at once`, {
        appearance: 'error',
      });
    }
  };

  const selectImage = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <FileInput
        ref={fileInputRef}
        type="file"
        multiple={multiple}
        accept={accept}
        onChange={onFileChange}
      />
      <GradientButton type="button" onClick={selectImage}>
        {loading ? <Loading size={24} /> : <Upload size={24} />}
      </GradientButton>
    </>
  );
};

export default ImageUpload;
