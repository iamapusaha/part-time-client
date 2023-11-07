import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import JobCategory from "./JobCategory";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Part Time || Home</title>
            </Helmet>
            <Banner></Banner>
            <JobCategory></JobCategory>
        </div>
    );
};

export default Home;