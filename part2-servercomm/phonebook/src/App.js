import { useState, useEffect } from 'react'
import Search from './components/Search'
import Form from './components/Form'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 

  const hook = () => {
    axios
    .get('http://localhost:3001/persons')
    .then((response) => {
      setPersons(response.data)
    })
  }
  useEffect(hook,[])

  return (
    <div>
      <h2>Phonebook</h2>
      <Form persons={persons} setPersons={setPersons} />
      <Search persons={persons}/>
    </div>
  )
}

export default App