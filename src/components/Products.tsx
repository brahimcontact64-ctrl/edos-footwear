import { MessageCircle } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  badge?: string;
  brand: 'Edo’s Footwear' | 'Eleman Shoes';
}

const products: Product[] = [
  // --- Edo’s Footwear ---
  {
    id: 1,
    name: 'Modèle Noir Élégant',
    price: 8900,
    oldPrice: 12000,
    image: '/edo-noir.jpeg',
    badge: '-25%',
    brand: 'Edo’s Footwear',
  },
  {
    id: 2,
    name: 'Modèle Gris Urbain',
    price: 8700,
    oldPrice: 11800,
    image: '/edo-gris.jpeg',
    badge: '-26%',
    brand: 'Edo’s Footwear',
  },
  {
    id: 3,
    name: 'Modèle Beige Classique',
    price: 8800,
    oldPrice: 11900,
    image: '/edo-beige.jpeg',
    badge: '-25%',
    brand: 'Edo’s Footwear',
  },

  // --- Eleman Shoes ---
  {
    id: 4,
    name: 'Handmade Noir Élégant',
    price: 9500,
    oldPrice: 13000,
    image: '/eleman-noir.jpeg',
    badge: 'Nouveau',
    brand: 'Eleman Shoes',
  },
  {
    id: 5,
    name: 'Handmade Beige Premium',
    price: 9700,
    oldPrice: 13500,
    image: '/eleman-beige.jpeg',
    badge: 'Nouveau',
    brand: 'Eleman Shoes',
  },
  {
    id: 6,
    name: 'Handmade Gris Naturel',
    price: 9600,
    oldPrice: 13200,
    image: '/elemant-gris.jpeg',
    badge: 'Nouveau',
    brand: 'Eleman Shoes',
  },
];

export default function Products() {
  const whatsappNumber = '213699807875';

  const handleOrder = (product: Product) => {
    const message = encodeURIComponent(
      `Bonjour 👋 ! Je suis intéressé par le modèle ${product.name} de la marque ${product.brand} – Prix : ${product.price.toLocaleString()} DA`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="catalogue" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* --- Title Section --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-4">
            Nos Collections
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez les modèles Edo’s Footwear et Eleman Shoes — 
            une alliance parfaite entre confort, style et élégance.
          </p>
        </div>

        {/* --- Product Cards --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* --- Image --- */}
              <div className="relative overflow-hidden h-80">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {product.badge && (
                  <div className="absolute top-4 right-4 bg-[#0D47A1] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    {product.badge}
                  </div>
                )}
              </div>

              {/* --- Details --- */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#111111] mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{product.brand}</p>

                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-[#0D47A1]">
                    {product.price.toLocaleString()} DA
                  </span>
                  {product.oldPrice && (
                    <span className="text-lg text-gray-400 line-through">
                      {product.oldPrice.toLocaleString()} DA
                    </span>
                  )}
                </div>

                {/* --- Button --- */}
                <button
                  onClick={() => handleOrder(product)}
                  className="w-full bg-[#111111] hover:bg-[#0D47A1] text-white py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Commander
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}