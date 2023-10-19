import React from 'react'
import dots from '../img/dot-bg.png'
import Class1 from '../img/class-1.jpg'
import Class2 from '../img/class-2.jpg'
import Class3 from '../img/class-3.jpg'
import Class4 from '../img/class-4.jpg'



export default function Classes() {
  return (
    <div className='classes'>
      <div className='title'>our classes</div>
      <hr className='line'/>
      <p className='description'>Discover a diverse range of exhilarating classes at our gym designed to cater to all fitness levels and interests. Whether you're a seasoned athlete or just starting your fitness journey, our classes offer something for everyone.</p>

      <div className='cards'>
        <div className='card'>
          <img className='dots' src={dots} alt='dots'/>
          <img src={Class1} alt='class1'/>
          <div className='content'>
            <h4>Strength Training</h4>
            <p>Resistance Training</p>
          </div>
        </div>

        <div className='card'>
          <img className='dots' src={dots} alt='dots'/>
          <img src={Class2} alt='class2'/>
          <div className='content'>
            <h4>Strength Training</h4>
            <p>Resistance Training</p>
          </div>
        </div>

        <div className='card'>
          <img className='dots' src={dots} alt='dots'/>
          <img src={Class3} alt='class3'/>
          <div className='content'>
            <h4>Strength Training</h4>
            <p>Resistance Training</p>
          </div>
        </div>

        <div className='card'>
          <img className='dots' src={dots} alt='dots'/>
          <img src={Class4} alt='class4'/>
          <div className='content'>
            <h4>Strength Training</h4>
            <p>Resistance Training</p>
          </div>
        </div>
      </div>
    </div>
  )
}
