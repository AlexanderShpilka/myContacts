import { FC } from 'react';
import { createPortal } from 'react-dom';

import './Modal.css';

interface ModalProps {
  open: boolean;
  title: string;
  feedback?: string;
}

export const Modal: FC<ModalProps> = ({ open, title, feedback, children }) => {
  const feedbackClassName = feedback ? 'modal-feedback modal-feedback--show' : 'modal-feedback';

  return createPortal(
    <div className={`${open ? 'modal modal--open' : 'modal'}`}>
      <h1 className="modal-title">{title}</h1>
      {children}
      <div className="modal-feedback-wrapper">
        <p className={feedbackClassName}>{feedback}</p>
      </div>
    </div>,
    document.getElementById('root-modal') as HTMLElement,
  );
};
