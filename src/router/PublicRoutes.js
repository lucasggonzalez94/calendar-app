import React from 'react';
import PropTypes from 'prop-types';

import { Navigate } from 'react-router-dom';

export const PublicRoutes = ({
  isAuthenticated,
  component: Component
}) => {
  return <>{isAuthenticated ? <Navigate to="/" replace={true} /> : <Component />}</>;
};

PublicRoutes.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
