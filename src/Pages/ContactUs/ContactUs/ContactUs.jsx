import PageCover from "../../Shared/PageCover/PageCover";
import contactImage from '../../../assets/contact/banner.jpg';
import Location from "../Location/Location";
import ContactForm from "../ContactForm/ContactForm";
import { Helmet } from "react-helmet-async";


const ContactUs = () => {
    return (
        <div className="container mx-auto">
            <Helmet>
                <title>Bistro Boss || Contact Us</title>
            </Helmet>
            <PageCover image={contactImage} title="Contact Us" subTitle="IF food is delicious please contact us" />
            <div className="lg:mx-20">
                <Location />
                <ContactForm />
            </div>
        </div>
    );
};

export default ContactUs;