import React from 'react';
import PropTypes from 'prop-types';

import { Navigate } from 'react-router-dom';

export const PrivateRoutes = ({
  isAuthenticated,
  component: Component
}) => {
  return <>{isAuthenticated ? <Component /> : <Navigate to="/login" replace={true} />}</>;
};

PrivateRoutes.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
