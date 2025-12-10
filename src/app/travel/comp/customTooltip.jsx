import React from 'react'

const customTooltip = ({feature}) => {
  return (
    <div className="w-52 text-center bg-base-300 px-10 py-5 border border-x-gray-500 border-y-gray-500 rounded-2xl shadow-2xl">
      <strong>{feature.properties.name}</strong> <br />
      <br></br>
      <span className="text-gray-600">Date Visited:</span> <br></br>
      {Array.isArray(feature.value) ? ( 
        <ul> 
            {feature.value.map((dateRange, index) => ( 
                <li key={index}>{dateRange}</li> 
            ))} 
        </ul> 
        ) : ( 
        <div>{feature.value}</div>
        )}
      <br />
    </div>
  );
}

export default customTooltip