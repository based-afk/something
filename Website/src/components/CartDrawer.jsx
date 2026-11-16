import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartSubtotal,
    cartCount
  } = useShop();

  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);

  if (!isCartOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#493323]/40 backdrop-blur-xs transition-opacity"
          onClick={() => setIsCartOpen(false)}
        />

        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <div className="w-screen max-w-md bg-[#F8F5EF] shadow-2xl flex flex-col border-l border-[#E8E3DA]">
            {/* Header */}
            <div className="p-6 border-b border-[#E8E3DA] bg-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#B77D5C]" />
                <h2 className="font-serif text-lg font-medium text-[#493323]">
                  Your Shopping Bag ({cartCount})
                </h2>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-[#85866A] hover:text-[#493323] p-1 rounded-md transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[#E8E3DA]/60 flex items-center justify-center text-[#85866A] mb-4">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-lg text-[#493323]">Your bag is empty</h3>
                  <p className="text-xs text-[#85866A] max-w-xs mt-1 mb-6">
                    Explore our curated collection of minimalist art, ceramics, lighting, and textiles.
                  </p>
                  <Link
                    to="/shop"
                    onClick={() => setIsCartOpen(false)}
                    className="bg-[#493323] text-[#F8F5EF] px-6 py-2.5 rounded-xl text-xs font-medium hover:bg-[#382618] transition-colors"
                  >
                    Explore Shop
                  </Link>
                </div>
              ) : (
                cart.map((item) => (
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
                        <div className="flex items-center border border-[#E8E3DA] rounded-lg bg-[#F8F5EF]">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="px-2 py-1 text-[#493323] hover:text-[#B77D5C] text-xs"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-semibold text-[#493323]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="px-2 py-1 text-[#493323] hover:text-[#B77D5C] text-xs"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-[#85866A] hover:text-red-600 p-1 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-xs font-bold text-[#493323]">
                        ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary & Checkout */}
            {cart.length > 0 && (
              <div className="p-6 bg-white border-t border-[#E8E3DA] space-y-4">
                <div className="space-y-1.5 text-xs text-[#85866A]">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold text-[#493323]">
                      ₹{cartSubtotal.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery</span>
                    <span className="text-[#85866A] font-medium">Free (Case Study Promo)</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-[#493323] pt-2 border-t border-[#E8E3DA]">
                    <span>Simulated Total</span>
                    <span>₹{cartSubtotal.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <div className="bg-[#F8F5EF] p-2.5 rounded-lg border border-[#E8E3DA] text-[11px] text-[#85866A] flex items-start gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-[#B77D5C] flex-shrink-0 mt-0.5" />
                  <span>Demonstration Storefront: No real payments or shipments are processed.</span>
                </div>

                <button
                  onClick={() => setCheckoutModalOpen(true)}
                  className="w-full bg-[#B77D5C] hover:bg-[#9f6545] text-white py-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <span>Simulate Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Demonstration Checkout Modal */}
      {checkoutModalOpen && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-[#493323]/50 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-[#E8E3DA] text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#85866A]/15 text-[#85866A] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-medium text-[#493323]">
              Simulated Conversion Logged
            </h3>
            <p className="text-xs text-[#85866A] leading-relaxed">
              In this Digital Marketing demonstration, this simulated order of{' '}
              <strong className="text-[#493323]">₹{cartSubtotal.toLocaleString('en-IN')}</strong>{' '}
              serves as the conversion goal for Google Search advertising tracking.
            </p>
            <div className="bg-[#F8F5EF] p-3 rounded-xl text-left text-xs space-y-1 text-[#493323]">
              <p className="font-semibold text-[11px] text-[#85866A] uppercase tracking-wider">
                Case Study Notice:
              </p>
              <p>• Zero real charges or payment requests.</p>
              <p>• Campaign tracking conversion event triggered.</p>
              <p>• Reflects conversion value calculation in the analytics dashboard.</p>
            </div>
            <div className="flex gap-3 pt-2">
              <button
                onClick={() => {
                  clearCart();
                  setCheckoutModalOpen(false);
                  setIsCartOpen(false);
                }}
                className="flex-1 bg-[#493323] hover:bg-[#382618] text-white py-2.5 rounded-xl text-xs font-medium transition-colors"
              >
                Clear Bag & Close
              </button>
              <button
                onClick={() => setCheckoutModalOpen(false)}
                className="flex-1 bg-[#F8F5EF] hover:bg-[#E8E3DA] text-[#493323] py-2.5 rounded-xl text-xs font-medium border border-[#E8E3DA] transition-colors"
              >
                Continue Browsing
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
