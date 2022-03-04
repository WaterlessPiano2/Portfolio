import { useState } from 'react'
import Wallet from './Wallet'
import Galery from './Galery'

const YourNFTs = () => {
  const [data, setData] = useState([])
  return (
    <>
      <Wallet nfts={async (x) => setData(x)} />
      {data?.length ? <Galery nfts={data} /> : null}
    </>
  )
}

export default YourNFTs
