
import PropTypes from 'prop-types';

const MyBidsItem = ({ bid, handleBidComplete }) => {
    const { _id, title, buyerEmail, BuyerDate, status } = bid;
    return (
        <tr>
            <th>{title}</th>
            <td>{buyerEmail}</td>
            <td>{BuyerDate}</td>
            <td>
                {
                    status === 'accept' ? <span className="font-bold text-primary">In Progress</span> :
                        status === 'reject' ? <span className="font-bold text-error">Canceled</span> :
                            status === 'complete' ? <span className="font-bold text-success">Complete</span> :
                                <span className="font-bold text-primary">{status || 'Pending'}</span>
                }
            </td>
            <th>

                {
                    status === 'reject' || status === 'complete' ?
                        <button disabled className="btn">Complete</button> :
                        status === 'accept' ?
                            <button onClick={() => handleBidComplete(_id)} className="btn">Complete</button> :
                            null
                }
            </th>
        </tr>
    );
};

MyBidsItem.propTypes = {
    bid: PropTypes.object,
    handleBidComplete: PropTypes.func
};

export default MyBidsItem;