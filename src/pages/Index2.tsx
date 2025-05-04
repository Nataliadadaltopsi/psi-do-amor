import { User, Users, Clock, Video, Group, Heart } from "lucide-react"; 
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from 'lucide-react';
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Index = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-burgundy">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-4 h-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Bem-vindo à Psi do Amor
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Seu espaço de acolhimento e transformação. Comece sua jornada de autoconhecimento conosco.
            </p>
            <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#20BA5C] text-white border-none">
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="mr-2 h-5 w-5" />
                Agende sua Consulta
              </a>
            </Button>
          </div>
          <div className="hidden md:block relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
            <img
              src="/img/clinica.jpeg"
              alt="Ambiente acolhedor da clínica"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-burgundy mb-6">
              Por que escolher a Psi do Amor?
            </h2>
            <p className="text-gray-600 mb-8">
              Com uma equipe especializada e um ambiente acolhedor, oferecemos atendimento humanizado
              e personalizado para cada paciente. Nossa missão é auxiliar você em sua jornada de
              autoconhecimento e bem-estar emocional.
            </p>
            <Button asChild variant="outline" className="text-burgundy border-burgundy hover:bg-burgundy hover:text-white">
              <Link to="/sobre">
                Conheça Nossa História
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-burgundy mb-12">
            Nossos Serviços
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <service.icon className="h-12 w-12 text-burgundy mb-4" />
                <h3 className="text-xl font-semibold text-burgundy mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="text-burgundy border-burgundy hover:bg-burgundy hover:text-white">
              <Link to="/servicos">
                Ver Todos os Serviços
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-burgundy mb-12">
            Perguntas Frequentes
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {faqPreview.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="text-center mt-8">
              <Button asChild variant="outline" className="text-burgundy border-burgundy hover:bg-burgundy hover:text-white">
                <Link to="/faq">
                  Ver Todas as Perguntas
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const faqPreview = [
  {
    question: "Quanto tempo dura uma terapia?",
    answer: "Não existe um prazo definido para o término de uma terapia, pois cada pessoa tem seu próprio ritmo e necessidades específicas."
  },
  {
    question: "Com que frequência devo fazer terapia?",
    answer: "Geralmente, recomendamos sessões semanais, especialmente no início do processo terapêutico."
  },
  {
    question: "A terapia online é tão eficaz quanto a presencial?",
    answer: "Sim, estudos científicos têm demonstrado que a terapia online pode ser tão eficaz quanto a presencial para a maioria das questões psicológicas."
  }
];

const services = [
  {
    title: "Terapia Individual",
    description: "Atendimento personalizado para auxiliar no seu desenvolvimento pessoal.",
    icon: User,
  },
  {
    title: "Terapia de Casal",
    description: "Fortalecendo relacionamentos através do diálogo e compreensão mútua.",
    icon: Users,
  },
  {
    title: "Psicoterapia para Adolescentes",
    description: "Suporte especializado para os desafios da adolescência.",
    icon: Group,
  },
  {
    title: "Atendimento Online",
    description: "Sessões de terapia no conforto do seu lar.",
    icon: Video,
  }
];

export default Index;
