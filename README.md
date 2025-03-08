# Movie Grid

**Movie Grid** é um sistema web desenvolvido para explorar e descobrir filmes populares e suas informações detalhadas. O projeto consome a API do **The Movie Database (TMDB)** para exibir uma lista de filmes em um layout de grid responsivo, com funcionalidades de pesquisa e visualização de detalhes dos filmes.

---

## Funcionalidades Principais

1. **Listagem de Filmes Populares**:
   - Exibe os filmes mais populares em um layout de grid responsivo.
   - Cada filme é representado por um card com imagem, título, descrição e nota.

2. **Pesquisa de Filmes**:
   - Permite ao usuário pesquisar filmes por título.
   - A lista de filmes é atualizada dinamicamente conforme o usuário digita.

3. **Detalhes do Filme**:
   - Ao clicar em um filme, um modal é aberto com informações detalhadas, como sinopse, nota e imagem.

4. **Design Responsivo**:
   - O layout se adapta a diferentes tamanhos de tela, desde smartphones até desktops.

5. **Fallback de Imagem**:
   - Caso a imagem de um filme não esteja disponível, uma imagem de fallback é exibida para manter a consistência do layout.

---

## Tecnologias Utilizadas

- **Next.js**: Framework React para renderização do lado do servidor (SSR) e geração de páginas estáticas (SSG).
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e responsiva.
- **Axios**: Para fazer requisições HTTP à API do TMDB.
- **React Modal**: Para exibir os detalhes dos filmes em um modal.
- **TypeScript**: Para tipagem estática e melhor segurança do código.
- **React Icons**: Para ícones de redes sociais no rodapé.

---

## Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 18 ou superior)
- Conta no [TMDB](https://www.themoviedb.org/) para obter uma chave de API.

### Passos para Execução

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/movie-grid.git

2. Instale as dependências:
   ```bash
   cd movie-grid
   npm install

3. Crie um arquivo .env.local na raiz do projeto e adicione sua chave de API do TMDB:
   ```bash
   NEXT_PUBLIC_TMDB_ACCESS_TOKEN=sua_chave_aqui

4. Execute o projeto:
   ```bash
   npm run dev

5. Execute o projeto:
   ```bash
   http://localhost:3000

---

Agradecimentos
The Movie Database (TMDB): Pela API gratuita e de alta qualidade.

Next.js e Tailwind CSS: Pelas ferramentas incríveis que tornaram o desenvolvimento mais eficiente.
