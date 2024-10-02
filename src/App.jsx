import { useState } from 'react'

import './App.css'
import John from './components/jhon'
import Amy from './components/amy'
import Login from './components/Login'
function App() {
  const [arrChat, setArrChat] = useState([])
  const [loggedInU1, setLoggedInU1] = useState("")
  const [loggedInU2, setLoggedInU2] = useState("")
  return (
    <>
     <section className='w-4/5 mx-auto flex  items-center justify-around h-96  flex-wrap text-sm'>
     <div className='absolute top-20 left-2 text-[#3C3B36]'>
      <span className='tracking-widest uppercase text-[#edc64a] text-bold text-3xl'>Try</span><br/>
        Real time<br/>
        chat test
     </div>
     {loggedInU1?<John fun={setArrChat} chat={arrChat} name={loggedInU1}/>:<Login fun={setLoggedInU1} />}
      
     {loggedInU2? <Amy fun={setArrChat} chat={arrChat} name={loggedInU2}/>:<Login fun={setLoggedInU2} />}

     
     
     </section>
     <div className='absolute top-[50vh] h-[50vh] w-[100%] bg-[#edc64a] -z-50'>
     </div>
    </>
  )
}

export default App
