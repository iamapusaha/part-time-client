
import PropTypes from 'prop-types';


const BidRequestItem = ({ request }) => {
    const { title, bidderEmail, price, status } = request;
    return (
        <tr>
            <th>{title}</th>
            <td>{bidderEmail}</td>
            <td>$ {price}</td>
            <td>pending</td>
            <td>
                <button className="btn">Accept</button>
            </td>
            <td>
                <button className="btn">Reject</button>
            </td>
        </tr>
    );
};

BidRequestItem.propTypes = {
    request: PropTypes.object
};

export default BidRequestItem;