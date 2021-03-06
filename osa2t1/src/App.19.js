import React from 'react'
import personService from './services/persons'
import Filtteri from './components/Filtteri'
import Numerot from './components/Numerot.19'
import LisaaTiedot from './components/LisaaTiedot'

const SucNotification = ({ message }) => {
  if (message === null) {
    return null
  }
  return (
    <div className="succee">
      {message}
    </div>
  )
}
const ErrNotification = ({ message }) => {
  if (message === null) {
    return null
  }
  return (
    <div className="error">
      {message}
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: '',
      succee: null,
      error: null
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
          newNumber: '',
          succee: `Kontakti ${entryObject.name} lisätty onnistuneesti`
        })
        setTimeout(() => {
          this.setState({succee: null})
        }, 5000)
      })
    } else {
      const sameperson = this.state.persons.filter(person => person.name === entryObject.name)
      if (window.confirm(`${sameperson[0].name} jo luettelossa, korvataanko vanha numero uudella?`)) {
        personService
        .update(entryObject, sameperson[0].id)
        .then(person => {
          const persons = this.state.persons.filter(p => p.id !== person.id)
          this.setState({
            persons: persons.concat(person),
            newName: '',
            newNumber: '',
            succee: `Kontakti ${entryObject.name} päivitetty onnistuneesti`
          })
          setTimeout(() => {
            this.setState({succee: null})
          }, 5000)
        })
        .catch(error => {
          this.setState({
            error: `Kontakti '${entryObject.name}' on jo valitettavasti poistettu palvelimelta`,
            persons: this.state.persons.filter(p => p.id !== sameperson[0].id)
          })
          setTimeout(() => {
            this.setState({error: null})
          }, 5000)
        })
      }
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
            newNumber: '',
            succee: `Kontakti ${name} poistettu onnistuneesti`
          })
          setTimeout(() => {
            this.setState({succee: null})
          }, 5000)
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
        <SucNotification message={this.state.succee}/>
        <ErrNotification message={this.state.error}/>
        <Filtteri taa={this} />
        <LisaaTiedot taa={this} />
        <Numerot taa={this} />
      </div>
    )
  }
}

export default App