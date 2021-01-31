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
  const { deleteProfileError, loading } = useSelector(selectAuthState);

  const dispatch = useDispatch();

  return (
    <>
      <Backdrop open={open} onClick={onClickHandler} />
      <Modal
        title="Delete account"
        open={open}
        feedback={typeof deleteProfileError === 'string' ? deleteProfileError : ''}
      >
        <div className="delete-account-buttons">
          <div className="delete-account-button-wrapper">
            <Button
              type="button"
              variant="danger"
              onClickHandler={() => dispatch(deleteAccount())}
              disabled={loading}
              stretch
            >
              Delete
            </Button>
          </div>
          <div className="delete-account-button-wrapper">
            <Button type="button" variant="secondary" onClickHandler={onClickHandler} stretch>
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
