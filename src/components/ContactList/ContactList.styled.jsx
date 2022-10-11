import styled from "styled-components";

export const ContactListStyled = styled.ul`
    margin: 0;
    padding: 0;
    li:not(:last-child) {
        margin-bottom: ${p => p.theme.space[2]}px;
    }
`;