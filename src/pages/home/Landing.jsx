import { Link } from "react-router-dom";
import image1 from "../../assets/billcare.ng/image 1.png"
const Landing = () => {
    return (
        <div className="">
            <ul className="lg:flex lg:flex-row hidden space-x-12 font-bold text-2xl absolute top-0 text-[#ddd] pl-[10%] pt-10 ">
                <li className=" active:scale-95 hover:text-white"><Link to="/features">Features</Link></li>
                <li className=" active:scale-95 hover:text-white"><Link to="/pricing">Pricing</Link></li>
                <li className=" active:scale-95 hover:text-white"><Link to="/signUp">Sign Up</Link></li>
            </ul>
            <img src={image1} alt="" className=" top-0" />
        </div>
    );
};

export default Landing;