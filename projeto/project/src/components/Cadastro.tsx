import React, { useState } from 'react';
import { 
  ArrowLeft,
  Sparkles,
  User,
  Mail,
  Phone,
  MapPin,
  Lock,
  Eye,
  EyeOff,
  Calendar,
  Star,
  Shield,
  CheckCircle,
  Upload,
  Camera
} from 'lucide-react';

interface CadastroProps {
  onBack: () => void;
}

const Cadastro: React.FC<CadastroProps> = ({ onBack }) => {
  const [userType, setUserType] = useState<'cliente' | 'diarista'>('cliente');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    // Dados básicos
    nome: '',
    email: '',
    telefone: '',
    senha: '',
    confirmarSenha: '',
    
    // Endereço
    cep: '',
    endereco: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: '',
    
    // Dados específicos para diaristas
    experiencia: '',
    especialidades: [] as string[],
    disponibilidade: [] as string[],
    valorHora: '',
    descricao: '',
    documentos: {
      cpf: '',
      rg: ''
    }
  });

  const especialidadesOptions = [
    'Limpeza Geral',
    'Limpeza Pesada',
    'Organização',
    'Cozinha',
    'Banheiros',
    'Vidros',
    'Lavanderia',
    'Roupas',
    'Limpeza Fina'
  ];

  const diasSemana = [
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
    'Domingo'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleDocumentChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      documentos: {
        ...prev.documentos,
        [field]: value
      }
    }));
  };

  const handleEspecialidadeToggle = (especialidade: string) => {
    setFormData(prev => ({
      ...prev,
      especialidades: prev.especialidades.includes(especialidade)
        ? prev.especialidades.filter(e => e !== especialidade)
        : [...prev.especialidades, especialidade]
    }));
  };

  const handleDisponibilidadeToggle = (dia: string) => {
    setFormData(prev => ({
      ...prev,
      disponibilidade: prev.disponibilidade.includes(dia)
        ? prev.disponibilidade.filter(d => d !== dia)
        : [...prev.disponibilidade, dia]
    }));
  };

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePhoto(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria implementada a lógica de cadastro
    console.log('Dados do cadastro:', { userType, ...formData, profilePhoto });
    alert(`Cadastro realizado com sucesso como ${userType}!`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={onBack}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Voltar
            </button>
            <div className="flex items-center">
              <Sparkles className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">iClean</span>
            </div>
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* User Type Selection */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Criar Conta no iClean
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <button
              onClick={() => setUserType('cliente')}
              className={`p-6 rounded-xl border-2 transition-all ${
                userType === 'cliente'
                  ? 'border-blue-600 bg-blue-50 text-blue-900'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <User className="h-12 w-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Sou Cliente</h3>
              <p className="text-gray-600">
                Quero contratar serviços de limpeza para minha casa
              </p>
            </button>
            
            <button
              onClick={() => setUserType('diarista')}
              className={`p-6 rounded-xl border-2 transition-all ${
                userType === 'diarista'
                  ? 'border-green-600 bg-green-50 text-green-900'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <Star className="h-12 w-12 mx-auto mb-4 text-green-600" />
              <h3 className="text-xl font-semibold mb-2">Sou Diarista</h3>
              <p className="text-gray-600">
                Quero oferecer meus serviços de limpeza
              </p>
            </button>
          </div>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Dados Pessoais */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <User className="h-6 w-6 mr-2 text-blue-600" />
              Dados Pessoais
            </h2>

            {/* Foto de Perfil - apenas para diaristas */}
            {userType === 'diarista' && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Foto de Perfil
                </label>
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    {profilePhoto ? (
                      <img
                        src={profilePhoto}
                        alt="Foto de perfil"
                        className="w-20 h-20 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
                        <Camera className="h-8 w-8 text-gray-400" />
                      </div>
                    )}
                  </div>
                  <div>
                    <input
                      type="file"
                      id="photo-upload"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="hidden"
                    />
                    <label
                      htmlFor="photo-upload"
                      className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center"
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      Escolher Foto
                    </label>
                    <p className="text-xs text-gray-500 mt-1">
                      Recomendado: foto clara do rosto
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  value={formData.nome}
                  onChange={(e) => handleInputChange('nome', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="tel"
                    required
                    value={formData.telefone}
                    onChange={(e) => handleInputChange('telefone', e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Senha *
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.senha}
                    onChange={(e) => handleInputChange('senha', e.target.value)}
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Mínimo 6 caracteres"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirmar Senha *
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    required
                    value={formData.confirmarSenha}
                    onChange={(e) => handleInputChange('confirmarSenha', e.target.value)}
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Confirme sua senha"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Endereço */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <MapPin className="h-6 w-6 mr-2 text-blue-600" />
              Endereço
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  CEP *
                </label>
                <input
                  type="text"
                  required
                  value={formData.cep}
                  onChange={(e) => handleInputChange('cep', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="00000-000"
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Endereço *
                </label>
                <input
                  type="text"
                  required
                  value={formData.endereco}
                  onChange={(e) => handleInputChange('endereco', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Rua, Avenida..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Número *
                </label>
                <input
                  type="text"
                  required
                  value={formData.numero}
                  onChange={(e) => handleInputChange('numero', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="123"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Complemento
                </label>
                <input
                  type="text"
                  value={formData.complemento}
                  onChange={(e) => handleInputChange('complemento', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Apto, Casa..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bairro *
                </label>
                <input
                  type="text"
                  required
                  value={formData.bairro}
                  onChange={(e) => handleInputChange('bairro', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Nome do bairro"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cidade *
                </label>
                <input
                  type="text"
                  required
                  value={formData.cidade}
                  onChange={(e) => handleInputChange('cidade', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Nome da cidade"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Estado *
                </label>
                <select
                  required
                  value={formData.estado}
                  onChange={(e) => handleInputChange('estado', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Selecione</option>
                  <option value="SP">São Paulo</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="RS">Rio Grande do Sul</option>
                  <option value="PR">Paraná</option>
                  <option value="SC">Santa Catarina</option>
                  {/* Adicionar outros estados conforme necessário */}
                </select>
              </div>
            </div>
          </div>

          {/* Informações Específicas para Diaristas */}
          {userType === 'diarista' && (
            <>
              {/* Documentos */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="h-6 w-6 mr-2 text-green-600" />
                  Documentos
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CPF *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.documentos.cpf}
                      onChange={(e) => handleDocumentChange('cpf', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="000.000.000-00"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      RG *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.documentos.rg}
                      onChange={(e) => handleDocumentChange('rg', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="00.000.000-0"
                    />
                  </div>
                </div>
              </div>

              {/* Informações Profissionais */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Star className="h-6 w-6 mr-2 text-green-600" />
                  Informações Profissionais
                </h2>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Experiência *
                      </label>
                      <select
                        required
                        value={formData.experiencia}
                        onChange={(e) => handleInputChange('experiencia', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Selecione</option>
                        <option value="menos-1-ano">Menos de 1 ano</option>
                        <option value="1-2-anos">1 a 2 anos</option>
                        <option value="3-5-anos">3 a 5 anos</option>
                        <option value="mais-5-anos">Mais de 5 anos</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Valor por Hora (R$) *
                      </label>
                      <input
                        type="number"
                        required
                        min="15"
                        max="100"
                        value={formData.valorHora}
                        onChange={(e) => handleInputChange('valorHora', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="25"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Especialidades * (selecione pelo menos 3)
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {especialidadesOptions.map((especialidade) => (
                        <label
                          key={especialidade}
                          className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
                            formData.especialidades.includes(especialidade)
                              ? 'border-green-500 bg-green-50 text-green-700'
                              : 'border-gray-300 hover:border-gray-400'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={formData.especialidades.includes(especialidade)}
                            onChange={() => handleEspecialidadeToggle(especialidade)}
                            className="sr-only"
                          />
                          <CheckCircle className={`h-5 w-5 mr-2 ${
                            formData.especialidades.includes(especialidade)
                              ? 'text-green-500'
                              : 'text-gray-300'
                          }`} />
                          <span className="text-sm font-medium">{especialidade}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Disponibilidade * (selecione os dias que pode trabalhar)
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {diasSemana.map((dia) => (
                        <label
                          key={dia}
                          className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
                            formData.disponibilidade.includes(dia)
                              ? 'border-blue-500 bg-blue-50 text-blue-700'
                              : 'border-gray-300 hover:border-gray-400'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={formData.disponibilidade.includes(dia)}
                            onChange={() => handleDisponibilidadeToggle(dia)}
                            className="sr-only"
                          />
                          <Calendar className={`h-5 w-5 mr-2 ${
                            formData.disponibilidade.includes(dia)
                              ? 'text-blue-500'
                              : 'text-gray-300'
                          }`} />
                          <span className="text-sm font-medium">{dia}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Descrição Pessoal *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.descricao}
                      onChange={(e) => handleInputChange('descricao', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Conte um pouco sobre sua experiência, método de trabalho e diferenciais..."
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Termos e Botão de Cadastro */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-start space-x-3 mb-6">
              <input
                type="checkbox"
                id="terms"
                required
                className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="text-sm text-gray-700">
                Eu concordo com os{' '}
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                  Termos de Uso
                </a>{' '}
                e{' '}
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                  Política de Privacidade
                </a>{' '}
                do iClean.
              </label>
            </div>
            
            <button
              type="submit"
              className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-colors ${
                userType === 'cliente'
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-green-600 hover:bg-green-700 text-white'
              }`}
            >
              {userType === 'cliente' ? 'Criar Conta como Cliente' : 'Criar Conta como Diarista'}
            </button>
            
            <p className="text-center text-gray-600 mt-4">
              Já tem uma conta?{' '}
              <button
                type="button"
                onClick={onBack}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Fazer Login
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;