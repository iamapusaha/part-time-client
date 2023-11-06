
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PostedTable = ({ job, handleDeleteJob }) => {
    const { _id, title, email, date, photo, category, minPrice, maxPrice, discription } = job;
    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDeleteJob(_id)} className="btn btn-circle btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td>{title}</td>
            <td>{discription.length > 30 ? discription.slice(0, 30) : discription}</td>
            <td>{date}</td>
            <td>{category}</td>
            <td>{minPrice}</td>
            <td>{maxPrice}</td>
            <th>
                <Link to={`/update-job/${_id}`} className="btn btn-ghost btn-xs">update</Link>
            </th>

        </tr>
    );
};

PostedTable.propTypes = {
    job: PropTypes.object,
    handleDeleteJob: PropTypes.func
};


export default PostedTable;