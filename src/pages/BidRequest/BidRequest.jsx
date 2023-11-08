import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import BidRequestItem from "./BidRequestItem";
import { Helmet } from "react-helmet-async";


const BidRequest = () => {
    const { user } = useContext(AuthContext);
    const [bidRequest, setBidRequest] = useState([])
    const url = `https://part-time-server.vercel.app/buyer?email=${user?.email}`
    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => {
                setBidRequest(res.data);
            })
    }, [url])
    const handleBidAccept = id => {
        const url = `https://part-time-server.vercel.app/bids/${id}`;
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
    const handleBidReject = id => {
        const url = `https://part-time-server.vercel.app/bids/${id}`;
        axios.patch(url, { status: 'reject' })
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    // update state
                    const remaining = bidRequest.filter(request => request._id !== id);
                    const updated = bidRequest.find(request => request._id === id);
                    updated.status = 'reject'
                    const newBidStatus = [updated, ...remaining];
                    setBidRequest(newBidStatus);
                }
            })
    }
    return (
        <div className="overflow-x-auto">
            <Helmet>
                <title>Part Time || Bid Request</title>
            </Helmet>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Email</th>
                        <th>Deadline</th>
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
                            handleBidReject={handleBidReject}
                        ></BidRequestItem>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default BidRequest;