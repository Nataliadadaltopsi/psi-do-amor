import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center" onClick={scrollToTop}>
            <img src="/img/logo2.jpeg" alt="Psi do Amor" className="h-10" />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            <Menu className="h-6 w-6 text-burgundy" />
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-burgundy" onClick={scrollToTop}>Início</Link>
            <Link to="/sobre" className="text-gray-700 hover:text-burgundy" onClick={scrollToTop}>Sobre Nós</Link>
            <Link to="/servicos" className="text-gray-700 hover:text-burgundy" onClick={scrollToTop}>Serviços</Link>
            <Link to="/faq" className="text-gray-700 hover:text-burgundy" onClick={scrollToTop}>Perguntas Frequentes</Link>
            <Link to="/infoprodutos" className="text-gray-700 hover:text-burgundy" onClick={scrollToTop}>Infoprodutos</Link>
            <Link to="/contato" className="text-gray-700 hover:text-burgundy" onClick={scrollToTop}>Contato</Link>
          </div>

          <Button asChild className="hidden md:flex bg-burgundy hover:bg-burgundy-dark">
            <a href="https://wa.me/5527998865421?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20quero%20agendar%20uma%20consulta" target="_blank" rel="noopener noreferrer">
              Agendar Consulta
            </a>
          </Button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} pb-4`}>
          <div className="flex flex-col items-center space-y-2 text-center">
            <Link to="/" className="text-gray-700 hover:text-burgundy p-2" onClick={scrollToTop}>Início</Link>
            <Link to="/sobre" className="text-gray-700 hover:text-burgundy p-2" onClick={scrollToTop}>Sobre Nós</Link>
            <Link to="/servicos" className="text-gray-700 hover:text-burgundy p-2" onClick={scrollToTop}>Serviços</Link>
            <Link to="/faq" className="text-gray-700 hover:text-burgundy p-2" onClick={scrollToTop}>FAQ</Link>
            <Link to="/infoprodutos" className="text-gray-700 hover:text-burgundy p-2" onClick={scrollToTop}>Infoprodutos</Link>
            <Link to="/contato" className="text-gray-700 hover:text-burgundy p-2" onClick={scrollToTop}>Contato</Link>
            <Button asChild className="bg-burgundy hover:bg-burgundy-dark">
              <a href="https://wa.me/5527998865421?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20quero%20agendar%20uma%20consulta" target="_blank" rel="noopener noreferrer">
                Agendar Consulta
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
