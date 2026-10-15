import { useSetRecoilState } from 'recoil'
import { listaTarefasState } from '../atoms/tarefasAtoms'

function ItemTarefa({ tarefa }) {
  const setLista = useSetRecoilState(listaTarefasState)

  function alternarConclusao() {
    setLista((listaAtual) =>
      listaAtual.map((item) =>
        item.id === tarefa.id ? { ...item, concluida: !item.concluida } : item,
      ),
    )
  }

  function removerTarefa() {
    setLista((listaAtual) => listaAtual.filter((item) => item.id !== tarefa.id))
  }

  return (
    <li className={`item-tarefa ${tarefa.concluida ? 'concluida' : ''}`}>
      <label>
        <input
          type="checkbox"
          checked={tarefa.concluida}
          onChange={alternarConclusao}
        />
        <span>{tarefa.texto}</span>
      </label>
      <button
        type="button"
        className="botao-remover"
        onClick={removerTarefa}
        aria-label={`Remover tarefa: ${tarefa.texto}`}
      >
        Remover
      </button>
    </li>
  )
}

export default ItemTarefa
