import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
      margin: 0;
      padding: 0;
  }

  body {
    font-family: Corbel, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "DejaVu Sans", "Bitstream Vera Sans", "Liberation Sans", Verdana, "Verdana Ref", sans-serif;
    background: var(--main-blue);
    height: 100%;
    overflow-x: hidden;
    color: var(--grey);
    text-rendering: optimizeLegibility;
  }

  /* Scrollbar Styles */
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--dark-grey) var(--main-blue);
  }
  body::-webkit-scrollbar {
    width: 12px;
  }
  body::-webkit-scrollbar-track {
    background: var(--main-blue);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--dark-grey);
    border: 3px solid var(--main-blue);
    border-radius: 10px;
  }

  img, svg {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }

  img[alt=""],
  img:not([alt]) {
    filter: blur(5px);
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;

    &.feather {
      fill: none;
    }
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);
    &:hover,
    &:focus {
      color: var(--red);
    }

    &.inline-link {
      ${({ theme }) => theme.inlineLink};
    }
  }

  p {
    margin: 0 0 15px 0;
    &:last-child,
    &:last-of-type {
      margin: 0;
    }
    & > a {
      display: inline-block;
      text-decoration: none;
      text-decoration-skip-ink: auto;
      position: relative;
      transition: var(--transition);
      color: var(--red);
      &:hover,
      &:focus,
      &:active {
        color: var(--red);
        outline: 0;
        &:after {
          width: 100%;
        }
        & > * {
          color: var(--red) !important;
          transition: var(--transition);
        }
      }
      &:after {
        content: '';
        display: block;
        width: 0;
        height: 1px;
        position: relative;
        bottom: 0.37em;
        background-color: var(--red);
        transition: var(--transition);
        opacity: 0.5;
      }
    }
    & > code {
      background-color: var(--light-blue);
      color: var(--white);
      font-size: var(--fz-sm);
      border-radius: var(--border-radius);
      padding: 0.3em 0.5em;
    }
  }

  ul {
    &.fancy-list {
      padding: 0;
      margin: 0;
      list-style: none;
      font-size: var(--fz-lg);
      li {
        position: relative;
        padding-left: 30px;
        margin-bottom: 10px;
        &:before {
          content: '▹';
          position: absolute;
          left: 0;
          color: var(--red);
        }
      }
    }
  }
`

