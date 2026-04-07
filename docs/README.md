condominio-entregas/
│
├── backend/
│   ├── src/
│   │   ├── config/        # configs (banco, env)
│   │   ├── controllers/   # lógica das rotas
│   │   ├── routes/        # definição das rotas
│   │   ├── models/        # consultas ao banco
│   │   ├── middlewares/   # autenticação, validações
│   │   ├── services/      # regras de negócio
│   │   ├── utils/         # funções auxiliares
│   │   ├── database/      # scripts SQL / conexão
│   │   └── app.js         # config do express
│   │
│   ├── server.js          # inicia o servidor
│   ├── .env               # variáveis de ambiente
│   ├── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/        # imagens, ícones
│   │   ├── components/    # botões, inputs
│   │   ├── pages/         # telas (login, entregas)
│   │   ├── services/      # chamadas API
│   │   ├── styles/        # CSS
│   │   └── App.js
│   │
│   ├── package.json
│
├── database/
│   ├── migrations/        # criação de tabelas
│   ├── seeds/             # dados iniciais
│   └── schema.sql         # estrutura geral
│
├── docs/                  # documentação
├── .gitignore
└── README.md