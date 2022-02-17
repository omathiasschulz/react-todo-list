# react-ts-app

## React

O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.

## Template

Criando um template inicial para o projeto React usando um template TypeScript:

```bash
yarn create react-app react-ts-app --template typescript
```

## Iniciando a aplicação

### Development

Rodando a aplicação no modo de desenvolvimento

```bash
yarn start
```

### Test

Rodando os testes no modo iterativo

```bash
yarn test
```

### Build

Gerando uma versão de produção do aplicativo no folder `build`

```bash
yarn build
```

## Dependências

Instalando as dependências

```bash
yarn
```

### Dependências Extras utilizadas no projeto

- **Controlador de rotas React Router Dom**

```bash
yarn add react-router-dom
```

- **Pacote de tipagem do React Router Dom**

- `-D` => dependência de desenvolvimento

```bash
yarn add -D @types/react-router-dom
```

- **Simulador de backend**

```bash
yarn add -D json-server

# caso o comando acima não funcione
# instale o json-server globalmente no computador usando o npm
npm install -g json-server
```

- **Cliente HTTP para comunicação com o server**

```bash
yarn add axios
```

## Backend

Rodando uma simulação do backend para teste local do projeto

```bash
json-server --port 5000 --watch mock/db.json
```
