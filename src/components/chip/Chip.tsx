import { IoCloseOutline } from "react-icons/io5"
import dummyProfile from "../../assets/dummy-profile.png"


type Props = {
    img?:string,
    firstName?:string,
    lastName?:string,
    onRemove:()=>void,
    isHighlighted:boolean
}

export default function Chip({img=dummyProfile,firstName="John",lastName="Doe",onRemove,isHighlighted=false}: Props) {
  return (
    <>
    <div className={`bg-gray-400 flex items-center gap-x-1 pr-1 h-6 rounded-xl min-w-24 ${isHighlighted?'border-2 border-blue-600':''}`} >
          <img src={img} alt="" className='h-full rounded-xl' />
          <span className=' pb-1 text-sm'>{firstName+" "+lastName}</span>
          <IoCloseOutline onClick={onRemove} className='text-lg cursor-pointer hover:bg-gray-300 rounded-xl '/>
        </div>
    </>
  )
}