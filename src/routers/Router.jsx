import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import AddJobs from "../pages/AddJobs/AddJobs";
import JobDetails from "../pages/JobDetails/JobDetails";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
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
                element: <MyPostedJobs></MyPostedJobs>
            }
        ]
    }
])
export default router;