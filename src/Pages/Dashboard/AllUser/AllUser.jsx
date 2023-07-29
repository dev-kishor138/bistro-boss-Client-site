import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from "react-toastify";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import AllUserItem from "./AllUserItem";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AllUser = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

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
                fetch(`https://bistro-boss-server-kishormahmud138.vercel.app/users/${id}`,
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

    const handleMakeAdmin = id => {
        fetch(`https://bistro-boss-server-kishormahmud138.vercel.app/users/admin/${id}`,
            {
                method: "PATCH"
            })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    toast("Made Admin");
                }
            })
    }


    return (
        <div className="w-full mb-20 mt-0">
            <ToastContainer />
            <Helmet>
                <title>Eclipse Blend & Blossom || All Users</title>
            </Helmet>
            <SectionTitle title="How many?" heading="Manage All User" />
            <div className="bg-white p-10 mx-32">
                <div className="flex justify-between items-center">
                    <h3 className="my-font text-xl font-semibold">Total Orders: {users.length}</h3>
                </div>

                <div className="overflow-x-auto border mt-5 rounded-xl ">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#0088fe] text-white uppercase h-16">
                            <tr>
                                <th>
                                    SlN
                                </th>

                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                users.map((user, index) => <AllUserItem
                                    key={user._id}
                                    user={user}
                                    index={index}
                                    handleDeleteItem={handleDeleteItem}
                                    handleMakeAdmin={handleMakeAdmin}
                                />)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUser;