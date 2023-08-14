import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Wrapper } from './GlobalStyle';
import { Formik, Field, Form } from 'formik';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addUser = newUser => {
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, newUser] };
    });
  };
  render() {
    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <Formik
          initialValues={{
            name: '',
            id: '',
          }}
          onSubmit={(values, action) => {
            const id = nanoid();

            const newContact = {
              id,
              name: values.name,
            };
            this.addUser(newContact);
            console.log(this.state.contacts);
            action.resetForm();
          }}
        >
          <Form>
            <label htmlFor="name">
              Name
              <Field
                id="name"
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                placeholder="Jane Coll"
              />
            </label>

            <button type="submit">ADD CONTACT</button>
          </Form>
        </Formik>

        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map(contact => {
            // console.log(contact.id);

            return <li key={contact.id}>{contact.name}</li>;
          })}
        </ul>
      </Wrapper>
    );
  }
}
