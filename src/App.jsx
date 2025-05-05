// src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Home     from "./pages/Home.jsx";
import Catalog  from "./pages/Catalog.jsx";
import About    from "./pages/About.jsx";
import Contacts from "./pages/Contacts.jsx";
import ProductPage from './pages/ProductPage.jsx'; // путь может отличаться
import ReviewsPage from './pages/ReviewsPage.jsx';

export default function App() {
  return (
    <div className="app-container">
      <Header />

      <main>
        <Routes>
          <Route path="/"        element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/about"   element={<About />} />
          <Route path="/contacts"element={<Contacts />} />
          <Route path="/product" element={<ProductPage />} />  {/* ← вот это добавь */}
          <Route path="/reviews" element={<ReviewsPage />} />

          {/* Перенаправление любых несуществующих путей на главную */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
