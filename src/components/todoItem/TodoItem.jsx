import tick from "./../../assets/tick.png"
import not_tick from "./../../assets/not_tick.png"
import delete_icon from "./../../assets/delete.png"
export default function TodoItem({text,id,isComplete,deleteTodo,toggle}) {
  return (
    <div className='flex items-center my-3 gap-2'>


        <div onClick={()=>{toggle(id)}} className=" flex flex-1 items-center cursor-pointer ">
            <img src={isComplete ? tick : not_tick} alt="icon" />
            <p className={`  text-slate-700 ml-4 text-[17px ] ${isComplete ? "line-through text-green-600":""}`}>{text}</p>
        </div>
            
<img

onClick={()=>{

{deleteTodo(id)}

}}

src={delete_icon} alt="delete_icon" className="h-3.5 cursor-pointer" />

    </div>
  )
}
