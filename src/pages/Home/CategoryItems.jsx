
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './JobCategory.css'
import { motion } from "framer-motion";

const CategoryItems = ({ job }) => {
    const { _id, title, photo, discription, date, minPrice, maxPrice } = job;
    return (
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className="flex justify-center items-center border max-w-md rounded-md shadow-2xl">
            <div className="xl:h-[550px] lg:h-[600px] md:h-[550px]">
                <div className="flex justify-center h-fit ">
                    <img
                        src={photo}
                        className="rounded-t-md h-[300px]"
                    />
                </div>
                <div className="text-center">
                    <h1 className="font-bold text-xl p-2">{title}</h1>
                    <h2 className="font-semibold">Deadline: {date}</h2>
                    <h1 className="font-semibold">Price range: {minPrice} to {maxPrice}</h1>
                    <div className="flex justify-center px-2">
                        <p className="font-semibold">
                            {
                                discription.length > 50 ? discription.slice(0, 100) : discription
                            }
                        </p>
                    </div>
                    <div className='my-2'>
                        <Link className=' border px-2 m-2 font-semibold uppercase bg-gray-200 text-xl' to={`/jobs/${_id}`}>Bid Now</Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

CategoryItems.propTypes = {
    job: PropTypes.object
};

export default CategoryItems;