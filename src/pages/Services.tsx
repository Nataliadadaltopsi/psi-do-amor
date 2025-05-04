// src/pages/Services.tsx
import React from "react";
import { motion } from "framer-motion";
import { Heart, Users, Laptop, Smile, Brain } from "lucide-react"; // Ícones adicionados

const services = [
  {
    title: "Psicoterapia Individual",
    icon: Heart,
    description: "Espaço seguro para fortalecer o autoconhecimento e melhorar seu bem-estar emocional.",
    image: "/img/atendon.jpg",
  },
  {
    title: "Psicoterapia de Casal",
    icon: Users,
    description: "Auxílio para fortalecer vínculos, melhorar a comunicação e resolver conflitos.",
    image: "/img/atendcasal.jpg",
  },
  {
    title: "Psicoterapia para Adolescentes",
    icon: Smile,
    description: "Suporte emocional e acadêmico para enfrentar os desafios da adolescência.",
    image: "https://plus.unsplash.com/premium_photo-1665990293319-fe271ebcb6f3?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Atendimento Online",
    icon: Laptop,
    description: "A mesma qualidade do presencial, com a praticidade do online.",
    image: "https://plus.unsplash.com/premium_photo-1664476315220-2b91172d29da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Psicoterapia Familiar",
    icon: Users,
    description: "Trabalho conjunto para melhorar o relacionamento familiar e resolver conflitos.",
    image: "https://images.unsplash.com/photo-1529180979161-06b8b6d6f2be?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Psicoterapia para Ansiedade",
    icon: Brain,
    description: "Técnicas terapêuticas para lidar com ansiedade e melhorar a qualidade de vida.",
    image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?q=80&w=2090&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Services: React.FC = () => (
  <section className="py-20 bg-[#F9F5F0]">
    <div className="container mx-auto px-6">
      {/* Header */}
      <div className="space-y-4 text-center">
        <h2 className="text-5xl font-bold text-[#4C0B18]">Nossos Serviços</h2>
        <p className="mx-auto text-xl text-gray-700 max-w-2xl leading-relaxed">
        Atendimento 100% online, feito por mulheres e para mulheres.</p>
        <p className="mx-auto text-lg text-gray-700 max-w-2xl leading-relaxed">
        Cuidamos da sua saúde emocional com empatia, acolhimento e segurança. </p>
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
                  <h3 className="text-2xl font-semibold text-[#4C0B18]">
                    {svc.title}
                  </h3>
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
