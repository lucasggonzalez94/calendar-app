import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CalendarScreen from '../components/calendar/CalendarScreen';
import LoginScreen from '../components/auth/LoginScreen';
import { startChecking } from '../actions/auth';

const AppRouter = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);
  

  const router = createBrowserRouter([
    {
      path: '/',
      element: <CalendarScreen />,
    },
    {
      path: '/login',
      element: <LoginScreen />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
