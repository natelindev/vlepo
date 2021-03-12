/* eslint-disable no-restricted-globals */
/* eslint-disable no-nested-ternary */
export function usePopupWindow(
  url: string,
  title: string,
  width: number,
  height: number,
  autoFocus = true,
  options = {
    scrollbars: true,
    toolbar: false,
    menubar: false,
  },
) {
  const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
  const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;

  const windowWidth = window.innerWidth
    ? window.innerWidth
    : document.documentElement.clientWidth
    ? document.documentElement.clientWidth
    : screen.width;
  const windowHeight = window.innerHeight
    ? window.innerHeight
    : document.documentElement.clientHeight
    ? document.documentElement.clientHeight
    : screen.height;

  const systemZoom = width / window.screen.availWidth;
  const left = (windowWidth - width) / 2 / systemZoom + dualScreenLeft;
  const top = (windowHeight - height) / 2 / systemZoom + dualScreenTop;
  const newWindow = window.open(
    url,
    title,
    `
      scrollbars=${options.scrollbars ? 1 : 0},
      toolbar=${options.toolbar ? 1 : 0},
      menubar=${options.menubar ? 1 : 0},
      width=${windowWidth / systemZoom},
      height=${windowHeight / systemZoom},
      top=${top},
      left=${left}
      `,
  );

  if (autoFocus) {
    newWindow?.focus();
  }

  const close = () => newWindow?.close();
  const reload = () => newWindow?.opener.location.reload();

  return [newWindow, close, reload];
}
