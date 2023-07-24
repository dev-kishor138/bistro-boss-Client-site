import { Parallax } from "react-parallax";


const Cover = ({ image, title, subTitle }) => {
    return (
        <Parallax blur={{ min: -50, max: 50 }} bgImage={image} bgImageAlt="the cat" strength={200}>
            <div className="hero h-[400px] px-52" >

                <div className="bg-black bg-opacity-30 w-full py-16 text-center text-neutral-content">
                    <div className="text-center">
                        <h1 className="my-font mb-5 text-4xl font-bold uppercase">{title}</h1>
                        <p className="w-10/12 mx-auto" >{subTitle}</p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;