import React from 'react'
import Link from 'next/link'
import CalculatorComponent from '../src/components/calculator'

const App: React.FC = () => {
  return (
    <div>
      <div>
        <Link href='/signin'>
          <a>Login now</a>
        </Link>
      </div>
      <CalculatorComponent/>
    </div>
  );
}

export default App