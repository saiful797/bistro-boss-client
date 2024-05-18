import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../assets/menu/banner3.jpg'
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../components/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === "dessert");
    const pizza = menu.filter(item => item.category === "pizza");
    const salad = menu.filter(item => item.category === "salad");
    const soup = menu.filter(item => item.category === "soup");
    const offered = menu.filter(item => item.category === "offered");

    return (
        <div>
            <Helmet>
                <title>
                    Bistro Boss | Menu
                </title>
            </Helmet>
            <Cover img = { menuImg }/>
            <SectionTitle 
               subHeading={"Don't miss"}
               heading={"TODAY'S OFFER"}
            />
            <MenuCategory items={offered}/>
            
        </div>
    );
};

export default Menu;