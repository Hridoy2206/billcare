import image1 from "../../assets/billcare.ng/slide1 1.png"
const Consultation = () => {
    return (
        <div className=" lg:flex justify-between items-center space-y-8">
            <div className="lg:mx-28 space-y-5 m-4">
                <div className="space-y-3">
                    <h1 className=" text-4xl lg:text-6xl font-bold text-gray-700">Free Medical Consultations</h1>
                    <p className="text-2xl lg:text-3xl text-black ">
                        Sign up today and get free medical consultancy for 15 minutes within the first 3 days.
                    </p>
                </div>
                <div className="space-y-3">
                    <h1 className=" text-4xl lg:text-6xl font-bold text-gray-700">Pro Membership Benifit</h1>
                    <p className="text-2xl lg:text-3xl">
                        Get exclusive features and benefits as a Pro member,including access to premium customer support.
                    </p>
                </div>
            </div>
            <img src={image1} alt="" />
        </div>
    );
};

export default Consultation;