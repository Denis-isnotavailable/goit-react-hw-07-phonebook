import styled from "styled-components";

export const ModalStyled = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1200;

    .div {
        position: relative;
        max-width: calc(100vw - 48px);
        max-height: calc(100vh - 24px);
    }

    /* button {
        position: absolute;
        top: 0;
        right: 0;
    } */

`;

export const ButtonCloseStyled = styled.button`
    position: absolute;
    top: calc(50% - 150px);
    right: calc(50% - 154px);
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: ${p => p.theme.space[4]}px;
    height: ${p => p.theme.space[4]}px;
    background-color: #fff;
    border-radius: ${p => p.theme.radii[1]}%;
    /* border: none; */
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover,
    :focus {
        background-color: #00bbff;
    }
`;