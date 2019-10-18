import React from 'react'
import { initialiseStore, IStore } from "../stores/store";
import { observer } from 'mobx-react'

const App: React.FC = () => {
  const isServer: boolean = typeof window === 'undefined'
  const store: (IStore | null) = initialiseStore(isServer)

  const add = () => {
    if (store) {
      store.add(1)
    }
  }

  return (
    <div>
      <div>Total Count: {store.total()}</div>
      <button onClick={add}>
        Add
      </button>
    </div>
  );
}

export default observer(App)