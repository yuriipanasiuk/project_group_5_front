import { useEffect, lazy, useState } from 'react';
import { Routes, Route, Navigate, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/operations';

import { ThemeProvider } from 'styled-components';

import { themeDark, themeLight } from '../utils/theme';
import GlobalStyle from 'utils/GlobalStyle';

import { SharedLayout } from './SharedLayout/SharedLayout';
import NewsPage from '../pages/NewsPage';
import { NoticesList } from './NoticesList/NoticesList';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

const FriendsPage = lazy(() => import('../pages/FriendsPage'));
const NoticesPage = lazy(() => import('../pages/NoticesPage/NoticesPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const UserPage = lazy(() => import('../pages/UserPage/UserPage'));
const NotFound = lazy(() => import('../pages/NotFound'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegisterMethod = lazy(() =>
  import('pages/RegisterMethodPage/RegisterMethodPage')
);
const ConfirmEmail = lazy(() =>
  import('../pages/ConfirmEmailPage/ConfirmEmailPage')
);

export const App = () => {
  const [theme, setTheme] = useState(themeLight);

  const toggleTheme = () => {
    setTheme(theme === themeLight ? themeDark : themeLight);
  };

  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();

  const token = searchParams.get('token');
  const email = searchParams.get('email');
  const id = searchParams.get('id');

  useEffect(() => {
    if (token) {
      dispatch(authOperations.googleApi({ token, email, id }));
    }
    dispatch(authOperations.refresh());
  }, [token, email, id, dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        <Routes>
          {
            <Route
              path="/"
              element={<SharedLayout theme={theme} toggleTheme={toggleTheme} />}
            >
              <Route index element={<HomePage />} />
              <Route path="news" element={<NewsPage />} />
              <Route path="notices" element={<NoticesPage />}>
                <Route index element={<Navigate to="sell" />} />
                <Route
                  path="lost-found"
                  element={<NoticesList askedPage="lost_found" />}
                />
                <Route
                  path="for-free"
                  element={<NoticesList askedPage="in_good_hands" />}
                />
                <Route
                  path="sell"
                  index
                  element={<NoticesList askedPage="sell" />}
                />
                <Route
                  path="favorite"
                  element={<NoticesList askedPage="favorite" />}
                />
                <Route path="own" element={<NoticesList askedPage="own" />} />
              </Route>
              <Route path="friends" element={<FriendsPage />} />
              <Route
                path="registration"
                element={
                  <RestrictedRoute
                    redirectTo="/user"
                    component={RegisterPage}
                  />
                }
              />
              <Route
                path="registration-redirect"
                element={
                  <RestrictedRoute
                    redirectTo="/user"
                    component={RegisterMethod}
                  />
                }
              />
              <Route
                path="confirm-email"
                element={
                  <RestrictedRoute
                    redirectTo="/user"
                    component={ConfirmEmail}
                  />
                }
              />
              <Route
                path="login"
                element={
                  <RestrictedRoute redirectTo="/user" component={LoginPage} />
                }
              />
              <Route
                path="user"
                element={
                  <PrivateRoute redirectTo="/login" component={UserPage} />
                }
              />
            </Route>
          }
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};
