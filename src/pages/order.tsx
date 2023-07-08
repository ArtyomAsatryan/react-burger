import React, { useEffect } from 'react';
import styles from './pages.module.css';
import { useDispatch } from '../services/hooks/hooks';
import { getUserInfo } from '../services/actions/user';
import { Route, Routes } from 'react-router-dom';
import { ProfileForm } from '../components/profile-form/profile-form';
import { OrdersHistoryUser } from '../components/orders-history-user/orders-history-user';
import { Menu } from '../components/menu/menu';
import { wsConnectionStartUser, wsConnectionClosedUser } from '../services/actions/wsActions';

export const OrderPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserInfo());
    }, [dispatch])

    useEffect(() => {
        dispatch(wsConnectionStartUser());
        return () => {
            dispatch(wsConnectionClosedUser());
        };
    }, []);

    return (
        <section className={styles.profile}>
            <Menu />
            
            <OrdersHistoryUser/>
                
                
        </section>
    )
}