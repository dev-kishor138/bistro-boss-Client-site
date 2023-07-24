
import { BsFillTrashFill } from "react-icons/bs";
import { FaUserShield } from "react-icons/fa6";



const AllUserItem = ({ user, index, handleDeleteItem, handleMakeAdmin }) => {
    const { name, email, _id } = user;
    return (
        <tr>
            <th>
                <span>{index + 1}</span>
            </th>
            <td className="font-bold">
                {name}
            </td>
            <td>
                <div >{email}</div>

            </td>
            <td>
                {
                    user.role === 'admin' ? "Admin" : <button onClick={() => handleMakeAdmin(_id)} className="btn text-xl bg-[#D1A054] text-white hover:bg-[transparent] hover:text-black"><FaUserShield /></button>
                }
            </td>
            <th>
                <button onClick={() => handleDeleteItem(_id)} className="btn text-xl bg-[#B91C1C] text-white hover:bg-[transparent] hover:text-black"><BsFillTrashFill /></button>
            </th>
        </tr>
    );
};

export default AllUserItem;