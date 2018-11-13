import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        {
          name: 'Arto Hellas',
          number: '040 1234567' }
      ],
      newName: '',
      newNumber: ''
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
  

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>  
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
          {this.state.persons.map(person => <div key={person.name}>{person.name} {person.number}</div>)}
        </ul>
      </div>
    )
  }
}

export default App//