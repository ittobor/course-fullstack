import React from 'react'
import personService from './services/persons'
import Filtteri from './components/Filtteri'
import Numerot from './components/Numerot'
import LisaaTiedot from './components/LisaaTiedot'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: ''
    }
  }

  componentDidMount() {
    personService
      .getAll()
      .then(persons => {
        this.setState({persons})
      })
  }

  addEntry = (event) => {
    event.preventDefault()
    const entryObject = {
      name: this.state.newName,
      number: this.state.newNumber
    }

    if (!this.state.persons.filter(person => person.name === entryObject.name).length) {
      personService
      .create(entryObject)
      .then(persons => {
        this.setState({
          persons: this.state.persons.concat(persons),
          newName: '',
          newNumber: ''
        })
      })
    }
  }

  removePersonOf = (name, id) => {
    return () => {
      if (window.confirm(`poistetaanko ${name}?`)) {
        personService
        .remove(id)
        .then(persons => {
          this.setState({
            persons: this.state.persons.filter(p => p.id !== id),
            newName: '',
            newNumber: ''
          })
        })
      }
    }
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