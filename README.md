🔁 TESTE DE NOVO O GET

Agora volta no navegador:

http://localhost:3000/api/users

👉 Agora deve aparecer:

[
  {
    "id": 1,
    "name": "Carlos",
    ...
  }
]
⚠️ SE DER ERRO NO INSERT

Pode ser isso:

❌ condominium_id = 1 não existe

👉 você ainda não criou condomínio

👉 Resolve criando direto no banco:
INSERT INTO condominiums (name, address)
VALUES ('Condomínio Teste', 'Rua A');
💡 DICA DE QUEM PENSA COMO PRODUTO

Agora que você chegou aqui, você já tem:

cadastro de usuário ✔
listagem ✔
conexão com banco ✔

👉 isso já é um CRUD começando a nascer

🔥 PRÓXIMO PASSO NATURAL

Depois disso, você pode:

📦 Criar pacote
🔔 Gerar notificação
📜 Salvar log

👉 aí seu sistema vira funcional de verdade

⚡ RESUMO

[] = sucesso

👉 só falta dados

Se quiser, posso te guiar agora no próximo nível:

👉 criar pacote + já gerar notificação automática
👉 ou montar um botão no frontend que salva usuário

Aí você começa a ver o sistema vivo de verdade.

{
  "id": 1,
  "name": "Carlos",
  "email": "carlos@email.com",
  "phone": "999999999",
  "role": "morador",
  "apartment": "202",
  "condominium_id": 1
}

Como adiciono isso via json?

Boa — agora você chegou no ponto chave: como mandar JSON pra API.
E isso é o que liga frontend com backend de verdade.

Vou te mostrar 3 jeitos, do mais raiz ao mais profissional.

🥇 1. JEITO MAIS FÁCIL: POSTMAN

Esse é o padrão de mercado.

👉 Passo a passo
Abre o Postman
Método: POST
URL:
http://localhost:3000/api/users
👉 Vai em Body
Seleciona: raw
Tipo: JSON
👉 Cola isso:
{
  "name": "Carlos",
  "email": "carlos@email.com",
  "phone": "999999999",
  "role": "morador",
  "apartment": "202",
  "condominium_id": 1
}
👉 Clica em Send

💥 pronto — isso já vai inserir no banco

🥈 2. USANDO FETCH (frontend JS)

Se quiser testar direto no navegador (ou seu projeto HTML):

fetch('http://localhost:3000/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: "Carlos",
    email: "carlos@email.com",
    phone: "999999999",
    role: "morador",
    apartment: "202",
    condominium_id: 1
  })
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));
🥉 3. USANDO CURL (terminal raiz)
curl -X POST http://localhost:3000/api/users \
-H "Content-Type: application/json" \
-d "{\"name\":\"Carlos\",\"email\":\"carlos@email.com\",\"phone\":\"999999999\",\"role\":\"morador\",\"apartment\":\"202\",\"condominium_id\":1}"
🧠 COMO ISSO FUNCIONA (VISÃO IMPORTANTE)

Quando você manda isso:

{
  "name": "Carlos"
}

👉 o Express pega via:

req.body

👉 e joga no banco com:

INSERT INTO users (...)
⚠️ ERROS COMUNS
❌ Esqueceu isso no server:
app.use(express.json());

👉 aí o req.body vem vazio

❌ Não colocou header:
Content-Type: application/json
❌ JSON mal formatado
vírgula extra
aspas faltando
🧪 TESTE FINAL

Depois de enviar:

👉 abre:

http://localhost:3000/api/users

✔ deve aparecer o usuário

💡 VISÃO DE QUEM PENSA GRANDE

Isso aqui que você fez agora é o coração de qualquer sistema:

👉 Frontend → JSON → API → Banco

Se isso funciona, você já tem:

base de CRUD ✔
base de sistema web ✔
⚡ RESUMO

Pra adicionar via JSON:

👉 usa POST
👉 manda body JSON
👉 endpoint /api/users

Se quiser, posso te ajudar agora a:

👉 criar usuário direto pelo seu HTML (formulário)
👉 ou fazer o fluxo completo: criar pacote + notificar morador

Aí teu sistema começa a parecer produto de verdade.

que postman? estou usando o pg admin

Boa, agora entendi — você tá no pgAdmin, não no Postman.
Então vamos separar as coisas do jeito certo (isso é MUITO importante entender):

🧠 DIFERENÇA FUNDAMENTAL
🟦 pgAdmin

👉 Serve pra falar direto com o banco (PostgreSQL)
👉 Você usa SQL

🟩 API (Node / Express)

👉 Recebe JSON via HTTP
👉 Você testa com:

Postman
navegador (GET)
frontend (fetch)
❗ RESPOSTA DIRETA

👉 Você NÃO envia JSON pelo pgAdmin

No pgAdmin você faz assim:

