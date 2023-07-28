import { Link } from 'react-router-dom';
import userIcon from '../../../assets/others/profile.png';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import useCart from '../../../hooks/useCart';
import useAdmin from '../../../hooks/useAdmin';
// import './NavBar.css'







const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [cart] = useCart();
    // console.log(Array.isArray(cart))
    // const totalPrice = 0;
    const totalPrice = cart.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price;
    }, 0)

    // const [activeNav, setActiveNav] = useState(false);

    const menuItem = <>
        <li className=' uppercase'><Link className='hover:text-[#EEFF25] ' to="/">Home</Link></li>
        <li className=' uppercase'><Link className='hover:text-[#EEFF25]' to="/menu">Our Menu</Link></li>
        <li className=' uppercase'><Link className='hover:text-[#EEFF25]' to="/order">Order Food</Link></li>
        {/* <li className=' uppercase'>{
            isAdmin ? <Link className='hover:text-[#EEFF25] active:text-[#EEFF25]' to="/dashboard/admin-home">Dashboard</Link> : <Link className='hover:text-[#EEFF25] active:text-[#EEFF25]' to="/dashboard/user-home">Dashboard</Link>
        }</li> */}
        <li className=' uppercase'><Link className='hover:text-[#EEFF25]' to="/contact">Contact Us</Link></li>
    </>

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `LogOut Successfully`,
                    showConfirmButton: false,
                    timer: 3000
                })
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className="navbar bg-black text-white fixed z-10 bg-opacity-30 px-10">
            <div className="flex-1">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                        {menuItem}
                    </ul>
                </div>
                <h2><Link to="/" className="my-font text-2xl uppercase font-bold grid tracking-[2px]">Eclipse Blend &  <span className='text-xl font-semibold tracking-[5px]'>Blossom</span></Link></h2>
            </div>
            <div className=" hidden lg:flex">
                <ul className="menu menu-horizontal">
                    {menuItem}
                </ul>
                <div className='flex gap-2'>
                    {isAdmin ? '' : <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">{cart?.length || 0}</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-[#313131] shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">{cart?.length || 0} Items</span>
                                {user ? <span className="text-info">Subtotal: ${totalPrice}</span> : <span className="text-info">Subtotal: $0</span>}
                                <div className="card-actions">
                                    <Link to="/dashboard/my-cart" className="btn btn-primary btn-block">View cart</Link>
                                </div>
                            </div>
                        </div>
                    </div>}
                    {
                        user ?
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        {
                                            user?.photoURL ? <img src={user.photoURL} /> :
                                                <img src={userIcon} />
                                        }
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-2 z-[1] p-2 shadow bg-white text-black w-52">
                                    <li className=''>
                                        {isAdmin ? <Link to="/dashboard/admin-home" target="_blank" className="justify-between className='hover:text-white'">
                                            {user?.displayName}
                                            <span className="badge">New</span>
                                        </Link> : <Link to="/dashboard/user-home" className="justify-between className='hover:text-white'">
                                            {user?.displayName}
                                            <span className="badge">New</span>
                                        </Link>}
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li><a onClick={handleLogOut}>Logout</a></li>
                                </ul>
                            </div> :

                            <Link to='/login'>Login</Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;