import React from 'react'

const Maat = ({ taa }) => {
    const countriesToShow = taa.state.finder.length === 0 ?
    taa.state.countries :
    taa.state.countries.filter( country => country.name.toUpperCase().startsWith(taa.state.finder.toUpperCase()) )

    if (countriesToShow.length > 10) {
      return (
        <div>
            too many counties
        </div>
      )
    } else if (countriesToShow.length === 1) {
      return (      
                <div>
                <h2>{countriesToShow[0].name}</h2>
                <img src={countriesToShow[0].flag} alt={countriesToShow[0].flag} height="96" width="144" />
                <div>capital: {countriesToShow[0].capital}</div>
                <div>population: {countriesToShow[0].population}</div>
                </div>
      )
    } else {

      return (
        <div onClick={taa.onNameClick}>
              {
                countriesToShow.map( country => <div key={country.name} value={country.name}>{country.name}</div> ) 
              }
        </div>
      )
    }
}

export default Maat