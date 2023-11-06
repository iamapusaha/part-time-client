
// import PropTypes from 'prop-types';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import PostedTable from "./PostedTable";

const MyPostedJobs = () => {
    const { user } = useContext(AuthContext)
    const [postedJob, setPostedJob] = useState([])
    console.log(postedJob);
    const url = `http://localhost:5000/jobs?email=${user?.email}`;
    useEffect(() => {
        axios.get(url)
            .then(res => {
                setPostedJob(res.data);
            })
    }, [url])
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Image</th>
                        <th>Email</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Deadline</th>
                        <th>Category</th>
                        <th>Min price</th>
                        <th>Max price</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        postedJob.map(job => <PostedTable key={job._id} job={job}></PostedTable>)
                    }
                </tbody>
            </table>
        </div>

    );
};

MyPostedJobs.propTypes = {

};

export default MyPostedJobs;