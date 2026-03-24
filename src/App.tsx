import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import QuotesPage from "./pages/QuotesPage";
import FactsPage from "./pages/FactsPage";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/quotes" element={<QuotesPage />} />
          <Route path="/facts" element={<FactsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
