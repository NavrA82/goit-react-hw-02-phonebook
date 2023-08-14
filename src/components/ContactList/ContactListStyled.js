import { styled } from 'styled-components';

export const ContactsListStyle = styled.ul`
  width: 100%;
  background-color: #08aa31c2;
  color: #f6c218;
  text-align: start;
  border: 3px solid #f6c218;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 8px;
  margin: 0 auto;
  padding: 12px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;
export const DelButton = styled.button`
  background-color: #08aa31c2;
  color: #f6c218;
  padding: 4px 4px;
  border: 3px solid #f6c218;
  border-radius: 8px;
  width: 50px;
  margin-left: 4px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  text-transform: uppercase;
  &:hover {
    background-color: #08775588;
    cursor: pointer;
  }
`;

export const WrapperLi = styled.li`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 8px;
`;
