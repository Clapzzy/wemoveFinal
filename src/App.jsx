import { useState } from 'react'
import './App.css'
import background from "../src/assets/background.png"
import { useQueries } from '@tanstack/react-query'
import { fetchKlekove, fetchKolelo, fetchKoremni, fetchLicevi } from './helper'

function App() {
  const [count, setCount] = useState(0)

  const leaderboards = useQueries({
    queries: [
      {
        queryKey: ['licevi'],
        queryFn: fetchLicevi,
      },
      {
        queryKey: ['koremni'],
        queryFn: fetchKoremni
      },
      {
        queryKey: ['klekove'],
        queryFn: fetchKlekove
      },
      {
        queryKey: ['kolelo'],
        queryFn: fetchKolelo
      }
    ]
  })

  if (leaderboards.isLoading) {
    console.log("Hello")
    return (
      <div className='w-full h-full bg-[#262626]' style={{ height: '100vh', backgroundImage: `url(${background})`, backgroundSize: 'cover' }} >
        <div className='flex flex-col items-center'>
          <h2 className='text-[#BFE500] text-9xl font-semibold mt-6 mb-3'>Loading...</h2>
        </div>
      </div>
    )
  }

  if (leaderboards.isError) {
    return (
      <div className='w-full h-full bg-[#262626]' style={{ height: '100vh', backgroundImage: `url(${background})`, backgroundSize: 'cover' }} >
        <div className='flex flex-col items-center'>
          <h2 className='text-[#BFE500] text-9xl font-semibold mt-6 mb-3'>error</h2>
        </div>
      </div>
    )
  }
  if (leaderboards.isSuccess) {
    console.log(leaderboards.data)
  }


  return (
    <div className=' flex flex-row  overflow-hidden justify-between px-6 w-full h-full bg-[#262626]' style={{ height: '100vh', backgroundImage: `url(${background})`, backgroundSize: 'cover' }} >
      <div className='flex flex-col items-center'>
        <h2 className='text-[#BFE500] text-4xl font-semibold mt-6 mb-3'>Лицеви опори</h2>
        <div className='bg-[#080807] opacity-70 w-[440px] h-[850px] p-9 rounded-[49px]'>
          {console.log(leaderboards)}
          {leaderboards[0].data.map((item, index) => {
            return (
              <div key={index} className='flex flex-row justify-between w-full pb-10'>
                <div className='flex items-baseline flex-row'>
                  <h3 className='text-[#95E519] font-semibold text-4xl tracking-tight'>{index + 1}.</h3>
                  <h3 className='text-[#C1F173] font-semibold text-3xl tracking-tight ml-2'> {item.name}</h3>
                </div>
                <h3 className='text-[#C4C4C4] font-semibold text-3xl tracking-tight mt-1'>{item.score}</h3>
              </div>
            )
          })}
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <h2 className='text-[#BFE500] text-4xl font-semibold mt-6 mb-3'>Коремни преси</h2>
        <div className='bg-[#080807] opacity-70 w-[440px] h-[850px] p-9 rounded-[49px]'>
          {console.log(leaderboards)}
          {leaderboards[1].data.map((item, index) => {
            return (
              <div key={index} className='flex flex-row justify-between w-full pb-10'>
                <div className='flex items-baseline flex-row'>
                  <h3 className='text-[#95E519] font-semibold text-4xl tracking-tight'>{index + 1}.</h3>
                  <h3 className='text-[#C1F173] font-semibold text-3xl tracking-tight ml-2'> {item.name}</h3>
                </div>
                <h3 className='text-[#C4C4C4] font-semibold text-3xl tracking-tight mt-1'>{item.score}</h3>
              </div>
            )
          })}
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <h2 className='text-[#BFE500] text-4xl font-semibold mt-6 mb-3'>Клекове</h2>
        <div className='bg-[#080807] opacity-70 w-[440px] h-[850px] p-9 rounded-[49px]'>
          {console.log(leaderboards)}
          {leaderboards[2].data.map((item, index) => {
            return (
              <div key={index} className='flex flex-row justify-between w-full pb-10'>
                <div className='flex items-baseline flex-row'>
                  <h3 className='text-[#95E519] font-semibold text-4xl tracking-tight'>{index + 1}.</h3>
                  <h3 className='text-[#C1F173] font-semibold text-3xl tracking-tight ml-2'> {item.name}</h3>
                </div>
                <h3 className='text-[#C4C4C4] font-semibold text-3xl tracking-tight mt-1'>{item.score}</h3>
              </div>
            )
          })}
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <h2 className='text-[#BFE500] text-4xl font-semibold mt-6 mb-3'>Колело 1 минута</h2>
        <div className='bg-[#080807] opacity-70 w-[440px] h-[850px] p-9 rounded-[49px]'>
          {console.log(leaderboards)}
          {leaderboards[3].data.map((item, index) => {
            return (
              <div key={index} className='flex flex-row justify-between w-full pb-10'>
                <div className='flex items-baseline flex-row'>
                  <h3 className='text-[#95E519] font-semibold text-4xl tracking-tight'>{index + 1}.</h3>
                  <h3 className='text-[#C1F173] font-semibold text-3xl tracking-tight ml-2'> {item.name}</h3>
                </div>
                <h3 className='text-[#C4C4C4] font-semibold text-3xl tracking-tight mt-1'>{item.score}km</h3>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
