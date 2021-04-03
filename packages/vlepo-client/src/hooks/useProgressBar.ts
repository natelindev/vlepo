import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Observable from 'zen-observable';

type useProgressBarOptions = {
  loading?: boolean;
  scrolling?: boolean;
};

export const useProgressBar = (options: useProgressBarOptions) => {
  const [width, setWidth] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (options.loading) {
      const progressObservable = new Observable<number>((observer) => {
        let timer: number | undefined;
        let done = false;
        for (let i = 0; i < 1; i += 0.001) {
          if (done) {
            break;
          }
          timer = window.setTimeout(() => {
            observer.next(i);
          }, 5);
        }
        return () => {
          clearTimeout(timer);
          done = true;
        };
      });

      let progressSubscription: ZenObservable.Subscription | undefined;

      const routeChangeStart = () => {
        progressSubscription = progressObservable.subscribe((x) => setWidth(x));
      };

      const routeChangeComplete = () => {
        if (progressSubscription) {
          progressSubscription.unsubscribe();
        }
        setWidth(1);
        setTimeout(() => {
          setWidth(0);
        }, 300);
      };

      router.events.on('routeChangeStart', routeChangeStart);
      router.events.on('routeChangeComplete', routeChangeComplete);
      router.events.on('routeChangeError', routeChangeComplete);
      return () => {
        router.events.off('routeChangeStart', routeChangeStart);
        router.events.off('routeChangeComplete', routeChangeComplete);
        router.events.off('routeChangeError', routeChangeComplete);
      };
    }
    return undefined;
  }, [options.loading, router.events]);

  useEffect(() => {
    if (options.scrolling) {
      const listener = () =>
        setWidth(
          window.pageYOffset /
            (document.documentElement.scrollHeight - document.documentElement.clientHeight),
        );

      window.addEventListener('scroll', listener, { passive: true });
      window.dispatchEvent(new Event('scroll'));
      return () => {
        window.removeEventListener('scroll', listener);
      };
    }
    return undefined;
  }, [options.scrolling]);

  return width;
};
