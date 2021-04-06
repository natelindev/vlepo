import React from 'react';
import { useTransition } from 'react-spring';
import { Row } from 'src/components/Layout/style';

import { BaseAnimatedContainer, BaseBaseModal, CloseIcon } from './style';

export type BaseModalProps = React.ComponentProps<typeof BaseBaseModal>;
const BaseModal = (props: BaseModalProps) => {
  const { open, onClose, children, ...rest } = props;

  const transition = useTransition(open, {
    from: {
      position: 'absolute' as const,
      transform: 'translate3d(0,-30px,0)',
      opacity: 0,
    },
    enter: { transform: 'translate3d(0,0px,0)', opacity: 1 },
    leave: { transform: 'translate3d(0,-30px,0)', opacity: 0 },
    config: {
      duration: 200,
      tension: 300,
      mass: 0.5,
    },
  });

  return (
    <>
      {transition(
        (style, item) =>
          item && (
            <BaseBaseModal
              modalComponent={BaseAnimatedContainer}
              style={style}
              onClose={onClose}
              {...rest}
            >
              <Row>
                <CloseIcon onClick={() => onClose?.()} size={24} />
              </Row>
              {children}
            </BaseBaseModal>
          ),
      )}
    </>
  );
};

export default BaseModal;
