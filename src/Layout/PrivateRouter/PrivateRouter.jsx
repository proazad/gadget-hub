import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="container mx-auto">
        <div className="flex items-center justify-center h-screen">
          <span className="loading loading-spinner loading-lg text-secondary"></span>
        </div>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/signin"></Navigate>;
};
export default PrivateRouter;
PrivateRouter.propTypes = {
  children: PropTypes.node,
};
