import { useSelector } from "react-redux";
import { ContactListStyled } from "components/ContactList/ContactList.styled";
import { ContactItem } from "components/ContactItem/ContactItem";
import { getContacts, getFilter } from 'redux/selectors';


export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);

    function filteredContacts() {
        return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
    }

    return (
            <ContactListStyled>
                {filteredContacts().map(({ id, name, number }) => {
                    return <ContactItem key={id}
                        id={id}
                        name={name}
                        number={number} />;  
                })}                
            </ContactListStyled>
        );
}