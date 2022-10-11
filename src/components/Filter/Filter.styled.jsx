import styled from "styled-components";

export const FilterStyled = styled.div`
    margin-bottom: ${p => p.theme.space[3]}px;
    padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;
    max-width: 300px;
    text-align: center;

    background-color: #00bbff;
    border-radius: ${p => p.theme.space[3]}px;

    input {
        width: 90%;
        border-radius: ${p => p.theme.space[2]}px;
        padding: ${p => p.theme.space[1]}px ${p => p.theme.space[2]}px;
    }

    p {        
        margin-bottom: ${p => p.theme.space[2]}px;
        font-size: ${p => p.theme.fontSizes[3]}px;
        font-weight: ${p => p.theme.fontWeights.middle};
    }
`;