import { useState } from 'react'

function Login(props) {
    const [name, setName] = useState("")
  
    return (
      
      <div style={{width:"260px",backgroundImage:"url(https://i.ibb.co/3cQ6swn/pngwing-com-1.png)",backgroundSize:"contain",backgroundPosition:"center", backgroundRepeat:"no-repeat"}} className="h-[400px] m-5 pt-[49px] pb-[52px] px-[46px] " >
            <div className='w-[100%] h-[100%] bg-[#EAEBE6] flex flex-col items-center justify-between'>
                  <div>
                  <img src="https://i.ibb.co/phyPK3t/Pngtree-blooming-grey-antique-flower-6517437-1.png" alt="" srcset="" className='w-3/5 mx-auto pt-11' />
                  <h3 className='text-center'>Chat Test</h3>
                  </div>
            <input type="text" className="input1  w-3/4  " placeholder='Enter Username'  onChange={(e)=>e.target.value!=""?setName(e.target.value):""}/> 
            <a className='btn-chat w-full' onClick={()=>props.fun(name)}>Log In</a>
            </div>
               
         </div>

)
}

export default Login