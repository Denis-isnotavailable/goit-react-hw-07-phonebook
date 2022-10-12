import styled from "styled-components";
import { Form } from 'formik';

export const FormStyled = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: ${p => p.theme.space[4]}px ${p => p.theme.space[3]}px;
    border: 1px solid black;
    height: 240px;
    width: 280px;
    border-radius: ${p => p.theme.radii[0]}px;
    background-color: #fff;

    label {
        display: block;
        height: 48px;
        /* margin-bottom: ${p => p.theme.space[3]}px;  */
        padding-bottom: ${p => p.theme.space[4]}px;       
        
    }

    input {
        display: block;
        width: 200px;
        border-radius: 5px;
        
    }

    span {
        color: ${p => p.theme.colors.red};
    }

    button {
        margin-top: ${p => p.theme.space[4]}px;       
        border-radius: ${p => p.theme.radii[0]}px;
        cursor: pointer;
        margin-left: auto;
        margin-right: auto;

        :hover,
        :focus {
            background-color: #c4d0d5;
        }
    }

`;