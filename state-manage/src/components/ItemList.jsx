import React, {useContext} from 'react'
import { Item } from './Item'
import { contextProvider } from '../context/ItemContext'
export  function ItemList() {
    const [value, setValue] = useContext(contextProvider)
  return (
    <div>
      {value.map((item)=> (
        <Item name={item.name} genre={item.genre} key={item.id}/>
      ))}
    </div>
  )
}
