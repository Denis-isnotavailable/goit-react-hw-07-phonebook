import { useDispatch, useSelector } from "react-redux";
import { FilterStyled } from "components/Filter/Filter.styled";
import { filterSet } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';


export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);

    const handleChange = e => {
        const { value } = e.target;
        console.log(value);        
        dispatch(filterSet(value));
    };

    return (
            <FilterStyled>
                <p>Find contacts by name</p>
                <input
                    type="text"
                    name="filter"
                    value={filter}
                    onChange={handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"              
                />
            </FilterStyled>
        );
}