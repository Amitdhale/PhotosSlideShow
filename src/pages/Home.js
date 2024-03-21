import Navbar from '../components/Navbar';
import data from '../Content';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";



function Home() {
  const [details,setdetails] = useState(data);
  const [load, setload] = useState(false);
  useEffect(() => {
    setload(false);
    setTimeout(() => {
      setdetails(data);
      setload(true);
    }, 0);
  }, []);
  return (
    <div className='container'>
      <Navbar/>
      <div className='hero'  style={{ opacity: load ? "1" : "0" }}>
        {
          
          details.map((d,index)=>{
            
            return (
              <Link to={'/gallery/' + index} key={index}>
              <div className='full-container' >
                  <img src={d.images.thumbnail} alt=""/>

                <div className='data-container'>
                  <h2>{d?.name}</h2>
                  <p>{d?.artist.name}</p>
                </div>
                <div className='overlay'></div>
              </div>
              </Link>
              
            )
          })
        }
        
      </div>
    </div>
  );
}

export default Home;
