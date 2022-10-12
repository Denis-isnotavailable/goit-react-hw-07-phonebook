import FadeLoader from "react-spinners/FadeLoader";

import { useState, useEffect, } from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectOperation, selectError, selectFilteredContacts } from 'redux/selectors';
import { fetchContacts } from "redux/operations";

import { Container } from "components/Container/Container";
// import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import { Modal } from "./Modal/Modal";
import { HeadContacts } from "./HeadContacts/HeadContacts";

export const App = () => {
  const [ismodalOpen, setIsmodalOpen] = useState(false);
  // const [idDeleted, setIdDeleted] = useState(0);

    const dispatch = useDispatch();
    const contacts = useSelector(selectFilteredContacts);  
    const operation = useSelector(selectOperation);
    const error = useSelector(selectError);        

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
  
  // useEffect(() => {
  //   console.log(idDeleted);
    
  //   contacts.filter(contact => contact.id !== idDeleted);
  //   console.log(contacts);
  //   }, [contacts, idDeleted]);
  
    const closeModal = () => {
      setIsmodalOpen(false);
    }

    return (
        <Container>            
          <h1>Phonebook</h1>
          {ismodalOpen && <Modal onClose={closeModal}/>}        
          <Filter />
          <HeadContacts openModal={setIsmodalOpen} />
          {operation === "fetch" && !error ? <FadeLoader color="blue"/> : <ContactList contacts={ contacts } />}      
        </Container>
    ); 
};
