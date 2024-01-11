export default function Swap(){
    return(
        <div style={{border:"1px solid #2e2b27"}} className="shadow-2xl  shadow-orange-500 p-10 m-4 rounded-md mb-20 min-w-60 border-gray-700 ">
        
        <p className="text-center ">Buy or Sell Tango to WETH or ETH</p>
        <input className="border border-gray-700 rounded-md p-2 w-full mt-4 bg-gray-800 bg-opacity-70" placeholder="0.0" />
        <input className="border border-gray-700 rounded-md p-2 w-full mt-4  bg-gray-800 bg-opacity-70" placeholder="0.0" />
        <p>Slippage</p>
        <input className="border border-gray-700 rounded-md p-2 w-full mt-4  bg-gray-800 bg-opacity-70" placeholder="0.0" />
        <button className="bg-orange-500 text-white rounded-md p-2 w-full mt-4">Swap</button>
     </div>
    )
}