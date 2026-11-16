import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ShopProvider } from './context/ShopContext';
import Header from './components/Header';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import WishlistDrawer from './components/WishlistDrawer';
import NotificationToast from './components/NotificationToast';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import WallArtLandingPage from './pages/WallArtLandingPage';
import HomeAccessoriesLandingPage from './pages/HomeAccessoriesLandingPage';
import LightingLandingPage from './pages/LightingLandingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-[#F8F5EF] text-[#493323] antialiased">
          <ScrollToTop />
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/collections/wall-art" element={<WallArtLandingPage />} />
              <Route path="/collections/home-accessories" element={<HomeAccessoriesLandingPage />} />
              <Route path="/collections/lighting" element={<LightingLandingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
          <CartDrawer />
          <WishlistDrawer />
          <NotificationToast />
        </div>
      </BrowserRouter>
    </ShopProvider>
  );
}
