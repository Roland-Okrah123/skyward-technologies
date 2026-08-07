import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetail from "./pages/ProductDetail";
import SolutionsPage from "./pages/SolutionsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";


function App() {

  return (
    <>
      <ScrollToTop />

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route 
          path="/services" 
          element={<ServicesPage />} 
        />

        <Route 
          path="/products" 
          element={<ProductsPage />} 
        />

        <Route
          path="/products/:productId"
          element={<ProductDetail />}
        />

        <Route 
          path="/solutions" 
          element={<SolutionsPage />} 
        />

        <Route 
          path="/about" 
          element={<AboutPage />} 
        />

        <Route 
          path="/contact" 
          element={<ContactPage />} 
        />

        <Route path="*" element={<NotFound />} />

      </Routes>

      <Footer />

      <WhatsAppButton />
    </>
  );
}

export default App;
