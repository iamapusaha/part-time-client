
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CategoryItems = ({ job }) => {
    const { _id, title } = job;
    return (
        <div>
            <h1>{title}</h1>
            <Link to={`/jobs/${_id}`}>bid now</Link>
        </div>
    );
};

CategoryItems.propTypes = {
    job: PropTypes.object
};

export default CategoryItems;