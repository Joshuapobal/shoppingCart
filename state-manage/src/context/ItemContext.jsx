import React, {useState,  createContext} from 'react'
import {v4 as uuid} from 'uuid'
uuid()

export const contextProvider = createContext()
export function ItemContext(props) {
    const [item, setItem] = useState([
        {
            name: 'Harry Potter',
            genre: 'Adventure',
            id: uuid()
        }

    ])
  return (
    <contextProvider.Provider value={[item, setItem]}>
     {props.children}
    </contextProvider.Provider>
  )
}


