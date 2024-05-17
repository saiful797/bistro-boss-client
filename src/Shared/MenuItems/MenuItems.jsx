import PropTypes from 'prop-types';

const MenuItems = ({item}) => {
    const {name, recipe, image, category, price} = item;
    return (
        <div>
            <p>length: </p>
        </div>
    );
};

MenuItems.propTypes={
    item: PropTypes.object
}
export default MenuItems;