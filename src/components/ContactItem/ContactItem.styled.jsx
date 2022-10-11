import styled from "styled-components";

export const ContactItemStyled = styled.li`
    display: flex;
    align-items: center;

    p {
        margin: 0 ${p => p.theme.space[3]}px 0;
    }
    
    button {        
        height: 24px;
        padding: 0;
        border: none;
        background-color: ${p => p.theme.colors.white};
        border-radius: ${p => p.theme.radii[0]}px;
        cursor: pointer;
    }
`;