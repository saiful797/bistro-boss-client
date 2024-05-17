import SectionTitle from "../../../components/SectionTitle";

const Testimonial = () => {
    return (
        <section>
            <SectionTitle 
               subHeading={'What Our Clients Say'}
               heading={'TESTIMONIALS'}
            />
            <div className="rating rating-lg flex justify-center mb-5">
                <input type="radio" name="rating-8" className="mask mask-star-2 bg-[#CD9003]" />
                <input type="radio" name="rating-8" className="mask mask-star-2 bg-[#CD9003]"/>
                <input type="radio" name="rating-8" className="mask mask-star-2 bg-[#CD9003]" />
                <input type="radio" name="rating-8" className="mask mask-star-2 bg-[#CD9003]" checked/>
                <input type="radio" name="rating-8" className="mask mask-star-2 bg-[#CD9003]" />
                </div>
        </section>
    );
};

export default Testimonial;