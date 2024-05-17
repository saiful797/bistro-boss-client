import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import axios from "axios";
import MenuItems from "../../../Shared/MenuItems/MenuItems";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        axios.get('menu.json')
        .then(res => {
            const data = res.data;
            const popularItems = data.filter(item => item.category === 'popular')
            setMenu(popularItems);
        })
    },[])
    return (
        <section>
            <SectionTitle 
              subHeading={'Check it out'}
              heading={'FROM OUR MENU'}
            
            />
            <div>
                {
                    menu.map(item => <MenuItems 
                        key={item._id} 
                        item = {item}
                    />)
                }
            </div>
            
        </section>
    );
};

export default PopularMenu;