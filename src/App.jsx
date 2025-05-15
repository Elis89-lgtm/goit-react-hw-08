import { useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import PrivateRoute from "./components/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute";
import { refreshUser } from "./redux/auth/operations";
import { fetchContacts } from "./redux/contacts/operations";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./redux/store";
import { selectIsLoggedIn, selectIsRefreshing } from "./redux/auth/selectors";

import { Toaster } from "react-hot-toast";
import Loader from "./components/Loader/Loader";
import "./App.css";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector((state) => selectIsLoggedIn(state));

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <PersistGate loading={null} persistor={persistor}>
      {isRefreshing ? (
        // <strong>Refreshing user...</strong>
        <Loader />
      ) : (
        <div className="app">
          <Layout>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                  path="/register"
                  element={
                    <RestrictedRoute
                      redirectTo="/contacts"
                      element={<RegistrationPage />}
                    />
                  }
                />
                <Route
                  path="/login"
                  element={
                    <RestrictedRoute
                      redirectTo="/contacts"
                      element={<LoginPage />}
                    />
                  }
                />
                <Route
                  path="/contacts"
                  element={
                    <PrivateRoute
                      redirectTo="/login"
                      element={<ContactsPage />}
                    />
                  }
                />
              </Routes>
            </Suspense>
          </Layout>
          <Toaster position="top-center" reverseOrder={false} />
        </div>
      )}
    </PersistGate>
  );
};

export default App;
