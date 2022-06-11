import React from 'react'
import { List } from '../components/List'
import { useMeals } from '../hooks/useMeals.js'

export const HomePage = () => {

  const { meals, setMeals, isLoading: isLoadingMeals } = useMeals();
  return (
    <>
    <div className='grid grid-cols-3 gap-4 m-8 '>
      <div className='col-span-1 bg-gray-50 shadow-lg p-4 rounded-lg'>
        <h1 className='mb-8 font-bold text-5xl'>Meals</h1>
        <List meals={meals}/>
      </div>
    </div>
    </>
  )
}
