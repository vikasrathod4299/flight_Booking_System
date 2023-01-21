import React from 'react'

const FiltersCard = ({handleChange}) => {

  return (
    <div className='flex flex-col items-center bg-white shadow-md rounded-lg rounded-md h-52 w-40 mt-10'>
            <p className='text-bold'>Preferd Airlines</p>
        <div className='flex flex-col gap-y-2 p-3'>
            <label className='cursor-pointer flex items-center gap-x-2'>
                <input type="checkbox" onChange={handleChange} name='Air asia' value={'Air asia'}/>    
                <img className="h-4 shadow-lg" src={'https://upload.wikimedia.org/wikipedia/commons/f/f5/AirAsia_New_Logo.svg'} alt="ageincy logo"/>
                <span>Air asia</span>
            </label>
            <label className='cursor-pointer flex items-center gap-x-2'>
                <input type="checkbox" onChange={handleChange} name='Vistara' value={'Vistara'}/>    
                <img className="h-4 shadow-lg" src={'https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/UK.png?v=14'} alt="ageincy logo"/>
                <span>Vistara</span>
            </label>
            <label className='cursor-pointer flex items-center gap-x-2'>
                <input type="checkbox" onChange={handleChange} name='Indigo' value={'Indigo'}/>    
                <img className="h-4 shadow-lg" src={'https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=14 '} alt="ageincy logo"/>
                <span>Indigo</span>
            </label>
            <label className='cursor-pointer flex items-center gap-x-2'>
                <input type="checkbox" onChange={handleChange} name='Spice jet' value={'Spice jet'}/>    
                <img className="h-4 shadow-lg" src={'https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/SG.png?v=14'} alt="ageincy logo" />
                <span>Spice jet</span>
            </label>
            <label className='cursor-pointer flex items-center gap-x-2'>
                <input type="checkbox" onChange={handleChange} name='Emirets' value={'Emirets'}/>    
                <img className="h-4 shadow-lg" src={'https://firebasestorage.googleapis.com/v0/b/clothing-shop-a42c9.appspot.com/o/air_agencies%2Fpngwing.com.png?alt=media&token=576e869e-c5d6-49e1-a97e-4d936e56b9e0'} alt="ageincy logo"/>
                <span>Emirets</span>
            </label>
        </div>
    </div>
  )
}

export default FiltersCard