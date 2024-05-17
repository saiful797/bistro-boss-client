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
        <section className="m-10">
            <SectionTitle 
              subHeading={'Check it out'}
              heading={'FROM OUR MENU'}
            
            />
            <div className="grid md:grid-cols-2 gap-4">
                {
                    menu.map(item => <MenuItems 
                        key={item._id} 
                        item = {item}
                    />)
                }
            </div>
            <div className="flex justify-center items-center">
                <button className="btn btn-outline mt-4 border-0 border-b-4 border-b-black mb-5 text-2xl">View Full Menu</button>
            </div>
            
        </section>
    );
};

export default PopularMenu;