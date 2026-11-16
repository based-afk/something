import React from 'react';
import { X, Trash2, ShoppingBag, Heart, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { Link } from 'react-router-dom';

export default function WishlistDrawer() {
  const { wishlist, isWishlistOpen, setIsWishlistOpen, toggleWishlist, addToCart } = useShop();

  if (!isWishlistOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-[#493323]/40 backdrop-blur-xs transition-opacity"
        onClick={() => setIsWishlistOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#F8F5EF] shadow-2xl flex flex-col border-l border-[#E8E3DA]">
          {/* Header */}
          <div className="p-6 border-b border-[#E8E3DA] bg-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#B77D5C] fill-current" />
              <h2 className="font-serif text-lg font-medium text-[#493323]">
                Saved Favorites ({wishlist.length})
              </h2>
            </div>
            <button
              onClick={() => setIsWishlistOpen(false)}
              className="text-[#85866A] hover:text-[#493323] p-1 rounded-md transition-colors"
              aria-label="Close wishlist"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {wishlist.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#E8E3DA]/60 flex items-center justify-center text-[#85866A] mb-4">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-lg text-[#493323]">No saved items yet</h3>
                <p className="text-xs text-[#85866A] max-w-xs mt-1 mb-6">
                  Click the heart icon on any product to save your favorite home accents.
                </p>
                <Link
                  to="/shop"
                  onClick={() => setIsWishlistOpen(false)}
                  className="bg-[#493323] text-[#F8F5EF] px-6 py-2.5 rounded-xl text-xs font-medium hover:bg-[#382618] transition-colors"
                >
                  Browse Catalogue
                </Link>
              </div>
            ) : (
              wishlist.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-4 rounded-xl border border-[#E8E3DA] flex gap-4 items-center"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover bg-[#F8F5EF]"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-semibold text-[#493323] truncate">
                      {item.name}
                    </h4>
                    <p className="text-xs text-[#85866A] mt-0.5">
                      ₹{item.price.toLocaleString('en-IN')}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => {
                          addToCart(item);
                          toggleWishlist(item);
                        }}
                        className="bg-[#493323] hover:bg-[#382618] text-white text-[11px] font-medium px-2.5 py-1 rounded-lg flex items-center gap-1 transition-colors"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        <span>Move to Bag</span>
                      </button>
                      <button
                        onClick={() => toggleWishlist(item)}
                        className="text-[#85866A] hover:text-red-600 p-1 transition-colors"
                        title="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

