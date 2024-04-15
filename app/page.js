"use client"
import React, { useState } from 'react'

function page() {
  const [tittle, settittle] = useState("");
  const [descp, setdescp] = useState("");
  let [tasks, settasks] = useState([]);
  //submit fun.
  const submit_it = (e) => {
    e.preventDefault();
    
    // console.log(descp);
    settasks([...tasks, { tittle, descp }]);
    // console.log(tasks);
    settittle("");
    setdescp("");
  }
  const deleteTask = (ind)=>{
  //  console.log(tasks);
   const coppyy=[...tasks];
   coppyy.splice(ind,1)
   settasks(coppyy);
   console.log(coppyy);
  //  console.log(tasks);
  }
  // render tasks
  let renderTasks = <div>
    <h2 className='text-center text-4xl text-bold mt-[10vw]'>Nothing to do Today.</h2>
  </div>
  if(tasks.length>0){renderTasks = tasks.map((elem, ind) => {
    return (<div className='flex items-center justify-between py-8 px-12 border-b-2 border-black-300 bg-zinc-600' >
     
      <h4 className=''>{elem.tittle}</h4>
      <h6 className=''>{elem.descp}</h6>
      <button key={ind} className='text-red-400 ' onClick={()=>{deleteTask(ind)}}>Delete</button>
      
    </div>)
  })}
  return (
    <>
      <div className='nav w-full h-24 bg-gray-400 flex items-center justify-center'>
        <h1 className=' text-black text-5xl font-bold border-b-4 border-black'>My Todo</h1>
      </div>
      <form className='p-10 flex items-center justify-center bg-gray-400 gap-[5vw]' onSubmit={submit_it}>
        <input className=' rounded-xl  h-10 w-50 p-5 '
          placeholder='Enter tittle'
          value={tittle}
          onChange={(e) => {
            settittle(e.target.value);
          }} />
        <input className=' rounded-xl  h-10 w-50 p-5'
          placeholder='Description'
          value={descp}
          onChange={(e) => {
            setdescp(e.target.value);
          }}
        />
        <button className=' border-2 bg-black text-white rounded-xl px-4 py-2 border-none'>Add This Task</button>
      </form>
      <hr />
      <div className='h-screen w-full text-white'>
        {renderTasks}
      </div>
    </>
  )
}

export default page