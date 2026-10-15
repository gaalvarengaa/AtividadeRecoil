import { atom } from 'recoil'

export const listaTarefasState = atom({
  key: 'listaTarefasState',
  default: [],
})

export const filtroAtualState = atom({
  key: 'filtroAtualState',
  default: 'todas',
})
