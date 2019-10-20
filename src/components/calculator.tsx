import React from 'react'
import { inject, observer } from "mobx-react";

const CalculatorComponent = ({ store }: any) => {
  return (
    <div>
      <p>sum: {store.total()}</p>
      <button onClick={() => store.add(1)}>Add</button>
    </div>
  )
}

export default inject('store')(observer(CalculatorComponent))