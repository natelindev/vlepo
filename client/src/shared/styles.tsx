import { css, Global } from '@emotion/react';
import styled from '@emotion/styled';

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        margin: 0;
        padding: 0;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
        text-align: left;
        font-family: Titillium, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
          'Segoe UI Symbol', 'Noto Color Emoji';
      }
      *,
      ::after,
      ::before {
        box-sizing: border-box;
      }
      #__next {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        width: 100%;
      }
    `}
  />
);

export const animations = {};

export const spinner = styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
`;

/* Spinner */
const style = `
.lds-ellipsis {
  div {
    position: absolute;
    top: 27px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);

    &:nth-child(1) {
      background: #009bff;
      left: 6px;
      animation: lds-ellipsis1 0.6s infinite;
    }

    &:nth-child(2) {
      background: #00cd60;
      left: 6px;
      animation: lds-ellipsis2 0.6s infinite;
    }

    &:nth-child(3) {
      background: #9671ff;
      left: 26px;
      animation: lds-ellipsis2 0.6s infinite;
    }

    &:nth-child(4) {
      background: #e871fa;
      left: 45px;
      animation: lds-ellipsis3 0.6s infinite;
    }
  }
}

@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(0);
  }
}

@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(19px, 0);
  }
}

/* Animated toggler*/

.animated--toggler .icon-bar {
  display: block;
  width: 1.5em;
  height: 2px;
  border-radius: 1px;

  + .icon-bar {
    margin-top: 4px;
  }
}

@media screen and (min-width: 768px) {
  .animated--toggler {
    border: none;
    background: transparent !important;

    &:hover {
      background: transparent !important;
    }

    &:focus {
      outline: 0;
    }

    .icon-bar {
      width: 22px;
      transition: all 0.3s;
    }

    &.collapsed .icon-bar:nth-child(1),
    &.toggled .icon-bar:nth-child(1) {
      transform: rotate(0);
    }

    &.collapsed .icon-bar:nth-child(2),
    &.toggled .icon-bar:nth-child(2) {
      opacity: 1;
    }

    &.collapsed .icon-bar:nth-child(3),
    &.toggled .icon-bar:nth-child(3) {
      transform: rotate(0);
    }

    .icon-bar {
      &:nth-child(1) {
        transform: rotate(45deg);
        transform-origin: 10% 10%;
      }

      &:nth-child(2) {
        opacity: 0;
      }

      &:nth-child(3) {
        transform: rotate(-45deg);
        transform-origin: 10% 90%;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .animated--toggler {
    border: none;
    background: transparent !important;

    &:hover {
      background: transparent !important;
    }

    &:focus {
      outline: 0;
    }

    .icon-bar {
      width: 22px;
      transition: all 0.3s;

      &:nth-child(1) {
        transform: rotate(0);
      }

      &:nth-child(2) {
        opacity: 1;
      }

      &:nth-child(3) {
        transform: rotate(0);
      }
    }

    &.toggled .icon-bar {
      &:nth-child(1) {
        transform: rotate(45deg);
        transform-origin: 10% 10%;
      }

      &:nth-child(2) {
        opacity: 0;
      }

      &:nth-child(3) {
        transform: rotate(-45deg);
        transform-origin: 10% 90%;
      }
    }
  }
}

.navbar .animated--toggler {
  border: none;
  background: transparent !important;

  &:hover {
    background: transparent !important;
  }

  &:focus {
    outline: 0;
  }

  .icon-bar {
    width: 22px;
    transition: all 0.3s;

    &:nth-child(1) {
      transform: rotate(45deg);
      transform-origin: 10% 10%;
    }

    &:nth-child(2) {
      opacity: 0;
    }

    &:nth-child(3) {
      transform: rotate(-45deg);
      transform-origin: 10% 90%;
    }
  }

  &.collapsed .icon-bar {
    &:nth-child(1) {
      transform: rotate(0);
    }

    &:nth-child(2) {
      opacity: 1;
    }

    &:nth-child(3) {
      transform: rotate(0);
    }
  }
}

/* border draw animation */

@keyframes bottomright {
  0% {
    width: 0;
    height: 0;
    padding-top: 0;
    visibility: visible;
  }

  25% {
    width: 100%;
    height: 0;
    padding-top: 0;
    visibility: visible;
  }

  50% {
    height: 100%;
    width: 100%;
    visibility: visible;
  }

  75% {
    visibility: visible;
  }

  100% {
    visibility: visible;
  }
}

@keyframes revbottomright {
  0% {
    width: 100%;
    height: 100%;
    visibility: visible;
  }

  25% {
    width: 100%;
    height: 100%;
    visibility: visible;
  }

  50% {
    width: 100%;
    height: 100%;
    visibility: visible;
  }

  75% {
    width: 100%;
    height: 0;
    padding-top: 0;
    visibility: visible;
  }

  100% {
    width: 0;
    height: 0;
    padding-top: 0;
    visibility: hidden;
  }
}

@keyframes topleft {
  0% {
    width: 0;
    height: 0;
    padding-bottom: 0;
    visibility: hidden;
  }

  25% {
    width: 0;
    height: 0;
    padding-bottom: 0;
    visibility: hidden;
  }

  50% {
    width: 0;
    height: 0;
    padding-bottom: 0;
    visibility: hidden;
  }

  75% {
    width: 100%;
    height: 0;
    padding-bottom: 0;
    visibility: visible;
  }

  100% {
    width: 100%;
    height: 100%;
    opacity: 1;
    visibility: visible;
  }
}

@keyframes revtopleft {
  0% {
    width: 100%;
    height: 100%;
    opacity: 1;
    visibility: visible;
  }

  25% {
    width: 100%;
    height: 0;
    padding-bottom: 0;
    visibility: visible;
  }

  50% {
    width: 0;
    height: 0;
    padding-bottom: 0;
    visibility: hidden;
  }

  75% {
    width: 0;
    height: 0;
    padding-bottom: 0;
    visibility: hidden;
  }

  100% {
    width: 0;
    height: 0;
    padding-bottom: 0;
    visibility: hidden;
  }
}

@keyframes bottomright-within {
  0% {
    width: 0;
    height: 0;
    padding-top: 0;
    visibility: visible;
  }

  25% {
    width: calc(100% - 10px);
    height: 0;
    padding-top: 0;
    visibility: visible;
  }

  50% {
    height: calc(100% - 10px);
    width: calc(100% - 10px);
    visibility: visible;
  }

  75% {
    visibility: visible;
  }

  100% {
    visibility: visible;
  }
}

@keyframes revbottomright-within {
  0% {
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    visibility: visible;
  }

  25% {
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    visibility: visible;
  }

  50% {
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    visibility: visible;
  }

  75% {
    width: calc(100% - 10px);
    height: 0;
    padding-top: 0;
    visibility: visible;
  }

  100% {
    width: 0;
    height: 0;
    padding-top: 0;
    visibility: hidden;
  }
}

@keyframes topleft-within {
  0% {
    width: 0;
    height: 0;
    padding-bottom: 0;
    visibility: hidden;
  }

  25% {
    width: 0;
    height: 0;
    padding-bottom: 0;
    visibility: hidden;
  }

  50% {
    width: 0;
    height: 0;
    padding-bottom: 0;
    visibility: hidden;
  }

  75% {
    width: calc(100% - 10px);
    height: 0;
    padding-bottom: 0;
    visibility: visible;
  }

  100% {
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    opacity: 1;
    visibility: visible;
  }
}

@keyframes revtopleft-within {
  0% {
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    opacity: 1;
    visibility: visible;
  }

  25% {
    width: calc(100% - 10px);
    height: 0;
    padding-bottom: 0;
    visibility: visible;
  }

  50% {
    width: 0;
    height: 0;
    padding-bottom: 0;
    visibility: hidden;
  }

  75% {
    width: 0;
    height: 0;
    padding-bottom: 0;
    visibility: hidden;
  }

  100% {
    width: 0;
    height: 0;
    padding-bottom: 0;
    visibility: hidden;
  }
}

.border-draw {
  transition: color 0.75s ease-in-out;
  text-decoration: none;
  position: relative;

  &:hover {
    color: #333;
    transition: color 0.75s ease-in-out;
  }

  &:focus {
    box-shadow: none;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    border-bottom: 1px solid #333;
    border-right: 1px solid #333;
    visibility: hidden;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
    border-top: 1px solid #333;
    border-left: 1px solid #333;
    visibility: hidden;
  }

  &:hover {
    &:before {
      animation: topleft 0.5s ease-in-out forwards;
    }

    &:after {
      animation: bottomright 0.5s ease-in-out forwards;
    }
  }

  &.active {
    &:before {
      animation: revtopleft 0.5s ease-in-out forwards;
    }

    &:after {
      animation: revbottomright 0.5s ease-in-out forwards;
    }

    &:before,
    &:after {
      width: 100%;
      height: 100%;
      visibility: visible;
    }
  }

  &.temp:before {
    width: 100%;
    height: 100%;
    visibility: visible;
  }
}

border-draw.temp:after {
  width: 100%;
  height: 100%;
  visibility: visible;
}

.border-draw-within {
  transition: color 0.75s ease-in-out;
  text-decoration: none;
  position: relative;

  &:hover {
    color: #333;
    transition: color 0.75s ease-in-out;
  }

  &:focus {
    box-shadow: none;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 5px;
    left: 5px;
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    border-bottom: 1px solid #333;
    border-right: 1px solid #333;
    visibility: hidden;
  }

  &:before {
    content: '';
    position: absolute;
    top: 5px;
    right: 5px;
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    border-top: 1px solid #333;
    border-left: 1px solid #333;
    visibility: hidden;
  }

  &:hover {
    &:before {
      animation: topleft-within 0.5s ease-in-out forwards;
    }

    &:after {
      animation: bottomright-within 0.5s ease-in-out forwards;
    }
  }

  &.active {
    &:before {
      animation: revtopleft-within 0.5s ease-in-out forwards;
    }

    &:after {
      animation: revbottomright-within 0.5s ease-in-out forwards;
    }

    &:before,
    &:after {
      width: calc(100% - 10px);
      height: calc(100% - 10px);
      visibility: visible;
    }
  }

  &.temp:before {
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    visibility: visible;
  }
}

border-draw-within.temp:after {
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  visibility: visible;
}

/* Pesudo element animated box shadow */

.animated--shadow {
  position: relative;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1) !important;
    opacity: 0;
    -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &:hover {
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);

    &::after {
      opacity: 1;
    }
  }
}

.animated--shadow-lg {
  position: relative;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.175);
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
    opacity: 0;
    -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &:hover {
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);

    &::after {
      opacity: 1;
    }
  }
}

.animated--shadow-deep {
  position: relative;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2) !important;
    opacity: 0;
    -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &:hover {
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);

    &::after {
      opacity: 1;
    }
  }
}

.animated--shadow-translate {
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1) !important;
    opacity: 0;
    -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &:hover {
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
    transform: translateY(-0.3rem);

    &::after {
      opacity: 1;
    }
  }
}

/* fade in */

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.animated--fade-in {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
  -webkit-animation-duration: 200ms;
  animation-duration: 200ms;
  -webkit-animation-timing-function: opacity cubic-bezier(0, 1, 0.4, 1);
  animation-timing-function: opacity cubic-bezier(0, 1, 0.4, 1);
}

@-webkit-keyframes growIn {
  0% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
    opacity: 0;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}

/* grow in */

@keyframes growIn {
  0% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
    opacity: 0;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}

.animated--grow-in,
.sidebar .nav-item .collapse {
  -webkit-animation-name: growIn;
  animation-name: growIn;
  -webkit-animation-duration: 200ms;
  animation-duration: 200ms;
  -webkit-animation-timing-function: transform cubic-bezier(0.18, 1.25, 0.4, 1),
    opacity cubic-bezier(0, 1, 0.4, 1);
  animation-timing-function: transform cubic-bezier(0.18, 1.25, 0.4, 1),
    opacity cubic-bezier(0, 1, 0.4, 1);
}

/* link hover underline animation */

.animated--link-container a,
.animated--link {
  position: relative;
  color: #007bff;
  text-decoration: none !important;
}

.animated--link-white {
  position: relative;
  color: #007bff;
  text-decoration: none !important;
  color: #fff;
}

.animated--link-container a:hover,
.animated--link:hover {
  color: #007bff;
}

.animated--link-white:hover {
  color: #fff;
}

.animated--link-container a:before,
.animated--link:before {
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  bottom: -2px;
  left: 0;
  background-color: #007bff;
  visibility: hidden;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

.animated--link-white:before {
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  bottom: -2px;
  left: 0;
  background-color: #007bff;
  visibility: hidden;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
  background-color: #fff;
}

.animated--link-container a:hover::before,
.animated--link:hover:before {
  visibility: visible;
  text-decoration: none;
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}

.animated--zoom-in {
  position: relative;
  overflow: hidden;

  img {
    max-width: 100%;
    -moz-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
  }

  &:hover img {
    -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
}
`;
