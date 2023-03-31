import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppHeader } from '../app-header/app-header';
import { getIngredientsList } from '../../services/actions/ingredients-list';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from '../protected-route/protected-route';
import {
  Main, Registration, LoginPage,
  ForgotPassword, ResetPassword, ProfilePage,
  IngredientPage, PageNotFound
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
        <Route path="/" exact={true} element={<Main/>} />
        <Route path="/login" exact={true} element={<LoginPage/>} />
        <Route path="/register" exact={true} element={<Registration/>} />
        <Route path="/forgot-password" exact={true} element={<ForgotPassword/>} />
        <Route path="/reset-password" exact={true} element={<ResetPassword/>} />
        <Route path="/forgot-password" exact={true} element={<ProtectedRoute path="/profile" element={<ProfilePage/>} />}/>
        <Route path="/forgot-password" exact={true} element={<ProtectedRoute path="/profile/orders" element={<ProfilePage/>} />}/>
        <Route path="/*" element={<PageNotFound/>} />
      </Routes>
    </DndProvider>
  )
}
