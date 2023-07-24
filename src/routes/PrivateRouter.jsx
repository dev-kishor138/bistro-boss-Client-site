import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <span className="loading loading-bars loading-lg"></span>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace />
};

export default PrivateRouter;