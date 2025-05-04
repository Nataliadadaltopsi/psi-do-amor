const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/5527998865421?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20quero%20agendar%20uma%20consulta"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20BA5C] text-white p-6 rounded-full shadow-lg transition-all hover:scale-110 z-50 animate-bounce hover:animate-none"
      aria-label="Contato via WhatsApp"
    >
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" 
        alt="WhatsApp" 
        className="h-8 w-8"
      />
    </a>
  );
};

export default FloatingWhatsApp;
