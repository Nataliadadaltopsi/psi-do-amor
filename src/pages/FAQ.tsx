import React, { useState } from "react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Como funcionam as sessões?",
    answer: "As sessões são on-line (Google Meet), com duração de 60 minutos. A psicóloga acompanha de perto seu processo e propõe estratégias pra além da sessão, pra que você sinta evolução real no dia a dia. Você também terá um canal direto com ela, caso precise em situações de emergência.",
  },
  {
    question: "Com que frequência devo fazer terapia?",
    answer: "Temos 3 opções disponíveis: sessões avulsas, quinzenais e pacotes mensais (1 sessão por semana). É importante, especialmente no início do processo terapêutico, que se mantenha uma frequência, pois favorece o vínculo com a psicóloga e o aprofundamento nas questões trazidas. No entanto, a frequência pode variar de acordo com sua necessidade, objetivos e disponibilidade.",
  },
  {
    question: "Como sei se estou melhorando na terapia?",
    answer: "Você pode perceber avanços ao se sentir mais consciente, resiliente e satisfeito com seus progressos pessoais.",
  },
  {
    question: "O que é falado na terapia é confidencial?",
    answer: "Sim. Tudo o que é compartilhado na terapia é protegido por sigilo profissional, conforme o Código de Ética da Psicologia. Isso significa que suas informações, histórias e emoções serão tratadas com respeito, sigilo e segurança. Este é um espaço seguro, pensado para que você possa se expressar livremente, sem julgamentos.",
  },
  {
    question: "O primeiro atendimento já é cobrado? Como funciona?",
    answer: "A primeira sessão já é um atendimento completo. Nela, já damos início ao tratamento. A psicóloga vai realizar perguntas importantes, identificar pontos principais da sua queixa e irá traçar os objetivos da terapia com base na psicologia.",
  },
  {
    question: "Diferença entre profissionais (valores):",
    answer: "O valor das sessões varia conforme o tempo de experiência, especializações e disponibilidade de agenda de cada psicóloga. Todas são altamente capacitadas, mas algumas já têm mais bagagem clínica, o que também influencia no valor. Pode ter certeza que, independentemente da escolha, você estará em boas mãos.",
  },
  {
    question: "Onde posso conhecer mais das profissionais?",
    answer: "Na aba 'sobre nós' você vai encontrar uma breve apresentação de cada uma de nossas profissionais, com a abordagem utilizada por ela, suas qualificações e um breve vídeo de apresentação. Além disso, o nosso instagram @clinicapsidoamor tem conteúdos gratuitos diários feitos pelas nossas psicólogas.",
  },
  {
    question: "O pagamento é feito antes ou depois da sessão?",
    answer: "A reserva do horário é feita apenas mediante o envio do comprovante de pagamento, que deve sempre ser feito antes da sessão. Isso garante a organização da agenda e o comprometimento com o seu horário.",
  },
  {
    question: "Como vou receber o link da sessão?",
    answer: "A psicóloga escolhida por você entrará em contato no dia da sessão pela manhã com o link que será utilizado e novas informações.",
  },
  {
    question: "Aceitam plano de saúde?",
    answer: "Trabalhamos exclusivamente com atendimentos particulares, mas emitimos recibo para solicitar reembolso junto ao seu plano (verifique com eles essa possibilidade).",
  }
];

export default function FAQ() {
  const [open, setOpen] = useState<{ [key: number]: boolean }>({});

  const toggle = (idx: number) => {
    setOpen((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <section className="bg-[#F9F5F0]">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-4 pt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#4C0B18] text-center">
          Como podemos ajudar?
        </h2>
      </div>

      {/* FAQ principal */}
      <div className="container mx-auto px-6 max-w-5xl pt-12 pb-16">
        <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition">

          <div className="text-center mb-8">
            <p className="text-gray-700 text-base leading-relaxed">
              Encontre respostas para as dúvidas mais comuns sobre nossos serviços e o&nbsp;
              processo terapêutico. Ainda não encontrou o que procura? Fale conosco!
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <Collapsible
                key={idx}
                open={!!open[idx]}
                onOpenChange={() => toggle(idx)}
                className="border border-gray-200 rounded-2xl overflow-hidden bg-gray-50"
              >
                <CollapsibleTrigger
                  className="flex items-center justify-between w-full px-5 py-4 bg-gray-50 hover:bg-gray-100 cursor-pointer"
                >
                  <span className="text-base font-medium text-gray-800 text-left">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-600 transition-transform ${
                      open[idx] ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-5 py-4 bg-white">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {faq.answer}
                  </p>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}


