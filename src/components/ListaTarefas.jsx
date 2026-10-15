import { useRecoilValue } from 'recoil'
import { tarefasFiltradasState } from '../selectors/tarefasSelectors'
import ItemTarefa from './ItemTarefa'

function ListaTarefas() {
  const tarefas = useRecoilValue(tarefasFiltradasState)

  if (tarefas.length === 0) {
    return <p className="lista-vazia">Nenhuma tarefa para exibir.</p>
  }

  return (
    <ul className="lista-tarefas">
      {tarefas.map((tarefa) => (
        <ItemTarefa key={tarefa.id} tarefa={tarefa} />
      ))}
    </ul>
  )
}

export default ListaTarefas
