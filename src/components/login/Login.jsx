import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FcGoogle } from 'react-icons/fc';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleAuthProvider } from "firebase/auth";
const Login = () => {
    const { signIn,signInWithPopup,auth,setToogle} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const provider= new GoogleAuthProvider();
    const HandelSignInWithGoogle=()=>{
        
        signInWithPopup(auth,provider)
        .then((result) => 
                {toast.success(`successfully loged in`);
                navigate(location?.state ? location.state : '/');
                setToogle(false);
                console.log("user found",result.user)}
            )
            .catch(error => {
                toast.error(`${error.code}`);
                console.error(error)
            })
        
            
    }

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
       
        signIn(email, password)
            .then(result => {
                toast.success(`successfully loged in`);
                console.log(result.user)
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                toast.error(`wrong Email or Password`);
                console.error(error)
            })

    }
    return (
         <div className="mx-10 md:mx-80  flex items-center mt-32">
                <div className=" min-h-screen w-full mx-auto">
                <div className="flex-col lg:flex-row-reverse">
                    <div className="card  w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <p className="mb-3">New to Our site? <Link className="text-[#FCB41E]" to='/register'>Register</Link></p>
                        <button className="btn  bg-[#FCB41E] hover:bg-transparent hover:border-[#FCB41E] border-2 text-white">Login</button>
                        </div>
                    </form>
                    </div>
                    <div className="flex justify-center">
                        <div>
                            <div className="flex font-bold text-xl text-black text-center justify-center">
                                <p>or</p>
                            </div>
                            <div>
                                <button onClick={HandelSignInWithGoogle} className="btn text-white bg-[#FCB41E] hover:bg-transparent border-amber-400 hover:text-black"> <FcGoogle></FcGoogle> Login wigh Google</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
         </div>
    );
};

export default Login;