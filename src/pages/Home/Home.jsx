import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import JobCategory from "./JobCategory";
import Testimonial from "./Testimonial/Testimonial";
import Feature from "./Feature/Feature";
import OurClient from "../OurClient/OurClient";


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
            <OurClient></OurClient>
        </div>
    );
};

export default Home;