import { Instance, applySnapshot, types } from "mobx-state-tree"

export type IStore = Instance<typeof Store>
let store: IStore | null = null

const Store = types.model('store', {
  totalValue: types.number
}).actions(self => ({
  add(value: number) {
    self.totalValue += value
  }
})).views(self => ({
  total() {
    return self.totalValue
  }
}))

export const initialiseStore = (isServer: boolean, snapshot = null) => {
  if (isServer) {
    store = Store.create({ totalValue: 0 })
  }
  if (store === null) {
    store = Store.create({ totalValue: 0 })
  }
  if (snapshot) {
    applySnapshot(store, snapshot)
  }
  return store
}