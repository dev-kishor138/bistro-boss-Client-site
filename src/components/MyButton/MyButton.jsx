

const MyButton = ({ btnText }) => {
    return (
        <div className="text-center my-10">
            <button className="btn bg-[#ff1800] border-0 rounded-none text-[#fff]  hover:bg-[#fff] hover:text-[#ff1800]">{btnText}</button>
        </div>
    );
};

export default MyButton;