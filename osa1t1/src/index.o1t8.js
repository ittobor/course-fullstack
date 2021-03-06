import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({nimi, tapahtuma}) => (
    <button onClick={tapahtuma}>{nimi}</button>
)

const Statistic = ({nimi, stat}) => (
    <div>
    {nimi} {stat}<br />
    </div>
)

const Statistics = ({tila}) => (
    <div>
    <p><b>statistiikka:</b></p>
    <Statistic nimi='hyvä' stat={tila.hyva} />
    <Statistic nimi='neutraali' stat={tila.neutraali} />
    <Statistic nimi='huono' stat={tila.huono} />
    <Statistic nimi='keskiarvo' stat={keskiarvo({tila})} />
    <Statistic nimi='positiivisia' stat={pospros_text(pospros({tila}))} />
    </div>
)

const keskiarvo = ({tila}) => {
    return (tila.hyva - tila.huono) / (tila.hyva + tila.neutraali + tila.huono)
}

const pospros_text = (a) => {
    return (a + '%')
}

const pospros = ({tila}) => {
    return (tila.hyva) / (tila.hyva + tila.neutraali + tila.huono) * 100
}

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
                <Button tapahtuma={this.lisaaHyva} nimi='hyvä' />
                <Button tapahtuma={this.lisaaNeutraali} nimi='neutraali' />
                <Button tapahtuma={this.lisaaHuono} nimi='huono' />
                <Statistics tila={this.state} />
            </div> 
        )
    }
} 

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
