import Footer from "../../shared/Footer/Footer";
import About from "./About";
import Consultation from "./Consultation";
import Landing from "./Landing";
import Membarship from "./Membarship";
import News from "./News";

const Home = () => {
    return (
        <div>
            <Landing />
            <About />
            <Consultation />
            <Membarship />
            <News />
            <Footer />
        </div>
    );
};

export default Home;