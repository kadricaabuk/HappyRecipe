import React from 'react'

export const ListItem = ({ name, img }) => {
 return (
    <div className="flex border-2 p-2 rounded-lg justify-center items-center text-center flex-col cursor-pointer hover:bg-gray-200">
      <div className="mb-2">
        <img className="inline-block h-16 w-16 rounded-full ring-2 ring-white" src={img} alt="" />
      </div>
      <div className=''>
        <h3 className="text-center font-semibold">{name}</h3>
      </div>

    </div>
  )
}

