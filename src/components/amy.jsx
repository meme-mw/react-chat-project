import { useState } from 'react'
import Comments from './Comments'
function amy(props) {
    const [text1, setText1] = useState("")
  
    return (
        <div style={{width:"260px",backgroundImage:"url(https://i.ibb.co/3cQ6swn/pngwing-com-1.png)",backgroundSize:"contain",backgroundPosition:"center", backgroundRepeat:"no-repeat"}} className="h-[400px] m-5 py-12 pl-[45px] pr-[45px]" >
            <div className='w-[100%] h-[100%] bg-[#FAF6F0]'> 
            <div className="h-[80%] w-5/5 overflow-auto " style={{scrollbarWidth: "none"}}>
        {props.chat.length>=1?props.chat.map((el)=><Comments cmntId={el[0]} comment={el[1]} uId={1} name={el[2]}/>):""}
        </div>
        <label className="input input-bordered flex items-center p-1">
           
           <textarea type="text" placeholder='Send Text' className="input  w-4/4 grow h-[100%] p-0" onChange={(e)=>e.target.value!=""?setText1(e.target.value):""} />
           <img  src="https://i.ibb.co/sHVJ3B1/pngaaa-com-7708063-2.png" className="w-5" alt="" srcset="" onClick={()=>props.fun([...props.chat,[1,text1,props.name]])}/>
         </label>
   </div>
   </div>
    )
}

export default amy