import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import react rating components
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
// import react icons 
import { BiSolidQuoteLeft } from "react-icons/bi"


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="my-20">
            <SectionTitle title='What our customer say?' heading='testimonials' />
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}

                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >

                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className="flex flex-col justify-center items-center mx-32 text-center mb-20">
                            <Rating style={{ maxWidth: 150 }} className="my-5" value={review.rating} readOnly />
                            <span className="text-5xl"><BiSolidQuoteLeft /></span>

                            <p className="py-5">{review.details}</p>
                            <h3 className="uppercase text-[#CD9003] text-xl">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;