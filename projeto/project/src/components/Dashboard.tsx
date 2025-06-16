import React, { useState } from 'react';
import { 
  Star, 
  MapPin, 
  Clock, 
  Shield, 
  Heart,
  Filter,
  Search,
  Calendar,
  User,
  Phone,
  MessageCircle,
  ArrowLeft,
  CheckCircle,
  Award,
  Sparkles
} from 'lucide-react';

interface Diarista {
  id: number;
  name: string;
  photo: string;
  rating: number;
  reviewCount: number;
  location: string;
  distance: string;
  hourlyRate: number;
  specialties: string[];
  availability: string[];
  verified: boolean;
  experience: string;
  description: string;
  completedJobs: number;
}

interface DashboardProps {
  onBack: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onBack }) => {
  const [selectedDiarista, setSelectedDiarista] = useState<Diarista | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [favorites, setFavorites] = useState<number[]>([]);

  const diaristas: Diarista[] = [
    {
      id: 1,
      name: "Maria Silva",
      photo: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      rating: 4.9,
      reviewCount: 127,
      location: "Vila Madalena, SP",
      distance: "2.3 km",
      hourlyRate: 25,
      specialties: ["Limpeza Geral", "Organização", "Cozinha"],
      availability: ["Segunda", "Terça", "Quarta", "Sexta"],
      verified: true,
      experience: "5 anos",
      description: "Profissional dedicada com experiência em limpeza residencial. Atenção aos detalhes e pontualidade são meus diferenciais.",
      completedJobs: 340
    },
    {
      id: 2,
      name: "Ana Costa",
      photo: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      rating: 4.8,
      reviewCount: 89,
      location: "Pinheiros, SP",
      distance: "1.8 km",
      hourlyRate: 28,
      specialties: ["Limpeza Pesada", "Banheiros", "Vidros"],
      availability: ["Terça", "Quinta", "Sábado", "Domingo"],
      verified: true,
      experience: "3 anos",
      description: "Especialista em limpeza pesada e organização. Trabalho com produtos ecológicos e tenho flexibilidade de horários.",
      completedJobs: 215
    },
    {
      id: 3,
      name: "Carla Santos",
      photo: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      rating: 4.7,
      reviewCount: 156,
      location: "Jardins, SP",
      distance: "3.1 km",
      hourlyRate: 30,
      specialties: ["Limpeza Fina", "Organização", "Roupas"],
      availability: ["Segunda", "Quarta", "Quinta", "Sexta"],
      verified: true,
      experience: "7 anos",
      description: "Experiência em casas de alto padrão. Cuidado especial com objetos delicados e móveis de valor.",
      completedJobs: 480
    },
    {
      id: 4,
      name: "Lucia Oliveira",
      photo: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      rating: 4.9,
      reviewCount: 203,
      location: "Moema, SP",
      distance: "4.2 km",
      hourlyRate: 26,
      specialties: ["Limpeza Geral", "Cozinha", "Lavanderia"],
      availability: ["Segunda", "Terça", "Quinta", "Sábado"],
      verified: true,
      experience: "4 anos",
      description: "Profissional confiável e organizada. Especialista em manutenção de cozinhas e áreas de serviço.",
      completedJobs: 290
    },
    {
      id: 5,
      name: "Rosa Ferreira",
      photo: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      rating: 4.6,
      reviewCount: 74,
      location: "Brooklin, SP",
      distance: "5.0 km",
      hourlyRate: 24,
      specialties: ["Limpeza Básica", "Organização", "Quartos"],
      availability: ["Quarta", "Quinta", "Sexta", "Sábado"],
      verified: true,
      experience: "2 anos",
      description: "Jovem profissional com energia e dedicação. Foco em limpeza detalhada e organização de ambientes.",
      completedJobs: 125
    },
    {
      id: 6,
      name: "Isabel Rodrigues",
      photo: "https://images.pexels.com/photos/1181717/pexels-photo-1181717.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      rating: 4.8,
      reviewCount: 112,
      location: "Vila Olímpia, SP",
      distance: "3.7 km",
      hourlyRate: 27,
      specialties: ["Limpeza Geral", "Vidros", "Organização"],
      availability: ["Segunda", "Terça", "Quarta", "Sexta"],
      verified: true,
      experience: "6 anos",
      description: "Experiência sólida em limpeza residencial. Trabalho com agilidade sem comprometer a qualidade.",
      completedJobs: 385
    }
  ];

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  const filteredDiaristas = diaristas.filter(diarista => {
    const matchesSearch = diarista.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         diarista.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (selectedFilter === 'all') return matchesSearch;
    if (selectedFilter === 'top-rated') return matchesSearch && diarista.rating >= 4.8;
    if (selectedFilter === 'nearby') return matchesSearch && parseFloat(diarista.distance) <= 3;
    if (selectedFilter === 'available-today') return matchesSearch && diarista.availability.includes('Segunda');
    
    return matchesSearch;
  });

  if (selectedDiarista) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <button
                onClick={() => setSelectedDiarista(null)}
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Voltar
              </button>
              <div className="flex items-center">
                <Sparkles className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-2xl font-bold text-gray-900">iClean</span>
              </div>
            </div>
          </div>
        </div>

        {/* Diarista Profile */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="flex flex-col md:flex-row md:items-start md:space-x-8">
                <div className="flex-shrink-0">
                  <img
                    className="w-32 h-32 rounded-full object-cover"
                    src={selectedDiarista.photo}
                    alt={selectedDiarista.name}
                  />
                </div>
                
                <div className="mt-6 md:mt-0 flex-1">
                  <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-gray-900">
                      {selectedDiarista.name}
                    </h1>
                    <button
                      onClick={() => toggleFavorite(selectedDiarista.id)}
                      className={`p-2 rounded-full ${
                        favorites.includes(selectedDiarista.id)
                          ? 'text-red-500 bg-red-50'
                          : 'text-gray-400 hover:text-red-500'
                      }`}
                    >
                      <Heart className={`h-6 w-6 ${favorites.includes(selectedDiarista.id) ? 'fill-current' : ''}`} />
                    </button>
                  </div>
                  
                  <div className="mt-2 flex items-center space-x-4">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="ml-1 text-lg font-medium">{selectedDiarista.rating}</span>
                      <span className="ml-1 text-gray-500">({selectedDiarista.reviewCount} avaliações)</span>
                    </div>
                    {selectedDiarista.verified && (
                      <div className="flex items-center text-green-600">
                        <Shield className="h-5 w-5 mr-1" />
                        <span className="text-sm font-medium">Verificada</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-4 flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{selectedDiarista.location} • {selectedDiarista.distance}</span>
                  </div>
                  
                  <div className="mt-4 flex items-center space-x-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">R$ {selectedDiarista.hourlyRate}</div>
                      <div className="text-sm text-gray-500">por hora</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{selectedDiarista.completedJobs}</div>
                      <div className="text-sm text-gray-500">trabalhos</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{selectedDiarista.experience}</div>
                      <div className="text-sm text-gray-500">experiência</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Sobre</h3>
                <p className="text-gray-600">{selectedDiarista.description}</p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Especialidades</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedDiarista.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Disponibilidade</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedDiarista.availability.map((day, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium"
                    >
                      {day}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 px-8 py-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Agendar Serviço
                </button>
                <button className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Enviar Mensagem
                </button>
                <button className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center">
                  <Phone className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={onBack}
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Voltar
            </button>
            <div className="flex items-center">
              <Sparkles className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">iClean</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900">
                <User className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar por nome ou localização..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">Todas</option>
                <option value="top-rated">Mais Bem Avaliadas</option>
                <option value="nearby">Próximas</option>
                <option value="available-today">Disponíveis Hoje</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Diaristas Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Diaristas Disponíveis ({filteredDiaristas.length})
          </h2>
          <p className="text-gray-600">Encontre a profissional ideal para sua casa</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDiaristas.map((diarista) => (
            <div
              key={diarista.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow cursor-pointer overflow-hidden"
              onClick={() => setSelectedDiarista(diarista)}
            >
              <div className="relative">
                <img
                  className="w-full h-48 object-cover"
                  src={diarista.photo}
                  alt={diarista.name}
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(diarista.id);
                  }}
                  className={`absolute top-3 right-3 p-2 rounded-full ${
                    favorites.includes(diarista.id)
                      ? 'text-red-500 bg-white'
                      : 'text-white bg-black bg-opacity-20 hover:bg-opacity-40'
                  }`}
                >
                  <Heart className={`h-5 w-5 ${favorites.includes(diarista.id) ? 'fill-current' : ''}`} />
                </button>
                {diarista.verified && (
                  <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Verificada
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{diarista.name}</h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-medium">{diarista.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{diarista.location} • {diarista.distance}</span>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {diarista.specialties.slice(0, 2).map((specialty, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                  {diarista.specialties.length > 2 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
                      +{diarista.specialties.length - 2}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-lg font-bold text-blue-600">R$ {diarista.hourlyRate}/h</div>
                    <div className="text-xs text-gray-500">{diarista.reviewCount} avaliações</div>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="text-xs">{diarista.availability.length} dias</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;