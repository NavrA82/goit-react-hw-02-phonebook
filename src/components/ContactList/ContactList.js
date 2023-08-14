import {
  ContactsListStyle,
  DelButton,
  WrapperContact,
  WrapperLi,
} from './ContactListStyled';

export const ContactsList = ({ filteredContacts, onDelete, id }) => {
  return (
    <>
      <ContactsListStyle>
        {filteredContacts.map(contact => (
          <WrapperContact>
            <WrapperLi key={contact.id}>
              <span>{contact.name}:</span>
              <span>{contact.number}</span>
            </WrapperLi>
            <DelButton onClick={() => onDelete(contact.id)}>Del</DelButton>
          </WrapperContact>
        ))}
      </ContactsListStyle>
    </>
  );
};
