import { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import bgImage from '../../assets/others/authentication.png';
import loginImage from '../../assets/others/authentication2.png';
// import { BiLogoFacebook } from 'react-icons/bi';
// import { AiOutlineGoogle } from 'react-icons/ai';
// import { FiGithub } from 'react-icons/fi';
import { AuthContext } from '../../Provider/AuthProvider';
import { useForm } from 'react-hook-form';
import { Helmet } from "react-helmet-async";
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';


const Register = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    // const location = useLocation();
    // const from = location?.state?.from.pathname || "/"

    // eslint-disable-next-line no-unused-vars
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // console.log("user Update successfully")
                        const userInfo = { name: data.name, email: data.email }
                        fetch(`http://localhost:5000/users`, {
                            method: "POST",
                            headers: {
                                'content-type': "application/json"
                            },
                            body: JSON.stringify(userInfo)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: `User Created successfully`,
                                        showConfirmButton: false,
                                        timer: 3000
                                    })
                                }
                            })

                    })

                navigate('/login');
            })
            .catch(error => {
                console.log(error);
            })
    };






    return (
        <>
            <Helmet>
                <title>Eclipse Blend & Blossom || Sign Up</title>
            </Helmet>
            <div className='container mx-auto'>
                <section className="bg-cover bg-center min-h-screen lg:px-24 py-10" style={{ backgroundImage: `url("${bgImage}")` }}>
                    <div style={{ backgroundImage: `url("${bgImage}")` }} className="bg-cover bg-center shadow-2xl flex flex-col lg:flex-row justify-center gap-5 items-center py-10">

                        <div className='lg:w-1/2 lg:px-10 lg:pr-24 py-10'>
                            <div>
                                <h2 className="text-center text-2xl font-bold">Sign Up</h2>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-control pt-5 w-full">
                                        <label className="label text-md">
                                            Name
                                        </label>
                                        <input type="text" name="name" {...register("name", { required: true })} placeholder="Enter Your Name" className="input rounded-none w-full" />
                                        {errors.name && <span className="text-red-500">Name is required</span>}
                                    </div>
                                    <div className="form-control pt-5 w-full">
                                        <label className="label text-md">
                                            Phot URL
                                        </label>
                                        <input type="text" {...register("photoURL", { required: true })} placeholder="Enter Your Photo URL" className="input rounded-none w-full" />
                                        {errors.photoURL && <span className="text-red-500">Photo Url is required</span>}
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label text-md">
                                            Email
                                        </label>
                                        <input type="email" name="email" {...register("email", { required: true })} placeholder="Enter your Email" className="input rounded-none w-full" />
                                        {errors.email && <span className="text-red-500">Email is required</span>}
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label text-md">
                                            Password
                                        </label>
                                        <input type="password" name="password" {...register("password", { required: true, minLength: 8, pattern: /(?=.*[A-Z])(?=.*[!@#$*])(?=.*[0-9])(?=.*[a-z])/ })} placeholder="Enter Your Password" className="input rounded-none w-full" />
                                        {errors.password?.type === "required" && <p className="text-red-500">Password is required</p>}
                                        {errors.password?.type === "minLength" && <p className="text-red-500">Password must be at least 8 character.</p>}
                                        {errors.password?.type === "pattern" && <p className="text-red-500">Password must be a uppercase,lowercase and special character.</p>}
                                    </div>

                                    <div className="mt-5">
                                        <input type='submit' className="btn rounded-md w-full hover:text-black bg-[#0088fe] text-white" value="Sign Up" />
                                    </div>
                                </form>
                                <div className='text-center my-3'>
                                    <Link to="/login" className="  link link-hover text-[#0088fe] mb-2">Already registered? Go to log in</Link>
                                </div>
                                <SocialLogin />
                            </div>
                        </div>
                        <div className='lg:w-1/2'>
                            <img src={loginImage} alt="" />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Register;

// onClick={googleSignUp}