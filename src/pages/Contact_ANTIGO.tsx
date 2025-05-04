import React from "react";
import { Instagram, Youtube } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <>
      {/* Título da Página */}
      <section className="bg-[#F9F5F0]">
        <div className="container mx-auto px-6 pt-20 pb-8">
          <h1 className="text-4xl font-bold text-center text-[#4C0B18] mb-4">
            Conecte-se Conosco
          </h1>
          <p className="text-center text-lg text-[#8A1C1C] max-w-2xl mx-auto">
            Siga nossos conteúdos nas redes sociais e acompanhe novidades, reflexões e muito mais.
          </p>
        </div>
      </section>

      {/* Redes Sociais */}
      <section className="bg-white border-t border-gray-200 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#4C0B18] mb-8">
            Nossas Redes Sociais
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Instagram */}
            <SocialCard
              name="Instagram"
              handle="@clinicapsidoamor"
              href="https://www.instagram.com/clinicapsidoamor/"
              icon={<Instagram className="h-6 w-6 text-[#C13584]" />}
              imageSrc="/img/instagram.png"
              color="#C13584"
            />

            {/* YouTube */}
            <SocialCard
              name="YouTube"
              handle="Psi do Amor"
              href="https://www.youtube.com/@NataliaDadaltopsi/featured"
              icon={<Youtube className="h-6 w-6 text-red-600" />}
              imageSrc="/img/youtube.png"
              color="red"
            />

            {/* Spotify */}
            <SocialCard
              name="Podcast"
              handle="Spotify"
              href="https://open.spotify.com/show/3Du0MDmFGJWU5mtQBhcDOH"
              icon={<i className="fa-brands fa-spotify text-green-600 text-xl" />}
              imageSrc="/img/spotify.png"
              color="#1DB954"
            />

            {/* TikTok */}
            <SocialCard
              name="TikTok"
              handle="@clinicapsidoamor"
              href="https://www.tiktok.com/@clinicapsidoamor"
              icon={<i className="fa-brands fa-tiktok text-black text-xl" />}
              imageSrc="/mnt/data/0154d4f4-1ae6-4e42-a238-23be477711e2.png"
              color="#000000"
            />

            {/* Kiwify */}
            <SocialCard
              name="Kiwify"
              handle="Nossos Cursos"
              href="https://kiwify.com.br/loja/clinicapsidoamor"
              icon={<i className="fa-solid fa-graduation-cap text-purple-700 text-xl" />}
              imageSrc="/mnt/data/3145e6db-9f95-4b2a-8c92-8eb0c218203c.png"
              color="#6B21A8"
            />
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
};

const SocialCard: React.FC<SocialCardProps> = ({
  name,
  handle,
  href,
  icon,
  imageSrc,
  color,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col overflow-hidden rounded-2xl bg-[#F9F5F0] hover:shadow-lg transform hover:-translate-y-1 transition"
  >
    <img src={imageSrc} alt={name} className="w-full h-56 object-cover" />
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

export default Contact;
