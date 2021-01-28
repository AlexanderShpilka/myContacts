import { FC } from 'react';
import { createPortal } from 'react-dom';

import './Modal.css';

interface ModalProps {
  open: boolean;
  title: string;
}

export const Modal: FC<ModalProps> = ({ open, title, children }) => {
  return createPortal(
    <div className={`${open ? 'modal modal--open' : 'modal'}`}>
      <h1 className="modal-title">{title}</h1>
      {children}
    </div>,
    document.getElementById('root-modal') as HTMLElement,
  );
};
