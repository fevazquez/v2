import styled from "styled-components";

export const StyledAboutSection = styled.section`
  max-width: 900px;
  .inner {
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-gap: 50px;
    @media (max-width: 768px) {
      display: block;
    }
  }
`;

export const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;
    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-size: var(--fz-xs);
      &:before {
        content: "▹";
        position: absolute;
        left: 0;
        color: var(--main);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;

export const StyledPic = styled.div`
  position: relative;
  max-width: 300px;
  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }
  .wrapper {
    ${({ theme }) => theme.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: 5px;
    // background-color: var(--main);

    @media (max-width: 768px) {
      margin-bottom: 4em;
    }

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;
      &:after {
        top: 15px;
        left: 15px;
      }
      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }
    .img {
      position: relative;
      // mix-blend-mode: multiply;
      // filter: grayscale(100%) contrast(1);
      transition: var(--transition);
      img {
        border-radius: 5px;
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
    }
    &:after {
      border: 2px solid var(--main);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;
