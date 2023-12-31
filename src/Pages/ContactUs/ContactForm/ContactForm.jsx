// import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { BsFillSendFill } from "react-icons/bs";


const ContactForm = () => {
    return (
        <section className=" lg:mx-20">


            <div className="bg-[#F3F3F3] px-10 py-2">
                <form className="grid">
                    <div className="flex justify-between items-center gap-3">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name*</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email*</span>
                            </label>
                            <input type="email" placeholder="Email" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input type="text" placeholder="Phone" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Message</span>

                        </label>
                        <textarea className="textarea textarea-bordered h-40 resize-none" placeholder="Write your message here"></textarea>

                    </div>
                    <div className="text-center mt-10 ">
                        <button className="btn bg-gradient-to-r from-[#ff1800] to-[#ff1900] rounded-none text-white">Send Message <span><BsFillSendFill /></span></button>
                    </div>
                </form>
            </div>

        </section>
    );
};

export default ContactForm;