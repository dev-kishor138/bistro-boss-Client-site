import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// import { BsFillTrashFill } from "react-icons/bs";
import useCart from "../../../hooks/useCart";
import CartItem from "./CartItem";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const MyCart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((prevPrice, item) => {
        return prevPrice + item.price;
    }, 0)

    const handleDeleteItem = (id) => {
        // console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${id}`,
                    {
                        method: "DELETE"
                    })
                    .then(res => res.json())
                    .then(data => {

                        if (data.acknowledged) {
                            refetch();
                            toast("Delete successfully");
                        }
                    })
            }
        })

    }

    return (
        <div className="w-full mb-20 mt-0">
            <ToastContainer />
            <Helmet>
                <title>Bistro Boss || My Cart</title>
            </Helmet>
            <SectionTitle title="My Cart" heading="Wanna Add more?" />
            <div className="bg-white p-10 mx-32">
                <div className="flex justify-between items-center">
                    <h3 className="my-font text-xl font-semibold">Total Orders: {cart.length}</h3>
                    <h3 className="my-font text-xl font-semibold">Total Price: ${totalPrice}</h3>
                    <Link to="/dashboard/payment" className="my-font btn btn-md bg-[#0088fe] text-white">Pay</Link>
                </div>

                <div className="overflow-x-auto border mt-5 rounded-xl ">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#0088fe] text-white uppercase h-16">
                            <tr>
                                <th>
                                    SlN
                                </th>

                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                cart.map((item, index) => <CartItem key={item._id} item={item} index={index} handleDeleteItem={handleDeleteItem} />)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCart;