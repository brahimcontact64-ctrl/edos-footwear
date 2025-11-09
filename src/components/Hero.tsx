import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function Hero() {
  const whatsappNumber = '213699807875';
  const message = encodeURIComponent(
    "Salut 👋 ! Je voudrais en savoir plus sur vos collections Edo’s Footwear & Eleman Shoes."
  );

  const images = [
    '/Model C001-2.png',
    '/Model C001-3.png',
    '/Model C001-4.png',
    '/Model C001-5.png',
    '/Model C001-6.png',
    '/Model C001-7.png',
    '/Model C001-8.png',
    '/Model C001-9.png',
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
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        height: '85vh',
        maxHeight: '680px',
      }}
    >
      
      <div className="absolute inset-0 bg-gradient-to-br from-[#000000]/90 via-[#111111]/85 to-[#0D47A1]/60 z-0" />

      
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-[1500ms] ease-in-out ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={img}
            alt={`Edo’s Footwear ${index + 1}`}
            className="transition-transform duration-[1500ms] ease-in-out"
            style={{
              width: 'auto',
              height: '65vh', 
              maxHeight: '520px',
              objectFit: 'contain',
              objectPosition: 'center center',
              filter:
                'drop-shadow(0px 10px 30px rgba(0,0,0,0.5)) brightness(0.95) contrast(1.05)',
              transform: index === currentImage ? 'scale(1)' : 'scale(1.05)',
            }}
          />
        </div>
      ))}

      
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto mt-10 md:mt-0">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight leading-tight drop-shadow-lg">
          Edo’s Footwear <span className="text-[#0D47A1]">&</span> Eleman Shoes
        </h1>

        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="text-lg md:text-xl font-light">Style</span>
          <span className="text-[#0D47A1] text-2xl">•</span>
          <span className="text-lg md:text-xl font-light">Qualité</span>
          <span className="text-[#0D47A1] text-2xl">•</span>
          <span className="text-lg md:text-xl font-light">Confort</span>
        </div>

        <p className="text-base md:text-lg mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          Deux marques, une passion pour l'élégance. Découvrez Edo’s Footwear et
          Eleman Shoes — le choix parfait pour l'homme moderne.
        </p>

        <a
          href={`https://wa.me/${whatsappNumber}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white px-6 py-3 rounded-full text-base md:text-lg font-semibold transition-all transform hover:scale-105 shadow-xl"
        >
          <MessageCircle className="w-5 h-5" />
          Commander sur WhatsApp
        </a>
      </div>
    </section>
  );
}