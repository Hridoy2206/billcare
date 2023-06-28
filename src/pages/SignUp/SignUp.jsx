
const SignUp = () => {
    return (
        <div className=" flex justify-center items-center bg-gradient-to-r from-[#04083A] to-[#FBABF6] min-h-screen">
            <div className="bg-white lg:w-[50%] rounded-2xl mx-auto px-20 py-10 space-y-8">
                <h1 className="lg:text-4xl text-3xl text-center font-bold">Create Account</h1>
                <div className="lg:flex justify-between">
                    <input type="text" placeholder="Sign Up with Google " className="w-full lg:w-5/6" />
                    <input type="text" placeholder="Sign Up with Facebook" className="w-full lg:w-5/6" />
                </div>
                <div className="divider divider-vertical w-32 font-bold mx-auto">OR</div>
                <div>
                    <input type="text" placeholder="Full Name" />
                    <input type="text" placeholder="Email Address" />
                    <input type="text" placeholder="Password" />
                </div>
                <button>Create Account</button>
                <p>Already have an account <a href="/login">Login</a></p>
            </div>
        </div>
    );
};

export default SignUp;