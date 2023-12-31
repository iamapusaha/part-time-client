
// import PropTypes from 'prop-types';
import { useContext } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';




import { useLoaderData } from "react-router-dom";


const JobDetails = () => {
    const { title, photo, discription, date, minPrice, maxPrice, email } = useLoaderData();
    const MySwal = withReactContent(Swal)
    const { user } = useContext(AuthContext)

    const myDadeline = new Date(date);

    let todayDate = new Date();
    todayDate.setHours(0, 0, 0, 0);

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
        if (todayDate > myDadeline) {
            MySwal.fire(
                'OPPS!',
                'Sorry! Deadline is over',
                'error'
            )
        } else {
            axios.post('https://part-time-server.vercel.app/bids', newBid)
                .then(res => {

                    if (res.data) {
                        MySwal.fire(
                            'WOW!',
                            'your bid added!',
                            'success'
                        )

                    }
                })
        }
    }


    return (
        <div>
            <div className="flex justify-center items-center border rounded-md">
                <div className="">
                    <div className="flex justify-center">
                        <img
                            src={photo}
                            className="rounded-t-md"
                        />
                    </div>
                    <div className="text-center">
                        <h1 className="font-bold text-xl p-2">{title}</h1>
                        <h2 className="font-semibold">Deadline: {date}</h2>
                        <h2 className="font-semibold">Price range: {minPrice} to {maxPrice}</h2>
                        <div className="flex justify-center">
                            <p className="font-semibold px-3">
                                {discription}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="container mx-auto my-6 bg-[#F6F6F6] p-5 rounded">
                    <h1 className="text-5xl text-center my-2">Bid Now</h1>
                    <form onSubmit={handleBidJob}>
                        <div className="md:flex gap-3 px-2 md:px-1 mb-6">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" required name="price" placeholder="your bidding amount" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Deadline</span>
                                </label>
                                <label className="input-group ">
                                    <input type="date" required name="deadline" className="input input-bordered w-full" />
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
                        {
                            email === user?.email ?
                                <input disabled="disabled" className=" btn btn-block bg-[#121216] text-white" type="submit" value="Bid on the project" />
                                : <input className="btn btn-block bg-[#6f7191] text-white" type="submit" value="Bid on the project" />
                        }
                    </form>
                </div>
            </div>
        </div>
    );
};

JobDetails.propTypes = {

};

export default JobDetails;