
import PropTypes from 'prop-types';

const PostedTable = ({ job }) => {
    const { title, email, date, photo, category, minPrice, maxPrice, discription } = job;
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
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
            <td>{discription.length > 20 ? discription.slice(0, 20) : discription}</td>
            <td>{date}</td>
            <td>{category}</td>
            <td>{minPrice}</td>
            <td>{maxPrice}</td>
            <th>
                <button className="btn btn-ghost btn-xs">update</button>
            </th>
        </tr>
    );
};

PostedTable.propTypes = {
    job: PropTypes.object
};

export default PostedTable;