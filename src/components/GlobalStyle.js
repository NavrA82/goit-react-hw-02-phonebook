import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Roboto', sans-serif;
  background-color: rgba(238,191,49,0.2);
  line-height: 1.5;
  color: #f6c218;

}
a {
  text-decoration: none;
}
ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}
img {
  display: block;
  max-width: 100%;
  height: auto;

}`;

export const Wrapper = styled.div`
  max-width: 420px;
  background-color: #e42523;
  color: #f6c218;
  text-align: center;
  border: 3px solid #f6c218;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  margin: 40px auto;
  min-width: 300px;
  padding: 16px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;
