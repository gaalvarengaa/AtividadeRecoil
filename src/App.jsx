import { useRecoilValue } from 'recoil'
import { listaTarefasState } from './atoms/tarefasAtoms'
import FormNovaTarefa from './components/FormNovaTarefa'
import FiltroTarefas from './components/FiltroTarefas'
import ListaTarefas from './components/ListaTarefas'

function App() {
  const totalTarefas = useRecoilValue(listaTarefasState).length

  return (
    <main className="app">
      <h1>Lista de Tarefas</h1>
      <FormNovaTarefa />
      <FiltroTarefas />
      <ListaTarefas />
      <p className="contador">
        {totalTarefas} {totalTarefas === 1 ? 'tarefa' : 'tarefas'} no total
      </p>
    </main>
  )
}

export default App
