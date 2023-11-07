import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import BidRequestItem from "./BidRequestItem";


const BidRequest = () => {
    const { user } = useContext(AuthContext);
    const [bidRequest, setBidRequest] = useState([])
    const url = `http://localhost:5000/buyer?email=${user?.email}`
    useEffect(() => {
        axios.get(url)
            .then(res => {
                setBidRequest(res.data);
            })
    }, [url])
    const handleBidAccept = id => {
        const url = `http://localhost:5000/bids/${id}`;
        axios.patch(url, { status: 'accept' })
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    // update state
                    const remaining = bidRequest.filter(request => request._id !== id);
                    const updated = bidRequest.find(request => request._id === id);
                    updated.status = 'accept'
                    const newBidStatus = [updated, ...remaining];
                    setBidRequest(newBidStatus);
                }
            })
    }
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Email</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Accept</th>
                        <th>Reject</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bidRequest.map(request => <BidRequestItem
                            key={request._id}
                            request={request}
                            handleBidAccept={handleBidAccept}
                        ></BidRequestItem>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default BidRequest;