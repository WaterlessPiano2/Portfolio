import * as React from 'react'

const Galery = ({ nfts }) => {
  const renderNfts = () => {
    return nfts.map((metadata, index) => {
      return (
        <div key={index}>
          <img src={metadata?.image} alt="nft" width="200" />
          {metadata?.name}
        </div>
      )
    })
  }
  return (
    <div>
      <h1>NFT List</h1>
      {renderNfts()}
    </div>
  )
}

export default Galery
