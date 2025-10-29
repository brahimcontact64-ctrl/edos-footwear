import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function Hero() {
  const whatsappNumber = '213699807875';
  const message = encodeURIComponent(
    "Salut 👋 ! Je voudrais en savoir plus sur vos collections Edo’s Footwear & Eleman Shoes."
  );

  const images = [
    '/edo-noir.jpeg',
    '/edo-gris.jpeg',
    '/eleman-noir.jpeg',
    '/eleman-beige.jpeg',
    '/elemant-gris.jpeg',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="accueil"
      className="relative h-[480px] md:h-[520px] flex items-center justify-center overflow-hidden"
    >
      {/* خلفية الصور المتغيرة */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${img})`,
          }}
        ></div>
      ))}

      {/* التدرج الداكن */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#111111]/90 via-[#000000]/80 to-[#0D47A1]/70"></div>

      {/* النصوص */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight leading-tight">
          Edo’s Footwear <span className="text-[#0D47A1]">&</span> Eleman Shoes
        </h1>

        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="text-lg md:text-xl font-light">Style</span>
          <span className="text-[#0D47A1] text-2xl">•</span>
          <span className="text-lg md:text-xl font-light">Qualité</span>
          <span className="text-[#0D47A1] text-2xl">•</span>
          <span className="text-lg md:text-xl font-light">Confort</span>
        </div>

        <p className="text-base md:text-lg mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Deux marques, une passion pour l'élégance. Découvrez Edo’s Footwear et
          Eleman Shoes — le choix parfait pour l'homme moderne.
        </p>

        <a
          href={`https://wa.me/${whatsappNumber}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white px-6 py-3 rounded-full text-base md:text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
        >
          <MessageCircle className="w-5 h-5" />
          Commander sur WhatsApp
        </a>
      </div>
    </section>
  );
}