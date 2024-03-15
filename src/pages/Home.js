import logo from "../shared/logo.svg"
import Navbar from '../components/Navbar';
import data from '../data.json';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
// import image from '../assets/guernica/artist.jpg'


function Home() {
  const [details,setdetails] = useState(data);
  const link = "https://amitdhale.github.io/PhotosSlideShow/";
  const [load, setload] = useState(false);
  useEffect(() => {
    setload(false);
    setTimeout(() => {
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
                  <img src={link + d.images.thumbnail}/>
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
