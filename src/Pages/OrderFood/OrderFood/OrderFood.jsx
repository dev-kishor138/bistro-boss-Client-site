import PageCover from "../../Shared/PageCover/PageCover";
import orderImage from '../../../assets/shop/banner2.jpg'
import FoodsTab from "../FoodsTab/FoodsTab";
import { Helmet } from "react-helmet-async";


const OrderFood = () => {
    return (
        <div className="container mx-auto">
            <Helmet>
                <title>Bistro Boss || Order Food</title>
            </Helmet>
            <PageCover title="Order Food" subTitle="Would you like to try a dish?" image={orderImage} />
            <FoodsTab />
        </div>
    );
};

export default OrderFood;