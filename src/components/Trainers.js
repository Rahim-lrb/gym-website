import React from 'react'
import Trainer1 from '../img/trainer-1.jpg'
import Trainer2 from '../img/trainer-2.jpg'
import Trainer3 from '../img/trainer-3.jpg'

import {BiLogoFacebook} from 'react-icons/bi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {GrGoogle} from 'react-icons/gr'
import {BiLogoTwitter} from 'react-icons/bi'



export default function Trainers() {
  return (
    <div className='trainers' style={{textAlign:"center"}}>
      <div className='title'>our trainers</div>
      <hr className='line' style={{margin:"auto"}}/>
      <p className='description'>Our trainers are more than just experts in exercise; they are passionate about helping you achieve your health and fitness goals. Our trainers are equipped to tailor workout programs to meet your unique needs.</p>

      {/* <div className='trainees'>
        
        <div className='t'>
          <div className='image'>
            <img alt='trainer1' src={Trainer1}></img>
          </div>
          <div className='content'>
            <div className='name'>Mark Harris</div>
            <div className='job'>HIIT and Functional</div>
            <p>His energetic and dynamic workouts are designed to push your limits, boost metabolism, and torch calories.</p>

            <div className='socials'>
              <BiLogoFacebook></BiLogoFacebook>
              <AiOutlineInstagram></AiOutlineInstagram>
              <GrGoogle></GrGoogle>
              <BiLogoTwitter></BiLogoTwitter>
            </div>

            <hr/>
          </div>
        </div>
      </div> */}

      <div class="grid">
        <div class="grid_card">
          <img src={Trainer1} alt="trainer"/>
        </div>
        <div class="grid_card">
          <div class="grid_content">
            <h4>James Rodriguez</h4>
            <h5>Strength and Conditioning</h5>
            <hr />
            <p>With a background in competitive sports, he's dedicated to helping you reach your peak physical performance.</p>
            <div class="socials">
              <a href='qsd'><BiLogoFacebook></BiLogoFacebook></a>
              <a href='zadazd'><AiOutlineInstagram></AiOutlineInstagram></a>
              <a href='qsdqsd'><GrGoogle></GrGoogle></a>
              <a href='qsdqd'><BiLogoTwitter></BiLogoTwitter></a>
            </div>
          </div>
        </div>
        <div class="grid_card">
          <img src={Trainer2} alt="trainer" />
        </div>
        <div class="grid_card">
          <div class="grid_content">
            <h4>Mark Harris</h4>
            <h5>HIIT and Functional</h5>
            <hr />
            <p>
              His energetic and dynamic workouts are designed to push your
              limits, boost metabolism, and torch calories.
            </p>
            <div class="socials">
              <a href='qsd'><BiLogoFacebook></BiLogoFacebook></a>
              <a href='zadazd'><AiOutlineInstagram></AiOutlineInstagram></a>
              <a href='qsdqsd'><GrGoogle></GrGoogle></a>
              <a href='qsdqd'><BiLogoTwitter></BiLogoTwitter></a>
            </div>
          </div>
        </div>
        <div class="grid_card">
          <img src={Trainer3} alt="trainer" />
        </div>
        <div class="grid_card">
          <div class="grid_content">
            <h4>Emily Davis</h4>
            <h5>Yoga and Mindfulness</h5>
            <hr />
            <p>
              Emily's sessions are about physical postures and also about
              cultivating inner peace and mindfulness.
            </p>
            <div class="socials">
              <a href='qsd'><BiLogoFacebook></BiLogoFacebook></a>
              <a href='zadazd'><AiOutlineInstagram></AiOutlineInstagram></a>
              <a href='qsdqsd'><GrGoogle></GrGoogle></a>
              <a href='qsdqd'><BiLogoTwitter></BiLogoTwitter></a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='grid' style={{height:"600px", width:"100%"}}>
        <div className='s' style={{ backgroundColor:"red"}}></div>
        <div className='s' style={{ backgroundColor:"green"}}></div>
        <div className='s' style={{backgroundColor:"black"}}></div>
        <div className='s' style={{ backgroundColor:"orange"}}></div>
        <div className='s' style={{ backgroundColor:"brown"}}></div>
        <div className='s' style={{ backgroundColor:"purple"}}></div>
      </div> */}
    </div>
  )
}
