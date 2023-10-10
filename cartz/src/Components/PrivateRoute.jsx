import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }){
  const location = useLocation();
  const auth = useSelector((store) => store.authReducer.isAuth)

  return auth ? children : <Navigate state={location.pathname} to={"/login"}/>;
}

export default PrivateRoute;