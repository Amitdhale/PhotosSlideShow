import React from 'react'
import Navbar from "./Navbar";
import data from "../data.json";
import { useEffect, useState } from "react";
import left from "../shared/icon-back-button.svg";
import right from "../shared/icon-next-button.svg";
import fullscreen from "../shared/icon-view-image.svg";
import { Link} from "react-router-dom";

function Details({id}) {
    const link = "https://amitdhale.github.io/PhotosSlideShow/";
    const [datachanged,sedatachanged] = useState(true); 
    const [next,setnext] = useState(false)
    // const [prev,setprev] = useState(false)
    const [element,setelement] = useState(data[0]);
    
  const val = ((id) / data.length) * 100;
  const [load, setload] = useState(false);
  const [showmodal,setshowmodal] = useState(false);
  const p = (+id-1)%data.length;
  const n = (+id+1)%data.length;
  useEffect(() => {
    if(id >=0 && id < data.length){
      setload(false);
      setTimeout(() => {
        setelement(data[id]);
        setload(true);
      }, 0);
    }
  }, []);
  return (
    
    <div className="container">
    <Navbar  stopbutton={true}/>
    <div
      className="main-block"
      style={{ transform: load ? "translateX(0%)" : "translateX(100%)",opacity:next?"0":"1"}}
      >
      <div className="left">
        <div className="image-container">
          <img src={link + element.images.hero.large} className="item-image" />
          <button className="fullscreen-btn" onClick={()=>{setshowmodal(true)}}>
            {" "}
            <img src={fullscreen} /> view image
          </button>
          <div className="item-details">
            <h2>{element.name}</h2>
            <p>{element.artist.name}</p>
          </div>
          <div className="artist">
            <img src={link + element.artist.image} />
          </div>
        </div>
      </div>
      <div className="right">
        <p>
          {element.description}
        </p>
        <a href={element.source}>GO TO SOURCE</a>
        <div className="year">{element.year}</div>
      </div>
    </div>
    <div
      className="navigation"
      style={{
        borderImageSource: `linear-gradient(to right, rgb(0, 0, 0) ${val}%, rgb(229, 229, 229) 1%)`,
      }}
    >
      <div className="item">
          <h4>{element.name}</h4>
          <p>{element.artist.name}</p>
      </div>
      <div className="navgiator">
          <Link to={ +id-1 <= 0 ? "/":`/gallery/${(+id-1)%data.length}`}
          onClick={()=>{
            setnext(true)
            setTimeout(()=>{
              setelement(data[+id-1]);
              setnext(false);
            },500)
          }}><img src={left}  /></Link>
          <Link to={+id+1 >= data.length ? "/": `/gallery/${(+id+1)}`} onClick={()=>{
            setnext(true)
            setTimeout(()=>{
              setelement(data[+id+1]);
              setnext(false);
            },500)
          }}><img src={right} /></Link>
        
      </div>
    </div>
    <div className="modal" style={{display: showmodal? "block":"none"}}>
      <div className="modal-container">
      <div className="text" onClick={()=>{setshowmodal(false)}}>Close</div>
      <div>
          <img src={link + element.images.hero.large} />
      </div>
      </div>
    </div>
  </div>
  )
}

export default Details