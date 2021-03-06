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

const Button = ({tapahtuma, nimi}) => (
    <button onClick={tapahtuma}>{nimi}</button>
)

const TopBillin = ({tila}) => {
    var maxi = 0
    var maxp = tila.pisteet[maxi]
    for (var ii = 0; ii < 6; ii++){
        if (maxp < tila.pisteet[ii]) {
            maxp = tila.pisteet[ii]
            maxi = ii
        }
    } 
    
    return (
        <tr>
            <td>({tila.pisteet[maxi]} votes)</td>
            <td>{anecdotes[maxi]}</td>
        </tr>
    )
}


class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        selected: 0,
        pisteet: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0}
      }
    }

    heitaArpaa = () => {
        return () => {
            this.setState({selected: Math.floor(Math.random() * this.props.anecdotes.length)})
        }
    }
    
    aanesta = () => {
        return () => {
            const kopio = {...this.state.pisteet}
            kopio[this.state.selected] += 1
            this.setState({ pisteet: kopio})
        }
    }
 
    render() {
      return (
        <table>
            <tbody>
                <tr><td>&nbsp;</td><td><Button tapahtuma={this.aanesta()} nimi='vote'/><Button tapahtuma={this.heitaArpaa()} nimi='next anecdote'/></td></tr>
                <tr><td>&nbsp;</td><td>{this.props.anecdotes[this.state.selected]}</td></tr> 
                <tr><td>&nbsp;</td><td>Has {this.state.pisteet[this.state.selected]} votes</td></tr>
                <tr><td>&nbsp;</td><td>&nbsp;</td></tr>
                <tr><td>&nbsp;</td><td><b>anecdote with most votes:</b></td></tr>
                <TopBillin tila={this.state} />
            </tbody>
        </table>
      )
    }
}

ReactDOM.render(
<App anecdotes={anecdotes} />,
document.getElementById('root')
)
