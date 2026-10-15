import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { listaTarefasState } from '../atoms/tarefasAtoms'

function FormNovaTarefa() {
  const [texto, setTexto] = useState('')
  const setLista = useSetRecoilState(listaTarefasState)

  function handleSubmit(evento) {
    evento.preventDefault()
    const textoLimpo = texto.trim()
    if (!textoLimpo) return

    setLista((listaAtual) => [
      ...listaAtual,
      { id: crypto.randomUUID(), texto: textoLimpo, concluida: false },
    ])
    setTexto('')
  }

  return (
    <form className="form-nova-tarefa" onSubmit={handleSubmit}>
      <input
        type="text"
        value={texto}
        onChange={(evento) => setTexto(evento.target.value)}
        placeholder="O que você precisa fazer?"
        aria-label="Nova tarefa"
      />
      <button type="submit">Adicionar</button>
    </form>
  )
}

export default FormNovaTarefa
