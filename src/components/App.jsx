import FadeLoader from "react-spinners/FadeLoader";

import { useState, useEffect, } from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectIsLoading, selectError, selectFilteredContacts } from 'redux/selectors';
import { fetchContacts } from "redux/operations";

import { Container } from "components/Container/Container";
// import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import { Modal } from "./Modal/Modal";
import { HeadContacts } from "./HeadContacts/HeadContacts";

export const App = () => {
    const [ismodalOpen, setIsmodalOpen] = useState(false);

    const dispatch = useDispatch();
    const contacts = useSelector(selectFilteredContacts);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);        

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);  
  
    const closeModal = () => {
      setIsmodalOpen(false);
    }

    return (
        <Container>            
          <h1>Phonebook</h1>
          {ismodalOpen && <Modal onClose={closeModal}/>}        
          <Filter />
          <HeadContacts openModal={setIsmodalOpen} />        
          {error && <div>Error: { error }</div>}
          {isLoading && !error ? <FadeLoader color="blue"/> : <ContactList contacts={ contacts } />}      
        </Container>
    ); 
};
