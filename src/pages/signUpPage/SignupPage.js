import React from "react";
import "./signUp.css";
import Logo from "../../assest/Logo.jpg";
import fristImg from "../../assest/fristImg.jpg";
import user from '../../assest/user.png'
import Location from '../../assest/location.jpg'
import Server from '../../assest/Server.png'
export default function SignupPage() {

    let userLIst=[{img:user,totalNumber:"90+",heading:"User" },
       {img:Location,totalNumber:"30+",heading:"Location" },
       {img:Server ,totalNumber:"50+",heading:"Servers" }]


  return (
    <>
      {/* here Navabar */}
      <section>
        <div className=" container-fuild nav-bar-wapper">
          <ul>
            <li>
              <img src={Logo} />
            </li>
            <li>
              <ul className="nav-group">
                <li>About</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Testimonials</li>
                <li>Help</li>
              </ul>
            </li>
            <li>
              <ul className="sign-in-up-btn">
                <li>
                  <button className="sign-in-btn">Sign In</button>
                </li>
                <li>
                  <button className="signUp-btn">Sign Up</button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      {/* body content */}
      <section>
        <div className="home-content-wapper">
          <div className="row">
            <div className="col-md-6">
              <div className="content-heading-wappre">
                <h1 className="laslesVPN-heading">
                  Want anything to be
                  <br />
                  easy with <strong>LaslesVPN.</strong>{" "}
                </h1>
                <p className="laslesVPN-paragaraf">
                  Provide a network for all your needs with ease and fun using
                  LaslesVPN
                  <br />
                  discover interesting features from us.
                </p>
                <button className="get-started-btn">Get Started</button>
              </div>
            </div>
            <div className="col-md-6 sing-up-img">
              <img src={fristImg} />
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <section>
        <div className="sign-footer-wapper">
            <div className="row user-location-details-wapper">

                {userLIst.map((x)=>(
                       <div className="col-md-4">
                       <div className="user-location-wapper">
                           <ul>
                               <li> <img src={x.img}/></li>
                               <li><strong>{x.totalNumber}</strong>
                               <br/>{x.heading}</li>
                           </ul>
                          
   
                       </div>
                   </div>
                ))}
               
                
            </div>
        </div>
      </section>
    </>
  );
}
