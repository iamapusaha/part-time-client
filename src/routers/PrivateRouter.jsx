
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation();
    if (loader) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to='/signin'></Navigate>
};

PrivateRouter.propTypes = {
    children: PropTypes.node
};

export default PrivateRouter;