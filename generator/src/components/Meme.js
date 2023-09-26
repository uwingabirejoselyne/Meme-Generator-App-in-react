import React from 'react'

const Meme = () => {
    const Clicked=()=>{
        console.log('clicked');
    }
  return (
    <div>
      <main className='flex justify-center items-center '>
            <form className='grid grid-cols-2  mt-12 w-1/2  ' >
            <input className="shadow appearance-none border rounded text-gray-700 mr-3 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Top text"/>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Bottom text"/>
            <button className='bg-[#8324a5] py-2 px-3 grid col-span-2 mt-12' onClick={Clicked}>Get a new meme image </button>
            </form>
        </main>
    </div>
  )
}

export default Meme
