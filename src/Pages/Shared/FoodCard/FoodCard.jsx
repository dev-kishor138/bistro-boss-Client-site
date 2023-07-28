import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";


const FoodCard = ({ item }) => {
    const { name, image, recipe, _id, price } = item;
    const { user } = useContext(AuthContext);
    const [, refetch] = useCart()
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = (item) => {
        console.log(item)
        if (user && user.email) {
            const itemCart = { menuItemId: _id, email: user.email, name, image, price }
            fetch('http://localhost:5000/carts', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(itemCart)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Add cart successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            })
        }
    }
    return (
        <div className="card shadow-xl rounded-none bg-[#F3F3F3] overflow-hidden">
            <figure className="h-1/2 overflow-hidden">
                <img src={image} alt="Shoes" className="h-full" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name.slice(0, 19)}</h2>
                <p>{recipe.slice(0, 40)}</p>
                <p className="text-[#ff1800] text-2xl font-bold">${price}</p>
                <div className="card-actions">
                    <button onClick={() => handleAddToCart(item)} className="btn bg-[#ff1800] border-0 text-[#fff] hover:bg-[#fff] hover:text-[#ff1800] rounded-none">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;