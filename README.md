Ignite Lab #3 - Do Figma ao React
Ignite#3

Evento disponibilizado pela RocketSeat

Tema: Design System com Figma, React e StoryBook
GitHub Contributors

Projeto desenvolvido durante a semana de 10/10/2022 a 13/11/2022, onde pude ter contato com várias ferramentas para a construção de um Design System como, Figma, React, StoryBook e TailwindCSS.

A aplicação teve as seguintes etapas de construção
Projeto no Figma
Design System - Criação dos componentes
Documentação no Storybook
Deploy automatizado com GitHub Actions
Criação do Front-End em Vite
Implementação de testes com Jest no Storybook.
Tecnologias e ferramentas utilizadas
React.JS (Vite)
TypeScript
Radix UI
Tailwind CSS
Storybook
Addon A11y
Github Actions
Jest
MSW
Durante as aulas, pude conhecer como montar uma estrutura visual de um design system na prática com o Figma e como porta-lo para o código disponibilizando assim os dados para testes dos componentes via StoryBook, deploy automatizado com GitHub Actions e simulação do Front-End em Vite.

image

Projeto no Figma
https://www.figma.com/file/2ws9TBu6IweT00RnFdCo6a/Ignite-Lab-Design-System?node-id=14%3A162

Pagina de Login
image

Estrutura dos Componentea gerados
image

Configurando o Projeto
Iniciando o repositório do Git
Aqui eu inicio o meu repositório no git

git init
Iniciando a pasta do projeto com o Vite
https://vitejs.dev/guide/
Iniciando o projeto
npm create vite@latest
Configurando o vite no package.json
{
  "name": "lab-ds",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "storybook": "start-storybook -p 6006"
  },
  "dependencies": {
    "@radix-ui/react-checkbox": "^1.0.0",
    "@radix-ui/react-slot": "^1.0.0",
    "clsx": "^1.2.1",
    "phosphor-react": "^1.4.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@babel/core": "^7.19.3",
    "@types/react": "^18.0.17",
    "@types/react-dom": "^18.0.6",
    "@vitejs/plugin-react": "^2.1.0",
    "autoprefixer": "^10.4.12",
    "babel-loader": "^8.2.5",
    "postcss": "^8.4.17",
    "typescript": "^4.6.4",
    "vite": "^3.1.0"
  }
}
Configuração inicial do .gitignore
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
Removendos pastas padrões para criação da estrutura do projeto
Arquivos Removidos
src/App.css
src/index.css
src/assets/react.svg
Arquivos editados
App.tsx
main.tsx
Instalando o TailwindCSS
https://tailwindcss.com/docs/installation
npm install -D tailwindcss  postcss autoprefixer
npx tailwindcss init -p
Adicionando o TailwindCSS no packages.json
{
  "name": "lab-ds",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@babel/core": "^7.19.3",
    "@types/react": "^18.0.17",
    "@types/react-dom": "^18.0.6",
    "@vitejs/plugin-react": "^2.1.0",
    "autoprefixer": "^10.4.12",
    "babel-loader": "^8.2.5",
    "postcss": "^8.4.17",
    "tailwindcss": "^3.1.8",
    "typescript": "^4.6.4",
    "vite": "^3.1.0"
  }
}
Configurando o globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;
Exportando os Tokens do Figma para o projeto
Aqui eu gero o arquivo com os Tokens gerados no figma
Cores
Projeto Figma - Colors
image

Font Size
Projeto Figma - Componentes
image

Configurando os Tokens no TailwindCSS
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      'xs': 14,
      'sm': 16,
      'md': 18,
      'lg': 20,
      'xl': 24,
      '2xl': 32,
    },
    colors: {
      black: '#000',
      white: '#fff',
      transparent: 'transparent',
      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7c7c8a',
        200: '#c4c4cc',
        100: '#e1e1e6',
      },
      cyan:{
        500: '#81d8f7',
        300: '#98e1fb',
      }
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
Adicionando a fonte inter do GoogleFonts no index.html
https://fonts.google.com/specimen/Inter?vfquery=inter
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
    <title>Ignite Lab Design System</title>
  </head>
  <body>
    <div id="root"></div>
Instalando o CSLX
https://www.npmjs.com/package/clsx
npm install --save clsx
Adicionando o RadixUI-Slot
https://www.radix-ui.com/docs/primitives/utilities/slot#slot
npm install @radix-ui/react-slot
Adicionando o phosphor-react
https://www.npmjs.com/package/phosphor-react
npm i phosphor-react 
Adicionando o RadixUI-Checkbox
https://www.radix-ui.com/docs/primitives/components/checkbox
npm install @radix-ui/react-checkbox
Criando os componentes
Componentes criados
Heading.tsx
Text.tsx
Button.tsx
TextInput.tsx
Checkbox.tsx
Adicionando o StoryBook
https://storybook.js.org/docs/react/get-started/introduction
npm i @storybook/storybook-deployer --save-dev
npx sb init --builder @storybook/builder-vite --use-npm 
Configuração final do .gitignore removendo a pasta do StoryBook
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# Storybook
storybook-static
Configurando o tema Dark no manager.js
import { addons } from '@storybook/addons'
import { themes } from '@storybook/theming'

