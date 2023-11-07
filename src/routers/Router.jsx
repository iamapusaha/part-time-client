import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import AddJobs from "../pages/AddJobs/AddJobs";
import JobDetails from "../pages/JobDetails/JobDetails";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import UpdateJob from "../pages/UpdateJob/UpdateJob";
import MyBids from "../pages/MyBids/MyBids";
import BidRequest from "../pages/BidRequest/BidRequest";
import PrivateRouter from "./PrivateRouter";
import Error404 from "../pages/Error404/Error404";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error404></Error404>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/add-jobs',
                element: <AddJobs></AddJobs>
            },
            {
                path: '/jobs/:id',
                element: <JobDetails></JobDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/jobs/v1/${params.id}`)
            },
            {
                path: '/my-posted-jobs',
                element: <PrivateRouter><MyPostedJobs></MyPostedJobs></PrivateRouter>
            },
            {
                path: '/update-job/:id',
                element: <UpdateJob></UpdateJob>,
                loader: ({ params }) => fetch(`http://localhost:5000/jobs/v1/${params.id}`)
            },
            {
                path: '/my-bids',
                element: <MyBids></MyBids>
            },
            {
                path: '/bid-request',
                element: <BidRequest></BidRequest>
            }
        ]
    }
])
export default router;