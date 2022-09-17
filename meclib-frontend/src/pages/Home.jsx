import React, { useContext, useEffect } from 'react'
import BookList from '../components/book/BookList'
import Hero from '../components/hero'
import { MeclibContext } from '../context/AppContext'

const Home = () => {
    // const {getAllBooks} = useContext(MeclibContext)
    // useEffect(() => {
    //     getAllBooks()
    // }, [])
  return (
    <div className='w-[100%]'>
        <Hero />
        <BookList/>
    </div>
  )
}

export default Home