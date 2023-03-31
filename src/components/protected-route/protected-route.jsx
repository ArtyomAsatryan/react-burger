import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const ProtectedRoute = (props) => {

    const authorization = useSelector(state => state.getLogin.login);

    if (!authorization) {

        return (
            <Route path={props.path} exact={props.exact}>
                <Navigate
                    to={'/login?retpath=/profile'}
                />
            </Route>
        )
    }
    return <Route {...props} />
}
