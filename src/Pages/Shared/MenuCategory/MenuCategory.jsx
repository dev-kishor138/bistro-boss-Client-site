import MyButton from "../../../components/MyButton/MyButton";
import { useMenu } from "../../../hooks/useMenu";
import MenuItem from "../MenuItem/MenuItem";


const MenuCategory = ({ categoryName }) => {
    const [menu] = useMenu();
    const offer = menu.filter(item => item.category === categoryName);

    return (
        <section className="my-20">
            <div className="grid md:grid-cols-2 gap-x-10 space-y-5 items-center">
                {
                    offer.map(item => <MenuItem key={item._id} item={item} />)
                }
            </div>
            <MyButton btnText="order your Favorite Food" />
        </section>
    );
};

export default MenuCategory;
