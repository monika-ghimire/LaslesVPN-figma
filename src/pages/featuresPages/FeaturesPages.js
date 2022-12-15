import React from 'react'
import './features.css'
import secondImg from '../../assest/secondImg.png'
import checkIcon from '../../assest/checkIcon.jpg'
export default function FeaturesPages() {
  return (
    <>
    <div className='features-content-wapper'>
    <div className='row features-content-wapper-row '>
      <div className='col-md-6 features-content-img'>
        <img src={secondImg}/>
      </div>
      <div className='col-md-6  Features-list-holder'>
        <h2>We Provide Many 
          <br/>Features You Can Use</h2>
          <p>You can explore the features that we provide with fun and 
            <br/>have their own functions each feature.</p>
            <p><span><img src={checkIcon}/></span>Powerfull online protection.</p>
            <p><span><img src={checkIcon}/></span>Internet without borders.</p>
            <p><span><img src={checkIcon}/></span>Supercharged VPN</p>
            <p><span><img src={checkIcon}/></span>No specific time limits.</p>

      </div>

    </div>
    </div>
    </>
  )
}
