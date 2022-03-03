import { useState } from 'react'
import PublicKeyInput from './PublicKeyInput'
import Galery from './Galery'

const YourNFTs = () => {
  const [data, setData] = useState([])
  return (
    <>
      
      <PublicKeyInput nfts={async (x) => setData(x)} />
      {data?.length ? <Galery nfts={data} /> : null}
    </>
  )
}

export default YourNFTs
