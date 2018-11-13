import React from 'react'

const Finderi = ({ taa }) => {
      return (
          <div>
            find countries
            <input
              value={taa.state.finder}
              onChange={taa.onFinderChange}  />
          </div>
      )
}

export default Finderi