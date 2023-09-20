import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUsername } from 'redux/authorization/authSelectors';
import { logOut } from 'redux/authorization/requestAPI';
import HeaderSCSS from './Header.module.scss';

const Logout = () => {
    const user = useSelector(selectUsername);

    const dispatch = useDispatch();

    const userOut = async () => {
        await dispatch(logOut());
        window.localStorage.removeItem('persist:auth');
    };

    return (
            <div className={HeaderSCSS.log}>
                <h2 className={HeaderSCSS.userName}>Welcome {user ? user : 'NickName'}</h2>
                <button onClick={userOut} className={HeaderSCSS.button}>Logout</button>
            </div>
    );
};
export default Logout;