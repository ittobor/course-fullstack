import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas' }
      ],
      newName: ''
    }
  }

  addEntry = (event) => {
    event.preventDefault()
    const entryObject = {
      name: this.state.newName
    }
  
    const persons = this.state.persons.concat(entryObject)
  
    this.setState({
      persons,
      newName: ''
    })
  }

  onNameChange = (event) => {
    this.setState({ newName: event.target.value })
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
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <ul>
          {this.state.persons.map(person => <div key={person.name}>{person.name}</div>)}
        </ul>
      </div>
    )
  }
}

export default App