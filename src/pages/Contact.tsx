import React from "react";
import { Instagram, Youtube } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Contact: React.FC = () => {
  return (
    <>
      {/* Título da Página */}
      <section className="bg-[#F9F5F0] font-sans">
        <div className="container mx-auto px-6 pt-20 pb-8">
          <h1 className="text-4xl font-bold text-center text-[#4C0B18] mb-4">
            Conecte-se Conosco
          </h1>
          <p className="text-center text-lg text-[#8A1C1C] max-w-2xl mx-auto">
            Siga nossos conteúdos nas redes sociais e acompanhe novidades, reflexões e muito mais! :)
          </p>
        </div>
      </section>

      {/* Redes Sociais */}
      <section className="bg-[#F9F5F0] border-t border-gray-200 py-16 font-sans">
        <div className="container mx-auto px-6 max-w-6xl">

          {/* Grid de cards sociais */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {socialCards.map((card, i) => (
              <SocialCard key={i} {...card} />
            ))}
          </div>

          {/* Kiwify com carrossel */}
          <div className="bg-[#F9F5F0] rounded-2xl p-6 shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <i className="fa-solid fa-graduation-cap text-purple-700 text-2xl" />
              <h3 className="text-2xl font-semibold text-[#6B21A8]">Kiwify — Nossos Produtos</h3>
            </div>

            <Swiper
  modules={[Navigation, Autoplay]}
  navigation
  autoplay={{ delay: 5000, disableOnInteraction: false }}
  loop={true}
  spaceBetween={20}
  slidesPerView={1}
  breakpoints={{
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
  className="rounded-xl"
>
  {kiwifyProducts.map((product) => (
    <SwiperSlide key={product.id} className="h-auto">
      <a
        href={product.link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex flex-col h-full bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 p-4"
      >
        {product.isNew && (
          <span className="absolute top-2 left-2 bg-[#8A1C1C] text-white px-2 py-1 rounded text-xs shadow">
            Novo
          </span>
        )}

        {/* Imagem com altura fixa */}
        <div className="w-full h-56 flex items-center justify-center overflow-hidden rounded-xl bg-white mb-4">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-full object-contain"
          />
        </div>

        {/* Conteúdo do card com flex-grow */}
        <div className="flex flex-col justify-between flex-1">
          <div>
            <p className="text-lg font-bold text-[#2c2c2c]">{product.title}</p>
            {product.coupon && (
              <p className="text-sm text-gray-600">
                Cupom: <span className="font-bold text-[#720c1e]">{product.coupon}</span>
              </p>
            )}
            {product.description && (
              <p className="text-sm text-gray-500 mt-1">{product.description}</p>
            )}
          </div>
          <span className="mt-4 text-sm text-[#720c1e] font-semibold hover:underline self-start">
            Ver mais
          </span>
        </div>
      </a>
    </SwiperSlide>
  ))}
</Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

type SocialCardProps = {
  name: string;
  handle: string;
  href: string;
  icon: React.ReactNode;
  imageSrc: string;
  color: string;
  orientation?: "horizontal" | "vertical";
};

const SocialCard: React.FC<SocialCardProps> = ({
  name,
  handle,
  href,
  icon,
  imageSrc,
  color,
  orientation = "horizontal",
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col overflow-hidden rounded-2xl bg-white hover:shadow-lg transform hover:-translate-y-1 transition"
  >
    <img
      src={imageSrc}
      alt={name}
      className={`w-full h-64 bg-gray-100 ${
        orientation === "vertical" ? "object-contain" : "object-cover object-top"
      }`}
    />
    <div className="p-4">
      <div className="flex items-center space-x-2 mb-2">
        {icon}
        <h3 className="text-lg font-semibold" style={{ color }}>
          {name}
        </h3>
      </div>
      <p className="text-gray-700">{handle}</p>
    </div>
  </a>
);

const socialCards: SocialCardProps[] = [
  {
    name: "Instagram",
    handle: "@clinicapsidoamor",
    href: "https://www.instagram.com/clinicapsidoamor/",
    icon: <Instagram className="h-6 w-6 text-[#C13584]" />,
    imageSrc: "/img/instagram.png",
    color: "#C13584",
    orientation: "horizontal",
  },
  {
    name: "YouTube",
    handle: "Psi do Amor",
    href: "https://www.youtube.com/@NataliaDadaltopsi/featured",
    icon: <Youtube className="h-6 w-6 text-red-600" />,
    imageSrc: "/img/youtube.png",
    color: "#FF0000",
    orientation: "horizontal",
  },
  {
    name: "Podcast",
    handle: "Spotify",
    href: "https://open.spotify.com/show/3Du0MDmFGJWU5mtQBhcDOH",
    icon: <i className="fa-brands fa-spotify text-green-600 text-xl" />,
    imageSrc: "/img/spotify.jpg",
    color: "#1DB954",
    orientation: "vertical",
  },
  {
    name: "TikTok",
    handle: "@nataliadadaltopsi",
    href: "https://www.tiktok.com/@nataliadadaltopsi",
    icon: <i className="fa-brands fa-tiktok text-black text-xl" />,
    imageSrc: "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4188f5b0d03c2a7926b0aa6d2c08efda~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=b0f6f8ae&x-expires=1747101600&x-signature=Sm9W84p%2FZSbTWUJ3Hc3YD4rbnY8%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=maliva", // <- nova imagem
    color: "#000000",
    orientation: "vertical",
  },
];

const kiwifyProducts = [
  {
    id: 1,
    title: "E-Book: Relação Saudável Não é Sorte: É Técnica",
    image: "/img/ebook.jpg",
    link: "https://pay.kiwify.com.br/mN24Ugl",
    isNew: true,
    description: "Guia com técnicas baseadas em psicologia para relações melhores."
  },
  {
    id: 2,
    title: "E-Book Completo: Criação de Conteúdo Engajado de Psicologia",
    coupon: "PRIMEIRACOMPRA",
    image: "/img/ebookInsta.jpg",
    link: "https://pay.kiwify.com.br/45BIqPh",
    description: "Aprenda a se destacar nas redes com conteúdo de valor."
  },
  {
    id: 3,
    title: "Baralho: 100 Perguntas para mergulhar em autoconhecimento",
    image: "/img/baralhoA.jpg",
    link: "https://pay.kiwify.com.br/9bqkkdF",
    description: "Ferramenta terapêutica para refletir e se conhecer melhor."
  },
  {
    id: 4,
    title: "Baralho para Casais: 100 Perguntas para aprofundar a relação ❤️📩",
    image: "/img/baralhoC.jpg",
    link: "https://pay.kiwify.com.br/hCVMQAE",
    description: "Construa mais conexão e comunicação com seu par."
  },
  {
    id: 5,
    title: "Curso Livre de Ciúmes",
    image: "/img/curso_livreC.jpg",
    link: "https://pay.kiwify.com.br/HmB8M9p",
    description: "Transforme o ciúme em autoconfiança e segurança emocional."
  }
];

export default Contact;

