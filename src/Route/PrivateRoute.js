import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import UseAuth from '../Hooks/UseAuth';
function PrivateRoute(props) {
  const { children, ...rest }=props;
const {AllContexts}=UseAuth();
const {user, isLoading}=AllContexts;
if(isLoading){
  return<Spinner animation="border" variant="danger"/>
}
    return (
      <Route
        {...rest}
        render={({ location }) =>
          user.displayName? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
  export default PrivateRoute;