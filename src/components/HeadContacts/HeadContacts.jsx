import { AiOutlineUserAdd } from "react-icons/ai";
import PropTypes from 'prop-types';
const { HeadContactsStyled, ButtonOpenStyled } = require("./HeadContacts.styled");

export const HeadContacts = ({openModal}) => {


    return <HeadContactsStyled>
        <h2>Contacts</h2>
        <ButtonOpenStyled type="button" onClick={() => openModal(true)}>
            <AiOutlineUserAdd size={40} />
        </ButtonOpenStyled>
    </HeadContactsStyled>;
}

HeadContacts.propTypes = {
    openModal: PropTypes.func.isRequired,
}