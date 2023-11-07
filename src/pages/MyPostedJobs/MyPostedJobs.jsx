
// import PropTypes from 'prop-types';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import PostedTable from "./PostedTable";
import { Helmet } from 'react-helmet-async';

const MyPostedJobs = () => {
    const MySwal = withReactContent(Swal)
    const { user } = useContext(AuthContext)
    const [postedJob, setPostedJob] = useState([])
    // console.log(postedJob);
    const url = `http://localhost:5000/jobs?email=${user?.email}`;
    useEffect(() => {
        axios.get(url)
            .then(res => {
                setPostedJob(res.data);
            })
    }, [url])

    const handleDeleteJob = id => {
        MySwal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                const url = `http://localhost:5000/jobs/${id}`
                axios.delete(url)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            console.log("data successfully  daleted ");
                            MySwal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remainingJobs = postedJob.filter(job => job._id !== id)
                            setPostedJob(remainingJobs)
                        }
                    })
            }
        })
    }
    return (

        <div className="overflow-x-auto">
            <Helmet>
                <title>Part Time || Posted Job</title>
            </Helmet>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <button disabled className="btn btn-square btn-outline">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
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
                        postedJob.map(job => <PostedTable
                            key={job._id}
                            job={job}
                            handleDeleteJob={handleDeleteJob}
                        ></PostedTable>)
                    }
                </tbody>
            </table>
        </div>

    );
};


MyPostedJobs.propTypes = {

};

export default MyPostedJobs;