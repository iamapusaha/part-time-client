import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import MyBidsItem from "./MyBidsItem";


const MyBids = () => {
    const { user } = useContext(AuthContext)
    const [myBids, setMyBids] = useState([])
    const url = `http://localhost:5000/bidder?email=${user?.email}`;
    useEffect(() => {
        axios.get(url)
            .then(res => {
                setMyBids(res.data);
            })
    }, [url])
    return (
        <div className="overflow-x-auto">
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
                        myBids.map(bid => <MyBidsItem key={bid._id} bid={bid}></MyBidsItem>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyBids;