import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header.jsx';
import BurgerIngredients from '../burger-ingredients/burger-ingredients.jsx';
import BurgerConstructor from '../burger-constructor/burger-constructor.jsx';
import { apiBurger } from '../../utils/api';
import Modal from '../modal/modal.jsx';
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderDetails from '../order-details/order-details';


export default function App() {

  const [ingredients, setIngredients] = useState([]);
  const [element, setElement] = useState();
  const [openOrderModal, setOrderOpenModal] = useState();
  const [openIngredientsModal, setOpenIngredientModal] = useState();

  useEffect(() => {
    apiBurger.getIngredients()
      .then(({ success, data }) => {
        if (success) {
          setIngredients(data)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  console.dir(ingredients)

  const handleElementModal = (event, element) => {
    setOpenIngredientModal(!openIngredientsModal);
    setElement(element);
  }

  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients ingredients={ingredients} onClick={handleElementModal} />
        <BurgerConstructor onClick={setOrderOpenModal} />
      </main>

      {!!openIngredientsModal && (
        <Modal onClose={() => setOpenIngredientModal(false)} title='Детали ингредиента'>
          <IngredientDetails ingredient={element} />
        </Modal>
      )}

      {!!openOrderModal && (
        <Modal onClose={() => setOrderOpenModal(false)}>
          <OrderDetails />
        </Modal>
      )}

    </>
  )
}