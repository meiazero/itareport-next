## Instalação

> Aqui está descrito um passo a passo de como deve
> ser instalado o projeto de forma integral.

## Tecnologias:

dependências principais:

-   @prisma/client ^4.14.1
-   autoprefixer 10.4.14
-   eslint 8.41.0
-   eslint-config-next 13.4.3
-   leaflet ^1.9.4
-   next 13.4.3
-   postcss 8.4.23
-   primeicons ^6.0.1
-   react 18.2.0
-   react-dom 18.2.0
-   react-leaflet ^4.2.1
-   tailwindcss 3.3.

dependências de desenvolvimento:

-   @types/node ^20.2.4
-   @types/react ^18.2.7
-   @types/react-dom ^18.2.4
-   prisma ^4.14.1
-   ts-node ^10.9.1
-   typescript ^5.0.

# Preparando o Ambiente

### Fazer o clone no repositório

```bash
git clone https://github.com/meiazero/itareport-next.git
```

> Se quiser clonar uma branch especifica

```bash
git clone https://github.com/meiazero/itareport-next.git --branch <nome_branch>
```

### Entrar no repositório e instalar as dependências

```bash
cd itareport-next
```

```bash
npm i
```

### Configurando Banco de Dados

```bash
npx prima init
```

### Rodando as migrations

```bash
npx prisma migrate dev
```

### Rodando o site localmente

```bash
npm run dev
```
