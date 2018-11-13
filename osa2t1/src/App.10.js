import React from 'react'
import React from 'react'
import Filtteri from './components/Filtteri'
import Numerot from './components/Numerot'

const LisaaTiedot = ({ taa }) => {
  return (
    <form onSubmit={taa.addEntry}>
    <h2>Lisää uusi</h2>
    <div>
      nimi: <input 
              value={taa.state.newName}
              onChange={taa.onNameChange}  />
    </div>
    <div>
      numero: <input 
              value={taa.state.newNumber}
              onChange={taa.onNumberChange}  />
    </div>
    <div>
      <button type="submit">lisää</button>
    </div>
    </form>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Martti Tienari', number: '040-123456' },
        { name: 'Arto Järvinen', number: '040-123456' },
        { name: 'Lea Kutvonen', number: '040-123456' }
      ],
      newName: '',
      newNumber: '',
      filter: ''
    }
  }

  addEntry = (event) => {
    event.preventDefault()
    const entryObject = {
      name: this.state.newName,
      number: this.state.newNumber
    }

    const persons = !this.state.persons.filter(person => person.name === entryObject.name).length ? this.state.persons.concat(entryObject) : this.state.persons

    this.setState({
      persons,
      newName: '',
      newNumber: ''
    })
  }

  onNameChange = (event) => {
    this.setState({ newName: event.target.value })
  }

  onNumberChange = (event) => {
    this.setState({ newNumber: event.target.value })
  }
  
  onFilterChange = (event) => {
    this.setState({ filter: event.target.value })
  }

  render() {
    return (
      <div>
        <h1>Puhelinluettelo</h1>
        <Filtteri taa={this} />
        <LisaaTiedot taa={this} />
        <Numerot taa={this} />
      </div>
    )
  }
}

export default App