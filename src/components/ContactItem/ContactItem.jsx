import PropTypes from 'prop-types';
import { AiFillDelete, AiOutlineUser } from "react-icons/ai";

import { useDispatch } from "react-redux";
import { deleteContact } from "redux/operations";

import { ContactItemStyled } from "components/ContactItem/ContactItem.styled";
import { handleMouseDown, handleMouseUp } from "utils/HandleMouse";

export const ContactItem = ({ id, name, number, }) => {
    const dispatch = useDispatch();

    function onDeleteContact(id) {
        dispatch(deleteContact(id));
    }

    return (
        <ContactItemStyled >
            <AiOutlineUser color="#0000ff" size="24px" />
            <p>{name}: {number}</p>            
            <button type="button"
                onClick={() => onDeleteContact(id)}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
            >
                <AiFillDelete color="#860202" size="24px" />
            </button>
        </ContactItemStyled>
    );
}

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,     
}