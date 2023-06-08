import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import CalendarScreen from '../components/calendar/CalendarScreen';
import LoginScreen from '../components/auth/LoginScreen';

const AppRouter = () => {
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
