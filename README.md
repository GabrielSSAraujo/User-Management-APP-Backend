# User Controller

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/gpl-3.0.html)

Esse repositório contém uma API que faz parte do projeto User Controller, que objetiva realizar o controle de usuarios.


## Como rodar?

As informações de configuração inicial do banco de dados consta no arquivo .env, sendo elas:

- DB_USER: usuário de acesso ao banco de dados
- DB_PASS: senha de acesso ao banco de dados
- DB_NAME: nome da base de dados
- DB_HOST: host da base de dados
- DB_DIALECT: dialeto do banco de dados

Para rodar a API é preciso possuir o 'docker' e o 'docker-compose' e seguir os seguintes comandos:

```bash
docker-compose up -d --build
docker exec -it user_controller_app /bin/bash
npx sequelize db:migrate
node ./src/createAdmin.js
```

A API estará rodando na [porta 8000](http://localhost:8000).

As credenciais para acesso estão cadastradas no arquivo 'createAdmin.js'. Sendo por default o email 'admin@admin.com' e senha 'admin'.

## Testes

Para rodar os testes nesse repositŕio deve ser executado os seguintes comandos:

```bash
docker-compose up -d --build
npm install
docker exec -it user_controller_app /bin/bash
npx sequelize db:migrate
npx jest
```

## Rotas

**POST: `/register`**

Para criar um novo usuário, envie os dados nesse formato:

```json
header: {
    "X-Access-Token": "token",
}
```

```json
{
  "name": "Nome do Usuário",
  "email": "usuario@email.com",
  "password": "Senha",
  "level": 1
}
```

**GET: `/login/`**

Para entrar logar no sitema, envie os dados no formato:

```json
{
  "email": "email@email.com",
  "password": "Senha"
}
```

**GET: `/user/logeded`**

Para buscar informações do usuário logado, envie os dados nesse formato:

```json
header: {
    "X-Access-Token": "token",
}
```

**GET: `/user/listAll`**

Para buscar todos os usuários cadastrados no sistemas

```json
header: {
    "X-Access-Token": "token",
}
```
