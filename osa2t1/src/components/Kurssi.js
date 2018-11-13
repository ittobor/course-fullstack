import React from 'react'

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

export default Kurssi