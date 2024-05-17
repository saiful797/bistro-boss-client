import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";

const HomePage = () => {
    return (
        <div>
            <Banner />
            <Category />
            <PopularMenu />

            <div className="w-20 h-20 bg-slate-200 rounded-e-full rounded-b-full gap-px">

            </div>
        </div>
    );
};

export default HomePage;
