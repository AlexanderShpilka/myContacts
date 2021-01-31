import { useSelector } from 'react-redux';

import { Modal } from 'components/Modal/Modal';
import { Backdrop } from 'components/utility';
import { Button } from 'components/Button/Button';

import { selectContactsState } from 'store/slices/contactsSlice';
import './DeleteContact.css';

interface DeleteContactProps {
  open: boolean;
  onCancelButtonClickHandler: () => void;
  onDeleteButtonClickHandler: () => void;
}

export const DeleteContact = ({ open, onCancelButtonClickHandler, onDeleteButtonClickHandler }: DeleteContactProps) => {
  const { error, loading } = useSelector(selectContactsState);

  return (
    <>
      <Backdrop open={open} onClick={onCancelButtonClickHandler} />
      <Modal title="Delete contact" open={open} feedback={typeof error === 'string' ? error : ''}>
        <div className="delete-contact-buttons">
          <Button type="button" variant="danger" onClickHandler={onDeleteButtonClickHandler} disabled={loading}>
            {loading ? 'Deleting...' : 'Delete'}
          </Button>
          <Button type="button" variant="secondary" onClickHandler={onCancelButtonClickHandler}>
            Cancel
          </Button>
        </div>
      </Modal>
    </>
  );
};
