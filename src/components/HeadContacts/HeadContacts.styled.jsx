import styled from "styled-components";

export const HeadContactsStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 200px;
    margin: 0;
    padding: 0;

`;

export const ButtonOpenStyled = styled.button`
    
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background-color: #00bbff;

    :hover,
    :focus {
        background-color: #0000ff;
    }
`;