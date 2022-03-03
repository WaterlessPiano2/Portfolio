import * as React from 'react'
import {
  resolveToWalletAddress,
  getParsedNftAccountsByOwner
} from '@nfteyez/sol-rayz'

const PublicKeyInput = ({ nfts }) => {
  const [key, setKey] = React.useState(
    '489RFKuM1fpZuczdHV3qsPoJ2K4Nm6hYHdSzGSWuRn2q'
  )

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    const publicAddress = await resolveToWalletAddress({
      text: key
    })
    const nftArray = await getParsedNftAccountsByOwner({
      publicAddress
    })
    const metadatas = await fetchMetadata(nftArray)
    return nfts(metadatas)
  }

  const fetchMetadata = async (nftArray) => {
    let metadatas = []
    for (const nft of nftArray) {
      await fetch(nft.data.uri)
        .then((response) => response.json())
        .then((meta) => {
          metadatas.push(meta)
        })
    }
    return metadatas
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter a public key to see the NFTs in it:
        <input
          style={{
            display: 'flex',
            padding: 8,
            border: '1px solid lightgrey',
            width: 650,
            borderRadius: 5
          }}
          type="text"
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
      </label>
      <input
        type="submit"
        value="Submit"
        style={{
          display: 'flex',
          padding: 8,
          marginTop: 8,
          border: '1px solid lightgrey',
          borderRadius: 5
        }}
      />
    </form>
  )
}

export default PublicKeyInput
