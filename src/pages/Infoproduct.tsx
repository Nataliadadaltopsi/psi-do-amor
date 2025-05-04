// src/pages/Infoproduct.tsx
import React from "react";

const products = [
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
    link: "https://pay.kiwify.com.br/mN24Ugl",
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

export default function Infoproduct() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f7f0e9] text-[#2c2c2c]">
      <main className="flex-1 px-4 py-10 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-[#4C0B18] mb-8">Infoprodutos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <a
              key={product.id}
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex flex-col bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 p-4 gap-4"
            >
              {product.isNew && (
                <span className="absolute top-2 left-2 bg-[#8A1C1C] text-white px-2 py-1 rounded text-xs shadow">
                  Novo
                </span>
              )}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-44 rounded-xl object-cover"
              />
              <div className="flex-1 flex flex-col justify-between">
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
                <button className="mt-4 text-sm text-[#720c1e] font-semibold hover:underline self-start">
                  Ver mais
                </button>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
