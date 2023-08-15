import { InputLabelFilter } from './FilterStyled';

export const Filter = ({ handleFilterChange }) => {
  return (
    <>
      <InputLabelFilter>
        Find contacts by name
        <br />
        <input
          style={{
            color: '#08aa31c2',
            fontWeight: '700',
            outline: 'none',
            padding: '8px',
            borderRadius: '8px',
            border: '2px solid #eceae254',
            transition: 'background 0.3s ease-in-out',
            background: '#f6c218',
            // '::placeholder': { color: '#08775588' },
          }}
          onMouseEnter={e => {
            e.target.style.background = '#00bb31';
            e.target.style.border = '2px solid #ffc218';
            e.target.style.color = '#ffc218';
            // e.target.style.placeholder.color = '#f6c218';
          }}
          onMouseLeave={e => {
            e.target.style.background = '#f6c218';
            e.target.style.border = '2px solid #eceae254';
            e.target.style.color = '#08aa31c2';
            // e.target.style.placeholder.color = '#08775588';
          }}
          id="find_name"
          type="text"
          name="find_name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Jane Coll"
          required
          onChange={handleFilterChange}
        />
      </InputLabelFilter>
    </>
  );
};