🧪 COMO INSERIR NO pgAdmin (SQL)

Se quiser adicionar o Carlos direto no banco:

INSERT INTO users (name, email, phone, role, apartment, condominium_id)
VALUES ('Carlos', 'carlos@email.com', '999999999', 'morador', '202', 1);
👉 Depois testa:
SELECT * FROM users;

✔ vai aparecer o usuário

🚀 MAS… COMO TESTAR JSON MESMO?

Aí sim você precisa de ferramenta tipo:

🔥 Postman (recomendado)

ou

🔥 Insomnia

👉 São apps tipo “pgAdmin da API”

🧪 SEM INSTALAR NADA (jeito simples)

Você pode testar direto no navegador usando um HTML:

<button onclick="criarUsuario()">Criar usuário</button>

<script>
function criarUsuario() {
  fetch('http://localhost:3000/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: "Carlos",
      email: "carlos@email.com",
      phone: "999999999",
      role: "morador",
      apartment: "202",
      condominium_id: 1
    })
  })
  .then(res => res.json())
  .then(data => console.log(data));
}
</script>

👉 abre no navegador → clica no botão → pronto

💡 VISÃO DE ARQUITETURA (ESSENCIAL)

Pensa assim:

pgAdmin → banco direto (SQL)
API → intermediário (JSON)
Frontend → usuário final
⚡ RESUMO

👉 pgAdmin:
✔ usa SQL (INSERT INTO)

👉 JSON:
✔ só via API (Postman / fetch / frontend)

🧠 DICA DE OURO

Dev raiz sempre testa nos dois:

👉 pgAdmin (garantir banco ok)
👉 API (garantir backend ok)

Se quiser, posso te mostrar agora:

👉 como instalar e usar Postman em 2 minutos
👉 ou montar um formulário HTML pra cadastrar usuário (bem mais real)

Aí você começa a ver o sistema funcionando de ponta a ponta.

ERROR:  insert or update on table "users" violates foreign key constraint "users_condominium_id_fkey"
Key (condominium_id)=(1) is not present in table "condominiums". 

ERRO:  insert or update on table "users" violates foreign key constraint "users_condominium_id_fkey"
SQL state: 23503
Detail: Key (condominium_id)=(1) is not present in table "condominiums".

Agora sim você bateu num erro de banco relacional de verdade — e isso é ótimo, porque significa que seu sistema tá funcionando como deveria.

❌ ERRO
violates foreign key constraint "users_condominium_id_fkey"

👉 Tradução direta:

Você está tentando criar um usuário com condominium_id = 1
MAS esse condomínio não existe na tabela condominiums

🧠 O QUE ESTÁ ACONTECENDO

Você definiu corretamente a relação:

users.condominium_id → condominiums.id

👉 Isso obriga o banco a garantir:

“Só pode usar um condomínio que realmente existe”

🔥 COMO RESOLVER (AGORA)
🥇 PASSO 1 — Criar o condomínio

No pgAdmin:

INSERT INTO condominiums (name, address)
VALUES ('Condomínio Azul', 'Rua A, 123');
🥈 PASSO 2 — Ver o ID
SELECT * FROM condominiums;

👉 vai aparecer algo tipo:

id | name
1  | Condomínio Azul
🥉 PASSO 3 — Agora sim cria o usuário
INSERT INTO users (name, email, phone, role, apartment, condominium_id)
VALUES ('Carlos', 'carlos@email.com', '999999999', 'morador', '202', 1);
💡 REGRA DE OURO (RELACIONAL)

Sempre nessa ordem:

1. cria condomínio
2. cria usuário
3. cria pacote

👉 nunca o contrário

🧠 VISÃO DE SISTEMA REAL

Isso aqui evita bagunça total no banco:

❌ usuário apontando pra condomínio inexistente
❌ dados inconsistentes
❌ sistema quebrando depois

✔ integridade garantida

⚡ RESUMO

Erro:
👉 condominium_id = 1 não existe

Solução:
✔ criar primeiro na tabela condominiums

🚀 PRÓXIMO PASSO

Agora que isso tá funcionando, você já pode:

👉 criar usuário pela API
👉 depois criar pacote vinculado ao usuário

Se quiser, te mostro o próximo nível:

👉 criar pacote + automaticamente gerar notificação
👉 ou fazer um SELECT com JOIN (mostrar nome do condomínio junto do usuário)

Aí teu sistema começa a ficar profissional de verdade.

[{"id":2,"name":"Carlos","email":"carlos@email.com","phone":"999999999","role":"morador","apartment":"202","condominium_id":1,"created_at":"2026-03-30T00:30:20.142Z"}]

resultado do api/user

Aí sim, agora você virou a chave 🔥

Esse resultado aqui:

