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
        <div className="i-right"> 
          <img className="right-img" src={Modern} alt=''></img>
          <img className="right-img" src={Modern} alt=''></img>
          <img className="right-img" src={Modern} alt=''></img> 

        <div className="i-right-text">
          {/* <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Welcome to my Portfolio</Accordion.Header>
                <Accordion.Body>
                  After ten years working within the music industry managing tours and artists across the globe,I have begun the journey into a new career of software development.
                </Accordion.Body>
              </Accordion.Item>
          </Accordion> */}
        </div>
      </div>

    </div>
  )
}
