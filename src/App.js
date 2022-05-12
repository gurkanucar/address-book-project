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
  //get auth data

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/home" element={<HomePage />} />
          <Route
            path="/addresses/edit/:id"
            element={<CreateOrEditPage isNew={false} />}
          />
          <Route
            path="/addresses/new"
            element={<CreateOrEditPage isNew={true} />}
          />
          <Route path="/addresses/details/:id" element={<DetailPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
