## Introdução

Esse projeto permite pesquisar algum usuário do github pelo username e traz algumas informações do perfil, assim como os repositórios desse usuário.

Você pode acessar esse projeto live clicando ['aqui'](https://github-dev-search.vercel.app)

## Instalação

Após clonar o repositório para seu computador rode o seguinte comando para instalar as bibliotecas necessárias.

```bash
npm install
```

Em seguida rodar o build basta utilizar o seguinte comando

```bash
npm run build
```

## Bibliotecas Utilizadas

- next: para um pequeno projeto talvez tenha sido overkill, mas em grandes projetos a SSG traz um benefício para a UX e o next possui um diversas features que podem auxiliar no desenvolvimento, como as api routes.
- tailwindcss: permite a construção rápida de interfaces que são mais personalizadas que uma biblioteca como o material ui. Também possui uma intellisense excelente junto ao vscode.
- axios: reduz o boilerplate do código
- date-fns: biblioteca leve e bem intuitiva para formatação de datas
- swr: traz mais clareza para o código e permite fazer cache de requests
- react-icons: possui diversos ícones de diversas style guidelines
