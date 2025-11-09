import { MessageCircle } from 'lucide-react';

interface Product {
  id: number;
  model: string;
  name: string;
  color: string;
  price: number;
  oldPrice?: number;
  image: string;
  brand: string;
}

const products: Product[] = [
  {
    id: 1,
    model: 'C001-2',
    name: 'Baskets Urbaines Noires',
    color: 'Noir',
    price: 9200,
    oldPrice: 12000,
    image: '/Model C001-2.png',
    brand: "Edo’s Footwear",
  },
  {
    id: 2,
    model: 'C001-3',
    name: 'Sneakers Confort Noires',
    color: 'Noir',
    price: 8900,
    oldPrice: 11500,
    image: '/Model C001-3.png',
    brand: "Edo’s Footwear",
  },
  {
    id: 3,
    model: 'C001-4',
    name: 'Sneakers Urbaines Kaki',
    color: 'Kaki',
    price: 8800,
    oldPrice: 11200,
    image: '/Model C001-4.png',
    brand: "Edo’s Footwear",
  },
  {
    id: 4,
    model: 'C001-5',
    name: 'Bottines Suède Camel',
    color: 'Camel',
    price: 9500,
    oldPrice: 12500,
    image: '/Model C001-5.png',
    brand: "Edo’s Footwear",
  },
  {
    id: 5,
    model: 'C001-6',
    name: 'Sneakers Premium Noir',
    color: 'Noir',
    price: 9700,
    oldPrice: 13000,
    image: '/Model C001-6.png',
    brand: "Edo’s Footwear",
  },
  {
    id: 6,
    model: 'C001-7',
    name: 'Baskets Classiques Noires',
    color: 'Noir',
    price: 9100,
    oldPrice: 12500,
    image: '/Model C001-7.png',
    brand: "Edo’s Footwear",
  },
  {
    id: 7,
    model: 'C001-8',
    name: 'Baskets Urbaines Beige',
    color: 'Beige',
    price: 9300,
    oldPrice: 12500,
    image: '/Model C001-8.png',
    brand: "Edo’s Footwear",
  },
  {
    id: 8,
    model: 'C001-9',
    name: 'Sneakers Modernes Noir',
    color: 'Noir',
    price: 9400,
    oldPrice: 12800,
    image: '/Model C001-9.png',
    brand: "Edo’s Footwear",
  },
];

export default function Products() {
  const whatsappNumber = '213699807875';

  const handleOrder = (product: Product) => {
    const message = encodeURIComponent(
      `Bonjour 👋 ! Je suis intéressé par le modèle ${product.model} (${product.name}) – Couleur : ${product.color} – Prix : ${product.price} DA`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="catalogue" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* العنوان */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-4">
            Edo’s Footwear — Nouvelle Collection
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez nos modèles exclusifs, élégants et confortables — disponibles en plusieurs couleurs.
          </p>
        </div>

        {/* المنتجات */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-1 border border-gray-100"
            >
              {/* الصورة */}
              <div className="relative bg-[#f9f9f9] flex items-center justify-center h-[280px] sm:h-[300px] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* التفاصيل */}
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-[#111111] mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 mb-1">
                  Modèle: {product.model} — {product.color}
                </p>
                <p className="text-sm text-gray-400 mb-3">{product.brand}</p>

                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl font-bold text-[#0D47A1]">
                    {product.price.toLocaleString()} DA
                  </span>
                  {product.oldPrice && (
                    <span className="text-lg text-gray-400 line-through">
                      {product.oldPrice.toLocaleString()} DA
                    </span>
                  )}
                </div>

                {/* ✅ زر واتساب بنفس الأخضر من الـHero */}
                <button
                  onClick={() => handleOrder(product)}
                  className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white py-2.5 rounded-full font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all transform hover:scale-[1.03] shadow-lg"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  Commander sur WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}