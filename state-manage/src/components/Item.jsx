import React from 'react'

export function Item({name, genre}) {
  return (
    <div>
      <ul>
        <li>Movie: {name}</li>
        <li>Genre: {genre}</li>
      </ul>
    </div>
  )
}


