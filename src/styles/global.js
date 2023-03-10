import * as styled from 'styled-components';

import GothamBook from './../assets/Fonts/Gotham-Book.otf';
import GothamBold from './../assets/Fonts/Gotham-Bold.otf';

const GlobalStyles = styled.createGlobalStyle`
  @font-face {
    font-family: 'Gotham Book';
    src: url(${GothamBook}) format('woff');
  }

  @font-face {
    font-family: 'Gotham Bold';
    src: url(${GothamBold}) format('woff');
  }

  *,
  html,
  body {
    margin: 0;
    background-color: #fff;
    font-family: 'Gotham Book', sans-serif;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  h1,
  h2,
  h3 {
    color: ${(props) => props.theme.colors.black};
    font-family: 'Gotham Bold';
    line-height: 1.1;
  }

  h1 {
    font-size: 7rem;
    @media (max-width: 950px) {
      font-size: 4rem;
    }
  }

  h2 {
    font-size: 4.6rem;
    @media (max-width: 950px) {
      font-size: 3rem;
    }
  }

  h3 {
    font-size: 3rem;
    @media (max-width: 950px) {
      font-size: 2rem;
    }
  }

  h4 {
    font-size: 2.8rem;
    @media (max-width: 950px) {
      font-size: 1.8rem;
    }
  }

  h5 {
    font-size: 1.3rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: ${(props) => props.theme.colors.gray};
  }

  p,
  i,
  a,
  b {
    color: ${(props) => props.theme.colors.black};
    font-size: 1.8rem;
    line-height: 1.7;
    @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
      font-size: 1.6rem;
    }
  }

  i {
    font-style: italic;
  }

  b {
    font-family: 'Gotham Bold';
  }

  span {
    font-size: inherit;
  }

  a {
    color: black;
    cursor: pointer;
    text-decoration: none;
  }

  li {
    color: black;
    font-size: 1.6rem;
  }

  strong {
    font-weight: 700;
  }

  fieldset {
    border: 0;
    margin: 0;
    padding: 0;
  }

  img {
    max-width: 100%;
  }

  .drop-shadow {
    box-shadow: 12px 12px 0px 2px rgba(72, 102, 130, 1);
  }

  img.badge {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10000;
    pointer-events: none;
    @media (max-width: 1300px) {
      width: 120px;
    }
  }

  hr {
    display: block;
    width: 100%;
    height: 0;
    border: 1px #eeeeee solid;
  }

  article,
  aside,
  dialog,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  html,
  body {
    text-rendering: optimizeLegibility;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  font,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    vertical-align: baseline;
    background: transparent;
  }

  body {
    line-height: 1;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  :focus {
    outline: 0;
  }

  ins {
    text-decoration: none;
  }

  del {
    text-decoration: line-through;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  .clear {
    clear: both;
  }

  img {
    border: 0;
  }

  img a {
    border: 0;
    padding: 0;
    margin: 0;
  }

  .active {
    background-color: white !important;
    border-bottom: 1px solid ${(props) => props.theme.colors.lightGray} !important;
    a {
      color: black !important;
    }
  }

  .shadow-container {
    visibility: hidden !important;
  }

  #cookie-notification {
    border-radius: 14px;
    a,
    button {
      font-size: 1.6rem !important;
      color: ${(props) => props.theme.colors.orange} !important;
    }
    a {
      color: ${(props) => props.theme.colors.orange} !important;
    }
    button {
      background: ${(props) => props.theme.colors.orange} !important;
      color: white !important;
    }
  }

  .enzuzo-notification-desc {
    font-size: 1.6rem;
  }

  .hide {
    top: -7rem !important;
  }
`;

export default GlobalStyles;
