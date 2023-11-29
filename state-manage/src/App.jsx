import React from 'react'
import { ItemList } from './components/ItemList'
import { ItemContext } from './context/ItemContext'
import { AddItem } from './components/AddItem'
function App() {
  return (
   <ItemContext>
     <div className='App'>
      <ItemList/>
      <AddItem/>
     </div>
   </ItemContext>
  )
}

export default App
