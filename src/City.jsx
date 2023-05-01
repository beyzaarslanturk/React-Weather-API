import React from 'react'

const City = ({city}) => {
    console.log(city);
  return (
    <div>
        {city && (
          <>            
            <h1 className='font-mono text-center text-slate-600 text-lg'>{city.sys.country}</h1>
            <h1 className='font-mono text-center text-slate-600 text-lg'>{city.name}</h1>
            <h1 className='font-mono text-center text-slate-600 text-lg'>{city.main.temp}</h1>            
            <h1 className='font-mono text-center text-slate-600 text-lg'>{city.weather[0].main}</h1>
          </>
        )}
    </div>
  )
}

export default City