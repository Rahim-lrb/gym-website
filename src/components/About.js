import React from 'react'
import girl from "../img/about.png"
import points from '../img/dot-bg.png'
import price1 from '../img/price-1.png'
import price2 from '../img/price-2.png'
import price3 from '../img/price-3.png'
import { FaBeer } from 'react-icons/fa';


export default function About() {
  return (
    <div className='about'>
        <div className='girl' >
            <img src={points} style={{position:"absolute", top:"10rem", right:"3rem", zIndex:'-1', width:"250px", height:"189px", opacity:"0.5"}} alt='points'></img>
            <img src={girl} alt='girl'></img>
        </div>
        
        <div className='typography'>
          <div className='title'>our story</div>
          <hr className='line'/>
          <p className='description'>Led by our team of expert and motivational instructors, "The Class You Will Get Here" is a high-energy, results-driven session that combines a perfect blend of cardio, strength training, and functional exercises.</p>

          <div className='services'>

            <div className='serv'>
              <span><i class="ri-open-arm-line"></i></span>
              <div className='content'>
                <h4>Open Door Policy</h4>
                <p>We believe in providing unrestricted access to all individuals, regardless of their fitness level, age, or background</p>
              </div>
            </div>

            <div className='serv'>
              <span><i class="ri-open-arm-line"></i></span>
              <div className='content'>
                <h4>Fully Insured</h4>
                <p>Your peace of mind is our top priority, and our commitment to your safety extends to every aspect of your fitness journey.</p>
              </div>
            </div>

            <div className='serv'>
              <span><i class="ri-open-arm-line"></i></span>
              <div className='content'>
                <h4>Personal Trainer</h4>
                <p>With personalized workout plans tailored to your needs, we will ensure that you get the most out of your gym experience.</p>
              </div>
            </div>
          </div>

          <FaBeer />

        </div>
    </div>
  )
}
