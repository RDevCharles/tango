'use client';
import Swap from './components/Swap'
import Redeemer from './components/Redeemer'
import Balances from './components/Balances'
import Image from 'next/image'

export default function Home() {
  return (
    <main style={{backgroundImage:`url${"./tango.jpeg"}`}} className="flex min-h-screen flex-col items-center justify-center m-0 p-0 overflox-y-hidden">

      
<Image className="mt-8"
      src={"/tango.jpeg"}
     
      width={100}
        height={100}
    
    />
    <h1 className="mobile text-4xl font-bold text-center mt-4 mb-4">Tango</h1>
      <button className={`mobile top-4 mb-8 bg-[#ffaa66] bg-opacity-20 text-orange-900 rounded-md p-2 w-30 mt-4`}>Connect Wallet</button>
      <button className={` desktop absolute right-10 top-4 mb-8 bg-[#ffaa66] bg-opacity-20 text-orange-900 rounded-md p-2 w-30 mt-4`}>Connect Wallet</button>
 

<Balances/>


<Swap/>
   <Redeemer/>



 
   
 


 
    </main>
  )
}