import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Roboto', sans-serif;
  background-color: rgba(238,191,49,0.2);
  line-height: 1.5;
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
