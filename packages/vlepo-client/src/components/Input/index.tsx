import TextareaAutosize from 'react-textarea-autosize';
import {
  height,
  HeightProps,
  margin,
  MarginProps,
  maxWidth,
  MaxWidthProps,
  width,
  WidthProps,
} from 'styled-system';

import styled from '@emotion/styled';

export const TextArea = styled(TextareaAutosize)<WidthProps & MarginProps & HeightProps>`
  display: block;
  width: 100%;
  min-height: 5rem;
  height: auto;
  ${width}
  ${margin}
  ${height}
  overflow: auto;
  resize: vertical;
  padding-right: calc(1.5em + 0.75rem);
  font-weight: 400;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.content};
  padding: 0.5rem;
  font-size: ${(props) => `${props.theme.fontSizes[2]}px`};
  background-color: ${(props) => props.theme.colors.backgroundMuted};
  background-clip: padding-box;
  border: 1px solid ${(props) => props.theme.colors.muted};
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);
`;

export const Input = styled.input<WidthProps & MarginProps & HeightProps>`
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.muted};
  background-color: ${(props) => props.theme.colors.backgroundMuted};
  background-clip: padding-box;
  border: 1px solid ${(props) => props.theme.colors.muted};
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  padding: 1rem;

  transition: all 0.3s ease-in-out;

  ${width}
  ${margin}
  ${height}

  &:focus {
    box-shadow: ${(props) => props.theme.shadows.Input};
  }
`;

export const Form = styled.form<MarginProps & WidthProps & MaxWidthProps>`
  width: 100%;
  ${margin}
  ${width}
  ${maxWidth}
  display: flex;
  flex-direction: column;
`;

export const InputGroup = styled.div<MarginProps>`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  ${margin}
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label<MarginProps>`
  font-size: 1.25rem;
  margin-left: 0.2rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  ${margin}
  color: ${(props) => props.theme.colors.text};
`;

export const ErrorText = styled.span<MarginProps>`
  margin-left: 1rem;
  ${margin}
  color: ${(props) => props.theme.colors.error};
`;
