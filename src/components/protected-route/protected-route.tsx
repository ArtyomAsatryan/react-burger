import { Route, Navigate, useLocation } from 'react-router-dom';
import { useSelector, } from '../../services/hooks/hooks';
/*
export const ProtectedRoute = (props: any) => {

    const authorization = useSelector(state => state.getLogin.login);

    if (!authorization) {

        return (
            <Route path={props.path}>
                <Navigate
                    to={'/login?retpath=/profile'}
                />
            </Route>
        )
    }
    return <Route {...props} />
}
*/

export function ProtectedRoute ({ element, anonymous = false } :{ element: JSX.Element, anonymous: boolean }) {
    const isLoggedIn = useSelector((store) => store.getLogin.login);
  
    const location = useLocation();
    const from = location.state?.from || '/';
    // Если разрешен неавторизованный доступ, а пользователь авторизован...
    if (anonymous && isLoggedIn) {
      // ...то отправляем его на предыдущую страницу
      return <Navigate to={ from } />;
    }
  
    // Если требуется авторизация, а пользователь не авторизован...
    if (!anonymous && !isLoggedIn) {
      // ...то отправляем его на страницу логин
      return <Navigate to="/login" state={{ from: location}}/>;
    }
  
    // Если все ок, то рендерим внутреннее содержимое
    return element;
  }