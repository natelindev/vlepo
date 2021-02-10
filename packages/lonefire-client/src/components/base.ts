import Image from 'next/image';

import styled from '@emotion/styled';

import { ZIndex } from './ZIndex';

export const Link = styled.a``;

export const AnimatedLink = styled.a`
  position: relative;
  color: #007bff;
  text-decoration: none !important;

  &:hover {
    color: #007bff;
    &:before {
      visibility: visible;
      text-decoration: none;
      transform: scaleX(1);
    }
  }

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: -2px;
    left: 0;
    background-color: #007bff;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }
`;

export type CardImgProps = {
  left?: boolean;
  right?: boolean;
  top?: boolean;
  bottom?: boolean;
};

export const CardImg = styled(Image)<CardImgProps>`
  object-fit: cover;
  flex-grow: 0;
  border-top-left-radius: ${(props) => (props.left || props.top ? `calc(0.25rem - 1px)` : `0`)};
  border-top-right-radius: ${(props) => (props.right || props.top ? `calc(0.25rem - 1px)` : `0`)};
  border-bottom-right-radius: ${(props) =>
    props.right || props.bottom ? `calc(0.25rem - 1px)` : `0`};
  border-bottom-left-radius: ${(props) =>
    props.left || props.bottom ? `calc(0.25rem - 1px)` : `0`};
`;

export const CardImgOverlay = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1.25rem;
  color: ${(props) => props.color};
  text-decoration: none;
`;

type CardProps = { direction?: string };

export const Row = styled.div`
  display: flex;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Card = styled.div<CardProps>`
  display: flex;
  flex-direction: ${(props) => (props.direction === 'lr' ? 'row' : 'column')};
`;

export const CardBody = styled.div`
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
`;

export const Button = styled.button`
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
`;
