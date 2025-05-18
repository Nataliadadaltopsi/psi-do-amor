// src/components/SitePopup.tsx
import React from 'react';

interface SitePopupProps {
  imageUrl: string;
  linkUrl: string;
  onClose: () => void;
}

const SitePopup: React.FC<SitePopupProps> = ({ imageUrl, linkUrl, onClose }) => {
  // Define os dados específicos do seu popup aqui ou passe via props do App.tsx
  // Para este exemplo, vamos usar os props passados do App.tsx

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]" // z-index alto para garantir que fique acima de tudo
      onClick={onClose} // Permite fechar clicando no fundo (opcional)
    >
      <div
        className="relative bg-white rounded-lg p-4 shadow-xl max-w-sm md:max-w-md lg:max-w-lg mx-4"
        onClick={(e) => e.stopPropagation()} // Impede que cliques dentro do popup fechem ele
      >
        {/* Botão de Fechar */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl font-bold leading-none z-10"
          aria-label="Fechar popup"
        >
          &times; {/* Caractere X */}
        </button>

        {/* Imagem Clicável com Link */}
        <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="block w-full h-auto">
          <img
            src={imageUrl}
            alt="Imagem do Popup"
            className="w-full h-auto rounded-md cursor-pointer"
          />
        </a>

        {<div className="mt-2 text-center text-sm text-gray-700">
            Clique na imagem e inscreva-se!
        </div>}
      </div>
    </div>
  );
};

export default SitePopup;