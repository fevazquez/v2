import styled from "styled-components";

export const StyledPicture = styled.div`
  padding: 20px;

  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: var(--white);
    border-radius: 10px;
    height: 450px;

    img {
      margin-top: 20px;
      width: 100%;
      padding: 10px 20px;
    }

    .card-title {
      border-radius: 5px;
      padding: 5px;
      font-size: 1em;
    }
    .portrait-details {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;
