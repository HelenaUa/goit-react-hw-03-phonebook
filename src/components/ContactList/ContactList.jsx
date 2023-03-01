import PropTypes from 'prop-types';
import { ListItem } from 'components/ListItem/ListItem';


export const ContactList = ({ items, onDelete }) => {
    console.log(items);
    return (
        <ul>
            {items.map(item => {
                return (
                    <ListItem key={item.name}
                        name={item.name}
                        number={item.number}
                        deleteContact={onDelete}
                    />
                )
            })}
        </ul>
    )
};

ContactList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired })).isRequired,
    onDelete: PropTypes.func,
};