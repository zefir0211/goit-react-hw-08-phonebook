import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/authorization/authSelectors';
import { Loader } from '../Loader/Loader'
import RegistrAutho from './Autho';
import HeaderSCSS from './Header.module.scss'
import HomeAll from './Home';
import Logout from './Logout';

export const HeaderAll = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <>
            <header className={HeaderSCSS.header}>
                <nav className={HeaderSCSS.nav}>
                    <HomeAll />
                    {!isLoggedIn ? 
                        (<RegistrAutho />) :
                        (<Logout />)
                    }
                </nav>
            </header>
            <Suspense fallback={<Loader/>}>
                <Outlet />
            </Suspense>
        </>
    );
};