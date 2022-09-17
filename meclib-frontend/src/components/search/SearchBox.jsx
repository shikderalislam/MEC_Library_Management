import React, { useState } from 'react'
import {BiSearch, BiRightArrowAlt} from 'react-icons/bi'

const SearchBox = () => {
    const [searchTerm, setSearchTerm] = useState("")
  return (
    <div className='w-[100%] h-[40vh] bg-indigo-100'>
        <div className='w-[90%] h-[100%] m-auto grid place-items-center sm:w-[80%]'>
            <div className=' h-[100%] grid place-items-center'>
                <form action="" className='w-[360px] bg-white'>
                    <div className='flex px-[10px] justify-between items-center'>
                        <BiSearch className=' text-gray-400'/>
                        <input onChange={e => setSearchTerm(e.target.value)} placeholder='Search books' className='flex-1 p-[10px] focus:outline-none'/>
                        <button className='h-[100%] ml-[6px] grid place-items-center'>
                            <BiRightArrowAlt className='text-gray-400'/>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SearchBox