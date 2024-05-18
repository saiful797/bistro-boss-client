import MenuItems from "../../../Shared/MenuItems/MenuItems";
import PropTypes from "prop-types";

const MenuCategory = ({items}) => {
    
    return (
        <div className="grid md:grid-cols-2 gap-4">
            {
                items.map(item => <MenuItems 
                    key={item._id} 
                    item = {item}
                />)
            }
        </div>
    );
};

MenuCategory.propTypes={
    items: PropTypes.array,
}
export default MenuCategory;