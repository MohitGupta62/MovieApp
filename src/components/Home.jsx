import React from 'react'
import Sidenav from './templates/Sidenav'
import Topnav from './templates/Topnav'

const Home = () => {
    document.title = "MovieApp | Homepage"
  return (
    <>
    <Sidenav/>
    <div className='w-[80%] h-full'>
      <Topnav/>
    </div>
    </>
  )
}

export default Home