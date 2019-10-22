import React from 'react'
import Link from 'next/link'
import { API, graphqlOperation } from 'aws-amplify'

import CalculatorComponent from '../src/components/calculator'
import { listBlogs } from "../src/graphql/queries";
import config from '../src/aws-exports'

API.configure(config)

const App: React.FC = () => {
  const fetchBlogs = async () => {
    return await API.graphql(graphqlOperation(listBlogs, {}))
  }

  fetchBlogs()
    .then(resp => {
      console.log(resp)
    })

  return (
    <div>
      <div>
        <Link href='/signin'>
          <a>Login now</a>
        </Link>
      </div>
      <CalculatorComponent/>
      <div>
      </div>
    </div>
  )
}

export default App