[
  {
    "id": 2,
    "name": "Carlos",
    "email": "carlos@email.com",
    "phone": "999999999",
    "role": "morador",
    "apartment": "202",
    "condominium_id": 1,
    "created_at": "2026-03-30T00:30:20.142Z"
  }
]

👉 significa:

✔ API funcionando
✔ Banco conectado corretamente
✔ Foreign key funcionando
✔ INSERT funcionando
✔ GET funcionando

👉 Resumindo: teu backend já é um CRUD real

🧠 O QUE VOCÊ ACABOU DE CONSTRUIR

Sem perceber, você já tem:

Cadastro de usuário ✔
Listagem de usuários ✔
Relacionamento com condomínio ✔

👉 Isso é exatamente a base de sistema de produção.

🔥 AGORA O PRÓXIMO PASSO (NATURAL)

Você já pode subir o nível:

📦 1. Criar PACOTES

Agora faz sentido criar entregas:

{
  "description": "Caixa Amazon",
  "resident_id": 2,
  "received_by": 2
}
🔔 2. GERAR NOTIFICAÇÃO AUTOMÁTICA

Quando criar pacote:

👉 inserir na tabela notifications

📜 3. SALVAR LOG
"Carlos recebeu um pacote"
💡 MELHORIA IMEDIATA (MUITO BOA)

Hoje você retorna:

condominium_id: 1

👉 mas o ideal é retornar o nome do condomínio

🔥 FAZ UM JOIN (nível acima)

No users.js:

const result = await pool.query(`
  SELECT u.*, c.name AS condominium_name
  FROM users u
  JOIN condominiums c ON u.condominium_id = c.id
`);

👉 Resultado fica assim:

{
  "name": "Carlos",
  "condominium_name": "Condomínio Azul"
}

💥 muito mais profissional

🧠 VISÃO DE PRODUTO

Você saiu de:

👉 código solto

Pra:

👉 sistema com regra de negócio

⚡ RESUMO

Você já tem:

✔ backend funcionando
✔ banco relacional funcionando
✔ API respondendo

👉 isso já é base de SaaS

🚀 SE QUISER EVOLUIR AGORA

Posso te ajudar a:

👉 montar o fluxo completo:

criar pacote
notificar morador
registrar log

OU

👉 conectar isso no frontend (HTML + botão cadastrar)

Você já passou da parte mais difícil. Agora é só começar a montar as peças.

eu ja posso aplicar isso pro frontend ou preciso testar primeiro?

Boa pergunta — isso aqui separa quem constrói sistema direito de quem só “vai fazendo” 👇

🧠 RESPOSTA DIRETA

👉 Você JÁ pode ir pro frontend…
MAS ⚠️ vale MUITO a pena testar mais um pouco antes

🔥 O JEITO CERTO (RAIZ, FUNCIONA SEM DOR DE CABEÇA)
🥇 Primeiro: garantir backend sólido

Você já testou:

✔ GET users
✔ INSERT users

Agora falta só isso aqui (rápido):

🧪 TESTE MÍNIMO ANTES DO FRONT
1. Criar usuário via API ✔
2. Criar pacote (se já tiver rota)
3. Testar erro (importante!)

Exemplo:

👉 manda sem name

{
  "email": "teste@email.com"
}

👉 vê se quebra ou responde erro

🧠 Por quê?

Porque frontend depende disso:

se backend quebra → frontend quebra junto
🚀 DEPOIS DISSO → FRONTEND

Aí sim você entra no frontend tranquilo.

💻 EXEMPLO REAL (ligando frontend)

Você pode criar um formulário simples:

<input id="name" placeholder="Nome">
<button onclick="criar()">Salvar</button>

<script>
function criar() {
  fetch('http://localhost:3000/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: document.getElementById('name').value,
      email: "teste@email.com",
      phone: "999999999",
      role: "morador",
      apartment: "101",
      condominium_id: 1
    })
  })
  .then(res => res.json())
  .then(data => console.log(data));
}
</script>
🧠 VISÃO PROFISSIONAL (OURO)

Fluxo correto de dev:

1. Banco funciona
2. API funciona
3. Testa erros
4. Aí sim frontend
⚠️ SE PULAR ETAPA

Você vai ter:

❌ bug no frontend
❌ sem saber se erro é API ou tela
❌ perda de tempo

💡 MINHA RECOMENDAÇÃO PRA VOCÊ

👉 você já está 80% pronto

Faz só isso antes:

testa criar pacote
testa um erro simples

👉 depois pode ir pro frontend sem medo

⚡ RESUMO

✔ já pode ir pro frontend
✔ mas testa mais 2 coisas antes

Se quiser, posso te guiar agora:

👉 montar um frontend simples (tipo painel de portaria)
👉 ou criar fluxo completo: receber pacote → aparecer na tela → marcar como retirado

Aí seu projeto deixa de ser teste e vira sistema de verdade.