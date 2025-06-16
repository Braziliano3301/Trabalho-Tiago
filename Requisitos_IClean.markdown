# Documento de Requisitos - IClean

## **1. Introdução**
O IClean é uma plataforma web responsiva para intermediação de serviços de limpeza doméstica, conectando clientes e diaristas com foco em praticidade, segurança e confiança. Este documento detalha os requisitos funcionais e não funcionais, stakeholders, objetivos e regras de negócio do projeto.

## **2. Objetivo do Projeto**
Facilitar a conexão entre clientes que buscam serviços de limpeza e diaristas, oferecendo:
- Cadastro simplificado para clientes e diaristas.
- Sistema de agendamento intuitivo.
- Pagamentos seguros e online.
- Avaliações para garantir qualidade e confiança.
- Regras claras para cancelamentos e segurança.

## **3. Stakeholders**
- **Clientes**: Usuários que contratam serviços de limpeza.
- **Diaristas**: Profissionais que oferecem serviços de limpeza.
- **Administradores da Plataforma**: Equipe responsável por gerenciar a plataforma, moderar avaliações e resolver disputas.
- **Equipe de Desenvolvimento**: João Vitor Braziliano, Otavio Laplechade, Rodrigo Ferreira (integrantes do projeto).
- **Parceiros de Pagamento**: Gateways de pagamento (ex.: Stripe, PagSeguro) para processamento de transações.
- **Suporte Técnico**: Equipe que lida com problemas técnicos e suporte ao usuário.

## **4. Requisitos Funcionais**
### **RF01: Cadastro de Usuários**
- **Descrição**: Clientes e diaristas devem se cadastrar com informações básicas.
- **Detalhes**:
  - Clientes: Nome, telefone, e-mail, endereço.
  - Diaristas: Nome, telefone, e-mail, endereço, descrição dos serviços oferecidos.
  - Ambos devem aceitar termos de responsabilidade.
- **Prioridade**: Alta.

### **RF02: Agendamento de Serviços**
- **Descrição**: Clientes selecionam tipo de limpeza, data, horário e profissional; diaristas confirmam a solicitação.
- **Detalhes**:
  - Tipos de limpeza (ex.: leve, pesada).
  - Filtro de diaristas por proximidade (baseado em geolocalização).
  - Status: Pendente, Confirmado, Concluído, Cancelado.
- **Prioridade**: Alta.

### **RF03: Pagamentos**
- **Descrição**: Pagamento antecipado via cartão, Pix ou boleto, com retenção de taxa pela plataforma.
- **Detalhes**:
  - Integração com gateway de pagamento.
  - Repasse ao diarista após conclusão do serviço.
  - Taxa de serviço: 10% (exemplo).
- **Prioridade**: Alta.

### **RF04: Avaliações**
- **Descrição**: Clientes avaliam diaristas com nota (1-5) e comentário após o serviço.
- **Detalhes**:
  - Diaristas com média ≥ 4 estrelas ganham maior visibilidade.
  - Avaliações exibidas no perfil do diarista.
- **Prioridade**: Média.

### **RF05: Cancelamento**
- **Descrição**: Regras para cancelamento de serviços.
- **Detalhes**:
  - Clientes: Cancelamento sem custo até 24h antes.
  - Diaristas: Penalidade (ex.: redução de visibilidade) por cancelamento sem justificativa.
- **Prioridade**: Média.

### **RF06: Notificações**
- **Descrição**: Enviar notificações por e-mail e in-app.
- **Detalhes**:
  - Confirmação de agendamento, pagamento, avaliação e cancelamento.
- **Prioridade**: Média.

### **RF07: Dashboard Intuitivo**
- **Descrição**: Painel para clientes e diaristas gerenciarem agendamentos, avaliações e pagamentos.
- **Detalhes**:
  - Filtros por status (pendente, confirmado, concluído).
  - Exibição de diaristas próximos.
- **Prioridade**: Alta.

## **5. Requisitos Não Funcionais**
### **RNF01: Responsividade**
- A plataforma deve ser acessível em desktops, tablets e celulares (resoluções de 320px a 1920px).
- **Prioridade**: Alta.

### **RNF02: Segurança**
- Autenticação via JWT com expiração e refresh token.
- Dados sensíveis (ex.: endereço, pagamento) criptografados.
- Proteção contra SQL Injection e XSS.
- **Prioridade**: Alta.

### **RNF03: Desempenho**
- Tempo de resposta das APIs ≤ 2 segundos para 95% das requisições.
- Suportar até 1.000 usuários simultâneos.
- **Prioridade**: Média.

### **RNF04: Escalabilidade**
- Arquitetura modular para facilitar adição de novas funcionalidades.
- Uso de banco de dados escalável (ex.: Firestore).
- **Prioridade**: Média.

### **RNF05: Disponibilidade**
- Plataforma disponível 99,9% do tempo (exceto manutenções programadas).
- **Prioridade**: Alta.

### **RNF06: Usabilidade**
- Interface intuitiva com tempo de aprendizado ≤ 5 minutos para usuários novos.
- Suporte a português (Brasil).
- **Prioridade**: Alta.

## **6. Regras de Negócio**
- **RN01**: Diaristas só são exibidos se anum_locais
  - Apenas diaristas próximos ao cliente (baseado em geolocalização).
- **RN02**: Pagamento antecipado, com taxa retida pela plataforma.
- **RN03**: Cancelamento sem custo para clientes até 24h antes; penalidades para diaristas sem justificativa.
- **RN04**: Avaliações impactam a visibilidade dos diaristas.

## **7. Restrições**
- Integração com gateway de pagamento confiável (ex.: Stripe, PagSeguro).
- Conformidade com LGPD para proteção de dados pessoais.
- Suporte a múltiplos métodos de pagamento (cartão, Pix, boleto).

## **8. Premissas**
- Usuários possuem acesso à internet e dispositivos compatíveis.
- Diaristas têm habilidades básicas para usar a plataforma.
- Clientes fornecem informações precisas de endereço-binárias

## **9. Riscos**
- Falhas de integração com gateway de pagamento.
- Dados incorretos fornecidos por usuários.
- Cancelamentos frequentes por diaristas sem justificativa.