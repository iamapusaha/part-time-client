import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import JobCategory from "./JobCategory";
import Testimonial from "./Testimonial/Testimonial";
import Feature from "./Feature/Feature";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Part Time || Home</title>
            </Helmet>
            <Banner></Banner>

            <JobCategory></JobCategory>
            <Testimonial></Testimonial>
            <Feature></Feature>
        </div>
    );
};

export default Home;