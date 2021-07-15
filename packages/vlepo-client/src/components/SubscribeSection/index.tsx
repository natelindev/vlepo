import { useForm } from 'react-hook-form';
import { useToasts } from 'react-toast-notifications';
import { useMutation } from 'relay-hooks';
import { graphql } from 'relay-runtime';
import {
  SubscribeSectionMutation,
  SubscribeSectionMutationVariables,
} from 'src/__generated__/SubscribeSectionMutation.graphql';
import { ErrorText, Form, Input, InputGroup, Label, TextArea } from 'src/components/Input';

import GradientButton from '../GradientButton';
import { Row } from '../Layout/style';
import Loading from '../Loading';
import { H2, H4 } from '../Typography';
import { BaseSubscribeSection } from './style';

export const subscribeMutation = graphql`
  mutation SubscribeSectionMutation($firstName: String!, $email: String!, $blogId: String!) {
    subscribe(firstName: $firstName, email: $email, blogId: $blogId)
  }
`;

const SubscribeSection = () => {
  const { addToast } = useToasts();
  const [mutate, { loading }] = useMutation<SubscribeSectionMutation>(subscribeMutation, {
    onCompleted: (response) => {
      if (response.subscribe) {
        addToast(`you are now successfully subscribed`, {
          appearance: 'success',
        });
      } else {
        addToast(`you have already subscribed`, {
          appearance: 'info',
        });
      }
    },
    onError: (err) => {
      addToast(`subscribe failed, error: ${err.message}`, {
        appearance: 'error',
      });
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Omit<SubscribeSectionMutationVariables, 'blogId'>>();

  const onSubmit = (data: Omit<SubscribeSectionMutationVariables, 'blogId'>) => {
    const { firstName, email } = data;
    mutate({
      variables: {
        firstName,
        email,
        blogId: process.env.NEXT_PUBLIC_DEFAULT_BLOG_ID,
      },
    });
    reset();
  };

  return (
    <BaseSubscribeSection mx="auto" mb="5rem" p="4rem" width={[0.9, 0.8, 0.7, 0.6]}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <H2 mb="1rem">Get latest lab news!</H2>
        <H4 my="1rem">Get my latest post every week. No spam, unsubscribe at any time.</H4>
        <Row>
          <InputGroup mr="1rem">
            <Label>First Name</Label>
            <Input autoComplete="first name" {...register('firstName', { required: true })} />
            {errors.firstName && <ErrorText>{errors.firstName.message}</ErrorText>}
          </InputGroup>

          <InputGroup mr="1rem">
            <Label>Email</Label>
            <Input
              autoComplete="email"
              {...register('email', { pattern: /^.+@.+$/, required: true })}
            />
            {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
          </InputGroup>
          <GradientButton px="1rem" py="0.5rem" mt="auto" mb="0.5rem" type="submit">
            {loading ? <Loading size={24} /> : 'Subscribe'}
          </GradientButton>
        </Row>
      </Form>
    </BaseSubscribeSection>
  );
};

export default SubscribeSection;
