import React from 'react'
import data from '../data.json';
import { useState } from 'react';



function Preview() {
    const [details,setdetails] = useState(data);
  return (
    <div className='hero'>
        {
          
          details.map((d)=>{
            console.log(d)
            return (
              <div className='full-container'>
                <div className='image-container'>
                  <img src={require(`${d.images.thumbnail}`)} />
                </div>
                <div className='data-container'>
                  <h2>{d.name}</h2>
                  <p>{d.artist.name}</p>
                </div>
                {/* <div className='overlay'></div> */}
              </div>
              
            )
          })
        }
        
      </div>
  )
}

export default Preview