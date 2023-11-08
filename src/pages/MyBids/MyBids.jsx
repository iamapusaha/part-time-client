import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import MyBidsItem from "./MyBidsItem";
import { Helmet } from "react-helmet-async";


const MyBids = () => {
    const { user } = useContext(AuthContext)
    const [myBids, setMyBids] = useState([])
    const url = `https://part-time-server.vercel.app/bidder?email=${user?.email}`;
    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => {
                setMyBids(res.data);
            })
    }, [url])
    const handleBidComplete = id => {
        const url = `https://part-time-server.vercel.app/bids/${id}`;
        axios.patch(url, { status: 'complete' })
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    // update state
                    const remaining = myBids.filter(bid => bid._id !== id);
                    const updated = myBids.find(bid => bid._id === id);
                    updated.status = 'complete'
                    const newBidStatus = [updated, ...remaining];
                    setMyBids(newBidStatus);
                }
            })
    }
    return (
        <div className="overflow-x-auto my-12">
            <Helmet>
                <title>Part Time || My Bids</title>
            </Helmet>
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th>Job title</th>
                        <th>Email</th>
                        <th>Deadline</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myBids.map(bid => <MyBidsItem
                            key={bid._id}
                            bid={bid}
                            handleBidComplete={handleBidComplete}
                        ></MyBidsItem>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyBids;