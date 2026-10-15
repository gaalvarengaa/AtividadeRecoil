import { selector } from 'recoil'
import { listaTarefasState, filtroAtualState } from '../atoms/tarefasAtoms'

export const tarefasFiltradasState = selector({
  key: 'tarefasFiltradasState',
  get: ({ get }) => {
    const tarefas = get(listaTarefasState)
    const filtro = get(filtroAtualState)

    switch (filtro) {
      case 'concluidas':
        return tarefas.filter((tarefa) => tarefa.concluida)
      case 'pendentes':
        return tarefas.filter((tarefa) => !tarefa.concluida)
      default:
        return tarefas
    }
  },
})
