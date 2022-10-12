import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { AiOutlineUserAdd } from "react-icons/ai";
import BarLoader from "react-spinners/BarLoader";

import { useDispatch, useSelector } from "react-redux";
import { selectContacts, selectOperation, selectError } from 'redux/selectors';
import { addContact } from "redux/operations";

import { FormStyled } from "components/ContactForm/Form.styled";
import { handleMouseDown, handleMouseUp } from "utils/HandleMouse";


const values = {    
        name: "",
        number: "",
    }

const namePattern = "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
const phonePattern = "\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}"
const PhonebookValidationSchema = Yup.object().shape({
    name: Yup.string()
        .matches(namePattern, "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan")
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .required('Required'),
    number: Yup.string()
        .matches(phonePattern, "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +")    
        .required('Required'),
});


export const ContactForm = () => {    
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);    
    const operation = useSelector(selectOperation);
    const error = useSelector(selectError);
    
    
    const handleSubmit = (values, { resetForm }) => {
        const { name } = values;

        if (!contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {            
            dispatch(addContact(values));            
            !error && resetForm();          
        } else {
            alert(`${name} is already in contacts`);
        }        
    }    

    return (
            <Formik initialValues={values} onSubmit={handleSubmit} validationSchema={PhonebookValidationSchema}>
                <FormStyled>
                    <label>
                        Name
                        <Field
                        type="text"
                        name="name" 
                        />
                        <ErrorMessage name="name" component="span" />
                    </label>

                    <label>
                        Number
                        <Field
                        type="tel"
                        name="number"
                        />
                        <ErrorMessage name="number" component="span" />
                    </label>

                 
                <button
                    type="submit"
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                >
                    {operation === "add" ? <BarLoader color="blue" /> : <><AiOutlineUserAdd size="1.2em" /> add contact</> }
                     
                </button>
                </FormStyled>
            </Formik>            
        )
    }