import * as React from 'react'
import {
  resolveToWalletAddress,
  getParsedNftAccountsByOwner
} from '@nfteyez/sol-rayz'
import { useWallet } from '@solana/wallet-adapter-react'

const PublicKeyInput = ({ nfts }) => {
  const [key, setKey] = React.useState(
    '489RFKuM1fpZuczdHV3qsPoJ2K4Nm6hYHdSzGSWuRn2q'
  )
  const [status, setStatus] = React.useState('IDLE')
  const { publicKey } = useWallet()

  React.useEffect(() => {
    if (publicKey) setKey(publicKey.toBase58())
  }, [publicKey])

  console.log(publicKey)

  const handleSubmit = async (evt) => {
    setStatus('LOADING')
    evt.preventDefault()
    const publicAddress = await resolveToWalletAddress({
      text: key
    })
    const nftArray = await getParsedNftAccountsByOwner({
      publicAddress
    })
    const metadatas = await fetchMetadata(nftArray)
    setStatus('IDLE')
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
        Public key:
        <input
          style={{
            display: 'flex',
            padding: 8,
            border: '1px solid lightgrey',
            width: '100%',
            borderRadius: 5
          }}
          type="text"
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
      </label>
      <input
        disabled={status === 'LOADING'}
        className="submit"
        type="submit"
        value="Submit"
      />
      {status === 'LOADING' ? <span>Loading</span> : null}
    </form>
  )
}

export default PublicKeyInput
