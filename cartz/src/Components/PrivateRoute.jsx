import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }){
  const auth = useSelector((store) => store.authReducer.isAuth)

  return auth ? children : <Navigate state={location.pathname} to={"/login"}/>;
}

export default PrivateRoute;