import { Navigate } from "react-router-dom";

export const ProtectedRoutes = ({children}) => {
    const isLogin = localStorage.getItem('login_react');

    if(isLogin === 'true') {
        return children;
    } else {
        return <Navigate to="/login" />
    }
}