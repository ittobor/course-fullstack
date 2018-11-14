import React from 'react'
import axios from 'axios'
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
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        this.setState({ persons: response.data })
      })
  }

  addEntry = (event) => {
    event.preventDefault()
    const entryObject = {
      name: this.state.newName,
      number: this.state.newNumber
    }

    //const persons = !this.state.persons.filter(person => person.name === entryObject.name).length ? this.state.persons.concat(entryObject) : this.state.persons

    if (!this.state.persons.filter(person => person.name === entryObject.name).length) {
      axios.post('http://localhost:3001/persons', entryObject)
      .then(response => {
        this.setState({
          persons: this.state.persons.concat(response.data),
          newName: '',
          newNumber: ''
        })
      })
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