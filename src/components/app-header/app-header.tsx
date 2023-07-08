import React from 'react';
import styles from './app-header.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink, useLocation, useResolvedPath } from 'react-router-dom';

const AppHeaderFunction = () => {

  const { pathname } = useLocation();
  const isProfile = !!useResolvedPath('/profile');

  return (
    <header className={styles.header}>
      <nav className={styles.headerNavigation}>
        <div className={styles.twoBlocks}>
          <NavLink
            to='/'

            className={styles.link}>
            <BurgerIcon type={pathname === '/' ? "primary" : "secondary"} />
            <p className={pathname === '/'
              ? `${styles.active} text text_type_main-default`
              : `text text_type_main-default text_color_inactive`}
            >
              Конструктор
            </p>
          </NavLink>

          <NavLink
            to='/feed'

            className={styles.link}>
            <ListIcon type={pathname === '/feed' ? "primary" : "secondary"} />
            <p className={pathname === '/feed'
              ? `${styles.active} text text_type_main-default`
              : `text text_type_main-default text_color_inactive`}
            >
              Лента заказов
            </p>
          </NavLink>
        </div>

        <NavLink
          to={"/"}>
          <Logo />
        </NavLink>

        <NavLink
          to='/profile'

          className={styles.link}>
          <ProfileIcon type={isProfile ? "primary" : "secondary"} />
          <p className={isProfile
            ? `${styles.active} text text_type_main-default`
            : `text text_type_main-default text_color_inactive`}
          >
            Личный кабинет
          </p>
        </NavLink>
      </nav>
    </header>
  )
}

export const AppHeader = React.memo(AppHeaderFunction);


