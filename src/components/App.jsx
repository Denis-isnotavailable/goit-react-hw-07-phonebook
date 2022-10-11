import FadeLoader from "react-spinners/FadeLoader";

import { useEffect, } from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectIsLoading, selectError, selectFilteredContacts } from 'redux/selectors';
import { fetchContacts } from "redux/operations";

import { Container } from "components/Container/Container";
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";

export const App = () => {  
    const dispatch = useDispatch();
    const contacts = useSelector(selectFilteredContacts);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);        

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);  

    return (
        <Container>            
            <h1>Phonebook</h1>
            <ContactForm />
            <h2>Contacts</h2>
            <Filter />
            {error && <div>Error: { error }</div>}
            {isLoading && !error ? <FadeLoader color="blue"/> : <ContactList contacts={ contacts } />}      
        </Container>
    ); 
};
