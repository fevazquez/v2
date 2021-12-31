import styled from 'styled-components';

export const StyledHero = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-items: flex-start;

    min-height: 100vh;
    padding: 0;
    
    @media (max-width: 480px) and (min-height: 700px) {
        padding-bottom: 10vh;
    }

    h1 {
        margin: 0 0 30px 4px;
        color: var(--blue);
        font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
        font-weight: 400;

        @media (max-width: 480px) {
            margin: 0 0 20px 2px;
        }
    }

    h3 {
        margin-top: 10px;
        color: var(--grey);
        line-height: 0.9;
    }
    
    p {
        margin: 20px 0 0;
        max-width: 540px;
    }

    .email-link {
        ${({ theme }) => theme.bigButton};
        margin-top: 50px;
    }

    .email-link:hover {
        color: var(--white);
    }
`;

