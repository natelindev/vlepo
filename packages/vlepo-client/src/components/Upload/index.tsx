import { ChangeEvent, useRef, useState } from 'react';
import { graphql } from 'react-relay';
import { useToasts } from 'react-toast-notifications';
import { useMutation } from 'relay-hooks';
import { Upload_Mutation } from 'src/__generated__/Upload_Mutation.graphql';
import GradientButton from 'src/components/GradientButton';

import { H5 } from '../Typography';
import { FileInput } from './style';

const Upload = () => {
  const { addToast } = useToasts();
  const [urls, setUrls] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [mutate, { loading }] = useMutation<Upload_Mutation>(
    graphql`
      mutation Upload_Mutation($file: Upload) {
        uploadImage(file: $file) {
          id
          url
        }
      }
    `,
    {
      onCompleted: (response) => {
        addToast(`upload image succeed`, {
          appearance: 'success',
        });
        setUrls(
          `${urls ? `${urls},${response.uploadImage?.url}` : `${response.uploadImage?.url}`}`,
        );
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
      <H5>{urls}</H5>
      <FileInput
        ref={fileInputRef}
        type="file"
        id="file"
        accept=".png, .jpg, .jpeg, .gif, .svg"
        onChange={onFileChange}
      />
      <GradientButton type="button" onClick={selectImage}>
        Upload
      </GradientButton>
    </>
  );
};

export default Upload;
