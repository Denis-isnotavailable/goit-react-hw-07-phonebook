import { useDispatch, useSelector } from "react-redux";
import { FilterStyled } from "components/Filter/Filter.styled";
import { filterSet } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';


export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);

    const handleChange = e => {
        const { value } = e.target;               
        dispatch(filterSet(value));
    };

    return (
            <FilterStyled>
                {/* <p>Find contacts by name</p> */}
                <input
                    type="text"
                    name="filter"
                    value={filter}
                    onChange={handleChange}
                    placeholder="Search contact"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"              
                />
            </FilterStyled>
        );
}