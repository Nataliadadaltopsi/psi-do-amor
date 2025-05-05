// src/pages/Services.tsx
import React from "react";
import { motion } from "framer-motion";
import { EmojiSad } from 'heroicons-react';
import {
  Heart,
  Users,
  Laptop,
  Smile,
  Brain,
  Shield,
  AlertTriangle,
  UserCheck,
  MessageCircle,
  UserX,
  EyeOff,
  Zap,
  BookOpen,
  Lock,
  Mic,
} from "lucide-react";

const services = [
  {
    title: "Terapia Individual",
    icon: Heart,
    description: "Espaço seguro para fortalecer o autoconhecimento e melhorar seu bem-estar emocional.",
    image: "/img/atendon.jpg",
  },
  {
    title: "Terapia de Casal",
    icon: Users,
    description: "Auxílio para fortalecer vínculos, melhorar a comunicação e resolver conflitos amorosos.",
    image: "/img/atendcasal.png",
  },
  {
    title: "Dependência Emocional",
    icon: Shield,
    description: "Ajuda para desenvolver autonomia emocional e construir relações mais saudáveis.",
    image: "/img/dependemoc.png",
  },
  {
    title: "Ciúmes Excessivo",
    icon: AlertTriangle,
    description: "Trabalho terapêutico para lidar com inseguranças e fortalecer a confiança em si e no outro.",
    image: "https://unsplash.com/photos/Fv125uBYKDI/download?force=true",
  },
  {
    title: "Controle nas Relações",
    icon: UserCheck,
    description: "Compreensão e mudança de padrões de controle que afetam os relacionamentos.",
    image: "https://unsplash.com/photos/jrwZUfUBwgs/download?force=true",
  },
  {
    title: "Baixa Autoestima",
    icon: EmojiSad,
    description: "Resgate da autoestima e fortalecimento do amor-próprio.",
    image: "https://unsplash.com/photos/XSMvOLi_tR0/download?force=true",
  },
  {
    title: "Insegurança",
    icon: EyeOff,
    description: "Desenvolvimento da autoconfiança e construção de segurança emocional.",
    image: "https://unsplash.com/photos/bh8QqUKIcPQ/download?force=true",
  },
  {
    title: "Traumas do Passado",
    icon: Brain,
    description: "Processamento e cura de experiências dolorosas que ainda impactam sua vida.",
    image: "https://unsplash.com/photos/3nGGkh99D_g/download?force=true",
  },
  {
    title: "Questões Familiares",
    icon: Users,
    description: "Entendimento e transformação das dinâmicas familiares conflituosas.",
    image: "https://unsplash.com/photos/caO-kxzDYYE/download?force=true",
  },
  {
    title: "Ansiedade",
    icon: Zap,
    description: "Técnicas e suporte para lidar com crises de ansiedade e pensamentos acelerados.",
    image: "https://unsplash.com/photos/oUGDUTHjLCo/download?force=true",
  },
  {
    title: "Depressão",
    icon: Heart,
    description: "Acolhimento para lidar com a tristeza profunda, resgatar a motivação e o prazer pela vida.",
    image: "https://unsplash.com/photos/kYpc9W042Qc/download?force=true",
  },
  {
    title: "Término ou Divórcio",
    icon: UserX,
    description: "Suporte emocional para enfrentar o fim de um relacionamento e recomeçar com equilíbrio.",
    image: "https://unsplash.com/photos/CvUeazqiOrQ/download?force=true",
  },
  {
    title: "Autoconhecimento",
    icon: BookOpen,
    description: "Exploração profunda de quem você é, seus valores, emoções e desejos.",
    image: "https://unsplash.com/photos/9EZC-FfQQeI/download?force=true",
  },
  {
    title: "Traição",
    icon: Lock,
    description: "Trabalho terapêutico para superar dores causadas por infidelidade e reconstruir a confiança.",
    image: "https://unsplash.com/photos/3nGGkh99D_g/download?force=true",
  },
  {
    title: "Comunicação Assertiva",
    icon: Mic,
    description: "Aprenda a se expressar com clareza e empatia, melhorando seus relacionamentos.",
    image: "https://unsplash.com/photos/caO-kxzDYYE/download?force=true",
  },
];

const Services: React.FC = () => (
  <section className="py-20 bg-[#F9F5F0]">
    <div className="container mx-auto px-6">
      {/* Header */}
      <div className="space-y-4 text-center">
        <h2 className="text-5xl font-bold text-[#4C0B18]">Nossos Serviços</h2>
        <p className="mx-auto text-xl text-gray-700 max-w-2xl leading-relaxed">
          Atendimento 100% online, feito por mulheres e para mulheres.
        </p>
        <p className="mx-auto text-lg text-gray-700 max-w-2xl leading-relaxed">
          Cuidamos da sua saúde emocional com empatia, acolhimento e segurança.
        </p>
      </div>

      {/* Grid: 1 col on mobile, 2 on md+, 3 on lg+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
        {services.map((svc, idx) => {
          const Icon = svc.icon;
          return (
            <motion.div
              key={svc.title}
              className="flex flex-col bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-transform hover:-translate-y-2 p-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <div className="w-full h-48 mb-6">
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* Text */}
              <div className="flex-1 flex flex-col items-start">
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="text-[#8A1C1C]" size={28} />
                  <h3 className="text-2xl font-semibold text-[#4C0B18]">{svc.title}</h3>
                </div>
                <p className="text-gray-700 text-base leading-relaxed mb-4">{svc.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Services;
