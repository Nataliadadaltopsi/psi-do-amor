import React from "react";
// O Link já está importado
import { Link } from "react-router-dom";
import { User, Users, HeartCrack, ArrowRight, CalendarCheck, ShoppingBag } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
// Mantém apenas Navigation
import { Navigation } from 'swiper/modules';

import 'swiper/css';
// Remove a importação do CSS de autoplay
// import 'swiper/css/autoplay'; // Linha removida
import 'swiper/css/navigation'; // Mantém os estilos das setas

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

// Definição dos produtos Kiwify
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

// Dados para o banner estático
const staticBanner = {
  imageDesktop: "/img/clinica_1.jpeg",
  imageMobile: "/img/clinica_1Mobile.jpg",
  alt: "Banner da Clínica Psi do Amor",
  // Substitua pelo seu link do WhatsApp!
  whatsappLink: "https://wa.me/5527998865421?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20quero%20agendar%20uma%20consulta"
};


const services = [
  {
    title: "Terapia Individual",
    description: "Atendimento personalizado voltado para os desafios emocionais e de relacionamento. \nAnsiedade, autoestima, ciúmes, dependência emocional, términos, traição, dificuldades afetivas, entre outros.",
    icon: User,
  },
  {
    title: "Terapia de Casal",
    description: "Espaço para fortalecer vínculos e melhorar a comunicação no relacionamento.\nIdeal para casais que querem se reconectar, resolver conflitos ou se comunicar com mais empatia.",
    icon: Users,
  },
  {
    title: "Outros Serviços",
    description: "Acolhimento para questões que vão além dos relacionamentos.\nTratamento para ansiedade, depressão, estresse, luto, transições de vida, entre outros desafios emocionais.",
    icon: HeartCrack,
  }
];

