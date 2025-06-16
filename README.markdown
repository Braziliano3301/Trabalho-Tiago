# IClean

Plataforma web para intermediação de serviços de limpeza doméstica.

## **Pré-requisitos**
- Node.js (v16 ou superior)
- npm (v8 ou superior)
- Conta no Firebase
- Conta no Stripe
- Pandoc e LaTeX (para gerar PDF da documentação)

## **Instalação**
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu_usuario/iclean.git
   cd iclean
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configure o `.env` com as credenciais do Firebase e Stripe (veja `.env.example`).
4. Inicie o servidor:
   ```bash
   npm run dev
   ```
5. Acesse em `http://localhost:5173`.

## **Documentação**
- O documento de requisitos está em `docs/IClean_Requisitos_Completo.md`.
- Diagramas:
  - Caso de Uso: `docs/use_case_diagram.puml` (PNG em `docs/use_case_diagram.png`).
  - Classes: `docs/class_diagram.puml` (PNG em `docs/class_diagram.png`).
  - BPMN: `docs/agendamento.bpmn` (PNG em `docs/agendamento.png`).
- Para gerar o PDF:
  ```bash
  pandoc docs/IClean_Requisitos_Completo.md -o docs/IClean_Requisitos_Completo.pdf --pdf-engine=pdflatex
  ```

## **Estrutura do Projeto**
- `src/`: Código-fonte (React).
- `docs/`: Documentação e diagramas.
- `public/`: Arquivos estáticos.

## **Configuração do Firebase**
1. Crie um projeto no [Firebase Console](https://console.firebase.google.com).
2. Habilite autenticação (E-mail/Senha, Google).
3. Crie coleções no Firestore: `users`, `schedules`, `payments`, `reviews`.

## **Configuração do Stripe**
1. Crie uma conta no [Stripe Dashboard](https://dashboard.stripe.com).
2. Configure webhooks para pagamentos.

## **Visualizar Diagramas**
- PlantUML: Use [plantuml.com](http://plantuml.com).
- BPMN: Use [bpmn.io](https://bpmn.io).