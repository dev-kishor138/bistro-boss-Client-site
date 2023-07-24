import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import FoodCardContainer from "../../Shared/FoodCardContainer/FoodCardContainer";



const ChefRecommends = () => {

    return (
        <section className="my-10">
            <SectionTitle title="You Should Try" heading="Chef recommends" />
            <FoodCardContainer categoryName='offered' />
        </section>
    );
};

export default ChefRecommends;