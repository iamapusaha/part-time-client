
import PropTypes from 'prop-types';


const BidRequestItem = ({ request, handleBidAccept, handleBidReject }) => {
    const { _id, title, bidderEmail, price, status } = request;
    return (
        <tr>
            <th>{title}</th>
            <td>{bidderEmail}</td>
            <td>$ {price}</td>
            <td>
                {
                    status === 'accept' ? <span className="font-bold text-primary">In Progress</span> :
                        status === 'reject' ? <span className="font-bold text-error">Rejected</span> :
                            status === 'complete' ? <span className="font-bold text-success">Complete</span> :
                                <span className="font-bold text-primary">{status || 'Pending'}</span>
                }
            </td>
            <td>
                {status ?
                    <button disabled="disabled" onClick={() => handleBidAccept(_id)} className="btn">Accept</button>
                    : <button onClick={() => handleBidAccept(_id)} className="btn">Accept</button>
                }
            </td>
            <td>
                {
                    status ?
                        <button disabled="disabled" onClick={() => handleBidReject(_id)} className="btn">Reject</button>
                        : <button onClick={() => handleBidReject(_id)} className="btn">Reject</button>
                }
            </td>
        </tr>
    );
};

BidRequestItem.propTypes = {
    request: PropTypes.object,
    handleBidAccept: PropTypes.func,
    handleBidReject: PropTypes.func
};

export default BidRequestItem;