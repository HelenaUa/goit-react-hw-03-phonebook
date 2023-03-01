import PropTypes from 'prop-types';
import { BtnDel } from './ListItem.styled';


export const ListItem = ({ name, number, deleteContact }) => {
    return (
        <li key={name}>
            {name}: {number}
            <BtnDel type="button" onClick={() => { deleteContact(name) }}>Delete</BtnDel>
        </li>
    )
};

ListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    deleteContact: PropTypes.func,
};