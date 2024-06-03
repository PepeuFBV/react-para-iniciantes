# React + TailwindCSS

## Mercado de Trabalho

- Por que aprender React?

O React é uma das bibliotecas mais populares do mercado, sendo utilizada por empresas como Facebook (onde a framework é mantida). A popularidade do React é devido a sua facilidade de uso, performance e comunidade ativa.

- Por que usaremos NextJS?

O NextJS é um framework para React que facilita a criação de aplicações web, fornecendo funcionalidades como SSR (Server Side Rendering), SSG (Static Site Generation) e API Routes. O NextJS é utilizado por empresas como Netflix, Uber e TikTok.

O mercado tem mostrado uma clara tendência em direção ao uso do React e do Next.js para o desenvolvimento de aplicativos web modernos. Empresas de todos os tamanhos e setores estão adotando essas tecnologias para criar aplicativos web rápidos, eficientes e escaláveis, e a demanda por desenvolvedores com habilidades em React e Next.js está em alta. Portanto, aprender React e Next.js pode ser uma ótima maneira de impulsionar sua carreira como desenvolvedor web.

![trends](/public/trends.png)
[site para produzir o gráfico](https://npmtrends.com/angular-vs-next-vs-react-vs-vue)

Podemos ver no gráfico acima que o React é a biblioteca mais popular do mercado, acompahando a tendência de crescimento do NextJS.

## [Criando Projeto](https://react.dev/learn/start-a-new-react-project)

```bash
npx create-next-app@latest
```

- Sobre o Node Package Manager (npm)

O npm é o gerenciador de pacotes padrão para o Node.js, um ambiente de execução JavaScript baseado no motor V8 do Chrome. O npm é usado para instalar, compartilhar e distribuir pacotes de código JavaScript e gerenciar dependências em projetos Node.js.

- Sobre o Node Package Executer (npx)

O npx é um utilitário de linha de comando que vem com o npm e é usado para executar pacotes Node.js sem instalá-los globalmente. O npx é útil para executar scripts de pacotes Node.js que não estão instalados globalmente ou que são usados apenas ocasionalmente.

- Sobre o `create-next-app` ([porque não create-react-app](https://react.dev/learn/start-a-new-react-project#can-i-use-react-without-a-framework))

O `create-next-app` é um utilitário de linha de comando que facilita a criação de novos projetos Next.js. O `create-next-app` é baseado no `create-react-app`, que é um utilitário semelhante para criar novos projetos React, mas sem o suporte para o Next.js.

- Sobre o `@latest`

O `@latest` é um sufixo que indica ao npm para instalar a versão mais recente de um pacote. O `@latest` é útil para garantir que você esteja instalando a versão mais recente de um pacote, especialmente se você estiver criando um novo projeto e deseja usar a versão mais recente de um pacote.

Rode o comando abaixo e siga as instruções:

```bash
npx create-next-app@latest
```

```bash
? What is your project named? › todo-app
? Would you like to use TypeScript? › Yes
? Would you like to use ESLint? › Yes
? Would you like to use Tailwind CSS? › Yes
? Would you like to use `src/` directory? › Yes
? Would you like to use App Router? (recommended) › Yes
? Would you like to customize the default import alias (@/*)? › No
```

### Porquê das tecnologias usadas?

#### Typescript

O TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft que é uma extensão do JavaScript. O TypeScript adiciona tipagem estática opcional ao JavaScript, o que pode ajudar a detectar erros de programação em tempo de compilação e melhorar a qualidade e a manutenibilidade do código.

Um dos maiores problemas do JavaScript é a falta de tipagem estática, o que pode levar a erros de programação **difíceis** de detectar e corrigir. O TypeScript resolve esse problema adicionando tipagem estática opcional ao JavaScript, o que pode ajudar a detectar erros de programação em tempo de compilação e melhorar a qualidade e a manutenibilidade do código.

#### ESLint

O ESLint é uma ferramenta de análise de código estática para JavaScript que ajuda a identificar e corrigir problemas de código, como erros de sintaxe, práticas de codificação inconsistentes e vulnerabilidades de segurança. O ESLint é altamente configurável e pode ser personalizado para atender às necessidades específicas de um projeto.

#### Tailwind CSS

O Tailwind CSS é um framework de design de código aberto para a criação de interfaces de usuário responsivas e acessíveis. O Tailwind CSS é altamente configurável e fornece uma ampla variedade de classes utilitárias para estilizar elementos HTML, como cores, tipografia, espaçamento e layout.

#### App Router

O App Router é uma biblioteca de roteamento para Next.js que facilita a criação de rotas em um aplicativo Next.js. O App Router é altamente configurável e fornece uma API simples e intuitiva para definir rotas e manipular a navegação do usuário em um aplicativo Next.js.

No minicurso, não abordaremos a utilização do App Router, pois o foco é em React e TailwindCSS.

## Entendendo Árvore de Arquivos

O Next.js cria uma estrutura de diretórios e arquivos para organizar o código-fonte de um projeto Next.js. A estrutura de diretórios e arquivos padrão de um projeto Next.js é semelhante à estrutura de diretórios e arquivos de um projeto React, mas com algumas diferenças importantes.

### node_modules

O diretório `node_modules` é onde o npm instala os pacotes de código JavaScript de um projeto. O diretório `node_modules` é criado automaticamente pelo npm quando você instala pacotes de código JavaScript de um projeto.

Ao se puxar um projeto do git, é necessário rodar o comando `npm install` para instalar as dependências do projeto. Ele instalará os pacotes listados no arquivo `package.json` e suas dependências no diretório `node_modules`.

### public

O diretório `public` é onde você coloca arquivos estáticos, como imagens, fontes e outros recursos, que são servidos diretamente pelo servidor web. O diretório `public` é acessível publicamente e pode ser acessado diretamente por um navegador da web. Se acessa, em questão de rota, pelo caminho `/`.

### src/app ([App Directory](https://nextjs.org/docs/app))

O diretório `src/app` é onde você coloca o código-fonte do aplicativo Next.js. O diretório `src/app` é onde você coloca as páginas e layouts do aplicativo Next.js, bem como outros componentes e arquivos de código-fonte do aplicativo Next.js.

## Setup Inicial

### Limpar estilos e página padrão do NextJS

1. Deletar pagina inicial do Nextjs
- src/app/page.tsx

```ts

// 'use client' é uma propriedade do NextJS que altera o estilo de renderização da página
// para cliente. Por padrão a renderização é feita pelo servidor, aumentando a velocidade
// inicial, mas impedindo a interatividade da página.

'use client'

export default function Home() {
  return (
    <div></div>
  )
}
```

2. Deletar dark mode por padrão
```css
/* src/app/layout.tsx */

@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Componentes

### Criando primeiro componente

No React, os componentes são blocos de construção fundamentais de uma aplicação React. Os componentes são reutilizáveis, independentes e encapsulados, o que os torna fáceis de usar e manter. Os componentes podem ser compostos uns nos outros para criar interfaces de usuário complexas e dinâmicas.

Utilizamos o código em TSX (TypeScript + JSX) para criar componentes React. O JSX é uma extensão do JavaScript que permite escrever código JavaScript e HTML juntos em um único arquivo. Ele permite que montemos funções que "retornam" elementos HTML, que são renderizados na tela.

- src/app/page.tsx

```ts

function AddTodoInput() {
  return (
    <input placeholder="Arrumar a casa"/>
  )
}
```
<br>

O componente criado acima ainda não foi renderizado (mostrado na tela). Para renderizar o componente, é necessário chamar a função `AddTodoInput` dentro de um componente pai.

- src/app/page.tsx

```ts

export default function Home() {
  return (
    <div>
      {/* Adicionamos o nome da função dentro de uma tag jsx (ex. </>) */}
      <AddTodoInput/>
    </div>
  );
}
```

### Criando propriedades

- src/app/page.tsx

```ts

function AddTodoButton() {
  return (
    <button>Adicionar</button>
  )
}
```
<br>

- src/app/page.tsx

```ts
// Propriedades são criadas dentro do argumento `props`
function AddTodoButton(props: {onClick: () => void}) {
  return (
    {/* onClick está sendo passado como ponteiro, não sendo invocado */}
    <button onClick={onClick}>Adicionar</button>
  )
}
```
<br>

- src/app/page.tsx

```ts

export default function Home() {
  return (
    <div>
      <AddTodoInput/>
      <AddTodoButton onClick={() => alert("botão clicado")} />
    </div>
  );
}
```

### Modularização

#### Criando pasta Components
```
todo-app
└───src
│   └──app
│   └──components
│   │   add-todo-input.tsx
│   │   add-todo-button.tsx
```

#### Criando componentes

1. AddTodoInput

-  src/components/add-todo-input.tsx
```ts

// TODO: explicar export default
export default function AddTodoInput(props: { onChange: (text: string) => void }) {
  return (
    <input placeholder="Arrumar a casa" onChange={(e) => props.onChange(e.target.value)} />
  )
}
```
<br>

2. AddTodoButton

- src/components/add-todo-button.tsx

```ts

export default function AddTodoButton(props: { onClick: () => void }) {
  return (
    <button onClick={props.onClick}>Adicionar</button>
  )
}
```
<br>

3. Atualizar page.tsx

- src/app/page.tsx

```ts
import AddTodoInput from '@/components/add-todo-input'
import AddTodoButton from '@/components/add-todo-button'
```

### Reatividade

A reatividade é uma das principais características do React. A reatividade permite que os componentes React respondam a mudanças de **estado e propriedades**, atualizando automaticamente a interface do usuário para refletir essas mudanças. O objetivo da criação do React foi tornar a construção de interfaces de usuário reativas mais **fácil e eficiente**.

-- explicar o que é hooks

#### Vincular valor do `<input/>` a uma variável

O React fornece um conjunto de **Hooks** que permitem adicionar funcionalidades de reatividade a componentes funcionais. Um dos hooks mais comuns é o `useState`, que permite adicionar estado a componentes funcionais, esse estado é reativo, ou seja, toda vez que o estado muda, o componente é renderizado novamente.

```ts
const [todoName, setTodoName] = React.useState<string>('');
```
<br>

- src/components/add-todo-input.tsx

```ts
function AddTodoInput(props: {onChange: (text: string) => void}) {
  return (
    <input placeholder="Arrumar a casa" onChange={(e) => props.onChange(e.target.value)}/>
  )
}
```
<br>

- src/app/page.tsx

```ts
export default function Home() {
  const [todoName, setTodoName] = React.useState<string>('');

  return (
    <div>
      {/* passamos `setTodoName` pra ser chamado toda vez que o input mudar o valor */}
      <AddTodoInput onChange={setTodoName}/>
      {/* damos alert() no `todoName` para debugar o useState*/}
      <AddTodoButton onClick={() => alert(todoName)}/>
    </div>
  );
}
```
<br>

#### Criando TodoItem

- src/components/todo-item.tsx

```ts
export default function TodoItem(props: {
  done: boolean;
  name: string;
}) {
  return (
    <div>
      <input type="checkbox" />
      <p>{props.name}</p>
    </div>
  )
}
```
<br>

```ts
// para testar o componente, podemos colocar essa linha no page.tsx
<TodoItem done={false} name={"test"} />
```

Porém o componente ainda não está estilizado, para isso, utilizaremos o TailwindCSS. Que nós permite estilizar os componentes de forma rápida, fácil e reativa.

<br>

#### [TailwindCSS](https://tailwindcss.com/)

O Tailwind CSS é um framework de design de código aberto para a criação de interfaces de usuário responsivas e acessíveis. Ele nós permite adicionar estilos CSS, com sintaxe de classes utilitárias, a elementos HTML de forma rápida e fácil.

Para a parte a seguir, abre-se a liberdade para o aluno criar o próprio estilo, ou seguir o exemplo abaixo.

-  src/components/add-todo-input.tsx
```ts
<div
  className={
    `flex items-center gap-2 p-3 border rounded-md `
  }
>
  <input type="checkbox" className="h-4 w-4" />
  <p className="text-md">{props.name}</p>
</div>
```
<br>

-  src/components/add-todo-input.tsx

```ts
<input
  className="px-4 py-2 border rounded-md w-full"
  placeholder="Arrumar a casa"
  onChange={(e) => props.onChange(e.target.value)}
/>
```
<br>

- src/components/add-todo-button.tsx

```ts
<button
  className="bg-green-500 px-4 py-2 rounded-md text-white"
  onClick={props.onClick}
>
  Adicionar
</button>
```
<br>

- src/app/page.tsx

```ts
<div className="flex flex-col gap-4 p-12 border rounded-lg w-full max-w-[600px]">
  <div className="flex gap-4">
    <AddTodoInput onChange={setTodoName} />
    <AddTodoButton onClick={() => alert(todoName)} />
  </div>
  <div className="flex flex-col gap-2">
    <TodoItem done={false} name={"test"} />
  </div>
</div>
```

<br>

#### Adicionar TodoItem

Criaremos um diretório `models` para armazenar os modelos de dados da aplicação.
As interfaces, classes e outros tipos de dados são armazenados no diretório `models`.

```
todo-app
└───src
│   └──app
│   └──components
│   └──models
│   │   todo.ts
```
<br>

- src/models/todo.ts

```ts
export default interface Todo {
  id: string; // usaremos o atributo key aqui para evitar a re-renderização de todos os elementos a cada vez que o array é modificado
  done: boolean;
  name: string;
}
```
Se usassemos o index do array como key, a cada vez que um elemento é adicionado ou removido, todos os elementos seriam re-renderizados, o que pode causar problemas de performance.

<br>

- src/app/page.tsx

```ts
'use client'

import React from 'react'
import AddTodoInput from '@/components/add-todo-input'
import AddTodoButton from '@/components/add-todo-button'
import TodoItem from '@/components/todo-item';
import Todo from '@/models/todo';

export default function Home() {
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const [todo, setTodo] = React.useState<Todo>({
    id: crypto.randomUUID(),
    done: false,
    name: ''
  });

  return (
    <div className="flex flex-col gap-4 p-12 border rounded-lg w-full max-w-[600px]">
      <div className="flex gap-4">
        <AddTodoInput onChange={(name) => setTodo({
          ...todo,
          name: name,
        })} />
        <AddTodoButton onClick={() => {
          setTodos([
            ...todos,
            todo,
          ])

          setTodo({
            id: crypto.randomUUID(),
            done: false,
            name: '',
          })
        }} />
      </div>
      <div className="flex flex-col gap-2">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            done={todo.done}
            name={todo.name}
            onChecked={() => setTodos(todos.map((innerTodo) => {
              if (innerTodo.id != todo.id) {
                return innerTodo
              }
              return {
                ...innerTodo,
                done: !innerTodo.done,
              }
            }))}
          />
        ))}
      </div>
    </div>
  );
}
```
<br>

- src/components/todo-item.tsx

```tsx
export default function TodoItem(props: {
  done: boolean;
  name: string;
  onChecked: () => void;
}) {
  return (
    <div
      className={
        `flex items-center gap-2 p-3 border rounded-md ` +
        `${props.done ? "bg-green-400 line-through" : ""}`
      }
    >
      {props.done ? "true" : "false"}
      <input type="checkbox" className="h-4 w-4" onChange={props.onChecked} />
      <p className="text-md">{props.name}</p>
    </div>
  )
}
```
