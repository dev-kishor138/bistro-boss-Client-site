import { useContext } from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";


const SocialLogin = () => {
    const { signInWithGoogle, user, } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from.pathname || "/";


    const googleSignUp = () => {
        signInWithGoogle()
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                const userInfo = { name: createdUser.displayName, email: createdUser.email }
                fetch(`https://bistro-boss-server-kishormahmud138.vercel.app/users`, {
                    method: "POST",
                    headers: {
                        'content-type': "application/json"
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(() => {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `Welcome To Eclipse Blend & Blossom ${user?.displayName}`,
                            showConfirmButton: false,
                            timer: 3000
                        })

                    })
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="my-5 text-center grid">

            <span>Or Sign up with</span>
            <div className="flex justify-center items-center my-5 gap-5">
                <button className="btn btn-circle text-xl btn-outline"><BiLogoFacebook /></button>
                <button onClick={googleSignUp} className="btn btn-circle text-xl btn-outline"><AiOutlineGoogle /></button>
                <button className="btn btn-circle text-xl btn-outline"><FiGithub /></button>
            </div>
        </div>
    );
};

export default SocialLogin;