import { useContext } from "react";
import { Link,  useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
    const { createUser,upDateProfile,setToogle} = useContext(AuthContext);
    // const location = useLocation();
    const navigate = useNavigate();
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const Name = form.get('name');
        const Photo = form.get('photo');
        
        if(/^(?=.*[A-Z])(?=.*[@#$%^&+=])(?=.*[a-z])(?=.*[0-9]).{6,}$/.test(password)){
            // upDateProfile(Name,Photo);
        createUser(email, password)
            .then(result => {
                upDateProfile(Name,Photo);
                setToogle(true);
                toast.success(`successfully created account`);
                navigate('/');
                console.log(result.user)
            })
            .catch(error => {
                toast.error(`${error.code}`);
                console.error(error)
            })
        }else{
            toast.error('Password must contain Minimum Six characters, at least one Captal letter, one number and one special character');
        }
        
    }
    return (
        <div className="mx-10 lg:mx-80  flex items-center mt-32">
                <div className=" min-h-screen w-full mx-auto">
                <div className="flex-col lg:flex-row-reverse">
                    <div className="card  w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name="name" type="text" placeholder="Enter your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input name="photo" type="text" placeholder="Photo URL" className="input input-bordered"/>
                        </div>
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
                        <p className="mb-3">Already have an account? <Link className="text-[#FCB41E]" to='/login'>Login</Link></p>
                        <button className="btn bg-[#FCB41E] hover:bg-transparent hover:border-[#FCB41E] border-2 text-white">Register</button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
         </div>
    );
};

export default Register;