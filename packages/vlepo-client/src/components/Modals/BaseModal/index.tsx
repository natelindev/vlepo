import { useTransition } from 'react-spring';
import { StyledModalProps } from 'styled-modal';

import { BaseAnimatedContainer, BaseBaseModal } from './style';

export type BaseModalProps = StyledModalProps;
const BaseModal = (props: BaseModalProps) => {
  const { open, onClose, children } = props;

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
            <BaseBaseModal modalComponent={BaseAnimatedContainer} style={style} onClose={onClose}>
              {children}
            </BaseBaseModal>
          ),
      )}
    </>
  );
};

export default BaseModal;
