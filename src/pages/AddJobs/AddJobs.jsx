import { useContext } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';

const AddJobs = () => {
    const MySwal = withReactContent(Swal)
    const { user } = useContext(AuthContext)
    const handleAddProduct = e => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const email = form.email.value;
        const date = form.date.value;
        const category = form.category.value;
        const maxPrice = form.maxPrice.value;
        const minPrice = form.minPrice.value;
        const discription = form.discription.value;
        const photo = form.photo.value;
        const newJob = { title, email, date, photo, category, minPrice, maxPrice, discription }
        console.log(newJob);
        axios.post('http://localhost:5000/jobs', newJob)
            .then(res => {
                console.log(res.data);
                if (res.data) {
                    MySwal.fire(
                        'WOW!',
                        'added new jobs!',
                        'success'
                    )
                }
            })
    }
    return (
        <div className="container mx-auto my-6 bg-[#F6F6F6] p-5 rounded">
            <h1 className="text-5xl text-center my-2">Add New Job</h1>
            <form onSubmit={handleAddProduct}>
                <div className="md:flex gap-3 px-2 md:px-1 mb-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Job Title</span>
                        </label>
                        <label className="input-group ">
                            <input type="text" name="title" placeholder="Job Title" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <label className="input-group ">
                            <input type="email" defaultValue={user?.email} readOnly name="email" placeholder="email" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                <div className="md:flex gap-3 px-2 md:px-1 mb-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Deadline</span>
                        </label>
                        <label className="input-group ">
                            <input type="date" name="date" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select className="select w-full" name="category">
                            <option disabled selected>What is your job category?</option>
                            <option>web-development</option>
                            <option>digital-marketing</option>
                            <option>graphics-design</option>
                        </select>
                    </div>
                </div>
                <div className="md:flex gap-3 px-2 md:px-1 mb-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Minimum price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="minPrice" placeholder="Minimum price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Maximum price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="maxPrice" placeholder="Maximum price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-3 px-2 md:px-1 mb-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" placeholder="photo url" name="photo" className="input input-bordered" required />
                    </div>
                </div>
                <div className="md:flex gap-3 px-2 md:px-1 mb-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Product Description</span>
                        </label>
                        <label className="input-group ">
                            <textarea name="discription" className="textarea textarea-bordered w-full" placeholder="Description"></textarea>
                        </label>
                    </div>
                </div>
                <input className="btn btn-block bg-[#4D55D0] text-white" type="submit" value="Add Job" />
            </form>
        </div>
    );
};

export default AddJobs;