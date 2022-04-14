import styled from "styled-components";

export const StyledBurger = styled.button`
  position: absolute;
  top: 2%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 70px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  span {
    background: ${({ theme, open }) => (open ? theme.main : theme.main)};
    border-radius: 10px;
    transition: all 0.3s linear;
    width: 2.5em;
    height: 0.25em;
    margin: 0.25em 0;
    transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);

    :first-child {
      width: 2.5em;
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      width: 2em;
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }
    :nth-child(3) {
      width: ${({ open }) => (open ? "2.5em" : "1.5em")};
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
