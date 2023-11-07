import { Link } from 'react-router-dom';
import error from '../../assets/error404.png'

const Error404 = () => {
    return (
        <div className='flex justify-center items-center text-center'>
            <div>
                <img src={error} alt="" />
                <Link className='btn btn-info'>Back To Home</Link>
            </div>

        </div>
    );
};

export default Error404;