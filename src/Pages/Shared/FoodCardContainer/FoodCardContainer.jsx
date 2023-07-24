import { useMenu } from "../../../hooks/useMenu";
import FoodCard from "../FoodCard/FoodCard";


const FoodCardContainer = ({ categoryName }) => {
    const [menu] = useMenu();
    const offer = menu.filter(item => item.category === categoryName);
    return (
        <section className="my-10">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-4 items-center">
                {
                    offer.map(item => <FoodCard key={item._id} item={item} />)
                }
            </div>
        </section>
    );
};

export default FoodCardContainer;