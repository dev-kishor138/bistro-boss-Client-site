import { Link } from "react-router-dom";
import errorImage from "../../assets/404.gif"
import { BsArrowLeft } from "react-icons/bs";

const ErrorPage = () => {
    return (
        <section className="container mx-auto">
            <div className="mx-60">
                <img className="w-full" src={errorImage} alt="" />
            </div>
            <div className="absolute top-5 right-1/2 text-center ">
                <p className="text-md mb-3">Page Not Found Please</p>
                <Link className="btn bg-[#0088fe] text-white hover:text-[#0088fe]" to="/"><span><BsArrowLeft /></span> Go Back</Link>
            </div>
        </section>
    );
};

export default ErrorPage;