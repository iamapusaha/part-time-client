import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import JobCategory from "./JobCategory";
import Testimonial from "./Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Part Time || Home</title>
            </Helmet>
            <Banner></Banner>

            <JobCategory></JobCategory>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;