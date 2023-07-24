import MyButton from "../../../components/MyButton/MyButton";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useMenu } from "../../../hooks/useMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";



const TodaysOffer = () => {
    const [menu] = useMenu();
    const offer = menu.filter(item => item.category === 'offered');

    return (
        <section className="my-20">
            <SectionTitle title="Don't Miss" heading="today's offer" />
            <div className="grid md:grid-cols-2 gap-10 items-center">
                {
                    offer.map(item => <MenuItem key={item._id} item={item} />)
                }
            </div>
            <MyButton btnText="order your Favorite Food" />
        </section>
    );
};

export default TodaysOffer;