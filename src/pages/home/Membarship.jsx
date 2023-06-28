import slider2 from "../../assets/billcare.ng/slide2 1.png"
const Membarship = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row  text-white">
            <img src={slider2} alt="" />
            <div className=" bg-[#03051E] w-full lg:p-16 ">
                <div className=" text-center py-8 lg:space-y-5">
                    <h1 className="text-5xl lg:text-7xl font-bold">Pro Membership Pricing</h1>
                    <p className=" text-2xl lg:text-4xl">Upgrade to Pro membership and enjoy all the exclusive features.</p>
                </div>
                <div className="flex lg:flex-row  gap-5 mb-10 flex-col text-center">
                    <div className=" w-[250px] bg-slate-100 rounded-3xl text-black py-12 mx-auto text-[#03051E] border-4 border-white">
                        <h1 className="text-5xl font-extrabold ">Yearly</h1>
                        <p className="text-4xl font-semibold ">199999</p>
                        <p className="text-4xl font-semibold">Naira</p>
                    </div>
                    <div className="w-[250px] bg-slate-100 rounded-3xl text-black py-12 mx-auto text-[#03051E] border-white">
                        <h1 className="text-5xl font-extrabold ">Mountly</h1>
                        <p className="text-4xl font-semibold ">199999</p>
                        <p className="text-4xl font-semibold">Naira</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Membarship;