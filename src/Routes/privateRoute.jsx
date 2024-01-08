import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
    const navigate = useNavigate();
    const isAuth =true
    if (!isAuth) {
        return <Navigate to="/login" />
    }
    return (
        <>
            {children}
        </>
    )
};
