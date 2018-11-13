import React from 'react';

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
    const contactsToShow = this.state.filter.length === 0 ?
      this.state.persons :
      this.state.persons.filter( person => person.name.toUpperCase().startsWith(this.state.filter.toUpperCase()) )

    return (
      <div>
        <h1>Puhelinluettelo</h1>
        <div>
          rajaa näytettäviä
          <input
            value={this.state.filter}
            onChange={this.onFilterChange}  />
        </div>
        <h2>Lisää uusi</h2>
        <form onSubmit={this.addEntry}>
          <div>
            nimi: <input 
                    value={this.state.newName}
                    onChange={this.onNameChange}  />
          </div>
          <div>
            numero: <input 
                    value={this.state.newNumber}
                    onChange={this.onNumberChange}  />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <ul>
          {contactsToShow.map(person => <div key={person.name}>{person.name} {person.number}</div>)}
        </ul>
      </div>
    )
  }
}

export default App//