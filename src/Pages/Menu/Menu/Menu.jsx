import { Helmet } from "react-helmet-async";
import menuImage from "../../../assets/menu/banner3.jpg"
import PageCover from "../../Shared/PageCover/PageCover";
import Cover from "../../Shared/Cover/Cover";
import dessertImage from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImage from "../../../assets/menu/pizza-bg.jpg";
import saladImage from "../../../assets/menu/salad-bg.jpg";
import soupImage from "../../../assets/menu/soup-bg.jpg";
import TodaysOffer from "../TodaysOffer/TodaysOffer"
import MenuCategory from "../../Shared/MenuCategory/MenuCategory";



const Menu = () => {
    return (
        <div className="container mx-auto">
            <Helmet>
                <title>Eclipse Blend & Blossom || Menu</title>
            </Helmet>
            <PageCover
                image={menuImage}
                title="Our Menu"
                subTitle="Would you like to try a dish?"
            />
            <div className="lg:mx-20">
                <TodaysOffer />
                <div className="my-10">
                    <Cover
                        image={dessertImage}
                        title="Desserts"
                        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    />
                </div>
                <MenuCategory categoryName={'dessert'} />
                <div className="my-10">
                    <Cover
                        image={pizzaImage}
                        title="Pizza"
                        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    />
                </div>
                <MenuCategory categoryName={'pizza'} />
                <div className="my-10">
                    <Cover
                        image={saladImage}
                        title="Salads"
                        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    />
                </div>
                <MenuCategory categoryName={'salad'} />
                <div className="my-10">
                    <Cover
                        image={soupImage}
                        title="Soups"
                        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    />
                </div>
                <MenuCategory categoryName={'soup'} />
            </div>

        </div>
    );
};

export default Menu;