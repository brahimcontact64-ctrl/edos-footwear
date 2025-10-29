export default function Categories() {
  return (
    <section id="brands" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-4">
          Nos Marques
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Explorez nos deux marques exclusives – élégance et qualité à chaque pas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Edo’s Footwear */}
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer p-10">
            <img
              src="/edo-noir.jpeg"
              alt="Edo’s Footwear"
              className="w-full h-60 object-cover rounded-xl mb-6 group-hover:scale-105 transition-transform duration-500"
            />
            <h3 className="text-2xl font-bold text-[#0D47A1] mb-3">
              Edo’s Footwear
            </h3>
            <p className="text-gray-600 mb-6">
              Des modèles modernes et raffinés, faits pour le style urbain et le confort.
            </p>
            <a
              href="#catalogue"
              className="inline-block bg-[#0D47A1] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#111111] transition-all"
            >
              Voir la collection
            </a>
          </div>

          {/* Eleman Shoes */}
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer p-10">
            <img
              src="/eleman-beige.jpeg"
              alt="Eleman Shoes"
              className="w-full h-60 object-cover rounded-xl mb-6 group-hover:scale-105 transition-transform duration-500"
            />
            <h3 className="text-2xl font-bold text-[#0D47A1] mb-3">
              Eleman Shoes Handmade
            </h3>
            <p className="text-gray-600 mb-6">
              Artisanat et élégance – des chaussures faites main pour l’homme distingué.
            </p>
            <a
              href="#catalogue"
              className="inline-block bg-[#0D47A1] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#111111] transition-all"
            >
              Voir la collection
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}