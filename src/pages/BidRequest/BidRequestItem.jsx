
import PropTypes from 'prop-types';


const BidRequestItem = ({ request, handleBidAccept }) => {
    const { _id, title, bidderEmail, price, status } = request;
    return (
        <tr>
            <th>{title}</th>
            <td>{bidderEmail}</td>
            <td>$ {price}</td>
            <td>
                {
                    status === 'accept' ? <span className="font-bold text-primary">Accepted</span> :
                        status === 'reject' ? <span className="font-bold text-primary">Rejected</span> :
                            <span className="font-bold text-primary">{status || 'Pending'}</span>
                }
            </td>
            <td>
                <button onClick={() => handleBidAccept(_id)} className="btn">Accept</button>
            </td>
            <td>
                <button className="btn">Reject</button>
            </td>
        </tr>
    );
};

BidRequestItem.propTypes = {
    request: PropTypes.object,
    handleBidAccept: PropTypes.func
};

export default BidRequestItem;