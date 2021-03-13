/* eslint-disable no-restricted-globals */
import { useRef } from 'react';

export function usePopupWindow() {
  const newWindow = useRef<Window | null>();

  const createWindow = (
    url: string,
    title: string,
    width: number,
    height: number,
    options = {
      autoFocus: true,
      scrollbars: true,
      toolbar: false,
      menubar: false,
    },
  ) => {
    const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
    const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;

    const windowWidth = window.innerWidth ?? document.documentElement.clientWidth ?? screen.width;
    const windowHeight =
      window.innerHeight ?? document.documentElement.clientHeight ?? screen.height;

    const systemZoom = windowWidth / window.screen.availWidth;
    const left = (windowWidth - width) / 2 / systemZoom + dualScreenLeft;
    const top = (windowHeight - height) / 2 / systemZoom + dualScreenTop;
    newWindow.current = window.open(
      url,
      title,
      `
      scrollbars=${options.scrollbars ? 1 : 0},
      menubar=${options.menubar ? 1 : 0},
      toolbar=${options.toolbar ? 1 : 0},
      width=${width / systemZoom},
      height=${height / systemZoom},
      top=${top},
      left=${left}
      `,
    );

    if (options.autoFocus) newWindow.current?.focus();
  };
  return { newWindow, createWindow };
}
