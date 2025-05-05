import React from "react";
import { Link } from "react-router-dom";
import { User, Users, HeartCrack, EyeOff, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

// Carrossel de banners
const bannerSlides = [
  {
    image: "/img/clinica_1.jpeg",
    alt: "Banner da Clínica",
    link: "https://psidoamor.com.br",
  },
  {
    image: "/img/banner2.jpeg",
    alt: "Podcast no Spotify",
    link: "https://open.spotify.com/show/3Du0MDmFGJWU5mtQBhcDOH",
  },
  {
    image: "/img/banner3.jpeg",
    alt: "YouTube Psi do Amor",
    link: "https://www.youtube.com/@NataliaDadaltopsi",
  },
];

const services = [
  {
    title: "Terapia Individual",
    description: "Atendimento focado em você e suas necessidades.",
    icon: User,
  },
  {
    title: "Terapia de Casal",
    description: "Fortalecimento de vínculos e comunicação afetiva.",
    icon: Users,
  },
  {
    title: "Dependência Emocional",
    description: "Apoio para restaurar sua autonomia emocional.",
    icon: HeartCrack,
  },
  {
    title: "Ciúmes Excessivo",
    description: "Compreensão e controle de comportamentos possessivos.",
    icon: EyeOff,
  },
];

const testimonials = [
  {
    text: "Gostei muito! Me senti acolhida com sensibilidade e qualificação!!",
    author: "Paciente da Psi do Amor",
  },
  {
    text: "Encontrei apoio e orientação para superar um momento difícil. Fui muito bem acolhida, amei!",
    author: "Paciente da Psi do Amor",
  },
  {
    text: "Oie boa tarde!! Eu me senti muito bem e acolhida, e gostei muito da Psi Milena!",
    author: "Paciente da Psi do Amor",
  },
  {
    text: "Aqui me senti ouvido de verdade. Foi ótimo, me senti muito melhor!",
    author: "Paciente da Psi do Amor",
  },
];

const faq = [
  {
    question: "Como saber se preciso de terapia?",
    answer:
      "Se você sente que precisa de apoio emocional, está enfrentando desafios ou busca se conhecer melhor, a terapia é um ótimo caminho.",
  },
  {
    question: "A terapia é sigilosa?",
    answer:
      "Sim! Todos os atendimentos seguem o sigilo profissional, protegendo a sua privacidade.",
  },
  {
    question: "Como funciona a primeira sessão?",
    answer:
      "É um momento de escuta e acolhimento, onde vamos entender suas necessidades e traçar o plano terapêutico.",
  },
];

const Index: React.FC = () => {
  return (
    <div className="font-garet text-[#4C0B18] antialiased">
      
      {/* Carrossel Hero */}
      <header className="bg-pink-50">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          className="w-full h-[180px] md:h-[600px]"
        >
          {bannerSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <a href={slide.link} target="_blank" rel="noopener noreferrer">
                <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover md:object-cover object-contain"
              />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </header>

      <main>
        {/* NOSSA MISSÃO */}
        <section id="missao" className="py-24 bg-gradient-to-r from-pink-50 to-white">
          <div className="container mx-auto px-6 text-center md:text-left">
            <p className="text-sm uppercase font-medium tracking-wide text-[#8A1C1C]">
              transformando seu bem-estar
            </p>
            <h2 className="mt-2 text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
              Nossa missão é acolher você em todos os aspectos
            </h2>
            <p className="mt-4 text-lg text-gray-700 max-w-2xl">
              Acreditamos que cada passo de autoconhecimento deve ser seguro e feito sob medida. Por isso unimos ciência, escuta empática e prática clínica de ponta.
            </p>
            <Button asChild className="mt-8 bg-[#8A1C1C] hover:bg-[#4C0B18] text-white px-6 py-3 rounded-xl text-lg">
              <Link to="/sobre">
                Conheça nossa Abordagem <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>

          {/* Blocos com imagens */}
          <div className="container mx-auto px-6 mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Atendimento Humanizado",
                desc: "Escuta ativa, apoio contínuo e um ambiente acolhedor.",
                img: "/img/nat3.jpeg",
                alt: "Atendimento humanizado",
              },
              {
                title: "Ambiente Acolhedor e Seguro",
                desc: "Atendimento online com conforto e privacidade.",
                img: "/img/home_office.jpg",
                alt: "Ambiente aconchegante",
              },
              {
                title: "Equipe Especializada",
                desc: "Psicólogas com sólida formação e experiência clínica.",
                img: "/img/nat4.jpg",
                alt: "Equipe especializada",
              }
            ].map((b, i) => (
              <div key={i} className="space-y-4">
                <h3 className="text-2xl font-semibold">{b.title}</h3>
                <p className="text-gray-700">{b.desc}</p>
                <img
                  src={b.img}
                  alt={b.alt}
                  className="rounded-2xl shadow-lg w-full h-64 md:h-72 lg:h-80 object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>

        {/* SERVIÇOS */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">Nossos Serviços</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map(({ title, description, icon: Icon }, i) => (
                <div
                  key={i}
                  className="group relative bg-gray-50 p-8 rounded-3xl overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8A1C1C]/0 to-[#4C0B18]/0 group-hover:from-[#8A1C1C]/10 group-hover:to-[#4C0B18]/10 transition-colors duration-300 rounded-3xl" />
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="bg-[#8A1C1C] rounded-full p-4 mb-4 text-white group-hover:bg-[#4C0B18] transition-colors duration-300">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                    <p className="text-gray-600">{description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button
                asChild
                className="inline-flex items-center bg-[#8A1C1C] hover:bg-[#4C0B18] text-white px-6 py-3 rounded-xl text-lg"
              >
                <Link to="/servicos">
                  Conheça todos os Serviços <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section className="py-24 bg-gradient-to-r from-pink-50 to-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-[#4C0B18]">
              Depoimentos
            </h2>
            <div className="hidden md:grid md:grid-cols-4 md:gap-8 mt-12">
              {testimonials.slice(0, 4).map((t, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-2xl shadow-lg bg-white flex flex-col justify-between"
                >
                  <span className="block text-2xl leading-none mb-4 text-[#8A1C1C]">“</span>
                  <p className="flex-grow text-lg text-gray-800 mb-6">{t.text}</p>
                  <span className="text-sm font-semibold text-[#4C0B18]">{t.author}</span>
                </div>
              ))}
            </div>
            <div className="md:hidden overflow-hidden mt-12">
              <div className="flex space-x-6 animate-slide">
                {testimonials.slice(0, 4).map((t, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-64 h-80 p-6 rounded-2xl shadow-lg bg-white flex flex-col justify-between"
                  >
                    <span className="block text-2xl leading-none mb-2 text-[#8A1C1C]">“</span>
                    <p className="flex-grow text-base text-gray-800 mb-4">{t.text}</p>
                    <span className="text-xs font-medium text-[#4C0B18]">{t.author}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24 bg-gradient-to-t from-pink-50 to-white">
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="sticky top-24 self-start space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">Perguntas Frequentes</h2>
              <p className="text-lg text-gray-700">
                Aqui respondemos às principais dúvidas para que você se sinta ainda mais acolhido.
              </p>
            </div>
            <div>
              <Accordion type="single" collapsible className="space-y-4">
                {faq.map(({ question, answer }, idx) => (
                  <AccordionItem key={idx} value={`faq-${idx}`} className="border-b border-gray-200">
                    <AccordionTrigger className="py-4 text-lg font-medium text-[#4C0B18]">
                      {question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 text-gray-700">{answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
          <div className="container mx-auto px-6 text-center mt-12">
            <Button
              asChild
              className="inline-flex items-center bg-[#8A1C1C] hover:bg-[#4C0B18] text-white px-6 py-3 rounded-xl text-lg"
            >
              <Link to="/faq">
                Veja todas as Perguntas <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
