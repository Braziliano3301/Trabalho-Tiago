import React, { useState } from 'react';
import { 
  Star, 
  Shield, 
  Clock, 
  Users, 
  CheckCircle, 
  Sparkles, 
  Home, 
  Calendar,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Menu,
  X,
  ArrowRight,
  Zap,
  Heart,
  Award
} from 'lucide-react';
import Dashboard from './components/Dashboard';
import Cadastro from './components/Cadastro';

function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'dashboard' | 'cadastro'>('landing');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Limpeza Residencial",
      description: "Limpeza completa da sua casa com produtos de qualidade",
      price: "A partir de R$ 80"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Limpeza Pesada",
      description: "Para casas que precisam de uma atenção especial",
      price: "A partir de R$ 120"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Limpeza Periódica",
      description: "Mantenha sua casa sempre limpa com visitas regulares",
      price: "A partir de R$ 200/mês"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Limpeza Express",
      description: "Limpeza rápida para ocasiões especiais",
      price: "A partir de R$ 60"
    }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      location: "São Paulo, SP",
      rating: 5,
      comment: "Excelente serviço! A diarista foi pontual, educada e deixou minha casa impecável. Super recomendo o iClean!",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "João Santos",
      location: "Rio de Janeiro, RJ",
      rating: 5,
      comment: "Uso o iClean há 6 meses e nunca tive problemas. As profissionais são confiáveis e o preço é justo.",
      avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Ana Costa",
      location: "Belo Horizonte, MG",
      rating: 5,
      comment: "Como diarista, o iClean me ajudou a organizar minha agenda e conseguir mais clientes. Plataforma incrível!",
      avatar: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Escolha o Serviço",
      description: "Selecione o tipo de limpeza que você precisa"
    },
    {
      step: "2",
      title: "Agende o Horário",
      description: "Escolha o melhor dia e horário para você"
    },
    {
      step: "3",
      title: "Confirme os Detalhes",
      description: "Revise as informações e confirme o agendamento"
    },
    {
      step: "4",
      title: "Relaxe e Aproveite",
      description: "Nossa diarista cuidará de tudo para você"
    }
  ];

  if (currentPage === 'dashboard') {
    return <Dashboard onBack={() => setCurrentPage('landing')} />;
  }

  if (currentPage === 'cadastro') {
    return <Cadastro onBack={() => setCurrentPage('landing')} />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Sparkles className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-2xl font-bold text-gray-900">iClean</span>
              </div>
            </div>
            
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#services" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Serviços
                </a>
                <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Como Funciona
                </a>
                <a href="#testimonials" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Depoimentos
                </a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Contato
                </a>
              </div>
            </nav>

            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6 space-x-4">
                <button 
                  onClick={() => setCurrentPage('dashboard')}
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  Entrar
                </button>
                <button 
                  onClick={() => setCurrentPage('cadastro')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  Cadastrar
                </button>
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#services" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                Serviços
              </a>
              <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                Como Funciona
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                Depoimentos
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                Contato
              </a>
              <div className="border-t pt-4 pb-3">
                <div className="flex items-center px-3 space-x-3">
                  <button 
                    onClick={() => setCurrentPage('dashboard')}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Entrar
                  </button>
                  <button 
                    onClick={() => setCurrentPage('cadastro')}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium"
                  >
                    Cadastrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:max-w-none">
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
                <span className="block">Sua casa</span>
                <span className="block text-blue-600">sempre limpa</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Conectamos você com diaristas confiáveis e experientes. Agende sua limpeza em poucos cliques e tenha mais tempo para o que realmente importa.
              </p>
              
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => setCurrentPage('dashboard')}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors flex items-center justify-center group"
                  >
                    Agendar Limpeza
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={() => setCurrentPage('cadastro')}
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors"
                  >
                    Seja uma Diarista
                  </button>
                </div>
                
                <div className="mt-6 flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-500">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Profissionais verificadas
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-green-500 mr-2" />
                    100% seguro
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <img
                  className="w-full rounded-lg"
                  src="https://images.pexels.com/photos/4099238/pexels-photo-4099238.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Diarista limpando casa"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">4.9</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">10k+</div>
              <div className="text-blue-200">Limpezas realizadas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-blue-200">Diaristas cadastradas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">4.9</div>
              <div className="text-blue-200">Avaliação média</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-blue-200">Cidades atendidas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Nossos Serviços
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Escolha o tipo de limpeza ideal para sua necessidade
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 group cursor-pointer">
                <div className="text-blue-600 group-hover:text-blue-700 transition-colors">
                  {service.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {service.description}
                </p>
                <div className="mt-4 text-lg font-bold text-blue-600">
                  {service.price}
                </div>
                <button 
                  onClick={() => setCurrentPage('dashboard')}
                  className="mt-4 w-full bg-blue-50 hover:bg-blue-100 text-blue-600 py-2 rounded-lg font-medium transition-colors"
                >
                  Agendar Agora
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Como Funciona
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Processo simples e rápido em 4 passos
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              {howItWorks.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full text-2xl font-bold mx-auto">
                    {step.step}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-gray-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* For Cleaners Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Seja uma Diarista Parceira
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Cadastre-se gratuitamente e comece a receber solicitações de trabalho na sua região.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Clock className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Flexibilidade Total</h3>
                    <p className="text-gray-600">Trabalhe nos horários que melhor se encaixam na sua rotina</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Users className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Mais Clientes</h3>
                    <p className="text-gray-600">Acesso a uma base crescente de clientes na sua região</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Award className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Renda Extra</h3>
                    <p className="text-gray-600">Aumente sua renda com trabalhos extras</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <button 
                  onClick={() => setCurrentPage('cadastro')}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors"
                >
                  Cadastrar-se como Diarista
                </button>
              </div>
            </div>
            
            <div className="mt-10 lg:mt-0">
              <img
                className="rounded-lg shadow-lg"
                src="https://images.pexels.com/photos/6197119/pexels-photo-6197119.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Diarista feliz"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              O que nossos clientes dizem
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Mais de 10 mil pessoas já confiam no iClean
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Pronto para ter sua casa sempre limpa?
          </h2>
          <p className="mt-4 text-xl text-blue-100">
            Agende sua primeira limpeza hoje mesmo e ganhe 20% de desconto
          </p>
          <div className="mt-8">
            <button 
              onClick={() => setCurrentPage('dashboard')}
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg font-medium text-lg transition-colors"
            >
              Começar Agora
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <div className="flex items-center">
                <Sparkles className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-2xl font-bold text-white">iClean</span>
              </div>
              <p className="text-gray-300 text-base">
                Conectando pessoas que precisam de limpeza com profissionais qualificadas. 
                Sua casa limpa, sua vida mais organizada.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                    Para Clientes
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        Como Funciona
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        Preços
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        Agendar Limpeza
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        FAQ
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                    Para Diaristas
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        Cadastrar-se
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        Central de Ajuda
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        Política de Pagamentos
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        Recursos
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                    Empresa
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        Sobre Nós
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        Carreiras
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        Imprensa
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        Parceiros
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                    Contato
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li className="flex items-center">
                      <Phone className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-base text-gray-300">(11) 9999-9999</span>
                    </li>
                    <li className="flex items-center">
                      <Mail className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-base text-gray-300">contato@iclean.com</span>
                    </li>
                    <li className="flex items-center">
                      <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-base text-gray-300">São Paulo, SP</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 border-t border-gray-700 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; 2025 iClean. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;