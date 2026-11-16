import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useShop } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';
import {
  Heart,
  ShoppingBag,
  Plus,
  Minus,
  Check,
  ChevronRight,
  Shield,
  Truck,
  RotateCcw,
  Sparkles,
  ArrowLeft
} from 'lucide-react';

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, isInWishlist } = useShop();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="font-serif text-3xl text-[#493323]">Product Not Found</h2>
        <p className="text-xs text-[#85866A]">
          The product you are looking for does not exist in our catalogue.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-[#493323] text-white px-6 py-2.5 rounded-xl text-xs font-medium"
        >
          Return to Shop
        </Link>
      </div>
    );
  }

  const wishlisted = isInWishlist(product.id);

  // Related products (exclude current)
  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-[#85866A]">
        <Link to="/" className="hover:text-[#493323] transition-colors">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link to="/shop" className="hover:text-[#493323] transition-colors">Shop</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-[#B77D5C] font-medium">{product.name}</span>
      </nav>

      {/* Main Product Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Large Product Photography */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-white rounded-3xl overflow-hidden border border-[#E8E3DA] p-3 shadow-soft">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#F8F5EF]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
              <button
                onClick={() => toggleWishlist(product)}
                className={`absolute top-4 right-4 p-3 rounded-full shadow-md transition-all ${
                  wishlisted
                    ? 'bg-[#B77D5C] text-white'
                    : 'bg-white/90 text-[#493323] hover:text-[#B77D5C]'
                }`}
                title={wishlisted ? 'Saved to wishlist' : 'Save to wishlist'}
              >
                <Heart className={`w-5 h-5 ${wishlisted ? 'fill-current' : ''}`} />
              </button>
            </div>
          </div>

          {/* Campaign Reference Tag */}
          <div className="bg-white p-3.5 rounded-2xl border border-[#E8E3DA] flex items-center justify-between text-xs">
            <span className="text-[#85866A]">Google Ads Attribution:</span>
            <Link
              to={product.campaignRoute}
              className="text-[#B77D5C] font-semibold hover:underline flex items-center gap-1"
            >
              <span>{product.campaignName}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Product Details & Purchase Form */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-[#85866A]/10 text-[#85866A] text-xs font-medium px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-[#B77D5C]" />
              <span>{product.category}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl text-[#493323] font-normal leading-tight">
              {product.name}
            </h1>

            <div className="flex items-baseline gap-3 pt-2">
              <span className="text-3xl font-semibold text-[#493323]">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-[#85866A]">(Inclusive of all taxes)</span>
            </div>
          </div>

          <p className="text-sm text-[#493323]/80 leading-relaxed font-normal">
            {product.description}
          </p>

          {/* Specifications Box */}
          <div className="bg-white rounded-2xl p-5 border border-[#E8E3DA] space-y-3">
            <h3 className="font-serif text-sm font-semibold text-[#493323]">Product Specifications</h3>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {product.specs &&
                Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="space-y-0.5">
                    <dt className="text-[#85866A] capitalize font-medium">
                      {key.replace(/([A-Z])/g, ' $1')}
                    </dt>
                    <dd className="text-[#493323] font-semibold">{value}</dd>
                  </div>
                ))}
            </dl>
          </div>

          {/* Quantity and Actions */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-4">
              <span className="text-xs font-medium text-[#493323]">Quantity</span>
              <div className="flex items-center border border-[#E8E3DA] rounded-xl bg-white px-2 py-1">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-1.5 text-[#493323] hover:text-[#B77D5C]"
                  disabled={quantity <= 1}
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 text-center text-xs font-bold text-[#493323]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-1.5 text-[#493323] hover:text-[#B77D5C]"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => addToCart(product, quantity)}
                className="flex-1 bg-[#493323] hover:bg-[#382618] text-[#F8F5EF] py-3.5 px-6 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Bag (₹{(product.price * quantity).toLocaleString('en-IN')})</span>
              </button>

              <button
                onClick={() => toggleWishlist(product)}
                className={`py-3.5 px-5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-colors ${
                  wishlisted
                    ? 'bg-[#B77D5C] text-white border-[#B77D5C]'
                    : 'bg-white border-[#E8E3DA] text-[#493323] hover:border-[#B77D5C]'
                }`}
              >
                <Heart className={`w-4 h-4 ${wishlisted ? 'fill-current' : ''}`} />
                <span>{wishlisted ? 'Saved' : 'Wishlist'}</span>
              </button>
            </div>
          </div>

          {/* Academic Storefront Notice */}
          <div className="p-4 rounded-xl bg-[#F8F5EF] border border-[#E8E3DA] text-xs text-[#85866A] space-y-1">
            <div className="flex items-center gap-1.5 font-semibold text-[#493323]">
              <Shield className="w-4 h-4 text-[#85866A]" />
              <span>Demonstration E-commerce Storefront</span>
            </div>
            <p>
              This is a digital marketing case study prototype. Orders trigger simulated ad conversion metrics for testing Google Search campaign performance.
            </p>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <section className="border-t border-[#E8E3DA] pt-14 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#B77D5C] font-semibold">
              Complete Your Space
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#493323] font-normal mt-1">
              Related Home Accents
            </h2>
          </div>
          <Link
            to="/shop"
            className="text-xs font-semibold text-[#493323] hover:text-[#B77D5C] flex items-center gap-1"
          >
            <span>View All</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((rel) => (
            <ProductCard key={rel.id} product={rel} />
          ))}
        </div>
      </section>
    </div>
  );
}

