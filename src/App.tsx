import React, { useState } from 'react';
import { ShoppingBag, Star, ArrowRight, Crown, Diamond, Sparkles } from 'lucide-react';

const products = [
  // Accessories
  {
    id: 1,
    name: "Lady Dior Bag",
    price: 5900,
    image: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=800&q=80",
    brand: "Dior",
    category: "Accessories"
  },
  {
    id: 2,
    name: "YSL Kate Tassel Bag",
    price: 2290,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80",
    brand: "Saint Laurent",
    category: "Accessories"
  },
  {
    id: 3,
    name: "Monogram Silk Scarf",
    price: 485,
    image: "https://images.unsplash.com/photo-1584030373081-49a8d2c00b8d?w=800&q=80",
    brand: "Louis Vuitton",
    category: "Accessories"
  },
  {
    id: 4,
    name: "Leather Palazzo Belt",
    price: 650,
    image: "https://images.unsplash.com/photo-1624623278313-a930126a11c3?w=800&q=80",
    brand: "Prada",
    category: "Accessories"
  },
  {
    id: 5,
    name: "GG Marmont Mini Bag",
    price: 1890,
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&q=80",
    brand: "Gucci",
    category: "Accessories"
  },

  // Clothing
  {
    id: 6,
    name: "Tweed Bouclé Jacket",
    price: 8500,
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    brand: "Chanel",
    category: "Clothing"
  },
  {
    id: 7,
    name: "Cashmere Blend Coat",
    price: 4200,
    image: "https://images.unsplash.com/photo-1591900947067-851789555ef3?w=800&q=80",
    brand: "Burberry",
    category: "Clothing"
  },
  {
    id: 8,
    name: "Silk Evening Gown",
    price: 7900,
    image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=800&q=80",
    brand: "Saint Laurent",
    category: "Clothing"
  },
  {
    id: 9,
    name: "Printed Silk Blouse",
    price: 1450,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80",
    brand: "Gucci",
    category: "Clothing"
  },
  {
    id: 10,
    name: "Leather Biker Jacket",
    price: 5900,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80",
    brand: "Saint Laurent",
    category: "Clothing"
  },

  // Footwear
  {
    id: 11,
    name: "So Kate 120mm Pumps",
    price: 745,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80",
    brand: "Christian Louboutin",
    category: "Footwear"
  },
  {
    id: 12,
    name: "Tribute Platform Sandals",
    price: 995,
    image: "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?w=800&q=80",
    brand: "Saint Laurent",
    category: "Footwear"
  },
  {
    id: 13,
    name: "Princetown Leather Slippers",
    price: 890,
    image: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=800&q=80",
    brand: "Gucci",
    category: "Footwear"
  },
  {
    id: 14,
    name: "Pigalle Follies Glitter",
    price: 795,
    image: "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=800&q=80",
    brand: "Christian Louboutin",
    category: "Footwear"
  },
  {
    id: 15,
    name: "Combat Boots",
    price: 1290,
    image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&q=80",
    brand: "Saint Laurent",
    category: "Footwear"
  },

  // Jewelry
  {
    id: 16,
    name: "Medusa Pendant Necklace",
    price: 1150,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    brand: "Versace",
    category: "Jewelry"
  },
  {
    id: 17,
    name: "Panthère de Cartier Ring",
    price: 28000,
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80",
    brand: "Cartier",
    category: "Jewelry"
  },
  {
    id: 18,
    name: "Diamond Tennis Bracelet",
    price: 45000,
    image: "https://images.unsplash.com/photo-1602752275576-638c0afc8d13?w=800&q=80",
    brand: "Cartier",
    category: "Jewelry"
  },
  {
    id: 19,
    name: "YSL Logo Earrings",
    price: 445,
    image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=800&q=80",
    brand: "Saint Laurent",
    category: "Jewelry"
  },
  {
    id: 20,
    name: "Pearl Choker Necklace",
    price: 2890,
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80",
    brand: "Chanel",
    category: "Jewelry"
  }
];

const brands = [
  {
    name: "Louis Vuitton",
    description: "French luxury house founded in 1854, renowned for leather goods and fashion.",
    icon: Crown
  },
  {
    name: "Saint Laurent",
    description: "Parisian fashion house known for its modern and iconic designs since 1961.",
    icon: Diamond
  },
  {
    name: "Christian Louboutin",
    description: "Legendary footwear designer famous for red-soled shoes and exceptional craftsmanship.",
    icon: Sparkles
  }
];

const testimonials = [
  {
    name: "Isabella Chen",
    role: "Fashion Editor, Vogue",
    content: "A meticulously curated selection of the world's most prestigious luxury brands. The attention to detail and authenticity is remarkable.",
    rating: 5
  },
  {
    name: "Alexandre Laurent",
    role: "Luxury Fashion Consultant",
    content: "The epitome of luxury fashion retail. Every piece tells a story of heritage and craftsmanship.",
    rating: 5
  }
];

function App() {
  const [email, setEmail] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(products.map(product => product.category))];
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1600&q=80"
            alt="Luxury Fashion"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent">
            MAISON LUXE
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Where Heritage Meets Haute Couture
          </p>
          <button className="bg-amber-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-amber-400 transition-colors flex items-center mx-auto">
            Explore Collections <ShoppingBag className="ml-2 h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Featured Brands */}
      <section className="py-20 px-4 md:px-8 bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent">
            Heritage Brands
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {brands.map((brand, index) => (
              <div key={index} className="p-6 border border-amber-500/20 rounded-lg hover:border-amber-500/40 transition-colors">
                <brand.icon className="h-8 w-8 text-amber-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">{brand.name}</h3>
                <p className="text-gray-400">{brand.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent">
          Curated Collection
        </h2>
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-amber-500 text-black'
                  : 'bg-neutral-900 text-amber-400 hover:bg-neutral-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-sm text-amber-400">{product.brand}</p>
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-amber-400">${product.price.toLocaleString()}</p>
                  <p className="text-sm text-gray-300">{product.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-neutral-900 py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent">
            Connoisseur Reviews
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-black p-6 rounded-lg border border-amber-500/20">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">{testimonial.content}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-amber-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent">
            Join The Inner Circle
          </h2>
          <p className="text-gray-300 mb-8">
            Be the first to receive exclusive updates and private collection previews
          </p>
          <form className="flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="bg-neutral-900 border border-amber-500/20 rounded-full px-6 py-3 focus:outline-none focus:border-amber-500 flex-1 max-w-md"
            />
            <button
              type="submit"
              className="bg-amber-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-amber-400 transition-colors flex items-center justify-center"
            >
              Subscribe <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>© 2025 MAISON LUXE. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}


export default App
