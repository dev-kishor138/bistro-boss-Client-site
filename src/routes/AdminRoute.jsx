import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";


const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <span className="loading loading-bars loading-lg"></span>
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to='/' state={{ from: location }} replace />
};

export default AdminRoute;