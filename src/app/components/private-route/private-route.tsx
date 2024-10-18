import { AppRouteList, AuthStatus } from '../../../contants.ts';
import { Navigate } from 'react-router-dom';
import { ReactElement } from 'react';

interface PrivateRouteProps {
  authStatus: AuthStatus;
  children: ReactElement;
}

export default function PrivateRoute({authStatus, children}: PrivateRouteProps) {
  return (
    authStatus === AuthStatus.Auth
      ? children
      : <Navigate to={AppRouteList.Login} />
  );
}
