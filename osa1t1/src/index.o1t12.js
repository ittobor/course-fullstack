import React from 'react'
import ReactDOM from 'react-dom'

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
] 

const Button = ({tapahtuma}) => (
    <button onClick={tapahtuma}>next anecdote</button>
)

class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        selected: 0
      }
    }
  
    lisaaTilaan = () => {
        return () => {
            this.setState({selected: Math.floor(Math.random() * this.props.anecdotes.length)})
        }
    }

    render() {
      return (
        <table>
            <tbody>
                <tr><td><Button tapahtuma={this.lisaaTilaan()}/></td></tr>
                <tr><td>{this.props.anecdotes[this.state.selected]}</td></tr>                
            </tbody>
        </table>
      )
    }
}

ReactDOM.render(
<App anecdotes={anecdotes} />,
document.getElementById('root')
)
