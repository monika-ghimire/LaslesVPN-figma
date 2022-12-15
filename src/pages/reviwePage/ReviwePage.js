import React from 'react'
import './reviwepage.css'
import user1 from '../../assest/user1.png'
import user2 from '../../assest/user2.png'
import user3 from '../../assest/user3.png'

export default function ReviwePage() {
    let customerReviews=[{img:user1,userId:"Viezh Robert",userName:"Warsaw, Poland",title:"Wow... I am very happy"},
    {img:user2,userId:"Yessica Christy",userName:"Yessica Christy",title:"Wow... I am very happy"},
    {img:user3,userId:"Kim Young Jou",userName:"Warsaw, Poland",title:"Wow... I am very happy"}
]
  return (
   <>
   <div className='reviwepage-content-wapper'>
    <div className='reviwepage-headlineholder'>
        <h4>
        <strong>Trusted by Thousands of 
        <br/>Happy Customer</strong>  
        </h4>
        <p className='reviwepage-title'>
        These are the stories of our customers who have joined us with great
        <br/> pleasure when using this crazy feature.
        </p>
    </div>
    <div>
         <div className='row'>
            {
                customerReviews.map((x)=>(
                    <div className='col-md-4'>
                    <div className='customer-reviews'>
                       <ul>
                           <li><img src={x.img}/></li>
                           <li><h4 className='user-name'>{x.userId}</h4>
                               <p className='customer-name'>{x.userName}</p>
                           </li>
                       </ul>
                       <p className='customers-comments'>“Wow... I am very happy to use this VPN, it 
                           <br/>turned out to be more than my expectations 
                           <br/>and so far there have been no problems. LaslesVPN always the best”.</p>
       
                     </div> 
                   </div>
                ))
            }
           
           
         </div>
    </div>

   </div>
   </>
  )
}
