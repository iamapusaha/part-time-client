import { Link } from "react-router-dom";



const SignIn = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const MySwal = withReactContent(Swal)
    const { signIn } = useContext(AuthContext);
    const [error, setError] = useState(null)
    const handleSignIn = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                setError(null)
                console.log(result.user);
                MySwal.fire(
                    'Good job!',
                    "Logged in successfully. Welcome back!",
                    'success'
                )
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {

                if (error.message == "Firebase: Error (auth/invalid-login-credentials).") {
                    setError('Email or password are not correct')
                }
                console.error(error);
            })
    }
    return (
        <div className="my-16 px-3 md:px-0">
            <h1 className="text-4xl font-semibold text-center mb-3">SignIn with your account</h1>
            <div className="md:w-3/4 lg:w-1/2 mx-auto border-b-2 border-[#FFF781] px-3 md:px-1 mb-4"></div>
            <form onSubmit={handleSignIn} className="md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#5056D2] text-white">SignIn</button>
                </div>
            </form>
            <p className="text-center mt-4">Dont’t Have An Account ? <Link className="text-red-400" to='/signup'>SignUp</Link></p>
            <p className="text-red-600 text-center mt-2 text-xl">{"error"}</p>

        </div>
    );
};

SignIn.propTypes = {

};

export default SignIn;