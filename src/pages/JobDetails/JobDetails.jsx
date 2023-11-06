
// import PropTypes from 'prop-types';
import { useContext } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';


import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const { title, email, date, photo } = useLoaderData();
    const MySwal = withReactContent(Swal)
    const { user } = useContext(AuthContext)


    const handleBidJob = e => {
        e.preventDefault()
        const form = e.target;

        const biEmail = form.biEmail.value;
        const deadline = form.deadline.value;
        const price = form.price.value;
        const newBid = {
            title,
            photo,
            buyerEmail: email,
            bidderEmail: biEmail,
            BuyerDate: date,
            bidderDate: deadline,
            price,
        }
        console.log(newBid);
        axios.post('http://localhost:5000/bids', newBid)
            .then(res => {
                console.log(res.data);
                if (res.data) {
                    MySwal.fire(
                        'WOW!',
                        'your bid added!',
                        'success'
                    )
                }
            })
    }

    return (
        <div>
            <div>
                <h1>{title}</h1>
            </div>
            <div>
                <div className="container mx-auto my-6 bg-[#F6F6F6] p-5 rounded">
                    <h1 className="text-5xl text-center my-2">Add New Product</h1>
                    <form onSubmit={handleBidJob}>
                        <div className="md:flex gap-3 px-2 md:px-1 mb-6">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="price" placeholder="your bidding amount" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Deadline</span>
                                </label>
                                <label className="input-group ">
                                    <input type="date" name="deadline" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div className="md:flex gap-3 px-2 md:px-1 mb-6">

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <label className="input-group ">
                                    <input type="email" defaultValue={user?.email} readOnly name="biEmail" placeholder="email" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Buyer Email</span>
                                </label>
                                <label className="input-group ">
                                    <input type="email" defaultValue={email} readOnly name="email" placeholder="email" className="input input-bordered w-full" />
                                </label>
                            </div>

                        </div>
                        <input className="btn btn-block bg-[#4D55D0] text-white" type="submit" value="Bid on the project" />
                    </form>
                </div>
            </div>
        </div>
    );
};

JobDetails.propTypes = {

};

export default JobDetails;