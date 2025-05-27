import styled from "styled-components";

export const StyledTimer = styled.section`
  // needed for the text inside the heart
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;

  border-radius: 50%;

  height: 350px;
  width: 350px;

  font-size: 1.5rem;
  margin: 15px;
  padding: 0;

  h2 {
    padding: 5px 20px;
    margin-bottom: 20px;
  }

  .heart {
    positon: absolute;
    width: 250px;

    -webkit-mask: radial-gradient(circle at 60% 65%, red 64%, transparent 65%)
        top left,
      radial-gradient(circle at 40% 65%, red 64%, transparent 65%) top right,
      linear-gradient(to bottom left, red 43%, transparent 43%) bottom left,
      linear-gradient(to bottom right, red 43%, transparent 43%) bottom right;
    -webkit-mask-size: 50% 50%;
    -webkit-mask-repeat: no-repeat;
    mask: radial-gradient(circle at 60% 65%, red 64%, transparent 65%) top left,
      radial-gradient(circle at 40% 65%, red 64%, transparent 65%) top right,
      linear-gradient(to bottom left, red 43%, transparent 43%) bottom left,
      linear-gradient(to bottom right, red 43%, transparent 43%) bottom right;
    mask-size: 50.25% 50.25%;
    mask-repeat: no-repeat;
    background: linear-gradient(red, blue);

    animation: pulse 4s ease infinite;
    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
    }
  }

  .heart::before {
    content: "";
    display: block;
    padding-top: 100%;
  }

  .time {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 5;
    font-size: 20px;

    p:nth-child(2) {
      font-size: 15px;
    }
  }
`;