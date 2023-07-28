import { FaBars, FaHome, FaUsers } from 'react-icons/fa';
import { AiFillHome, AiOutlineBars, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsCalendar3, BsFillBagFill, BsWallet2 } from 'react-icons/bs';
import { VscPreview } from 'react-icons/vsc';
import { LuCalendarHeart } from 'react-icons/lu';
import { GrContact } from 'react-icons/gr';
import { ImSpoonKnife } from 'react-icons/im';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';

import './Dashboard.css'



const DashBoard = () => {
    // const [open, setOpen] = useState(false);
    //TODO: Load data from the sever to dynamic isAdmin based on data
    // const isAdmin = true;
    const [isAdmin] = useAdmin();
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Page content here */}
                <Outlet />
                <label htmlFor="my-drawer-2" className="cursor-pointer text-2xl absolute top-5 left-10 drawer-button lg:hidden"><FaBars /></label>

            </div>
            <div className="drawer-side bg-[#ff1800] text-center text-[#fff]">
                <label htmlFor="my-drawer-2" className="drawer-overlay "></label>
                <h2><NavLink to="/" className="my-font text-xl mt-3 uppercase font-bold grid tracking-[2px]">Eclipse Blend & <span className='text-md font-semibold tracking-[2px]'> Blossom</span></NavLink></h2>
                <ul className="menu p-4 w-60 mt-5 text-[#fff] my-font">
                    {/* Sidebar content here */}
                    {
                        isAdmin ?
                            <>
                                <li><NavLink className="hover:text-[#fff]" to="/dashboard/admin-home"><AiFillHome />Admin Home</NavLink></li>
                                <li><NavLink className="hover:text-[#fff]" to="/dashboard/add-item"><ImSpoonKnife />Add Items</NavLink></li>
                                <li><NavLink className="hover:text-[#fff]" to="/dashboard/manage-item"><AiOutlineBars />Manage Item</NavLink></li>
                                {/* <li><NavLink className="hover:text-[#fff]" to="/dashboard/manage-bookings"><BsJournalBookmarkFill />Manage Bookings</NavLink></li> */}
                                <li><NavLink className="hover:text-[#fff]" to="/dashboard/all-users"><FaUsers />All Users</NavLink></li>

                            </>
                            :
                            <>
                                <li><NavLink to="/dashboard/user-home"><AiFillHome />User Home</NavLink></li>
                                <li><NavLink to="/dashboard/reservation"><BsCalendar3 />Reservation</NavLink></li>
                                <li><NavLink to="/dashboard/payment-history"><BsWallet2 />Payment History</NavLink></li>
                                <li><NavLink to="/dashboard/my-cart"><AiOutlineShoppingCart />My Cart</NavLink></li>
                                <li><NavLink to="/dashboard/add-review"><VscPreview />Add Review</NavLink></li>
                                <li><NavLink to="/dashboard/bookings"><LuCalendarHeart />My Bookings</NavLink></li>
                            </>
                    }

                    <div className="divider before:bg-[#fff] after:bg-[#fff]"></div>
                    <li><NavLink to="/"><FaHome />View Store</NavLink></li>
                    <li><NavLink to="/menu"><FaBars />Products</NavLink></li>
                    <li><NavLink to="/shop"><BsFillBagFill />Shop</NavLink></li>
                    <li><NavLink to="/contact"><GrContact />contact</NavLink></li>
                </ul>

            </div>
        </div>
        // <div className="flex p-0">
        //     <div
        //         className={` ${open ? "w-0" : "w-60 "
        //             } flex flex-col h-screen p-3 bg-gray-800 shadow duration-300`}
        //     >
        //         <div className="space-y-3">
        //             <div className="flex items-center justify-between">
        //                 <h2 className="text-xl font-bold text-white">
        //                     Dashboard
        //                 </h2>
        //                 <button className="lg:hidden fixed" onClick={() => setOpen(!open)}>
        //                     <svg
        //                         xmlns="http://www.w3.org/2000/svg"
        //                         className="w-6 h-6 text-white"
        //                         fill="none"
        //                         viewBox="0 0 24 24"
        //                         stroke="currentColor"
        //                         strokeWidth={2}
        //                     >
        //                         <path
        //                             strokeLinecap="round"
        //                             strokeLinejoin="round"
        //                             d="M4 6h16M4 12h8m-8 6h16"
        //                         />
        //                     </svg>
        //                 </button>
        //             </div>
        //             <div className="relative">
        //                 <span className="absolute inset-y-0 left-0 flex items-center py-4">
        //                     <button
        //                         type="submit"
        //                         className="p-2 focus:outline-none focus:ring"
        //                     >
        //                         <svg
        //                             xmlns="http://www.w3.org/2000/svg"
        //                             className="w-6 h-6"
        //                             fill="none"
        //                             viewBox="0 0 24 24"
        //                             stroke="currentColor"
        //                             strokeWidth={2}
        //                         >
        //                             <path
        //                                 strokeLinecap="round"
        //                                 strokeLinejoin="round"
        //                                 d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        //                             />
        //                         </svg>
        //                     </button>
        //                 </span>
        //                 <input
        //                     type="search"
        //                     name="Search"
        //                     placeholder="Search..."
        //                     className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none"
        //                 />
        //             </div>
        //             <div className="flex-1">
        //                 <ul className="pt-2 pb-4 space-y-1 text-sm">
        //                     <li className="rounded-sm">
        //                         <a
        //                             href="#"
        //                             className="flex items-center p-2 space-x-3 rounded-md"
        //                         >
        //                             <svg
        //                                 xmlns="http://www.w3.org/2000/svg"
        //                                 className="w-6 h-6 text-gray-100"
        //                                 fill="none"
        //                                 viewBox="0 0 24 24"
        //                                 stroke="currentColor"
        //                                 strokeWidth={2}
        //                             >
        //                                 <path
        //                                     strokeLinecap="round"
        //                                     strokeLinejoin="round"
        //                                     d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        //                                 />
        //                             </svg>
        //                             <span className="text-gray-100">Home</span>
        //                         </a>
        //                     </li>
        //                     <li className="rounded-sm">
        //                         <a
        //                             href="#"
        //                             className="flex items-center p-2 space-x-3 rounded-md"
        //                         >
        //                             <svg
        //                                 xmlns="http://www.w3.org/2000/svg"
        //                                 className="w-6 h-6 text-gray-100"
        //                                 fill="none"
        //                                 viewBox="0 0 24 24"
        //                                 stroke="currentColor"
        //                                 strokeWidth={2}
        //                             >
        //                                 <path
        //                                     strokeLinecap="round"
        //                                     strokeLinejoin="round"
        //                                     d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
        //                                 />
        //                             </svg>
        //                             <span className="text-gray-100">Inbox</span>
        //                         </a>
        //                     </li>
        //                     <li className="rounded-sm">
        //                         <a
        //                             href="#"
        //                             className="flex items-center p-2 space-x-3 rounded-md"
        //                         >
        //                             <svg
        //                                 xmlns="http://www.w3.org/2000/svg"
        //                                 className="w-6 h-6 text-gray-100"
        //                                 fill="none"
        //                                 viewBox="0 0 24 24"
        //                                 stroke="currentColor"
        //                                 strokeWidth={2}
        //                             >
        //                                 <path
        //                                     strokeLinecap="round"
        //                                     strokeLinejoin="round"
        //                                     d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        //                                 />
        //                             </svg>
        //                             <span className="text-gray-100">
        //                                 Orders
        //                             </span>
        //                         </a>
        //                     </li>
        //                     <li className="rounded-sm">
        //                         <a
        //                             href="#"
        //                             className="flex items-center p-2 space-x-3 rounded-md"
        //                         >
        //                             <svg
        //                                 xmlns="http://www.w3.org/2000/svg"
        //                                 className="w-6 h-6 text-gray-100"
        //                                 fill="none"
        //                                 viewBox="0 0 24 24"
        //                                 stroke="currentColor"
        //                                 strokeWidth={2}
        //                             >
        //                                 <path
        //                                     strokeLinecap="round"
        //                                     strokeLinejoin="round"
        //                                     d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        //                                 />
        //                                 <path
        //                                     strokeLinecap="round"
        //                                     strokeLinejoin="round"
        //                                     d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        //                                 />
        //                             </svg>
        //                             <span className="text-gray-100">
        //                                 Settings
        //                             </span>
        //                         </a>
        //                     </li>
        //                     <li className="rounded-sm">
        //                         <a
        //                             href="#"
        //                             className="flex items-center p-2 space-x-3 rounded-md"
        //                         >
        //                             <svg
        //                                 xmlns="http://www.w3.org/2000/svg"
        //                                 className="w-6 h-6 text-gray-100"
        //                                 fill="none"
        //                                 viewBox="0 0 24 24"
        //                                 stroke="currentColor"
        //                                 strokeWidth={2}
        //                             >
        //                                 <path
        //                                     strokeLinecap="round"
        //                                     strokeLinejoin="round"
        //                                     d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
        //                                 />
        //                             </svg>
        //                             <span className="text-gray-100">
        //                                 Logout
        //                             </span>
        //                         </a>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="container mx-auto mt-12">
        //         <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
        //             <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
        //                 <div className="text-sm font-medium text-gray-500 truncate">
        //                     Total users
        //                 </div>
        //                 <div className="mt-1 text-3xl font-semibold text-gray-900">
        //                     12,00
        //                 </div>
        //             </div>
        //             <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
        //                 <div className="text-sm font-medium text-gray-500 truncate">
        //                     Total Profit
        //                 </div>
        //                 <div className="mt-1 text-3xl font-semibold text-gray-900">
        //                     $ 450k
        //                 </div>
        //             </div>
        //             <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
        //                 <div className="text-sm font-medium text-gray-500 truncate">
        //                     Total Orders
        //                 </div>
        //                 <div className="mt-1 text-3xl font-semibold text-gray-900">
        //                     20k
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default DashBoard;