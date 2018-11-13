import React from 'react'
import axios from 'axios'
import Finderi from './components/Finderi'
import Maat from './components/Maat'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      finder: ''
    }
  }

  componentDidMount() { 
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        this.setState({ countries: response.data })
      })
  }

  onFinderChange = (event) => {
    this.setState({ finder: event.target.value })
  }

  render() {
    return (
      <div>
        <h1>Tuut</h1>
        <Finderi taa={this} />
        <Maat taa={this} />
      </div>
    )
  }
}

export default App