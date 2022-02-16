import styled from "styled-components";

export const StyledProjectsSection = styled.section`
  // display: flex;
  // flex-direction: column;
  // align-items: center;

  .bigButton {
    margin: 10em;
    ${({ theme }) => theme.bigButton};
  }
`;

export const StyledProjectsGrid = styled.ul`
  ${({ theme }) => theme.resetList};
  a {
    position: relative;
    z-index: 1;
  }
`;

export const StyledProject = styled.li`
  position: relative;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

  &:not(:last-of-type) {
    margin-bottom: 100px;
    @media (max-width: 768px) {
      margin-bottom: 70px;
    }
    @media (max-width: 480px) {
      margin-bottom: 30px;
    }
  }
  &:nth-of-type(odd) {
    .project-content {
      grid-column: 7 / -1;
      text-align: right;
      @media (max-width: 1080px) {
        grid-column: 5 / -1;
      }
      @media (max-width: 768px) {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
        text-align: left;
      }
      @media (max-width: 480px) {
        padding: 25px 25px 20px;
      }
    }
    .project-tech-list {
      justify-content: flex-end;
      @media (max-width: 768px) {
        justify-content: flex-start;
      }
      li {
        margin: 0 0 5px 20px;
        @media (max-width: 768px) {
          margin: 0 10px 5px 0;
        }
      }
    }
    .project-links {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;
      @media (max-width: 768px) {
        justify-content: flex-start;
        margin-left: -10px;
        margin-right: 0;
      }
    }
    .project-image {
      grid-column: 1 / 8;
      @media (max-width: 768px) {
        grid-column: 1 / -1;
      }
    }
  }
  .project-content {
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;
    @media (max-width: 1080px) {
      grid-column: 1 / 9;
    }
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      z-index: 5;
    }
    @media (max-width: 480px) {
      padding: 30px 25px 20px;
    }
  }
  .project-overline {
    margin: 10px 0;
    color: var(--main);
    font-size: var(--fz-xs);
    font-weight: 400;
  }
  .project-title {
    position: relative;
    z-index: 2;
    padding: 15px;
    border-radius: 5px;
    background-color: var(--darker-black);
    color: var(--lightest-grey);
    font-size: clamp(24px, 5vw, 28px);
    @media (min-width: 768px) {
      margin: 0 0 20px;
    }
    @media (max-width: 768px) {
      color: var(--white);
      a {
        position: static;
        &:before {
          content: "";
          display: block;
          position: absolute;
          z-index: 0;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
      }
    }
  }
  .project-description {
    position: relative;
    z-index: 2;
    padding: 25px;
    border-radius: 5px;
    background-color: var(--darker-black);
    color: var(--light-grey);
    font-size: var(--fz-lg);
    @media (max-width: 768px) {
      padding: 20px 0;
      background-color: transparent;
      box-shadow: none;
      &:hover {
        box-shadow: none;
      }
    }
    a {
      ${({ theme }) => theme.inlineLink};
    }
    strong {
      color: var(--white);
      font-weight: normal;
    }
  }
  .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 25px 0 10px;
    padding: 0;
    list-style: none;
    li {
      margin: 0 20px 5px 0;
      color: var(--light-grey);
      font-size: var(--fz-xs);
      white-space: nowrap;
    }
    @media (max-width: 768px) {
      margin: 10px 0;
      li {
        margin: 0 10px 5px 0;
        color: var(--lightest-grey);
      }
    }
  }
  .project-links {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;
    color: var(--lightest-grey);
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      &.external {
        svg {
          width: 22px;
          height: 22px;
          margin-top: -4px;
        }
      }
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  &:hover,
  &:focus {
    background: transparent;
    outline: 0;

    &:after {
      top: 15px;
      left: 15px;
    }
  }

  .project-image {
    grid-column: 6 / -1;
    grid-row: 1 / -1;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
      grid-column: 1 / -1;
      height: 100%;
      opacity: 0.25;

      border-radius: 5px;
      border: solid 1px var(--main);
    }

    .img {
      display: flex;
      justify-content: center;
      align-items: center;
      oveflow: hidden;

      border-radius: 5px;
      padding: 20px;
      height: 400px;
      background-color: var(--black);

      img {
        height: 350px;
        border-radius: 5px;
      }

      @media (max-width: 768px) {
        object-fit: cover;
        width: 100%;
        height: auto;
        filter: grayscale(100%) contrast(1) brightness(50%);
      }

      // colored picture trail for desktop
      @media (min-width: 769px) {
        &:hover,
        &:focus {
          outline: 0;

          &:after {
            top: 15px;
            left: 15px;
          }
        }

        &:before,
        &:after {
          content: "";
          display: block;
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 5px;
          transition: var(--transition);
        }
        &:before {
          top: 0;
          left: 0;
          background-color: var(--black);
          mix-blend-mode: screen;
          z-index: 1;
        }
        &:after {
          border: 2px solid var(--main);
          top: 20px;
          left: 20px;
          z-index: -1;
        }
      }
    }
  }
`;
