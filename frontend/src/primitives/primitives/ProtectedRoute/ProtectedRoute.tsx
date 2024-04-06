import { useRecoilValue } from "recoil";
import { userAuthenticatedSelector } from "features/login/tokenState";
import { Navigate, Outlet, RouteProps } from "react-router";
import { FC } from "react";

export const ProtectedRoute: FC<RouteProps> = (props) => {
  const loggedIn = useRecoilValue(userAuthenticatedSelector);

  return loggedIn ? <Outlet /> : <Navigate to={'/'} />;
}
