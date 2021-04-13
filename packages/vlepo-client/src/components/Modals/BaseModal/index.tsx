import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import React, { useEffect } from 'react';
import { useTransition } from 'react-spring';
import { Row } from 'src/components/Layout/style';

import { useTheme } from '@emotion/react';

import {
  BaseAnimatedModal,
  BaseStyledModal,
  CloseIcon,
  ModalContainer,
  ModalOverScroll,
} from './style';

export type BaseModalProps = React.ComponentProps<typeof BaseStyledModal>;
const BaseModal = (props: BaseModalProps) => {
  const { open, onClose, children, ...rest } = props;

  const theme = useTheme();
  const transition = useTransition(open, {
    from: { transform: 'translate3d(0,-30px,0)', opacity: 0 },
    enter: { transform: 'translate3d(0,0px,0)', opacity: 1 },
    leave: { transform: 'translate3d(0,-30px,0)', opacity: 0 },
    config: {
      duration: 200,
      tension: 300,
      mass: 0.5,
    },
  });

  useEffect(() => {
    if (open) {
      disableBodyScroll(document.body);
    } else {
      enableBodyScroll(document.body);
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [open]);

  return (
    <>
      {transition(
        (style, item) =>
          item && (
            <BaseStyledModal
              containerComponent={ModalContainer}
              modalComponent={BaseAnimatedModal}
              overscrollComponent={ModalOverScroll}
              style={style}
              onClose={onClose}
              theme={theme}
              {...rest}
            >
              <Row>
                <CloseIcon onClick={() => onClose?.()} size={24} />
              </Row>
              {children}
            </BaseStyledModal>
          ),
      )}
    </>
  );
};

export default BaseModal;
