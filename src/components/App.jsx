import { Component } from 'react';

import { Wrapper } from './GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '+38 067 459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '+38 066 443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '+38 073 645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '+38 097 227-91-26' },
    ],
    filter: '',
    // name: '',
    // number: '',
  };

  addUserNameAndNumber = newUser => {
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, newUser] };
    });
  };
  handleFilterChange = eventFilter => {
    const { value } = eventFilter.target;
    this.setState({ filter: value });
  };
  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm
          addUserNameAndNumber={this.addUserNameAndNumber}
          contacts={this.state.contacts}
        />

        <h2>Contacts</h2>
        <Filter handleFilterChange={this.handleFilterChange} />
        <ContactsList filteredContacts={filteredContacts} />
      </Wrapper>
    );
  }
}
