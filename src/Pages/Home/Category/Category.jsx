import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import image 
import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useEffect, useRef } from 'react';

const Category = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.autoplay.start();
        }
    }, []);

    return (
        <section>
            <SectionTitle heading="ORDER ONLINE" title="From 11:00am to 10:00pm"></SectionTitle>
            <Swiper
                ref={swiperRef}
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3000, // Set the time interval between slides (in milliseconds)
                }}
                loop={true}
                modules={[Pagination]}
                className="mySwiper mb-20"
                onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
                <SwiperSlide>
                    <img src={img1} alt="" />
                    <h3 className='my-font text-2xl text-center -mt-20 uppercase font-semibold text-white'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <h3 className='my-font text-2xl text-center -mt-20 uppercase font-semibold text-white'>Pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                    <h3 className='my-font text-2xl text-center -mt-20 uppercase font-semibold text-white'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                    <h3 className='my-font text-2xl text-center -mt-20 uppercase font-semibold text-white'>Desert</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" />
                    <h3 className='my-font text-2xl text-center -mt-20 uppercase font-semibold text-white'>Salads</h3>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Category;
