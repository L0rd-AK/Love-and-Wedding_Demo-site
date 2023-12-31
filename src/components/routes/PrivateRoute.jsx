import { useContext } from "react";
import PropTypes from 'prop-types';
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="flex justify-center items-center text-7xl"><span className="loading loading-bars loading-lg"></span></div>
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>;
};
PrivateRoute.propTypes = {
    children: PropTypes.object,
};
export default PrivateRoute;