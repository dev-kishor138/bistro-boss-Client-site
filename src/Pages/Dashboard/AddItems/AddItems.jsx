import { ImSpoonKnife } from "react-icons/im";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from 'react-hook-form';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { ToastContainer, toast } from "react-toastify";

const image_hosting_token = import.meta.env.VITE_IMAGE_API_KEY;
const AddItems = () => {
    const [axiosSecure] = useAxiosSecure()
    const { register, handleSubmit, reset } = useForm();
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`
    const onSubmit = data => {
        const formData = new FormData();
        // console.log(data);
        formData.append('image', data.image[0])

        fetch(image_hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageResponse => {
                if (imageResponse.success) {
                    const imgURL = imageResponse.data.display_url;
                    // console.log(imgURL);
                    const { name, price, category, recipe } = data;
                    const newItem = { name, price: parseFloat(price), category, recipe, image: imgURL }
                    // console.log(newItem)
                    axiosSecure.post('/menu', newItem)
                        .then(data => {
                            // console.log(data.data)
                            if (data.data.acknowledged) {
                                toast("Add Item successfully");
                                reset();
                            }
                        })
                }
            })
    }
    // console.log(errors);
    // console.log(image_hosting_token)

    return (
        <section>
            <ToastContainer />
            <SectionTitle title="What's New" heading="Add An item" />
            <div className="mx-40 w-auto bg-[#F3F3F3] px-10 py-1 mb-10">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Recipe Name*</span>
                        </label>
                        <input type="text" {...register("name", { required: true, maxLength: 80 })} placeholder="Recipe Name" className="input input-bordered w-full" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-2">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue={'Category'} {...register("category", { required: true })} className="select select-bordered">
                                <option disabled >Category</option>
                                <option >Salad</option>
                                <option >Pizza</option>
                                <option >Soup</option>
                                <option >Desert</option>
                                <option >Drinks</option>
                            </select>

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Price*</span>

                            </label>
                            <input type="number" {...register("price", { required: true, minLength: 1, maxLength: 12 })} placeholder="Price" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details*</span>
                        </label>
                        <textarea {...register("recipe", { required: true, maxLength: 2000 })} className="textarea textarea-bordered h-40 resize-none" placeholder="Recipe Details"></textarea>
                    </div>
                    <div className="mt-10">
                        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />
                    </div>
                    <div className=" mt-10 ">
                        <button className="btn rounded-sm bg-gradient-to-r from-[#ff1800] to-[#ff1900]  text-white">Add Item <span><ImSpoonKnife /></span></button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddItems;