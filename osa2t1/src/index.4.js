import React from 'react';
import ReactDOM from 'react-dom';

const Ohjelma = ({ kurssit }) => {
    return (
        <div>
            <Otsikko otsikko={'Opetusohjelma'} />
            {kurssit.map(kurssi=><Kurssi key={kurssi.id} kurssi={kurssi} />)}
        </div>
    )
}

const Kurssi = ({ kurssi }) => {
    return (
        <div>
            <Otsikko otsikko={kurssi.nimi} />
            <Sisalto osat={kurssi.osat} />
            <Yhteensa osat={kurssi.osat} />
        </div>
    )
}

const Otsikko = ({ otsikko }) => {
    return (
        <div><h1>{ otsikko }</h1></div>
    )
}

const Sisalto = ({ osat }) => {
    return (
        <div>
            {osat.map(osa=><Osa key={osa.id} osa={osa} />)} 
        </div>
    )
}

const Osa = ({ osa }) => {
    return (
        <div>
            {osa.nimi} {osa.tehtavia}
        </div>
    )
}

const Yhteensa = ({ osat }) => {
    return (
        <div>
            Yhteensä {osat.reduce((summa, osa)=>summa+osa.tehtavia, 0)} tehtävää.
        </div>
    )
}

const App = () => {
    const kurssit = [
        {
          nimi: 'Half Stack -sovelluskehitys',
          id: 1,
          osat: [
            {
              nimi: 'Reactin perusteet',
              tehtavia: 10,
              id: 1
            },
            {
              nimi: 'Tiedonvälitys propseilla',
              tehtavia: 7,
              id: 2
            },
            {
              nimi: 'Komponenttien tila',
              tehtavia: 14,
              id: 3
            }
          ]
        },
        {
          nimi: 'Node.js',
          id: 2,
          osat: [
            {
              nimi: 'Routing',
              tehtavia: 3,
              id: 1
            },
            {
              nimi: 'Middlewaret',
              tehtavia: 7,
              id: 2
            }
          ]
        }
    ]
  
    return (
      <div>
        <Ohjelma kurssit={kurssit} />
      </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));