import PropTypes from 'prop-types';

import { ContactListStyled } from "components/ContactList/ContactList.styled";
import { ContactItem } from "components/ContactItem/ContactItem";



export const ContactList = ({ contacts, }) => {    

    return (
        <ContactListStyled>
            {contacts.map(({ id, name, number }) => {
                return <ContactItem key={id}
                    id={id}
                    name={name}
                    number={number}
                    />;
            })}
        </ContactListStyled> 
        );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
    })),      
}