addons.setConfig({
    theme: themes.dark,
})
Configurando o tema Dark no preview.cjs
import { themes } from '@storybook/theming';
import '../src/styles/global.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  },
}
Configurando o main.cjs
module.exports = {
    "stories": [
      "../src/**/*.stories.mdx",
      "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
      "@storybook/addon-links",
      "@storybook/addon-essentials",
      "@storybook/addon-interactions"
    ],
    "framework": "@storybook/react",
    "core": {
      "builder": "@storybook/builder-vite"
    },
    "features": {
      "storyStoreV7": true
    },
    viteFinal: (config, { configType }) => {
      if (configType === 'PRODUCTION') {
        config.base = '/rocketseat-ignite-lab-design-system/'
      }
      return config
    },
  }
Adicionando o StoryBook no packages.json
{
  "name": "lab-ds",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "storybook": "start-storybook -p 6006",
    "build-storybook": "build-storybook"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@babel/core": "^7.19.3",
    "@storybook/addon-actions": "^6.5.12",
    "@storybook/addon-essentials": "^6.5.12",
    "@storybook/addon-interactions": "^6.5.12",
    "@storybook/addon-links": "^6.5.12",
    "@storybook/builder-vite": "^0.2.4",
    "@storybook/react": "^6.5.12",
    "@storybook/testing-library": "^0.0.13",
    "@types/react": "^18.0.17",
    "@types/react-dom": "^18.0.6",
    "@vitejs/plugin-react": "^2.1.0",
    "autoprefixer": "^10.4.12",
    "babel-loader": "^8.2.5",
    "postcss": "^8.4.17",
    "tailwindcss": "^3.1.8",
    "typescript": "^4.6.4",
    "vite": "^3.1.0"
  }
}
Publicando os componentes criados no StoryBook
Heading.stories.tsx
Text.stories.tsx
Button.stories.tsx
TextInput.stories.tsx
Checkbox.stories.tsx
Deploy do Storybook no Github Pages
Veja aqui a publicação do StoryBook no GitHub Pages
https://claudneysessa.github.io/rocketseat-ignite-lab-design-system
image

image

image

image

image

Instalação e uso
Clone o projeto e acesse a pasta
git clone https://github.com/claudneysessa/rocketseat-ignite-lab-design-system
Siga os passos abaixo
# Instalar as Dependências
$ npm i

# Iniciar o Servidor em Modo de Desenvolvimento
$ npm run dev

# Iniciar o StoryBook
$ npm run storybook
Adicionando módulo de acessibilidade
Link

https://www.npmjs.com/package/@storybook/addon-a11y
Instalando a dependencia
npm i @storybook/addon-a11y --dev
Adicionando o AddOn no main.cjs
module.exports = {
    "stories": [
      "../src/**/*.stories.mdx",
      "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
      "@storybook/addon-links",
      "@storybook/addon-essentials",
      "@storybook/addon-interactions",
      "@storybook/addon-a11y"
    ],
    "framework": "@storybook/react",
    "core": {
      "builder": "@storybook/builder-vite"
    },
    "features": {
      "storyStoreV7": true
    },
    viteFinal: (config, { configType }) => {
      if (configType === 'PRODUCTION') {
        config.base = '/rocketseat-ignite-lab-design-system/'
      }
      return config
    },
  }
Pagina de exemplo com os componentes
Aqui vai o exemplo da tela de login criada com os componentes publicados no StoryBook

Link

Sign In Page
image

Adicionando interações no StoryBook
Links

interactions
@storybook/addon-interactions
Instalando as dependencias
npm i @storybook/addon-interactions @storybook/jest @storybook/testing-library @storybook/test-runner --dev
Dependencias adicionadas

@storybook/addon-interactions
@storybook/jest
@storybook/testing-library
@storybook/test-runner
Adicionando o AddOn do interactions no main.cjs
module.exports = {
    "stories": [
      "../src/**/*.stories.mdx",
      "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
      "@storybook/addon-links",
      "@storybook/addon-essentials",
      "@storybook/addon-interactions",
      "@storybook/addon-a11y"
    ],
    "framework": "@storybook/react",
    "core": {
      "builder": "@storybook/builder-vite"
    },
    "features": {
      "storyStoreV7": true,
      "interactionsDebugger": true
    },
    viteFinal: (config, { configType }) => {
      if (configType === 'PRODUCTION') {
        config.base = '/rocketseat-ignite-lab-design-system/'
      }
      return config
    },
  }
Instalando o Axios
npm i axios
Instalando o MSW - Mock Service Worker
npm i msw --save-dev
instalando o MSW Storybook Addon
npm i msw-storybook-addon --save-dev
Iniciando o Service Worker
npx msw init public/
Adicionando o Axios no main.cjs
```cjs
module.exports = {
    "stories": [
      "../src/**/*.stories.mdx",
      "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
      "@storybook/addon-links",
      "@storybook/addon-essentials",
      "@storybook/addon-interactions",
      "@storybook/addon-a11y"
    ],
    "framework": "@storybook/react",
    "core": {
      "builder": "@storybook/builder-vite"
    },
    "features": {
      "storyStoreV7": true,
      "interactionsDebugger": true
    },
    "staticDirs": [
      "../public"
    ],
    viteFinal: (config, { configType }) => {
      if (configType === 'PRODUCTION') {
        config.base = '/rocketseat-ignite-lab-design-system/'
      }
      return config
    },
  }
Editando o arquivo preview.js
import { initialize, mswDecorator } from 'msw-storybook-addon';

// Initialize MSW
initialize();

// Provide the MSW addon decorator globally
export const decorators = [mswDecorator];
