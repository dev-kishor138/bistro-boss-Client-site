

const MenuItem = ({ item }) => {
    const { image, name, recipe, price } = item;
    return (
        <div className="flex gap-2 items-center">
            <img style={{ borderRadius: "0 200px 200px 200px" }} className="w-[100px]" src={image} alt="" />
            <div>
                <h4 className="text-xl my-font">{name}--------------------</h4>
                <p >{recipe}</p>
            </div>
            <p className="text-[#ff1800]">${price}</p>
        </div>
    );
};

export default MenuItem;