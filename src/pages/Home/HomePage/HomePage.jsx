import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonial/Testimonial";

const HomePage = () => {
    return (
        <div>
            <Banner />
            <Category />
            <PopularMenu />
            <Featured />
            <Testimonial />
        </div>
    );
};

export default HomePage;
