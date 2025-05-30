// app.tsx
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Importe o novo componente do popup
import SitePopup from "./SitePopup.tsx";

// Componentes principais
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

// Páginas
import Home from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Infoproduct from "./pages/Infoproduct";
import NotFound from "./pages/NotFound";

// React Query
const queryClient = new QueryClient();

// Componente para rolar para o topo ao mudar de rota
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  // Estado para controlar a visibilidade do popup
  const [showSitePopup, setShowSitePopup] = useState(false);

  // Define os dados do popup aqui
  const popupData = {
    imageUrl: 'public/img/workshop.jpeg', // <-- Substitua pelo caminho da sua imagem
    linkUrl: 'https://lp.psidoamor.com.br/?fbclid=PAQ0xDSwKWwHVleHRuA2FlbQIxMAABpw7KTzDPu0k2i6U7aNW6jzsOX54tvYvkqFUgM7zhuvvWyHGtfxPGDRQAukE4_aem_o1x8EPMTFBXtrgxN5ofl1A', // <-- Substitua pelo seu link de redirecionamento
  };

  useEffect(() => {
    // Sempre mostra o popup quando a página carrega
    setShowSitePopup(true);
  }, []);

  // Função para fechar o popup
  const handleCloseSitePopup = () => {
    setShowSitePopup(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <ScrollToTop />

            {/* Renderiza o Popup condicionalmente */}
            {showSitePopup && (
              <SitePopup
                imageUrl={popupData.imageUrl}
                linkUrl={popupData.linkUrl}
                onClose={handleCloseSitePopup}
              />
            )}

            <main className="flex-grow pt-16">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<About />} />
                <Route path="/servicos" element={<Services />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contato" element={<Contact />} />
                <Route path="/infoprodutos" element={<Infoproduct />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <FloatingWhatsApp />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
