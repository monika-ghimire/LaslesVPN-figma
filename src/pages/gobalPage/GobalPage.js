import React from 'react'
import './gobal.css'
import gobal from '../../assest/gobal.png'
import Sponsored from '../../assest/Sponsored.png'
export default function GobalPage() {
  return (
   <>
   <div className='gobal-content-wapper'>
    <div>
    <h3>Huge Global Network
        <br/> of Fast VPN</h3>
        <p>See <strong>LaslesVPN</strong> everywhere to make it easier for you when you move
            <br/> locations.</p>
    </div>
    <div className='gobal-img-holder'>
        <img src={gobal}/>
    </div>
    <div className='gobal-sponser-group'>
        <img src={Sponsored}/>
    </div>
    

   </div>
   </>
  )
}
