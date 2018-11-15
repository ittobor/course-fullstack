import React from 'react'

const Numerot = ({ taa }) => {
    const contactsToShow = taa.state.filter.length === 0 ?
    taa.state.persons :
    taa.state.persons.filter( person => person.name.toUpperCase().startsWith(taa.state.filter.toUpperCase()) )
    return (
        <div>
          <h2>Numerot</h2>
          <ul>
            {contactsToShow
              .map(person => 
              <div key={person.name}>
                {person.name} {person.number} 
                <button onClick={taa.removePersonOf(person.name, person.id)}>poista</button>
              </div>)}
          </ul>
        </div>
    )
}

export default Numerot