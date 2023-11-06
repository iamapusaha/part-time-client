
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CategoryItems = ({ job }) => {
    const { _id, title, photo, discription, date, minPrice, maxPrice } = job;
    return (
        <div className="card min-w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <h4>Price range:{minPrice} to {maxPrice}</h4>
                <h2>Deadline: {date}</h2>
                <p>{
                    discription.length > 50 ? discription.slice(0, 100) : discription
                }</p>
                <Link className='btn btn-active btn-ghost w-1/2' to={`/jobs/${_id}`}>Bid Now</Link>
            </div>
            <figure><img src={photo} alt="Shoes" /></figure>

        </div>
    );
};

CategoryItems.propTypes = {
    job: PropTypes.object
};

export default CategoryItems;