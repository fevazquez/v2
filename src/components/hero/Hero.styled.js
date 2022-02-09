import styled from "styled-components";

export const StyledHero = styled.section`
  .inner {
    display: grid;
    grid-template-columns: 4fr 2fr;
    grid-gap: 10px;
    @media (max-width: 768px) {
      display: block;
    }
  }

  .heroText {
    padding-top: 7em;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-items: flex-start;

  min-height: 100vh;
  padding: 0;

  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
    .heroText {
      padding-top: 0;
    }
  }

  h1 {
    margin: 0 0 15px 4px;
    color: var(--main);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-xl));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 10px;
    color: var(--grey);
    line-height: 0.9;
    font-size: clamp(20px, 4vw, 30px);
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    // ${({ theme }) => theme.bigButton};
    margin-top: 50px;
  }

  .email-link:hover {
    color: var(--white);
  }
`;

export const StyledPic = styled.div`
  max-width: 300px;
  @media (max-width: 768px) {
    display: none;
  }
  animation: blurFadeIn 2s ease-in backwards;
  animation-delay: 0.5s;

  @keyframes blurFadeIn {
    0% {
      opacity: 0;
      transform: scale(0.9);
    }
    20%,
    75% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
