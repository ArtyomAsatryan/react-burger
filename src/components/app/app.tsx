import React, { useEffect } from 'react';
import { useDispatch } from '../../services/hooks/hooks';
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

export const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredientsList())
  }, [dispatch])

  return (
    <DndProvider backend={HTML5Backend}>
      <AppHeader />
      <Routes>
        <Route path="/"  element={<Main/>} />
        <Route path="/login"  element={<LoginPage/>} />
        <Route path="/register"  element={<Registration/>} />
        <Route path="/forgot-password"  element={<ForgotPassword/>} />
        <Route path="/reset-password"  element={<ResetPassword/>} />
        <Route path="/forgot-password" element={<ProtectedRoute path="/profile" element={<ProfilePage/>} />}/>
        <Route path="/forgot-password" element={<ProtectedRoute path="/profile/orders" element={<ProfilePage/>} />}/>
        <Route path="/forgot-password" element={<ProtectedRoute path="/ingredients/:${id}" element={<IngredientPage/>} />}/>
        <Route path="/*" element={<PageNotFound/>} />
      </Routes>
    </DndProvider>
  )
}
