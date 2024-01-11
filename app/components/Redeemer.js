'use client';
import React,{useState} from 'react';

import { IoInformationCircleOutline } from "react-icons/io5";

export default function Redeemer() {
    const [showInfo,setShowInfo] = useState("none");

    const handleShowInfo = () => {
        if(showInfo === "none") setShowInfo("block");
        else setShowInfo("none");
       
    }
    return (
        <div style={{width:"20rem"}} className="flex flex-col items-center justify-center ">
            <div className="flex flex-row items-center justify-center">
        <h1 className="text-4xl font-bold text-center mr-2">Redeemer</h1>
        <IoInformationCircleOutline onClick={handleShowInfo} className="cursor-pointer" size={24} />
        </div>
        <p className="text-center">Balance v1 0.01</p>
        <input className="border border-gray-700 rounded-md p-2 w-full mt-4  bg-gray-800 bg-opacity-70" placeholder="0.0" />
        <button className="mb-8 bg-orange-500 text-white rounded-md p-2 w-full mt-4">Redeem</button>
        
        <div style={{display:showInfo}} className="flex flex-col items-center justify-center">

        <p className="text-sm">
        This feature is to migrate V1 TANGO to V2 TANGO. Most have already done this.
        </p>
        <p className="text-sm">The V1 contract address is 0xa54de8609818df994B8eeeBf0167f2CB8f3ecC6F</p>
        <p className="text-sm">The V2 contract address is 0xe7369e945a40becbfd307fe3983aa0437dd3bff9</p>
        </div>
                </div>
    )
};