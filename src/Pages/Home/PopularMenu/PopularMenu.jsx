import MyButton from "../../../components/MyButton/MyButton";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useMenu } from "../../../hooks/useMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    return (
        <section className="lg:max-w-7xl mx-auto mb-20">
            <SectionTitle title='Check it out' heading='FROM OUR MENU'></SectionTitle>
            <div className="grid md:grid-cols-2 gap-4 space-y-5 items-center">
                {
                    popular.map(item => <MenuItem key={item._id} item={item} />)
                }
            </div>
            <MyButton btnText="View full menu" />
        </section>
    );
};

export default PopularMenu;