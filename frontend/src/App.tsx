import { route } from './constants';
import { Dashboard } from 'features/dashboard';
import { AppAlert } from 'primitives/Alert/AppAlert';
import { modal, modalSelector } from 'primitives/Modal';
import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useSetRecoilState } from 'recoil';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './backend';


export const App = () => {
  const authenticated = true
  const openSignoutModal = useSetRecoilState(modalSelector(modal.signout))
  const location = useLocation()

  useEffect(() => {
    if (!authenticated && location.pathname !== route.dashboard) {
      openSignoutModal(true)
    }
  }, [authenticated])

  return (
    <ApolloProvider client={apolloClient}>
      <Routes>
        <Route path={route.dashboard} element={<Dashboard />} />
        <Route path="*" element={<Navigate to={route.dashboard} />} />
      </Routes>
      <AppAlert />
    </ApolloProvider>
  );
};
