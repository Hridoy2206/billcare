import aboutImage from "../../assets/billcare.ng/doctor 1.png"
const About = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row items-center">
            <img src={aboutImage} alt="" className=" lg:w-[43.5%]" />
            <div className="px-5 space-y-4  my-4">
                <h1 className=" text-4xl lg:text-6xl text-[#03051E] font-bold ">About Us</h1>
                <p className="text-gray-700 text-2xl lg:text-3xl">
                    With BillCare, you can pay for airtime, internet data, electricity <br />bills, make flight ticket reservations, and access free medical <br /> consultations.
                </p>
                <p>
                    <a href="" className=" text-[#12142A] text-4xl hover:font-semibold duration-200">Read More...</a>
                </p>
            </div>
        </div>
    );
};

export default About;