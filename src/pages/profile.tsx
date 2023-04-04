import React, { useEffect } from 'react';
import styles from './pages.module.css';
import { useDispatch } from '../services/hooks/hooks';
import { getUserInfo } from '../services/actions/user';
import { Route, Routes } from 'react-router-dom';
import { ProfileForm } from '../components/profile-form/profile-form';
import { OrdersHistory } from '../components/orders-history/orders-history';
import { Menu } from '../components/menu/menu';

export const ProfilePage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserInfo());
    }, [dispatch])

    return (
        <section className={styles.profile}>
            <Menu />
            <Routes>
                <Route path="/profile" element={<ProfileForm/>} />
                <Route path="/profile/orders" element={<OrdersHistory/>} />
            </Routes>
        </section>
    )
}