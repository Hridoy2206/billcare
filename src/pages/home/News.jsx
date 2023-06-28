import slide3 from "../../assets/billcare.ng/slide3 1.png"
const News = () => {
    return (
        <div className="flex flex-col-reverse lg:flex lg:flex-row-reverse items-center">
            <img src={slide3} alt="" />
            <div className="lg:mx-40 lg:space-y-16 m-2 space-y-8">
                <div>
                    <h1 className="lg:text-6xl text-4xl font-bold text-[#4D4D4D] my-6">Sign Up for our Newsletter</h1>
                    <p className="lg:text-3xl text-2xl font-medium">
                        Stay updated with the latest news and offers from <br /> BillCare.
                    </p>
                </div>
                <div className="lg:flex lg:items-center  gap-10">
                    <input type="text" placeholder="Type Email" className="px-4 rounded-xl w-full shadow-md placeholder:text-[#222] outline-none focus:ring-2 focus:ring-offset-2 max-w-md bg-white py-5" />
                    <button className="my-4 bg-[#4D4D4D] rounded-2xl py-4 px-3 ring-4 ring-white text-white lg:text-4xl text-3xl md:text-3xl shadow-md shadow-black active:scale-95 transition-all ">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default News;