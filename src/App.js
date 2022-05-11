import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";

//router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateOrEditPage from "./pages/CreateOrEditPage/CreateOrEditPage";
import DetailPage from "./pages/DetailPage/DetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="addresses/:id" element={<DetailPage />} />
        <Route
          path="addresses/edit/:id"
          element={<CreateOrEditPage isNew={false} />}
        />
        <Route
          path="addresses/new"
          element={<CreateOrEditPage isNew={true} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
