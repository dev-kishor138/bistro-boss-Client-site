import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Banner.css'
// image import 
import img1 from '../../../assets/home/01.jpg'
import img2 from '../../../assets/home/02.jpg'
import img3 from '../../../assets/home/03.png'
import img4 from '../../../assets/home/04.jpg'
import img5 from '../../../assets/home/05.png'
import img6 from '../../../assets/home/06.png'




const Banner = () => {
    const bannerImages = [
        {
            id: 1,
            img: img1
        },
        {
            id: 2,
            img: img2
        },
        {
            id: 3,
            img: img3
        },
        {
            id: 4,
            img: img4
        },
        {
            id: 5,
            img: img5
        },
        {
            id: 6,
            img: img6
        },
    ]



    return (
        <div className='h-[600px] flex justify-center items-center mb-40'>
            <Carousel autoPlay={true} interval={3000} infiniteLoop={true}>

                {
                    bannerImages.map(image => <div key={image.id} className='flex justify-center items-center'>
                        <img className='max-h-full max-w-full' src={image.img} />

                    </div>)
                }
            </Carousel>
        </div>
    );
};

export default Banner;