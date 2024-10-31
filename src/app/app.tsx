import Main from './pages/main/main.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/login.tsx';
import Favorites from './pages/favorites/favorites.tsx';
import Offer from './pages/offer/offer.tsx';
import NotFound from './pages/404/404.tsx';
import { AppRouteList, AuthStatus } from '../contants.ts';
import PrivateRoute from './components/private-route/private-route.tsx';
import { OfferItem } from '../models/app.models.ts';

interface AppProps {
  placesToStayCount: number;
  offerList: OfferItem[];
}

export default function App(props: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRouteList.Main}
          element={<Main placesToStayCount={props.placesToStayCount} />}
        />
        <Route
          path={AppRouteList.Login}
          element={<Login />}
        />
        <Route
          path={AppRouteList.Favorites}
          element={
            <PrivateRoute authStatus={AuthStatus.NotAuth}>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRouteList.Offer}/:id`}
          element={<Offer />}
        />
        <Route
          path={AppRouteList.NotFound}
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}
