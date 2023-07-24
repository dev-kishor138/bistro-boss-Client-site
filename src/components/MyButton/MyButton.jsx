

const MyButton = ({ btnText }) => {
    return (
        <div className="text-center my-10">
            <button className="btn bg-transparent border-0 border-b-2 text-[#1F2937] border-[#1F2937] hover:bg-[#1F2937] hover:text-white">{btnText}</button>
        </div>
    );
};

export default MyButton;