import { useRecoilState } from 'recoil'
import { filtroAtualState } from '../atoms/tarefasAtoms'

const OPCOES_FILTRO = [
  { valor: 'todas', rotulo: 'Todas' },
  { valor: 'concluidas', rotulo: 'Concluídas' },
  { valor: 'pendentes', rotulo: 'Pendentes' },
]

function FiltroTarefas() {
  const [filtro, setFiltro] = useRecoilState(filtroAtualState)

  return (
    <div className="filtro-tarefas" role="group" aria-label="Filtrar tarefas">
      {OPCOES_FILTRO.map((opcao) => (
        <button
          key={opcao.valor}
          type="button"
          className={filtro === opcao.valor ? 'ativo' : ''}
          aria-pressed={filtro === opcao.valor}
          onClick={() => setFiltro(opcao.valor)}
        >
          {opcao.rotulo}
        </button>
      ))}
    </div>
  )
}

export default FiltroTarefas
