import React, {useState, useContext} from 'react'
import { contextProvider } from '../context/ItemContext'
export  function AddItem() {
    const [name, setName] = useState("")
    const [genre, setGenre] = useState("")
    const [movies, setMovies] = useContext(contextProvider)

    const handleSubmit = (e)=>{
        e.preventDefault()
        setMovies((prevItem => [...movies, {name: name, genre: genre}]))
    }
    const handleItemName = (e)=>{
        setName(e.target.value)
    }
    const handleItemGenre = (e)=>{
        setGenre(e.target.value)
    }
  return (
    <form onSubmit={handleSubmit}>
    <input type="text" onChange={handleItemName} placeholder='add an movie name' />
    <input type="text" onChange={handleItemGenre} placeholder='add an movie genre' />
    <button type='submit'>add item</button>
  </form>
  )
}
