import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Topnav = () => {
    const [query, setquery] = useState("");
    
    console.log(query);
  return (
    <div className='w-full h-[10vh] relative flex justify-start items-center ml-[25vh]'>
        <i class="text-zinc-400 text-2xl ri-search-line"></i>
        <input
            onChange={(e) => setquery(e.target.value)}
            value={query}
            className='text-zinc-200 w-[50%] mx-7 p-2 outline-none border-none rounded bg-transparent'
            type="text" 
            placeholder='search anything'
        />
        { query.length > 0 && 
        <i  onClick={() => setquery("")} 
            class="text-zinc-400 text-2xl ri-close-line"></i>
        }
        <div className=' absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[90%] overflow-auto'>
            {/* <Link className='hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-9 flex justify-start items-center border-b-2 border-zinc-100'>
                <img src="" alt="" />
                <span>Hello Everyone</span>
            </Link> */}
        </div>
    </div>
  )
}

export default Topnav