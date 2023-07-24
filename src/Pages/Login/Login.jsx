import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import bgImage from '../../assets/others/authentication.png';
import loginImage from '../../assets/others/authentication2.png';
// import { BiLogoFacebook } from 'react-icons/bi';
// import { AiOutlineGoogle } from 'react-icons/ai';
// import { FiGithub } from 'react-icons/fi';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';



const Login = () => {
    const { userLogin, user } = useContext(AuthContext)
    // const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from.pathname || "/"

    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;

        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }

    }

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        userLogin(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                form.reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `Welcome To Bistro Boss ${user?.displayName}`,
                    showConfirmButton: false,
                    timer: 3000
                })
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
            })

    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss || Sign In</title>
            </Helmet>
            <div className='container mx-auto'>
                <section className="bg-cover bg-center min-h-screen lg:px-24 py-10" style={{ backgroundImage: `url("${bgImage}")` }}>
                    <div style={{ backgroundImage: `url("${bgImage}")` }} className="bg-cover bg-center shadow-2xl flex flex-col lg:flex-row justify-center gap-5 items-center py-10">
                        <div className='lg:w-1/2'>
                            <img src={loginImage} alt="" />
                        </div>
                        <div className='lg:w-1/2 lg:px-10 lg:pr-24 py-10'>
                            <div>
                                <h2 className="text-center text-2xl font-bold">Sign In</h2>
                                <form onSubmit={handleLogin}>
                                    <div className="form-control w-full">
                                        <label className="label text-md">
                                            Email
                                        </label>
                                        <input type="email" name="email" placeholder="Email" className="input rounded-none w-full" />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label text-md">
                                            Password
                                        </label>
                                        <input type="password" name="password" placeholder="Password" className="input rounded-none w-full" />
                                    </div>
                                    <div className="form-control pt-5 w-full">
                                        <div className='my-5'>
                                            <LoadCanvasTemplate />

                                        </div>
                                        <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type this Captcha" className="input rounded-none w-full" />

                                    </div>
                                    <div className="mt-5">
                                        <input disabled={disabled} type='submit' className="btn rounded-md w-full hover:text-black bg-[#D1A054] text-white" value="Sign In" />
                                    </div>
                                </form>
                                <div className='text-center my-3'>
                                    <Link to="/register" className="link link-hover text-[#D1A054] mb-2">New here? Create a New Account</Link>
                                </div>
                                <SocialLogin />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Login;