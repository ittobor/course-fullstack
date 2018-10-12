import React from 'react'
import ReactDOM from 'react-dom'


class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        hyva: 0,
        neutraali: 0,
        huono: 0
      }
    }

    lisaaHyva = () => {
        this.setState({ hyva: this.state.hyva + 1 })
    }

    lisaaNeutraali = () => {
        this.setState({ neutraali: this.state.neutraali + 1 })
    }

    lisaaHuono = () => {
        this.setState({ huono: this.state.huono + 1 })
    }

    render() {
        return (
        <div>
            <div>
                <p><b>anna palautetta:</b></p>
                <button onClick={this.lisaaHyva}>hyvä</button>
                <button onClick={this.lisaaNeutraali}>neutraali</button>
                <button onClick={this.lisaaHuono}>huono</button>
            </div>
            <div>
                <p><b>statistiikka:</b></p>
                hyvä {this.state.hyva}<br />
                neutraali {this.state.neutraali}<br />
                huono {this.state.huono}<br />
            </div> 
          </div>
        )
    }
} 

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
