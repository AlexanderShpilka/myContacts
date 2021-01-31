import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAddressCard,
  faUser,
  faPhone,
  faEnvelope,
  faSitemap,
  faBirthdayCake,
  faEdit,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';

import { Button } from 'components/Button/Button';

import './ContactCard.css';

interface ContactCardProps {
  firstName: string;
  lastName?: string;
  email?: string;
  phone: string;
  category: string;
  birthday?: string;
  onEditButtonClickHandler: () => void;
  onDeleteButtonClickHandler: () => void;
}

export const ContactCard = ({
  firstName,
  lastName,
  email,
  phone,
  category,
  birthday,
  onEditButtonClickHandler,
  onDeleteButtonClickHandler,
}: ContactCardProps) => {
  return (
    <div className="contact-card">
      <div className="contact-card-left">
        <FontAwesomeIcon icon={faAddressCard} size="6x" color="darkblue" />
      </div>

      <div className="contact-card-center">
        <div className="contact-card-data-item contact-card-fullName">
          <div className="contact-card-icon-wrapper">
            <FontAwesomeIcon icon={faUser} color="darkblue" />
          </div>
          <div>
            {firstName} {lastName}
          </div>
        </div>
        <div className="contact-card-data-item contact-card-phone">
          <div className="contact-card-icon-wrapper">
            <FontAwesomeIcon icon={faPhone} color="darkblue" />
          </div>
          <div>{phone}</div>
        </div>
        <div className="contact-card-data-item contact-card-email">
          <div className="contact-card-icon-wrapper">
            <FontAwesomeIcon icon={faEnvelope} color="darkblue" />
          </div>
          <div>{email}</div>
        </div>
        <div className="contact-card-data-item contact-card-category">
          <div className="contact-card-icon-wrapper">
            <FontAwesomeIcon icon={faSitemap} color="darkblue" />
          </div>
          <div>{category}</div>
        </div>
        <div className="contact-card-data-item contact-card-birthday">
          <div className="contact-card-icon-wrapper">
            <FontAwesomeIcon icon={faBirthdayCake} color="darkblue" />
          </div>
          <div>{birthday && new Date(birthday).toDateString()}</div>
        </div>
      </div>

      <div className="contact-card-right">
        <div className="contact-card-button-wrapper">
          <Button type="button" variant="warning" round onClickHandler={onEditButtonClickHandler}>
            <FontAwesomeIcon icon={faEdit} color="darkblue" />
          </Button>
        </div>
        <div className="contact-card-button-wrapper">
          <Button type="button" variant="danger" round onClickHandler={onDeleteButtonClickHandler}>
            <FontAwesomeIcon icon={faTrashAlt} color="darkblue" />
          </Button>
        </div>
      </div>
    </div>
  );
};
