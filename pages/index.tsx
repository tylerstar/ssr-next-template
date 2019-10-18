import React from 'react'
import Link from 'next/link'
import { observer } from 'mobx-react'
import { initialiseStore, IStore } from "../stores/store";
import { getIsServer } from "../utils/host";

const App: React.FC = () => {
  const isServer: boolean = getIsServer()
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
      <div>
        <Link href='/login'>
          Login now
        </Link>
      </div>
    </div>
  );
}

export default observer(App)