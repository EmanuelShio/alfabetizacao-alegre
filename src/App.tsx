import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Clock, 
  Download, 
  Star, 
  CheckCircle, 
  Users, 
  BookOpen, 
  Palette,
  Target,
  Award,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  X
} from 'lucide-react';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const features = [
    { icon: BookOpen, title: "Fichas de leitura e escrita", desc: "Materiais prontos para desenvolver habilidades fundamentais" },
    { icon: Target, title: "Coordenação motora fina", desc: "Atividades especializadas para desenvolvimento motor" },
    { icon: Palette, title: "Cartazes educativos", desc: "Decoração pedagógica para sua sala de aula" },
    { icon: Users, title: "Jogos interativos", desc: "Brincadeiras que ensinam de forma divertida" },
    { icon: Award, title: "Base na BNCC", desc: "Todos os materiais seguem a Base Nacional" },
    { icon: Heart, title: "Temáticos especiais", desc: "Atividades para datas comemorativas" }
  ];

  const benefits = [
    "✅ Mais de 500 atividades organizadas por tema",
    "✅ Pronto para imprimir - sem edição necessária", 
    "✅ Design lúdico e moderno que as crianças amam",
    "✅ Economia de horas de planejamento semanal",
    "✅ Compatível com BNCC",
    "✅ Apenas R$10 - preço simbólico"
  ];

  const faqs = [
    {
      question: "Como recebo o material após a compra?",
      answer: "Após a confirmação do pagamento, você recebe instantaneamente no seu e-mail um link para download de todos os 500+ recursos em formato PDF."
    },
    {
      question: "Posso imprimir quantas vezes quiser?",
      answer: "Sim! Você pode imprimir quantas cópias precisar para suas turmas. O material é seu para sempre."
    },
    {
      question: "O material serve para que idades?",
      answer: "Os recursos são ideais para Educação Infantil e série iniciais do Ensino Fundamental (3 a 8 anos), seguindo a BNCC."
    },
    {
      question: "E se eu não gostar do material?",
      answer: "Oferecemos garantia de 7 dias. Se não ficar satisfeita, devolvemos seu dinheiro."
    },
    {
      question: "Preciso de programa especial para abrir?",
      answer: "Não! Todos os arquivos são em PDF, que abre em qualquer dispositivo - celular, tablet ou computador."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Barra de Atenção Fixa */}
      <div className="fixed top-0 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 text-center text-sm font-medium z-50 animate-pulse">
        🎉 +500 atividades por apenas R$10 - Oferta especial! 🎉
      </div>

      {/* Hero Section */}
      <section className="pt-16 pb-12 bg-gradient-to-br from-green-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
              Combo com <span className="text-green-500">500 Recursos</span><br />
              Prontos para <span className="text-purple-500">Professores</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
              Mais de 500 atividades pedagógicas organizadas, prontas para imprimir. 
              Pare de perder tempo planejando e foque no que importa: ensinar! 
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="bg-white rounded-full px-6 py-3 shadow-lg">
                <span className="text-2xl font-bold text-green-500">R$ 10</span>
                <span className="text-gray-600 ml-2">apenas</span>
              </div>
              <div className="flex items-center text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
                <span className="ml-2 text-gray-600">+1000 professoras satisfeitas</span>
              </div>
            </div>
            <a 
              href="https://www.ggcheckout.com/checkout/v2/c9GT9hHkYQPmG19KUbcK?utm_source=organicjLj688b611fc24288f8a56b09ed&utm_campaign=&utm_medium=&utm_content=&utm_term="
              className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg animate-pulse"
            >
              🎯 Quero os 500 recursos agora!
            </a>
          </div>
          
          <div className="max-w-md mx-auto">
            <img 
              src="https://i.ibb.co/p6yF1nv2/hero-section.webp"
              alt="Combo 500 Recursos para Professores"
              className="w-full rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Por que mais de 1000 professoras escolheram nosso combo?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Porque sabemos exatamente o que você precisa para facilitar suas aulas e encantar os pequenos!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center p-4 bg-green-50 rounded-lg transform hover:scale-105 transition-transform duration-300">
                <span className="text-green-600 text-lg font-medium">{benefit}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="https://www.ggcheckout.com/checkout/v2/c9GT9hHkYQPmG19KUbcK?utm_source=organicjLj688b611fc24288f8a56b09ed&utm_campaign=&utm_medium=&utm_content=&utm_term="
              className="inline-block bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              💜 Quero facilitar minhas aulas!
            </a>
          </div>
        </div>
      </section>

      {/* O que vem no combo */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              O que você recebe no combo?
            </h2>
            <p className="text-lg text-gray-600">
              Mais de 500 recursos organizados em categorias práticas
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-green-500 to-purple-500 p-3 rounded-full">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 ml-3">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <img 
              src="https://i.ibb.co/VpSkvJcV/bloco-1-1.png"
              alt="Exemplo de atividade"
              className="w-full rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            />
            <img 
              src="https://i.ibb.co/XZB3f8ZB/bloco-2.png"
              alt="Exemplo de atividade"
              className="w-full rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            />
            <img 
              src="https://static-media.hotmart.com/ueepfnFdj9g28Pq4RLfPyC_55FE=/filters:quality(1):format(webp)/klickart-prod/uploads/media/file/9286163/exercicio.png"
              alt="Exemplo de atividade"
              className="w-full rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Veja o que as professoras estão falando
            </h2>
            <p className="text-lg text-gray-600">
              Transformações reais de quem já usa nossos materiais
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <img 
              src="https://static-media.hotmart.com/eGa6ebdASHI9b-N4gY8Niyy7xyQ=/filters:quality(1):format(webp)/klickart-prod/uploads/media/file/9287385/combo.jpg"
              alt="Depoimentos de professoras satisfeitas"
              className="w-full rounded-xl shadow-2xl"
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex text-yellow-500 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-3">
                "Finalmente encontrei material bonito e pronto para imprimir! Meus alunos ficaram muito mais engajados nas atividades."
              </p>
              <p className="font-semibold text-green-600">- Professora Ana, SP</p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="flex text-yellow-500 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-3">
                "Facilitou meu planejamento semanal de forma incrível! Economizei horas de trabalho e o resultado é maravilhoso."
              </p>
              <p className="font-semibold text-purple-600">- Professora Maria, RJ</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="https://www.ggcheckout.com/checkout/v2/c9GT9hHkYQPmG19KUbcK?utm_source=organicjLj688b611fc24288f8a56b09ed&utm_campaign=&utm_medium=&utm_content=&utm_term="
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              🌟 Eu também quero essa transformação!
            </a>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Como funciona?
            </h2>
            <p className="text-lg text-gray-600">
              É muito simples e rápido!
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-2">Clique no botão</h3>
              <p className="text-gray-600">Você será direcionada para a página de pagamento seguro</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-2">Faça o pagamento</h3>
              <p className="text-gray-600">Pague apenas R$10 via PIX, cartão ou boleto</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-pink-500 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-2">Receba no e-mail</h3>
              <p className="text-gray-600">Link para download instantâneo de todos os 500+ recursos</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Dúvidas frequentes
            </h2>
            <p className="text-lg text-gray-600">
              Esclarecemos as principais questões
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-800">{faq.question}</span>
                  {openFaq === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
                {openFaq === index && (
                  <div className="p-4 pt-0 text-gray-600 border-t border-gray-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Garantia de 7 dias
            </h2>
            <p className="text-xl mb-6">
              Se você não ficar 100% satisfeita com os materiais, devolvemos seu dinheiro. 
              Sem perguntas, sem complicação!
            </p>
            <p className="text-lg opacity-90">
              Temos certeza de que você vai amar os recursos e ver a diferença na sua sala de aula.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-br from-purple-600 via-pink-600 to-red-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Transforme suas aulas hoje mesmo!
            </h2>
            <p className="text-xl mb-8">
              Mais de 500 recursos pedagógicos esperando por você. 
              Pare de perder tempo planejando e comece a ensinar de forma mais eficiente!
            </p>
            
            <div className="bg-white/10 rounded-2xl p-8 mb-8">
              <div className="text-4xl font-bold mb-2">R$ 10</div>
              <div className="text-lg opacity-90">Valor simbólico - Acesso instantâneo</div>
              <div className="text-sm opacity-75 mt-2">+500 atividades prontas para imprimir</div>
            </div>
            
            <a 
              href="https://www.ggcheckout.com/checkout/v2/c9GT9hHkYQPmG19KUbcK?utm_source=organicjLj688b611fc24288f8a56b09ed&utm_campaign=&utm_medium=&utm_content=&utm_term="
              className="inline-block bg-white text-purple-600 px-10 py-5 rounded-full text-xl font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              🚀 SIM! Quero meu combo lúdico agora!
            </a>
            
            <div className="mt-6 text-sm opacity-75">
              ✅ Pagamento 100% seguro • ✅ Acesso instantâneo • ✅ Garantia de 7 dias
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Combo 500 Recursos para Professores. Todos os direitos reservados.
          </p>
          <p className="text-gray-400 mt-2">
            Materiais pedagógicos de qualidade para transformar suas aulas.
          </p>
        </div>
      </footer>

      {/* WhatsApp Flutuante */}
      <a 
        href="https://wa.me/5542984135535?text=quero%20combo%20de%20500%20atividades"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transform hover:scale-110 transition-all duration-300 z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Pop-up */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm mx-auto relative animate-pulse">
            <button 
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="text-center">
              <div className="text-4xl mb-3">⏰</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Ainda aí?
              </h3>
              <p className="text-gray-600 mb-4">
                Aproveite o combo com +500 atividades por apenas R$10!
              </p>
              <a 
                href="https://www.ggcheckout.com/checkout/v2/c9GT9hHkYQPmG19KUbcK?utm_source=organicjLj688b611fc24288f8a56b09ed&utm_campaign=&utm_medium=&utm_content=&utm_term="
                className="block bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full font-semibold hover:from-green-600 hover:to-green-700 transition-colors duration-300"
                onClick={() => setShowPopup(false)}
              >
                🎯 Quero aproveitar!
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;