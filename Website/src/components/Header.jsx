import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ShoppingBag, Heart, Menu, X, Search, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const { cartCount, setIsCartOpen, wishlist, setIsWishlistOpen } = useShop();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop All', path: '/shop' },
    { name: 'Wall Art', path: '/collections/wall-art' },
    { name: 'Home Accessories', path: '/collections/home-accessories' },
    { name: 'Lighting', path: '/collections/lighting' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      {/* Top Banner - Academic Case Study & Google Ads Demonstration */}
      <div className="bg-[#493323] text-[#F8F5EF] text-xs py-2 px-4 text-center tracking-wide font-medium flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#B77D5C]" />
        <span>Haven & Hue — Digital Marketing Case Study Storefront & Google Ads Campaign Hub</span>
      </div>

      <header className="sticky top-0 z-40 bg-[#F8F5EF]/95 backdrop-blur-md border-b border-[#E8E3DA] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Mobile menu trigger */}
            <div className="flex items-center md:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-[#493323] p-2 rounded-md hover:bg-[#E8E3DA]/50 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Official Brand Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center group">
                <img
                  src="/assets/logo.png"
                  alt="Haven & Hue Home Decor"
                  className="h-14 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-7">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-medium tracking-wide transition-colors relative py-1 ${
                      isActive
                        ? 'text-[#B77D5C] font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#B77D5C]'
                        : 'text-[#493323] hover:text-[#B77D5C]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Actions: Search, Wishlist, Cart */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* Search Toggle */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-[#493323] hover:text-[#B77D5C] p-2 transition-colors"
                title="Search Products"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist Button */}
              <button
                onClick={() => setIsWishlistOpen(true)}
                className="text-[#493323] hover:text-[#B77D5C] p-2 relative transition-colors"
                title="Wishlist"
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute top-1 right-1 bg-[#85866A] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </button>

              {/* Cart Drawer Trigger */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="bg-[#493323] hover:bg-[#382618] text-[#F8F5EF] px-3.5 py-2 rounded-full flex items-center gap-2 text-sm font-medium shadow-sm transition-all duration-200"
                aria-label="Shopping Cart"
              >
                <ShoppingBag className="w-4 h-4" />
                <span className="hidden sm:inline">Bag</span>
                <span className="bg-[#B77D5C] text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                  {cartCount}
                </span>
              </button>
            </div>
          </div>

          {/* Expandable Search Input */}
          {searchOpen && (
            <div className="py-3 border-t border-[#E8E3DA] animate-fadeIn">
              <form onSubmit={handleSearch} className="flex gap-2 max-w-xl mx-auto">
                <input
                  type="text"
                  placeholder="Search vases, wall art, lamps, cushions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="flex-1 bg-white border border-[#E8E3DA] px-4 py-2 rounded-lg text-sm text-[#493323] focus:outline-none focus:border-[#B77D5C]"
                />
                <button
                  type="submit"
                  className="bg-[#B77D5C] hover:bg-[#9f6545] text-white text-sm px-5 py-2 rounded-lg font-medium transition-colors"
                >
                  Search
                </button>
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className="text-[#85866A] hover:text-[#493323] px-3 py-2 text-sm"
                >
                  Cancel
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#F8F5EF] border-b border-[#E8E3DA] px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'bg-[#B77D5C]/10 text-[#B77D5C] font-semibold'
                      : 'text-[#493323] hover:bg-[#E8E3DA]/50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
