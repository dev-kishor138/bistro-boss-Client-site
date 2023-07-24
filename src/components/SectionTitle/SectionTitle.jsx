

const SectionTitle = ({ title, heading }) => {
    return (
        <div className="mt-20 text-center mb-10 md:w-3/12 mx-auto">
            <p className="text-[#D99904] mb-2 text-md">--- {title} ---</p>
            <h2 className="text-2xl py-5 border-y uppercase">{heading}</h2>
        </div>
    );
};

export default SectionTitle;