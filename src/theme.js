import { css } from 'styled-components';

export const theme = {
    main_blue: '#0a192f',
    ligh_blue: '#112240',
    lightest_blue: '#233554',
    white: '#fff',
    red: '#ff1600',
    grey: '#8892b0',
    lightest_grey: '#ccd6f6',
    light_grey: '#a8b2d1',

    mobile: '576px',

    inlineLink: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: var(--transition);
    color: var(--green);
    &:hover,
    &:focus,
    &:active {
      color: var(--green);
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        color: var(--green) !important;
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
      background-color: var(--green);
      transition: var(--transition);
      opacity: 0.5;
    }
  `,
}