import { v4 as uuidv4 } from 'uuid';

import './ContactsList.scss';

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className="ContactsList">
      {contacts.map(({ id, name, number }) => (
        <li className="ContactsList__item" key={uuidv4()}>
          <p className="ContactsList__text">
            <span className="ContactsList__name">{name}</span>: {number}
          </p>
          <button
            className="ContactsList__button"
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
