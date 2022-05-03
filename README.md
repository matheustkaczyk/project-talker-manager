Projeto desenvolvido durante o curso de desenvolvimento de software na Trybe. O objetivo foi aplicar os conhecimentos iniciais de criação de API no Nodejs com Express.

# Habilidades
- Realizar operações assíncronas utilizando callbacks;
- Realizar operações assíncronas utilizando Promises;
- Ler e escrever arquivos localmente com NodeJS;
- Escrever seus próprios scripts que criam e consomem Promises;
- Reescrever código que usa callbacks para que use Promises;
- Realizar chamadas de funções de forma consciente;
- Entender os conceitos básicos de como o JavaScript funciona;
- Detectar e solucionar problemas no código de forma mais objetiva;
- Entender a diferença entre execução síncrona e assíncrona;
- Entender o que é o HTTP, o que é uma API e o que os dois têm a ver com o Express;
- Escrever APIs utilizando Node e Express;
- Entender a estrutura de uma aplicação Express e como organizar seu código;
- Criar rotas e aplicar middlewares.
---

## Lista de requisitos

### 1 - Crie o endpoint GET `/talker`
- O endpoint deve retornar um array com todas as pessoas palestrantes cadastradas.
- Caso não exista nenhuma pessoa palestrante cadastrada o endpoint deve retornar um array vazio e o `status 200`.

### 2 - Crie o endpoint GET `/talker/:id`

- O endpoint deve retornar uma pessoa palestrante com base no id da rota.
- Caso não seja encontrada uma pessoa palestrante com base no id da rota, o endpoint deve retornar o `status 404`.

### 3 - Crie o endpoint POST `/login`
- O endpoint deve ser capaz de retornar um token aleatório de 16 caracteres que deverá ser utilizado nas demais requisições.
- O endpoint deverá retornar um código de `status 200` com o token gerado, com o seguinte corpo:

### 4 - Crie o endpoint POST `/talker`
- O endpoint deve ser capaz de adicionar uma nova pessoa palestrante ao seu arquivo;
- A requisição deve ter o token de autenticação nos headers, no campo `authorization`.

### 5 - Crie o endpoint PUT `/talker/:id`

- O endpoint deve ser capaz de editar uma pessoa palestrante com base no id da rota, sem alterar o id registrado.

### 6 - Crie o endpoint DELETE `/talker/:id`

- A requisição deve ter o token de autenticação nos headers, no campo `authorization`.
- O endpoint deve deletar uma pessoa palestrante com base no id da rota. Devendo retornar o `status 200`.

### 7 - Crie o endpoint GET `/talker/search?q=searchTerm`
- O endpoint deve retornar um array de palestrantes que contenham em seu nome o termo pesquisado no queryParam da URL.
