import { BsFillTrashFill } from "react-icons/bs";


const CartItem = ({ item, index, handleDeleteItem }) => {
    const { image, name, price, _id } = item;
    return (
        <tr>
            <th>
                <span>{index + 1}</span>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className=" w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>

                </div>
            </td>
            <td>
                <div className="font-bold">{name}</div>

            </td>
            <td className="text-end">
                ${price}
            </td>
            <th>
                <button onClick={() => handleDeleteItem(_id)} className="btn text-xl bg-[#ff1800] text-white hover:bg-[transparent] hover:text-[#ff1800]"><BsFillTrashFill /></button>
            </th>
        </tr>
    );
};

export default CartItem;