import React from 'react'
import Link from 'next/link'
import { observer } from 'mobx-react'
import CalculatorComponent from '../src/components/calculator'

const App: React.FC = () => {
  return (
    <div>
      <div>
        <Link href='/signin'>
          Login now
        </Link>
      </div>
      <CalculatorComponent/>
    </div>
  );
}

export default App