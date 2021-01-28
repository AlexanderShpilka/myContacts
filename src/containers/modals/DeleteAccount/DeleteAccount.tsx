import { useDispatch, useSelector } from 'react-redux';

import { Modal } from 'components/Modal/Modal';
import { Backdrop } from 'components/utility';
import { Button } from 'components/Button/Button';

import { deleteAccount, selectAuthState } from 'store/slices/authSlice';
import './DeleteAccount.css';

interface DeleteAccountProps {
  open: boolean;
  onClickHandler: () => void;
}

export const DeleteAccount = ({ open, onClickHandler }: DeleteAccountProps) => {
  const { error, loading } = useSelector(selectAuthState);

  const dispatch = useDispatch();

  return (
    <>
      <Backdrop open={open} onClick={onClickHandler} />
      <Modal title="Delete account" open={open} feedback={typeof error === 'string' ? error : ''}>
        <div className="delete-account-buttons">
          <Button type="button" variant="danger" onClickHandler={() => dispatch(deleteAccount())} disabled={loading}>
            Delete
          </Button>
          <Button type="button" variant="secondary" onClickHandler={onClickHandler}>
            Cancel
          </Button>
        </div>
      </Modal>
    </>
  );
};
