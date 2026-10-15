# Lista de Tarefas com Recoil

Aplicação To-do List em React em que todo o estado (lista de tarefas e filtro ativo) é gerenciado pelo Recoil, com átomos, seletores e os hooks `useRecoilState`, `useRecoilValue` e `useSetRecoilState`.

## Funcionalidades

- Adicionar tarefas
- Marcar e desmarcar como concluídas
- Remover tarefas
- Filtrar por: todas, concluídas ou pendentes

## Estrutura

```
src/
├── atoms/          # átomos: lista de tarefas e filtro atual
├── selectors/      # seletor que deriva a lista filtrada
├── components/     # formulário, filtro, lista e item
├── App.jsx
├── main.jsx        # RecoilRoot envolvendo a aplicação
└── index.css
```

## Como executar

```bash
npm install
npm run dev      # servidor de desenvolvimento
npm run build    # build de produção
```

## Observação sobre versões

O Recoil 0.7.7 acessa internals do React que foram removidos no React 19, por isso o projeto usa React 18.3.1.
