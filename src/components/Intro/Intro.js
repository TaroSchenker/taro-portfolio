import React from 'react'
import './Intro.css'
import Github from '../../img/github1.png'
import Linkedin from '../../img/linkedin.png'
import Modern from '../../img/modernabstract.png'




export default function Intro() {
  return (
    <div className="intro">
   
        <div className="i-left"> 
            <div className="i-name">
                <span>Hi, I am </span>
                <span>Taro Schenker</span>
                <span>A Futureproof trainee and aspiring developer</span>
                <img className="left-img" src={Modern} alt=''></img>
            </div>
            <button className="i-button button">Hire me</button>
            <div className="i-icons">
            <a href="https://github.com/TaroSchenker" alt=''> 
              <img src={Github} alt=''></img>
            </a>
            <a href="https://github.com/TaroSchenker" alt=''> 
              <img src={Linkedin} alt=''></img>
            </a>
            <a href="https://github.com/TaroSchenker" alt=''> 
              <img src={Github} alt=''></img>
            </a>   
            <img className="left-img" src={Modern} alt=''></img>
            </div>
        </div>
        <div className="i-right" style={{marginLeft: '100px'}}> 
          <img className="right-img" src={Modern} alt=''></img>
          <img className="right-img" src={Modern} alt=''></img>
          <img className="right-img" src={Modern} alt=''></img> 

        <div className="i-right-text">
          <span>From</span>
          <div >
              <span>Concert Tour Manager </span>
               <span id="and">&</span>
          </div>
              
                <span>Artist Manager</span>
                <span>To </span>
                <span>Developer </span>
        </div>
      </div>

    </div>
  )
}

