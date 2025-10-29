import { ShoppingBag } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-[#111111] text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-8 h-8 text-[#0D47A1]" />
            <span className="text-2xl font-bold">Edo’s Footwear</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#accueil" className="hover:text-[#0D47A1] transition-colors font-medium">
              Accueil
            </a>
            <a href="#catalogue" className="hover:text-[#0D47A1] transition-colors font-medium">
              Catalogue
            </a>
            <a href="#contact" className="hover:text-[#0D47A1] transition-colors font-medium">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}