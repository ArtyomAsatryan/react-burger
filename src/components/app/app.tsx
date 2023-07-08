import React, { useCallback, useEffect } from 'react';
import { useDispatch } from '../../services/hooks/hooks';
import { AppHeader } from '../app-header/app-header';
import { getIngredientsList } from '../../services/actions/ingredients-list';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { ProtectedRoute } from '../protected-route/protected-route';
import {
  Main, Registration, LoginPage,
  ForgotPassword, ResetPassword, ProfilePage,
  IngredientPage, PageNotFound, FeedId, OrderId, FeedPage, OrderPage
} from '../../pages/index';
import { TLocation } from '../../services/types/types';
import { Modal } from '../../components/modal/modal';
import { IngredientDetails } from '../../components/ingredient-details/ingredient-details';
import { OrderInfo } from '../order-info/order-info';
import { OrderInfoUser } from '../order-info-user/order-info-user';

export const App = () => {

  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const background = location.state && location.state.background;

  /*
    const onModalClose = () => {
      navigate(-1);
    };
  */


  useEffect(() => {
    dispatch(getIngredientsList())
  }, [dispatch])


  const closeIngredientsModal = useCallback(() => {
    navigate('/')
  }, [])

  const closeModal = useCallback(() => {
    navigate(-1)
  }, [])



  
    return (
      
        <DndProvider backend={HTML5Backend}>
          <AppHeader />
          <Routes location={background || location}>
            <Route path="/" element={<Main />} />
            <Route path="/register" element={<ProtectedRoute element={<Registration />} anonymous={true} />} />
            <Route path="/login" element={<ProtectedRoute element={<LoginPage />} anonymous={true} />} />
            <Route path="/forgot-password" element={<ProtectedRoute element={<ForgotPassword />} anonymous={true} />} />
            <Route path="/reset-password" element={<ProtectedRoute element={<ResetPassword />} anonymous={true} />} />
            <Route path="/profile/orders/:id"
                 element={<ProtectedRoute element={<OrderId/>} anonymous={false}/>}/>
            <Route path="/profile" element={<ProtectedRoute element={<ProfilePage />} anonymous={false} />} />
            <Route path="/profile/orders" element={<ProtectedRoute element={<OrderPage />} anonymous={false} />} />
            <Route path="/feed" element={<FeedPage/>}/>
            <Route path='/feed/:id' element={<FeedId/>}/>
            <Route path="/ingredients/:id" element={<IngredientPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          {background && (
            <>
            <Routes location={location}>
              <Route path="/ingredients/:id" element={
                <Modal onClose={closeIngredientsModal} title='Детали ингредиента'>
                  <IngredientDetails />
                </Modal>}
              >
              </Route>
  
            <Route path="/feed/:id" element={
              <Modal onClose={closeModal}>
                <OrderInfo/>
              </Modal>}
            >
            </Route>
            
            <Route path="/profile/orders/:id" element={
              <Modal onClose={closeModal}>
                <OrderInfoUser/>
              </Modal>}
            >
            </Route>
  
            </Routes>
            </>
          )}
        </DndProvider>
      
    )
  }
  
