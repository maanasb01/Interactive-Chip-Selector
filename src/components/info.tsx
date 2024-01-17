import { useState } from "react";
import { IoInformationCircleSharp } from "react-icons/io5";
  

const Info = () => {
    const [showInfo,setShowInfo] = useState(false);
  return (
    <div className=" ml-5 absolute">
    <IoInformationCircleSharp onClick={()=>setShowInfo(!showInfo)} className="text-blue-950 h-10 w-10 cursor-pointer relative"/>
    {showInfo && <div className=" w-52 absolute text-sm flex bg-gray-200 rounded-lg p-2">
      <ul className="list-disc flex flex-col">
        <li>Devloped using Vite, React, Typescript, TailwindCSS</li>
        <li>Complete UI Replication</li>
        <li>Backspace on Empty search would highlight the Chip</li>
        <li>Pressing Backspace again would delete the latest chip.</li>
        <li>Keyboard Key Bindings:
          <ul className="list-inside list-disc">
            <li>esc for quit searching</li>
            <li>Arrow Keys for Navigation inside Search</li>
            <li>Enter to select</li>
          </ul>
        </li>
        <li>Mouse Click Anywhere else would close search box</li>
      </ul>

    </div>}
    </div>
  )
}
export default Info;