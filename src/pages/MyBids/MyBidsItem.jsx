
import PropTypes from 'prop-types';

import { Link } from "react-router-dom";

const MyBidsItem = ({ bid }) => {
    const { _id, title, buyerEmail, BuyerDate } = bid;
    return (
        <tr>
            <th>{title}</th>
            <td>{buyerEmail}</td>
            <td>{BuyerDate}</td>
            <td>pending</td>
            <th>
                <Link to={`/update-job/${_id}`} className="btn btn-ghost btn-xs">complete</Link>
            </th>
        </tr>
    );
};

MyBidsItem.propTypes = {
    bid: PropTypes.object
};

export default MyBidsItem;