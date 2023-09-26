import React from 'react'
import datas from '../utils/memeData.json'


const Meme = () => {

  const [memeImage,setImage] = React.useState("")

    const onClick =(event)=>{
      event.preventDefault()
      // console.log('clicked');
      const memeArray =datas.data.memes
      const randomNumber = Math.floor(Math.random() * memeArray.length)
      const url = memeArray[randomNumber].url
      setImage(memeArray[randomNumber].url)
    }

  return (
    <div>
      <main className='flex flex-col justify-center items-center '>
  <form className='grid grid-cols-2  mt-12 w-1/2' >
    <input className="shadow appearance-none border rounded text-gray-700 mr-3 leading-tight focus:outline-none focus:shadow-outline" id='top' type="text" placeholder="Top text" autoComplete="off" />
    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id='bottom'  type="text" placeholder="Bottom text" autoComplete="off" />
    <button onClick={onClick} className='bg-[#8324a5] py-2 px-3 grid col-span-2 mt-12' >Get a new meme image</button>
  </form>
  <img src={memeImage} className='w-1/2'/>
</main>

    </div>
  )
}

export default Meme
