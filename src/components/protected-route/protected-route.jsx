import {Navigate, Route} from 'react-router-dom';
import {useSelector} from "react-redux";

export const ProtectedRoute = ( { component, path } ) => {

    const authorization = useSelector(state => state.getLogin.login);

    if (!authorization) {

        return (
            <Route path={path} component={component}>
                <Navigate
                    to={'/login?retpath=/profile'}
                />
            </Route>
        )
    }
    return <Route path={path} component={component} />
}