const testimonials = [
  {
    image: "/img/depoimento3.jpg",
    author: "Paciente da Psi do Amor",
  },
  {
    image: "/img/depoimento1.jpg",
    author: "Paciente da Psi do Amor",
  },
  {
    image: "/img/depoimento4.jpg",
    author: "Paciente da Psi do Amor",
  },
  {
    image: "/img/depoimento2.jpg",
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

      {/* Header com Banner Estático - VERSÃO CORRIGIDA (100% funcional) */}
      <header className="relative w-full h-auto min-h-[50vh] md:min-h-[60vh] bg-pink-50 group">
        {/* Link principal cobrindo TODO o banner */}
        <a
          href={staticBanner.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Agendar consulta via WhatsApp"
          className="absolute inset-0 z-0"
        >
          {/* Imagem responsiva corrigida */}
          <picture className="w-full h-full">
            <source 
              srcSet={staticBanner.imageMobile} 
              media="(max-width: 640px)" 
              className="w-full h-full object-cover"
            />
            <img
              src={staticBanner.imageDesktop}
              alt={staticBanner.alt}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </picture>
        </a>

        {/* Botão de Agendamento (posicionamento absoluto mantido) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <a
            href={staticBanner.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute left-1/2 top-[60%] md:top-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-[#8A1C1C] text-white text-lg md:text-xl font-semibold rounded-xl shadow-lg hover:bg-[#4C0B18] transition-all duration-300 group-hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#8A1C1C] focus:ring-offset-2 focus:ring-offset-pink-50 pointer-events-auto z-10"
            style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}
          >
            <CalendarCheck className="mr-2 h-5 w-5 md:h-6 md:w-6" />
            Agendar Consulta
          </a>
        </div>
      </header>

      {/* Seção de Produtos Kiwify */}
      {kiwifyProducts.length > 0 && (
        <section className="py-16 md:py-24 bg-[#F9F5F0]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center mb-10 md:mb-12">
              <ShoppingBag className="h-10 w-10 text-purple-700 mb-3" />
              {/* Tornar o título um Link */}
              <Link
                to="/infoprodutos" // Define o destino do link
                // Aplica as classes de estilização do título ao Link e adiciona efeito hover
                className="text-3xl md:text-4xl font-bold text-[#6B21A8] hover:underline focus:outline-none focus:underline"
              >
                Nossos Infoprodutos
              </Link>
              <p className="mt-2 text-md md:text-lg text-gray-600 max-w-xl">
                Explore nossos materiais exclusivos para seu desenvolvimento pessoal e profissional.
              </p>
            </div>
            <div className="w-full max-w-6xl mx-auto relative">
              <Swiper
                modules={[Navigation]} // Use apenas Navigation
                loop={kiwifyProducts.length > 3}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 2, spaceBetween: 20 },
                  1024: { slidesPerView: 3, spaceBetween: 30 },
                }}
                className="rounded-xl"
                navigation={true} // Mantém a navegação pelas setas
              >
                {kiwifyProducts.map((product) => (
                  <SwiperSlide key={product.id} className="h-auto pb-8 self-stretch">
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative flex flex-col h-full bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 p-4"
                    >
                      {product.isNew && (
                        <span className="absolute top-2 left-2 bg-[#8A1C1C] text-white px-2 py-1 rounded text-xs shadow z-10">
                          Novo
                        </span>
                      )}
                      <div className="w-full h-40 sm:h-48 md:h-56 flex items-center justify-center overflow-hidden rounded-xl bg-gray-50 mb-3 md:mb-4">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="max-h-full w-auto object-contain"
                        />
                      </div>
                      <div className="flex flex-col justify-between flex-1">
                        <div>
                          <p className="text-base md:text-lg font-bold text-[#2c2c2c] leading-tight mb-1 line-clamp-2">{product.title}</p>
                          {product.coupon && (
                            <p className="text-xs md:text-sm text-gray-600">
                              Cupom: <span className="font-bold text-[#720c1e]">{product.coupon}</span>
                            </p>
                          )}
                          {product.description && (
                            <p className="text-xs md:text-sm text-gray-500 mt-1 line-clamp-3">{product.description}</p>
                          )}
                        </div>
                        <span className="mt-3 md:mt-4 text-sm text-[#720c1e] font-semibold hover:underline self-start">
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
      )}

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
                desc: "Atendimento online com conforto, sigilo e privacidade.",
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <p className="text-gray-600 whitespace-pre-line">{description}</p>
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
          <div className="container mx-auto px-6 text-center max-w-screen-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-[#4C0B18]">
              Depoimentos
            </h2>

            <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 mt-12">
              {testimonials.slice(0, 4).map((t, idx) => (
              <div
                key={idx}
                className="group relative bg-white p-6 rounded-3xl shadow-lg
                           transition-shadow duration-300 hover:shadow-2xl
                           flex items-center justify-center
                           h-96  /* ← altura fixa de 20rem */
                           max-h-[24rem]  /* opcional: limita pra não estourar */
                          "
              >
                  <img
                    src={t.image}
                    alt={`Depoimento de ${t.author}`}
                    className="max-h-full w-auto object-contain"
                  />
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
                    <div className="flex-1 flex items-center justify-center mb-4 h-96">
                      <img
                        src={t.image}
                        alt={`Depoimento de ${t.author}`}
                        className="h-full object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24 bg-gradient-to-t from-pink-50 to-white">
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8 items-start">
            {/* Bloco de Título e Descrição do FAQ */}
            <div className="lg:sticky lg:top-24 self-start space-y-4 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold">Perguntas Frequentes</h2>
              <p className="text-lg text-gray-700">
                Aqui respondemos às principais dúvidas para que você se sinta ainda mais acolhido.
              </p>
            </div>
            {/* Bloco do Accordion */}
            <div>
              <Accordion type="single" collapsible className="space-y-4">
                {faq.map(({ question, answer }, idx) => (
                  <AccordionItem key={idx} value={`faq-${idx}`} className="border-b border-gray-200">
                    <AccordionTrigger className="py-4 text-lg font-medium text-[#4C0B18] text-left hover:no-underline">
                      {question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 text-gray-700 text-left">
                      {answer}
                    </AccordionContent>
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