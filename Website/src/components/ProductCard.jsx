import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Eye, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, isInWishlist } = useShop();
  const wishlisted = isInWishlist(product.id);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-[#E8E3DA] hover:border-[#B77D5C]/50 hover:shadow-card transition-all duration-300 flex flex-col">
      {/* Product Image Container */}
      <div className="relative aspect-square overflow-hidden bg-[#F8F5EF]/60">
        <Link to={`/product/${product.id}`} className="block w-full h-full">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-[#FFFFFF]/90 backdrop-blur-sm text-[#493323] text-[11px] font-medium px-2.5 py-1 rounded-full border border-[#E8E3DA]/80 shadow-xs">
            {product.category}
          </span>
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 ${
            wishlisted
              ? 'bg-[#B77D5C] text-white shadow-sm'
              : 'bg-white/80 backdrop-blur-sm text-[#493323] hover:text-[#B77D5C] hover:bg-white'
          }`}
          title={wishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
          aria-label="Wishlist"
        >
          <Heart className={`w-4 h-4 ${wishlisted ? 'fill-current' : ''}`} />
        </button>

        {/* Hover Quick Action Overlay */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex gap-2">
          <button
            onClick={() => addToCart(product)}
            className="flex-1 bg-[#493323] hover:bg-[#382618] text-[#F8F5EF] text-xs font-medium py-2.5 px-3 rounded-xl shadow-md flex items-center justify-center gap-1.5 transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Add to Bag</span>
          </button>
          <Link
            to={`/product/${product.id}`}
            className="bg-white hover:bg-[#F8F5EF] text-[#493323] p-2.5 rounded-xl shadow-md border border-[#E8E3DA] flex items-center justify-center transition-colors"
            title="View Details"
          >
            <Eye className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <Link to={`/product/${product.id}`} className="block group-hover:text-[#B77D5C] transition-colors">
            <h3 className="font-serif text-lg font-medium text-[#493323] leading-snug line-clamp-1">
              {product.name}
            </h3>
          </Link>
          <p className="mt-1 text-xs text-[#85866A] line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-[#E8E3DA]/60 flex items-center justify-between">
          <div>
            <span className="text-xs text-[#85866A]">Price</span>
            <p className="text-base font-semibold text-[#493323]">
              ₹{product.price.toLocaleString('en-IN')}
            </p>
          </div>

          <Link
            to={`/product/${product.id}`}
            className="text-xs font-medium text-[#B77D5C] hover:text-[#9f6545] flex items-center gap-1 transition-colors"
          >
            <span>Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

