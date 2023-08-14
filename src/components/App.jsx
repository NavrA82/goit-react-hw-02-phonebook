import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Wrapper, Inputlabel, OnSubmitFormButton } from './GlobalStyle';
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
            number: '',
          }}
          onSubmit={(values, action) => {
            this.addUser({
              id: nanoid(),
              name: values.name,
              number: values.number,
            });
            console.log(this.state.contacts);
            action.resetForm();
          }}
        >
          <Form
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Inputlabel>
              Name
              <br />
              <Field
                id="name"
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                placeholder="Jane Coll"
                required
              />
            </Inputlabel>
            <Inputlabel>
              Number
              <br />
              <Field
                id="number"
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                placeholder="+38"
                required
              />
            </Inputlabel>

            <OnSubmitFormButton type="submit">ADD CONTACT</OnSubmitFormButton>
          </Form>
        </Formik>

        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map(contact => {
            // console.log(contact.id);

            return (
              <li key={contact.id}>
                {contact.name}: {contact.number}
              </li>
            );
          })}
        </ul>
      </Wrapper>
    );
  }
}
