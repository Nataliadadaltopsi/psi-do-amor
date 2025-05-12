// src/pages/About.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, X } from 'lucide-react';
import MarinaImg from '/img/marina.jpg';
import JeniferImg from '/img/jenifer.jpeg';
import KarolineImg from '/img/karoline.jpeg';
import KissilaImg from '/img/kissila.jpeg';
import MilenaImg from '/img/milena.jpeg';
import LarissaImg from '/img/larissa.jpg';

const team = [
  {
    name: "Psi Kissila Karolayne",
    title: "Psicóloga – CRP 04/67504",
    approach: "Terapia Cognitivo-Comportamental",
    bio: [
      "Graduada em Psicologia – Univale",
      "Orientação de Pais – INPI",
      "Pós-graduanda em Terapias Cognitivas e Contextuais para Casais – PUCPR",
    ],
    image: KissilaImg,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    name: "Psi Jennifer Fontes",
    title: "Psicóloga Clínica – CRP 06/157897",
    approach: "Análise do Comportamento",
    bio: [
      "Graduada em Psicologia – UNIP",
      "Pós-Graduada em Neuropsicologia – USJT",
      "Autora: 'Psicologia da Rejeição'"
    ],
    image: JeniferImg,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    name: "Psi Karoline Horts",
    title: "Psicóloga Clínica – CRP 16/09591",
    approach: "Abordagem Centrada na Pessoa",
    bio: [
      "Graduada em Psicologia – UVV",
      "Pós-Graduada em Psicologia Humanista"
    ],
    image: KarolineImg,
    video: "/img/video_karoline.mov",
  },
  {
    name: "Psi Marina Rezende",
    title: "Psicóloga Clínica – CRP 16/11048",
    approach: "Psicologia Analítica",
    bio: [
      "Graduada em Psicologia – UVV",
      "Graduada em História – UFES",
      "Pós-graduanda em Psicologia Analítica",
      "Pós-graduanda em Psicopatologia",
      "Autora: Alcateia Feminista - Curso Literário para Mulheres"
    ],
    image: MarinaImg,
    video: "/img/video_marina.mov",
  },
  {
    name: "Psi Milena Rafaelle",
    title: "Psicóloga Clínica – CRP 06/193894",
    approach: "Abordagem Centrada na Pessoa",
    bio: [
      "Graduada em Psicologia – Anhanguera",
      "Formação em Abordagem Centrada na Pessoa – OMNIA",
    ],
    image: MilenaImg,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    name: "Psi Larissa Abreu",
    title: "Psicóloga Clínica – CRP 06/193894",
    approach: "Terapia Cognitivo-Comportamental",
    bio: [
      "Graduada em Psicologia - EBMSP",
      "Pós graduanda em Terapia Cognitivo-Comportamental",
    ],
    image: LarissaImg,
    video: "/img/video_larissa.mp4",
  }
];

const About: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <>
      <section className="bg-[#F9F5F0] py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center text-[#4C0B18] mb-2">
            Sobre Nós
          </h1>
          <p className="text-center text-lg text-[#8A1C1C] mb-12 max-w-2xl mx-auto">
            Conheça nossa história, missão e a equipe dedicada a cuidar do seu bem-estar
            emocional, de forma 100% online.
          </p>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-12 mb-16">
            <div className="flex-1 space-y-10">
              <div>
                <h2 className="text-2xl font-semibold text-[#8A1C1C] mb-3">Nossa História</h2>
                <p className="text-gray-700 mb-4">
                  A paixão por transformar vidas através do conhecimento científico e da experiência prática foi o que motivou a psicóloga <strong>Natália Dadalto</strong> a trilhar seu caminho.<br />
                  Com foco em relacionamentos, Natália construiu uma trajetória sólida compartilhando, principalmente com mulheres, técnicas baseadas em ciência para viver relações mais saudáveis e equilibradas. <br /><br />

                  A partir do impacto positivo gerado em suas redes sociais, nasceu o desejo de ir além: criar um espaço onde outras mulheres pudessem encontrar apoio e acolhimento especializado.<br />
                  Assim surgiu a <span style={{ color: "#8A1C1C", fontWeight: "bold" }}>Clínica Psi do Amor</span>, uma clínica criada por uma mulher, com um time exclusivamente feminino de psicólogas, voltada para o fortalecimento da saúde emocional das mulheres, especialmente no campo dos relacionamentos.<br /><br />

                  Hoje, a Psi do Amor é referência para mulheres que buscam não apenas entender seus sentimentos, mas também construir relações mais conscientes, respeitosas e felizes.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-[#8A1C1C] mb-3">Missão & Valores</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong style={{ color: "#8A1C1C" }}>Ciência acima de achismos:</strong> Toda orientação é fundamentada em evidências científicas, e não em opiniões pessoais.</li>
                  <li><strong style={{ color: "#8A1C1C" }}>Empatia e acolhimento:</strong> Cada mulher é única. Nosso atendimento é feito com respeito, sensibilidade e sem julgamentos.</li>
                  <li><strong style={{ color: "#8A1C1C" }}>Fortalecimento feminino:</strong> Acreditamos no poder da mulher que se conhece, se valoriza e assume o protagonismo da sua vida emocional.</li>
                  <li><strong style={{ color: "#8A1C1C" }}>Ética profissional:</strong> Atuamos com responsabilidade, comprometimento e respeito absoluto à ética da psicologia.</li>
                  <li><strong style={{ color: "#8A1C1C" }}>Transformação real:</strong> Nosso objetivo é impactar vidas de forma profunda e duradoura, oferecendo ferramentas práticas e eficazes.</li>
                </ul>
              </div>
            </div>
            <motion.div
              className="flex-1 flex justify-center md:block"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="/img/nat1.jpeg"
                alt="Fundadora Natalia Dadalto"
                className="w-full md:w-[500px] h-auto md:h-[750px] object-contain mx-auto rounded-2xl shadow-lg"
                />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#4C0B18] mb-2">
            Nossa Equipe
          </h2>
          <div className="w-20 h-1 bg-[#8A1C1C] mx-auto mb-8" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((person, idx) => (
              <motion.div
                key={person.name}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 relative group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedVideo(person.video)}
              >
                <div className="relative">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center 
                                  opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                    <PlayCircle className="w-16 h-16 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-[#4C0B18] mb-1">{person.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{person.title}</p>
                  <p className="text-[#8A1C1C] font-medium mb-4">{person.approach}</p>
                  <ul className="text-gray-700 space-y-1">
                    {person.bio.map((line, i) => (
                      <li key={i}>• {line}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg overflow-hidden w-[90%] max-w-md">
            <button
              className="absolute top-2 right-2 text-white bg-black bg-opacity-60 rounded-full p-1 z-50"
              onClick={() => setSelectedVideo(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default About;

