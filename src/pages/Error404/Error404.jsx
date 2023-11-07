import { Link } from 'react-router-dom';
import error from '../../assets/error404.png'
import { Helmet } from 'react-helmet-async';

const Error404 = () => {
    return (
        <div className='flex justify-center items-center text-center'>
            <Helmet>
                <title>Part Time || Error 404</title>
            </Helmet>
            <div>
                <img src={error} alt="" />
                <Link className='btn btn-info'>Back To Home</Link>
            </div>

        </div>
    );
};

export default Error404;