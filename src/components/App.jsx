import React, { lazy, useEffect } from 'react';
import { useDispatch} from 'react-redux';
// import { fetchAll } from 'redux/contacts/requestAPI';
// import { selectIsLoading, selectError } from 'redux/contacts/contactsSlise';
import { Route, Routes } from 'react-router-dom';
import { HeaderAll } from './Header/Header';
import { fetchCurrentUser } from 'redux/authorization/requestAPI';
import {PrivateRoute} from './PrivateRouter/PrivateRouter';
import { PublicRoute } from './PublicRouter/PublicRouter';
import { useAuth } from 'hooks';

const PageNotFound = lazy(() => import('../pages/PageNotFound/PageNotFound'));
const HomePage = lazy(() => import('../pages/home'));
const SignUp = lazy(() => import('../pages/SignUp'));
const SignIn = lazy(() => import('../pages/SignIn'));
const PhoneBook = lazy(() => import('../pages/Phonebook'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" exact element={<HeaderAll />}>
        <Route index element={<HomePage />} />
        <Route
          path="phonebook"
          element={
            <PrivateRoute redirectTo="/sign-in" component={<PhoneBook />} />
          }
        />
        <Route
          path="sign-up"
          element={<PublicRoute redirectTo="/phonebook" component={<SignUp />} />}
        />
        <Route
          path="sign-in"
          element={<PublicRoute redirectTo="/phonebook" component={<SignIn />} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};
export default App;
