import './Login.css'
function Login() {
    return (
        <>
            <div className="container-fluid img-div">
                <div className="container d-flex justify-content-center">
                    <div className="card rounded-5" style={{ width: "480px" }}>
                        <div className="card-body">
                            <h3 className="card-title header">Welcome back</h3>
                            <p className="card-text para">Enter your email to log in to your account.</p>
                            <a href="#" className="btn border border-grey bg-white text-dark m-2 ms-5">
                                <i className="fa-brands fa-google"></i> <b>Log in with Google</b>
                            </a>

                            <p className="divider">Or log in with email</p>

                            <label htmlFor="email" className="d-flex ms-5 mt-2 text-black"> Email</label>
                            <input type="text" placeholder="abc@gmail.com" className="input border border-grey ms-5 m-2" />

                            <label htmlFor="password" className="d-flex ms-5 text-black"> Password</label>
                            <input type="password" placeholder="X78KJH976HTU" className="input border border-grey ms-5 m-2" />
                            <a href="#" className="d-flex justify-content-end text-black pt-2 me-5" >
                                <b>Forgot Password</b>
                            </a>
                            <a href="#" className="btn bg-dark text-white ms-5">Log In</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login