import React from 'react'
import header from "../img/header.png"
import About from './About'
import Classes from './Classes'
import Trainers from './Trainers'
import Pricing from './pricing'
import Testimonies from './Testimonies'
import Footer from './Footer'

export default function Home() {
    return (
        <div className='home' >
            <div className='header' style={{display: "flex", justifyContent:"space-between"}}>
                <div className='logo' style={{display:"flex", alignItems:"center"}}>
                    <img src='logo.png' alt='sdsd' style={{width:"40px", height:"30px", marginRight:"10px"}}></img>
                    <h2>power</h2>
                </div>

                    <ul className='links' style={{textDecoration:"none", display:"flex", gap:"2rem", alignItems:"center", margin:"2rem"}} >
                        <li style={{listStyle:"none"}}> <a href='hero' style={{textDecoration:"none"}}>Home</a></li>
                        <li style={{listStyle:"none"}}> <a href='about' style={{textDecoration:"none"}}>About</a> </li>
                        <li style={{listStyle:"none"}}> <a href='classes' style={{textDecoration:"none"}}>Classes</a> </li>
                        <li style={{listStyle:"none"}}> <a href='trainers' style={{textDecoration:"none"}}>Trainers</a> </li>
                        <li style={{listStyle:"none"}}> <a href='pricing' style={{textDecoration:"none"}}>pricing</a> </li>
                        <li className='contact' style={{listStyle:"none"}}> <a href='pricing' style={{textDecoration:"none", color:"white"}}>contact us</a> </li>
                    </ul>
            </div>

            <div className='hero' style={{display:"flex", justifyContent:"space-between", alignItems:"center" , height:"100vh"}}>
                <div className='typography'>
                    <h1>build your body & <span>shape yourself</span> </h1>
                    <hr></hr>
                    <p className='description'>Unleash your potential and embark on a journey towards a stronger, fitter, and more confident you. Sign up for 'Make Your Body Shape' now and witness the incredible transformation your body is capable of!</p>
                    <div className='contact' style={{listStyle:"none", width:"130px"}}> <a href='pricing' style={{textDecoration:"none"}}>contact us</a> </div>
                </div>
                
                <div className='image'>
                    <img src={header}   alt='sdssd' style={{width: '500px', height:"625px"}}/>
                </div>
            </div>

            <About></About>
            <Classes></Classes>
            <Trainers></Trainers>
            <Pricing></Pricing>
            <Testimonies></Testimonies>
            <Footer></Footer>
        </div>
    )
}
