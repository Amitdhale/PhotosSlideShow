import React from "react";
import "../Description.css";
import Pagenotfound from './Pagenotfound';
import {useParams } from "react-router-dom";
import Details from "../components/Details";
import data from "../data.json";


function SlideShow() {
    const {id} = useParams();
  return (
    <>
    {(id >= 0 && id < data.length) ? <Details id={id}/>: <Pagenotfound/>}
    </>
    )
    

}

export default SlideShow;
