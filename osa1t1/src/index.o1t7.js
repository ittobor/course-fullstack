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

    keskiarvo = () => {
        return (this.state.hyva - this.state.huono) / (this.state.hyva + this.state.neutraali + this.state.huono)
    }

    pospros = () => {
        return (this.state.hyva) / (this.state.hyva + this.state.neutraali + this.state.huono) * 100
    }

    render() {
        return (
            <div>
                <p><b>anna palautetta:</b></p>
                <button onClick={this.lisaaHyva}>hyvä</button>
                <button onClick={this.lisaaNeutraali}>neutraali</button>
                <button onClick={this.lisaaHuono}>huono</button>
                <p><b>statistiikka:</b></p>
                hyvä {this.state.hyva}<br />
                neutraali {this.state.neutraali}<br />
                huono {this.state.huono}<br />
                keskiarvo {this.keskiarvo()}<br />
                positiivisia {this.pospros()} %<br />
            </div> 
        )
    }
} 

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
