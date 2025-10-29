import { MessageCircle, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const whatsappNumber = '213699807875';
  const message = encodeURIComponent('Bonjour 👋 ! Je souhaite en savoir plus sur vos produits.');

  return (
    <footer id="contact" className="bg-[#111111] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* ---------------- Bloc 1 : Présentation ---------------- */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-[#0D47A1]">Edo’s Footwear</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Élégance et confort à chaque pas.  
              Découvrez également notre ligne artisanale <span className="text-[#0D47A1] font-semibold">Eleman Shoes Handmade</span>.
            </p>
          </div>

          {/* ---------------- Bloc 2 : Contact ---------------- */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-[#25D366] transition-colors group"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>+213 699 80 78 75</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5" />
                <span>+213 699 80 78 75</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>Algérie</span>
              </div>
            </div>
          </div>

          {/* ---------------- Bloc 3 : Réseaux sociaux ---------------- */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Suivez-nous</h4>
            <div className="flex gap-4">
              {/* Facebook */}
              <a
                href="https://facebook.com/edosfootwear"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#333333] hover:bg-[#1877F2] flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.59l-.467 3.622h-3.123V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/edosfootwear"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#333333] hover:bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.332.014 7.052.072 2.694.272.272 2.694.072 7.052.014 8.332 0 8.741 0 12s.014 3.668.072 4.948c.2 4.358 2.622 6.78 6.98 6.98C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c4.358-.2 6.78-2.622 6.98-6.98C23.986 15.668 24 15.259 24 12s-.014-3.668-.072-4.948c-.2-4.358-2.622-6.78-6.98-6.98C15.668.014 15.259 0 12 0z" />
                  <path d="M12 5.838A6.162 6.162 0 1 0 12 18.162 6.162 6.162 0 1 0 12 5.838zm0 10.162A3.999 3.999 0 1 1 12 8a3.999 3.999 0 0 1 0 8z" />
                  <circle cx="18.406" cy="5.594" r="1.44" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com/@edosfootwear"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#333333] hover:bg-[#000000] flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="TikTok"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2c0 5.52 4.48 10 10 10v3a12.982 12.982 0 0 1-7-2.12V17a7 7 0 1 1-7-7h2v3H8a4 4 0 1 0 4 4V2h0z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${whatsappNumber}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20BA5A] flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* ---------------- Bas de page ---------------- */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            ©️ 2025 Edo’s Footwear & Eleman Shoes. Tous droits réservés.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Développé par <span className="text-[#0D47A1] font-semibold">Dzenix</span>
          </p>
        </div>
      </div>
    </footer>
  );
}