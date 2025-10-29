import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Categories from './components/Categories';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Products />
      <Categories />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;