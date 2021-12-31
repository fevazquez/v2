import styled from 'styled-components';

export const StyledMenu = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${({ theme }) => theme.lighter_black};
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    height: 100vh;
    width: 40vh;
    text-align: left;
    padding: 2rem;
    position: fixed;
    top: 0;
    right: 0;
    transition: transform 0.3s ease-in-out;
    z-index: 1;

    a {
        text-align: center;
        font-size: 1rem;
        padding: 1.5rem 0;
        color: ${({ theme }) => theme.grey};
        text-decoration: none;
        
        transition: color 0.3s linear;

        &:hover {
            color: ${({ theme }) => theme.white};
        }
    }
`;