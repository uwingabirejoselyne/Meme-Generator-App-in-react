import React from 'react'
import datas from '../utils/memeData.json'


const Meme = () => {

const [meme, setMeme] = React.useState(
    { top: "",bottom: "",randomImage: "http://i.imgflip.com/1bij.jpg" }
)
const [allMemeImages,setAllMemeImages] = React.useState(datas)

const changeMeme = (event)=>{
  const {name,type,value} =event.target
  setMeme(prevFormMeme =>{
    return{
      ...prevFormMeme,
      [name]: type === "text" ? value : undefined
    }
    
  })
}

    const onClick =(event)=>{
      event.preventDefault()
      const memeArray =allMemeImages.data.memes
      const randomNumber = Math.floor(Math.random() * memeArray.length)
      const url = memeArray[randomNumber].url
      setMeme(memeArray[randomNumber].url)
      setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
    }))
    }

  return (
    <div>
      <main className='flex flex-col justify-center items-center '>
     <form className='grid grid-cols-2  mt-12 w-1/2' >
    <input className="shadow appearance-none border rounded text-gray-700 mr-3 leading-tight focus:outline-none focus:shadow-outline" id='top' type="text" placeholder="" autoComplete="off" name='top'  onChange={changeMeme} value ={meme.top} />
    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id='bottom'  type="text" placeholder="Bottom text" autoComplete="off" name='bottom'  onChange={changeMeme} value={meme.bottom} />
    <button onClick={onClick} className='bg-[#8324a5] py-2 px-3 grid col-span-2 mt-12' >Get a new meme image</button>
  </form>
  <img src={meme.randomImage} className='w-1/2 relative'/>
  <p className='absolute top-80 text-white'> {meme.top} {meme.bottom}</p>
</main>

    </div>
  )
}

export default Meme
