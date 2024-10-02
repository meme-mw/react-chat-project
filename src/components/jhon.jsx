import { useState } from 'react'
import Comments from './Comments'

function jhon(props) {
    const [text, setText] = useState("")
    
    const chatBox = document.getElementById('chatBox');
    

    function send(){props.fun([...props.chat,[2,text,props.name]]);
      
      setTimeout(scrll, 500)
      console.log(chatBox.scrollHeight)
// Function to scroll the chat box to the bottom

}
function scrll(){
   chatBox.scrollTop = chatBox.scrollHeight+40
   chatBox1.scrollTop = chatBox1.scrollHeight+40
}
    return (
      
      <div style={{width:"260px",backgroundImage:"url(https://i.ibb.co/3cQ6swn/pngwing-com-1.png)",backgroundSize:"contain",backgroundPosition:"center", backgroundRepeat:"no-repeat"}} className="h-[400px] m-5 py-12  pl-[45px] pr-[45px] " >
            <div className='w-[100%] h-[100%] bg-[#FAF6F0]'> 
            <div className="h-[80%] w-5/5 overflow-auto mb-5" id='chatBox' style={{scrollbarWidth: "none"}}>
            
  {props.chat.length>=1?props.chat.map((el)=><Comments cmntId={el[0]} comment={el[1]} uId={2} name={el[2]} />):""}
          
           
            </div>
          
            <label className="input input-bordered flex items-center p-1 ">
           
  <textarea type="text" placeholder='Send Text' className="input  w-4/4 grow h-[100%] p-0 " onChange={(e)=>e.target.value!=""?setText(e.target.value):""} />
  <img onClick={send} src="https://i.ibb.co/sHVJ3B1/pngaaa-com-7708063-2.png" className="w-5" alt="" srcset="" />
</label>
        
         
       </div>
       </div>
    )
}

export default jhon