import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import FeaturedImage from '../../../assets/home/featured.jpg';
import './Featured.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';


const Featured = () => {
    return (
        <>
            <section className="featured-img bg-fixed pt-4 pb-10 my-20 text-white">
                <SectionTitle title="Check it out" heading="Featured Item" />

                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="md:flex justify-center items-center px-40 pb-20 pt-10">
                            <div>
                                <img className="" src={FeaturedImage} alt="" />
                            </div>
                            <div className="md:ml-12">
                                <p>March 24, 2033</p>
                                <p className="uppercase">Where Can i get some?</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe reiciendis harum ab molestiae! Veritatis, veniam dignissimos laboriosam dolores adipisci, illo nihil officiis assumenda doloribus maxime vel nobis. Sint, a ipsum.</p>
                                <button className="btn bg-transparent border-0 border-b-2 text-white border-white hover:bg-white hover:text-black">Order Now</button>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="md:flex justify-center items-center px-40 pb-20 pt-10">
                            <div>
                                <img className="" src={FeaturedImage} alt="" />
                            </div>
                            <div className="md:ml-12">
                                <p>March 24, 2033</p>
                                <p className="uppercase">Where Can i get some?</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe reiciendis harum ab molestiae! Veritatis, veniam dignissimos laboriosam dolores adipisci, illo nihil officiis assumenda doloribus maxime vel nobis. Sint, a ipsum.</p>
                                <button className="btn bg-transparent border-0 border-b-2 text-white border-white hover:bg-white hover:text-black">Order Now</button>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="md:flex justify-center items-center px-40 pb-20 pt-10">
                            <div>
                                <img className="" src={FeaturedImage} alt="" />
                            </div>
                            <div className="md:ml-12">
                                <p>March 24, 2033</p>
                                <p className="uppercase">Where Can i get some?</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe reiciendis harum ab molestiae! Veritatis, veniam dignissimos laboriosam dolores adipisci, illo nihil officiis assumenda doloribus maxime vel nobis. Sint, a ipsum.</p>
                                <button className="btn bg-transparent border-0 border-b-2 text-white border-white hover:bg-white hover:text-black">Order Now</button>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="md:flex justify-center items-center px-40 pb-20 pt-10">
                            <div>
                                <img className="" src={FeaturedImage} alt="" />
                            </div>
                            <div className="md:ml-12">
                                <p>March 24, 2033</p>
                                <p className="uppercase">Where Can i get some?</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe reiciendis harum ab molestiae! Veritatis, veniam dignissimos laboriosam dolores adipisci, illo nihil officiis assumenda doloribus maxime vel nobis. Sint, a ipsum.</p>
                                <button className="btn bg-transparent border-0 border-b-2 text-white border-white hover:bg-white hover:text-black">Order Now</button>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="md:flex justify-center items-center px-40 pb-20 pt-10">
                            <div>
                                <img className="" src={FeaturedImage} alt="" />
                            </div>
                            <div className="md:ml-12">
                                <p>March 24, 2033</p>
                                <p className="uppercase">Where Can i get some?</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe reiciendis harum ab molestiae! Veritatis, veniam dignissimos laboriosam dolores adipisci, illo nihil officiis assumenda doloribus maxime vel nobis. Sint, a ipsum.</p>
                                <button className="btn bg-transparent border-0 border-b-2 text-white border-white hover:bg-white hover:text-black">Order Now</button>
                            </div>

                        </div>
                    </SwiperSlide>
                </Swiper>

            </section>

        </>
    );
};

export default Featured;