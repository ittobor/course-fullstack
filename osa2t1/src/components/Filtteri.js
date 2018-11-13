import React from 'react'

const Filtteri = ({ taa }) => {
      return (
          <div>
            rajaa näytettäviä
            <input
              value={taa.state.filter}
              onChange={taa.onFilterChange}  />
          </div>
      )
}

export default Filtteri