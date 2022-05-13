import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";

//router
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
  useLocation,
} from "react-router-dom";
import CreateOrEditPage from "./pages/CreateOrEditPage/CreateOrEditPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import LoginPage from "./pages/LoginPage/LoginPage";

import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/address-book-project/*" element={<NotFoundPage />} />
        <Route path={"/address-book-project/"} element={<PrivateRoute />}>
          <Route path="/address-book-project/home" element={<HomePage />} />
          <Route
            path="/address-book-project/addresses/edit/:id"
            element={<CreateOrEditPage isNew={false} />}
          />
          <Route
            path="/address-book-project/addresses/new"
            element={<CreateOrEditPage isNew={true} />}
          />
          <Route
            path="/address-book-project/addresses/details/:id"
            element={<DetailPage />}
          />
        </Route>
        <Route path="/address-book-project/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
