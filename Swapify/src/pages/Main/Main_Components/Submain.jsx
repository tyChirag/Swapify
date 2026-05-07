import React from 'react'

const Submain = () => {
  return (<div className='flex flex-col gap-0.5'>
    <div className='bg-blue-600 flex justify-between rounded-t-2xl  px-3 py-4 m-5 '>
        <img src="" alt="" />
        <div className='flex flex-col align-middle text-center gap-5'>
            <h1 className='text-3xl font-black text-white'>Trade What You Have</h1>
            <p className='text-white'>Exchnage items with people near you without wasting money {<br/>}
                "One Person's Unused item is Another Person's Dream Product"
            </p>
            <div>
            <input className=' rounded-[8px] bg-white  w-1/2' type="text" placeholder='Search for items you want...' />
            <button className='border-2 border-white font-bold rounded-[7px] text-white active:scale-95' >Search</button>
            </div>
           
        </div>
          <img src="" alt="" />
    </div>
     <div className='flex font-semibold bg-black text-white gap-5 justify-between px-3 rounded-b-2xl py-2'>
                <h1 className='text-blue-600'>Live Swaps</h1> 
                <h1>Rahul swapped iPhone for PS5</h1>
                <h1>Aman traded Laptop for Cycle</h1>
                <h1>Priya exchanged Study Table for Office Chair</h1>
                <h1>Karan got Smart TV for his Old Phone</h1>
                <h1 className='text-green-600'>Live</h1>
            </div >
            </div>
  )
}

export default Submain
