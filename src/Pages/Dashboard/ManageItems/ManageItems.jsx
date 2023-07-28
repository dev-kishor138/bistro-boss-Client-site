import { FaPenToSquare } from "react-icons/fa6";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { BsFillTrashFill } from "react-icons/bs";
import { useMenu } from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const [axiosSecure] = useAxiosSecure();
    // console.log(menu);

    const handleDelete = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/menu/${item._id}`)
                    .then(res => {
                        // console.log('deleted res', res.data);
                        if (res.data.acknowledged) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }

    return (
        <section>
            <SectionTitle title="Hurry Up" heading="Manage All Item" />
            <div className="bg-white p-10 mx-32">
                <div className="flex justify-between items-center">
                    <h3 className="my-font text-xl font-semibold">Total items: {menu.length}</h3>
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
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                menu.map((item, index) => <tr key={index}>
                                    <th>
                                        <span>{index + 1}</span>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className=" w-12 h-12">
                                                    <img src={item.image} alt="Avatar " />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        <div className="font-bold">{item.name}</div>

                                    </td>
                                    <td className="text-end">
                                        ${item.price}
                                    </td>
                                    <td>
                                        <button className="btn text-xl  bg-[#0088fe] text-white hover:bg-[transparent] hover:text-[#0088fe] "><FaPenToSquare /></button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(item)} className="btn text-xl bg-[#ff1800] text-white hover:bg-[transparent] hover:text-[#ff1800]"><BsFillTrashFill /></button>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default ManageItems;
