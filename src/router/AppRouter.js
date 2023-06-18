import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import CalendarScreen from '../components/calendar/CalendarScreen';
import LoginScreen from '../components/auth/LoginScreen';
import { startChecking } from '../actions/auth';
import { PublicRoutes } from './PublicRoutes';
import { PrivateRoutes } from './PrivateRoutes';

const AppRouter = () => {

  const dispatch = useDispatch();
  const { checking, uid } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);
  
  if (checking) {
    // TODO: Crear loading
    return <h5>Espere...</h5>;
  }

  const router = createBrowserRouter([
    {
      exact: true,
      path: '/',
      element: <PrivateRoutes isAuthenticated={!!uid} component={CalendarScreen} />,
    },
    {
      exact: true,
      path: '/login',
      element: <PublicRoutes isAuthenticated={!!uid} component={LoginScreen} />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
