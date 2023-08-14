import { ContactsListStyle } from './ContactListStyled';

export const ContactsList = ({ filteredContacts }) => {
  return (
    <>
      <ContactsListStyle>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
          </li>
        ))}
      </ContactsListStyle>
    </>
  );
};
