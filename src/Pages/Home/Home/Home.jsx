import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import Bistro from '../Bistro/Bistro';
import Call from '../Call/Call';
import Category from '../Category/Category';
import ChefRecommends from '../ChefRecommends/ChefRecommends';
import Featured from '../Featured/Featured';
import PopularMenu from '../PopularMenu/PopularMenu';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {

    return (
        <div className='container mx-auto'>
            <Helmet>
                <title>Bistro Boss || Home</title>
            </Helmet>
            <Banner />
            <div className='lg:mx-20'>
                <Category />
                <Bistro />
                <PopularMenu />
                <Call />
                <ChefRecommends />
                <Featured />
                <Testimonials />

            </div>
        </div>
    );
};

export default Home;