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
              className="rounded-xl"
            >
              {kiwifyProducts.map((product, index) => (
                <SwiperSlide key={index}>
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-72 overflow-hidden rounded-xl"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition duration-300 hover:opacity-90"
                    />
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
  orientation?: "horizontal" | "vertical"; // <- novo
};

const SocialCard: React.FC<SocialCardProps> = ({
  name,
  handle,
  href,
  icon,
  imageSrc,
  color,
  orientation = "horizontal", // <- padrão
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
    orientation: "vertical", // <- importante
  },
  {
    name: "TikTok",
    handle: "@clinicapsidoamor",
    href: "https://www.tiktok.com/@clinicapsidoamor",
    icon: <i className="fa-brands fa-tiktok text-black text-xl" />,
    imageSrc: "/img/tiktok.png", // ajuste se o path for diferente
    color: "#000000",
    orientation: "horizontal",
  },
];

const kiwifyProducts = [
  {
    name: "Curso 1",
    image: "/img/infoproduto1.png",
    href: "https://kiwify.com.br/produto1",
  },
  {
    name: "Curso 2",
    image: "/img/infoproduto2.png",
    href: "https://kiwify.com.br/produto2",
  },
  {
    name: "Curso 3",
    image: "/img/infoproduto3.png",
    href: "https://kiwify.com.br/produto3",
  },
];

export default Contact;
