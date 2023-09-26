import React from 'react'

const Header = () => {
  return (
    <header className='bg-[#8324a5] flex justify-between items-center h-16 text-white px-12'>
      <div className='flex flex-row gap-4'>
      <img src={process.env.PUBLIC_URL + "/images/Troll.png " } className="w-5 h-5"/>
      <h2>Header component</h2>
      </div>
    <h4>React Course - Project 3</h4>
</header>
  )
}

export default Header
