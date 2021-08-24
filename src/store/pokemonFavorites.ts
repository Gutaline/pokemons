import {action, makeAutoObservable, observable} from 'mobx'
import { NewIPoki } from '../interface'
import { IPokiFavor } from '../interface'
import useLocalStorage from '../components/Container/useLocalStorage'

class pokemonsFavorites {
  favorites: IPokiFavor[]=[]
  key1 = 'poki'
  value1 = []

  constructor() {
    makeAutoObservable(this, {
      favorites: observable,
      key1: observable,
      value1: observable,
      setFavorites: action
    })
  }

  setFavorites(key1: string, value1: any)  {
    useLocalStorage(key1, value1)
  }
}

export default new pokemonsFavorites()
