export const products = [
  {
    id: "decorative-wall-art",
    name: "Decorative Wall Art",
    price: 799,
    category: "Wall Decor",
    image: "/assets/wall_art.jpg",
    shortDescription: "Minimalist geometric arches framed art print in warm terracotta and sand tones.",
    description: "Bring balance and serene visual harmony to your walls with our Decorative Wall Art. Featuring contemporary minimalist geometric arches in warm terracotta, ochre, and desert sand tones. Printed on 300 GSM archival matte paper and framed in a solid natural pine wood frame with protective crystal glass. Perfectly sized for gallery walls, entryways, or living room focal points.",
    campaignRoute: "/collections/wall-art",
    campaignName: "Campaign 1: Wall Art & Decor",
    specs: {
      dimensions: "16 x 24 inches (40 x 60 cm)",
      material: "Solid Pine Wood Frame, 300 GSM Archival Art Paper",
      finish: "Natural Wood Grain & Matte Print",
      included: "Pre-installed sawtooth mounting hardware"
    },
    inStock: true,
    rating: 4.9,
    reviewsCount: 38
  },
  {
    id: "ceramic-vases",
    name: "Ceramic Vases",
    price: 599,
    category: "Home Accessories",
    image: "/assets/ceramic_vase.jpg",
    shortDescription: "Artisan dual ceramic vase duo in textured warm ivory stone finish.",
    description: "The Ceramic Vases set brings organic sculpture into modern living spaces. This pair features a circular donut hollow vase alongside an elegant fluted bottle vase, finished in an unglazed textured ivory ceramic stone. Ideal for dried pampas grass, eucalyptus stems, or standing alone as modern sculptural accents on mantels, coffee tables, or credenzas.",
    campaignRoute: "/collections/home-accessories",
    campaignName: "Campaign 2: Home Accessories",
    specs: {
      dimensions: "Donut Vase: 18cm H x 16cm W; Fluted Vase: 22cm H x 9cm W",
      material: "100% High-Fired Ceramic Stoneware",
      finish: "Textured Matte Ivory / Sand",
      care: "Wipe with damp cloth; dry flower friendly"
    },
    inStock: true,
    rating: 4.8,
    reviewsCount: 42
  },
  {
    id: "table-lamps",
    name: "Table Lamps",
    price: 1299,
    category: "Lighting",
    image: "/assets/table_lamp.jpg",
    shortDescription: "Fluted ceramic base bedside lamp with warm natural linen drum shade.",
    description: "Cast an inviting, calming ambient glow across your room with our artisan Table Lamp. Designed with a sculptural fluted matte ceramic base, polished brass hardware accents, and a textured natural flax linen drum shade. Provides warm diffused lighting that transforms bedroom nightstands, reading nooks, or study consoles into cozy sanctuaries.",
    campaignRoute: "/collections/lighting",
    campaignName: "Campaign 3: Lighting & Ambience",
    specs: {
      dimensions: "Overall Height: 42cm; Shade Diameter: 24cm; Base: 16cm",
      material: "Ceramic Stoneware, Natural Flax Linen, Solid Brass Accent",
      bulbType: "Standard E27 socket (Warm 2700K LED bulb recommended)",
      cord: "1.8m braided wheat fabric cord with inline switch"
    },
    inStock: true,
    rating: 4.95,
    reviewsCount: 56
  },
  {
    id: "decorative-cushions",
    name: "Decorative Cushions",
    price: 499,
    category: "Soft Furnishings",
    image: "/assets/cushions.jpg",
    shortDescription: "Textured woven bouclé and tactile waffle accent cushion in earthy sand tones.",
    description: "Elevate your sofa, armchair, or bed with our tactile Decorative Cushions. Crafted from heavy-gauge textured cotton bouclé and woven waffle weaves in natural desert sand and caramel tones. Soft, breathable, and supportive, each cushion includes a plush hypoallergenic microfibre insert and a concealed invisible zipper for easy cleaning.",
    campaignRoute: "/collections/home-accessories",
    campaignName: "Campaign 2: Home Accessories",
    specs: {
      dimensions: "Square: 45 x 45 cm (18 x 18 inches)",
      material: "100% Natural Cotton Bouclé & Linen Blend",
      insert: "Included: 500g Hypoallergenic microfibre insert",
      care: "Removable cover, gentle machine wash at 30°C"
    },
    inStock: true,
    rating: 4.75,
    reviewsCount: 29
  },
  {
    id: "scented-candles",
    name: "Scented Candles",
    price: 399,
    category: "Home Accessories",
    image: "/assets/scented_candle.jpg",
    shortDescription: "Hand-poured all-natural soy wax candle with sandalwood, amber & vanilla.",
    description: "Hand-poured in small batches, our Haven & Hue Scented Candle infuses your space with comforting warmth and tranquility. Formulated with 100% natural biodegradable soy wax, lead-free organic cotton wicks, and pure essential oil extracts. Featuring delicate notes of creamy Mysore sandalwood, golden amber, cedarwood, and gentle Madagascar vanilla bean.",
    campaignRoute: "/collections/home-accessories",
    campaignName: "Campaign 2: Home Accessories",
    specs: {
      dimensions: "8.5cm Height x 7.5cm Diameter (220g / 7.8 oz)",
      burnTime: "Approx. 45–50 hours clean, even burn",
      waxType: "100% Natural Biodegradable Soy Wax, Phthalate-free",
      vessel: "Heavy-base clear apothecary glassware"
    },
    inStock: true,
    rating: 4.9,
    reviewsCount: 64
  }
];

export const categories = [
  {
    id: "all",
    name: "All Products",
    description: "Explore the complete Haven & Hue home collection"
  },
  {
    id: "wall-decor",
    name: "Wall Decor",
    description: "Minimalist framed art and visual accents for timeless walls",
    route: "/collections/wall-art"
  },
  {
    id: "home-accessories",
    name: "Home Accessories",
    description: "Curated ceramic vases, scented soy candles & interior accents",
    route: "/collections/home-accessories"
  },
  {
    id: "lighting",
    name: "Lighting",
    description: "Ambient table lamps designed to cast a soft, warm glow",
    route: "/collections/lighting"
  },
  {
    id: "soft-furnishings",
    name: "Soft Furnishings",
    description: "Tactile textured bouclé cushions for effortless comfort",
    route: "/collections/home-accessories"
  }
];

