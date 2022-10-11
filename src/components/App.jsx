// import { useState, useEffect, } from "react";
import FadeLoader from "react-spinners/FadeLoader";

import { Container } from "components/Container/Container";
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";


export const App = () => {

  return (
    <Container>
      <FadeLoader color={"black"} radius={2} height={15} width={5} margin={2} />
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Container>
    ); 
};
