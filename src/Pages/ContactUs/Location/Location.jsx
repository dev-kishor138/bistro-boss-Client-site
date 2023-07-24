import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FiPhoneCall } from 'react-icons/fi';

import { PiClockCountdownFill } from 'react-icons/pi';
import { FaLocationDot } from 'react-icons/fa6';


const Location = () => {
    return (
        <section className="my-20" >
            <SectionTitle title="Visit Us" heading="Our location" />

            <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:mx-40 gap-5">
                <div className="h-[200px] border p-5 relative">
                    <button className="btn w-full rounded-none bg-[#D1A054] text-white text-xl absolute top-0 left-0"><FiPhoneCall /></button>
                    <div className="bg-[#F3F3F3] w-full h-[150px] flex flex-col justify-center items-center">
                        <h3 className="text-md mb-2 font-normal uppercase">Phone</h3>
                        <p className="text-xs">+38 (012) 34 56 789</p>
                    </div>
                </div>
                <div className="h-[200px] border p-5 relative">
                    <button className="btn w-full rounded-none bg-[#D1A054] text-white text-xl absolute top-0 left-0">
                        <FaLocationDot />
                    </button>


                    <div className="bg-[#F3F3F3] w-full h-[150px] flex flex-col justify-center items-center">
                        <h3 className="text-md mb-2 font-normal uppercase">Address</h3>
                        <p className="text-xs">+38 (012) 34 56 789</p>
                    </div>
                </div>
                <div className="h-[200px] border p-5 relative">
                    <button className="btn w-full rounded-none bg-[#D1A054] text-white text-xl absolute top-0 left-0"><PiClockCountdownFill /></button>
                    <div className="bg-[#F3F3F3] w-full h-[150px] flex flex-col justify-center items-center">
                        <h3 className="text-md mb-2 font-normal uppercase">Working Hours</h3>
                        <p className="text-xs">Mon - Fri: 08:00 - 22:00 <br />
                            Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;