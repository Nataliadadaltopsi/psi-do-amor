import { FaInstagram, FaTiktok, FaYoutube, FaSpotify } from 'react-icons/fa';

import { Phone, Mail, Home } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-burgundy text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* Coluna 1 - Marca */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Psi do Amor</h3>
            <p className="text-gray-200">
              Cuidando da sua saúde mental com amor e profissionalismo.
            </p>
          </div>

          {/* Coluna 2 - Contato */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contato</h3>
            <div className="space-y-2">
              <p className="flex justify-center md:justify-start items-center gap-2">
                <Phone className="h-5 w-5" />
                (27) 99886-5421
              </p>
              <p className="flex justify-center md:justify-start items-center gap-2">
                <Mail className="h-5 w-5" />
                psi.nataliadadalto@gmail.com.br
              </p>
            </div>
          </div>

          {/* Coluna 3 - Redes Sociais */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Redes Sociais</h3>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="https://www.instagram.com/clinicapsidoamor/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="h-6 w-6 hover:text-pink-500 transition-colors" />
              </a>
              <a href="https://www.tiktok.com/@nataliadadalto.psi" target="_blank" rel="noopener noreferrer">
                <FaTiktok className="h-6 w-6 hover:text-white transition-colors" />
              </a>
              <a href="https://www.youtube.com/@NataliaDadaltopsi/featured" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="h-6 w-6 hover:text-red-500 transition-colors" />
              </a>
              <a href="https://open.spotify.com/show/3Du0MDmFGJWU5mtQBhcDOH" target="_blank" rel="noopener noreferrer">
                <FaSpotify className="h-6 w-6 hover:text-green-500 transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Linha final */}
        <div className="border-t border-white/20 mt-12 pt-6 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} Psi do Amor. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
    );
}
export default Footer;
