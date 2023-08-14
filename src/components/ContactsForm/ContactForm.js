import { nanoid } from 'nanoid';
import { Formik, Field, Form } from 'formik';

import { InputLabel, OnSubmitFormButton } from './ContactFormStyled';

export const ContactForm = ({ addUserNameAndNumber, contacts }) => {
  return (
    <>
      <Formik
        initialValues={{
          name: '',
          id: '',
          number: '',
        }}
        onSubmit={(values, action) => {
          addUserNameAndNumber({
            id: nanoid(),
            name: values.name,
            number: values.number,
          });
          console.log(contacts);
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
          <InputLabel>
            Name
            <br />
            <Field
              style={{
                outline: 'none',
                padding: '8px',
                borderRadius: '8px',
                border: '2px solid #eceae254',
                transition: 'border 0.3s ease-in-out',
                // background: '#f6c21899',
              }}
              onMouseEnter={e => {
                // e.target.style.background = '#08aa31c2';
                e.target.style.border = '2px solid #ffc218';
                // e.target.style.placeholder.color = '#f6c218';
              }}
              onMouseLeave={e => {
                // e.target.style.background = '#f6c21899';
                e.target.style.border = '2px solid #eceae254';
                // e.target.style.placeholder.color = '#08775588';
              }}
              id="name"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              placeholder="Jane Coll"
              required
            />
          </InputLabel>
          <InputLabel>
            Number
            <br />
            <Field
              style={{
                outline: 'none',
                padding: '8px',
                borderRadius: '8px',
                border: '2px solid #eceae254',
                transition: 'border 0.3s ease-in-out',
                // background: '#f6c21899',
                // '::placeholder': { color: '#08775588' },
              }}
              onMouseEnter={e => {
                // e.target.style.background = '#08aa31c2';
                e.target.style.border = '2px solid #ffc218';
                // e.target.style.placeholder.color = '#f6c218';
              }}
              onMouseLeave={e => {
                // e.target.style.background = '#f6c21899';
                e.target.style.border = '2px solid #eceae254';
                // e.target.style.placeholder.color = '#08775588';
              }}
              id="number"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              placeholder="+38"
              required
            />
          </InputLabel>

          <OnSubmitFormButton type="submit">ADD CONTACT</OnSubmitFormButton>
        </Form>
      </Formik>
    </>
  );
};
