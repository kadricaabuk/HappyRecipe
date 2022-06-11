import React from 'react'
import { ListItem } from './ListItem'

export const List = ({ meals }) => {
  return (
    <div className='grid grid-cols-3 gap-4'>
      {
        meals.map((m, index) => (
          <ListItem 
          key={index}
          name={m.name}
          img={m.imageURL}
          orgURL={m.originalURL}
          />
        ))
      }
    </div>
  )
}
