import { Parallax } from "react-parallax";



const PageCover = ({ image, title, subTitle, }) => {
    return (

        <Parallax blur={{ min: -50, max: 50 }} bgImage={image} bgImageAlt="the cat" strength={200}>
            <div className="hero h-[500px] px-40" >

                <div className="bg-black bg-opacity-30 w-full py-24 text-center text-neutral-content">
                    <div className="text-center">
                        <h1 className="my-font mb-5 text-6xl font-bold uppercase">{title}</h1>
                        <p className="uppercase" >{subTitle}</p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default PageCover;