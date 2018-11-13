import React from 'react'

const LisaaTiedot = ({ taa }) => {
    return (
      <form onSubmit={taa.addEntry}>
      <h2>Lisää uusi</h2>
      <div>
        nimi: <input 
                value={taa.state.newName}
                onChange={taa.onNameChange}  />
      </div>
      <div>
        numero: <input 
                value={taa.state.newNumber}
                onChange={taa.onNumberChange}  />
      </div>
      <div>
        <button type="submit">lisää</button>
      </div>
      </form>
    )
}

export default LisaaTiedot