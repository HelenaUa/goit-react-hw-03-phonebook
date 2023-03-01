import PropTypes from 'prop-types';
import { Input } from './Filter.styled';


export const Filter = ({ filter, onChange }) => {
    return (
        <div>
            <h3>Find contacts by name</h3>
            <Input type="text" name="filter" value={filter} onChange={onChange} />
        </div>
    )
};

Filter.propTypes = {
    filter: PropTypes.string,
    onChange: PropTypes.func,
};