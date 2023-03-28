import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppHeader } from '../app-header/app-header';
import { getIngredientsList } from '../../services/actions/ingredients-list';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from '../protected-route/protected-route.jsx';
import {
  Main, Registration, LoginPage,
  ForgotPassword, ResetPassword, ProfilePage,
  PageNotFound
} from '../../pages/index';

export function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredientsList())
  }, [dispatch])

  return (
    <DndProvider backend={HTML5Backend}>
      <AppHeader />
      <Routes>
        <Route path="/"  component={Main} />
        <Route path="/login"  component={LoginPage} />
        <Route path="/register"  component={Registration} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/reset-password"  component={ResetPassword} />
        <ProtectedRoute path="/profile" component={ProfilePage} />
        <ProtectedRoute path="/profile/orders" component={ProfilePage} />
        <Route component={PageNotFound} />
      </Routes>
    </DndProvider>
  )
}
