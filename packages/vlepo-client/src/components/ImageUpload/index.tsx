import { ChangeEvent, useRef } from 'react';
import { graphql } from 'react-relay';
import { useToasts } from 'react-toast-notifications';
import { useMutation } from 'relay-hooks';
import { ImageUpload_Mutation } from 'src/__generated__/ImageUpload_Mutation.graphql';
import GradientButton from 'src/components/GradientButton';

import { FileInput } from './style';

type UploadProps = {
  multiple?: boolean;
  accept?: string;
  onImageUploadSuccess?: (image: UploadImageResponseType) => void;
};

export type UploadImageResponseType = {
  readonly id: string | null;
  readonly url: string;
  readonly alt: string | null;
};

const ImageUpload = (props: UploadProps) => {
  const { onImageUploadSuccess, multiple, accept = '.png, .jpg, .jpeg, .gif, .svg' } = props;
  const { addToast } = useToasts();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [mutate, { loading }] = useMutation<ImageUpload_Mutation>(
    graphql`
      mutation ImageUpload_Mutation($file: Upload) {
        uploadImage(file: $file) {
          id
          url
          alt
        }
      }
    `,
    {
      onCompleted: (response) => {
        addToast(`upload image succeed`, {
          appearance: 'success',
        });
        onImageUploadSuccess?.(response.uploadImage!);
      },
      onError: (error) => {
        addToast(`upload image failed, ${error}`, {
          appearance: 'error',
        });
      },
    },
  );

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget?.files?.[0];
    if (file) {
      mutate({
        variables: {
          file,
        },
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
        Upload{loading ? `ing...` : ''}
      </GradientButton>
    </>
  );
};

export default ImageUpload;
