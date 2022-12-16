import React from "react";
import "./reviwepage.css";
import user1 from "../../assest/user1.png";
import user2 from "../../assest/user2.png";
import user3 from "../../assest/user3.png";
import nextBtn from "../../assest/nextBtn.png";
import leftBtn from "../../assest/leftBtn.png";

export default function ReviwePage() {
  let customerReviews = [
    {
      img: user1,
      userId: "Viezh Robert",
      userName: "Warsaw, Poland",
      Comment:
        "Wow I am very happy to use this VPN it  turned out to be more than my expectations   and so far there have been no problems. LaslesVPN always the best",
    },
    {
      img: user2,
      userId: "Yessica Christy",
      userName: "Yessica Christy",
      Comment:
        "Wow I am very happy to use this VPN it  turned out to be more than my expectations   and so far there have been no problems. LaslesVPN always the best",
    },
    {
      img: user3,
      userId: "Kim Young Jou",
      userName: "Warsaw, Poland",
      Comment:
        "Wow I am very happy to use this VPN it  turned out to be more than my expectations   and so far there have been no problems. LaslesVPN always the best",
    },
  ];
  return (
    <>
      <div className="reviwepage-content-wapper">
        <div className="reviwepage-headlineholder">
          <h4>
            <strong>
              Trusted by Thousands of
              <br />
              Happy Customer
            </strong>
          </h4>
          <p className="reviwepage-title">
            These are the stories of our customers who have joined us with great
            <br /> pleasure when using this crazy feature.
          </p>
        </div>
        <div>
          <div className="row">
            {customerReviews.map((x) => (
              <div className="col-md-4">
                <div className="customer-reviews">
                  <ul>
                    <li>
                      <img src={x.img} />
                    </li>
                    <li>
                      <h4 className="user-name">{x.userId}</h4>
                      <p className="customer-name">{x.userName}</p>
                    </li>
                  </ul>
                  <p className="customers-comments">{x.Comment}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="row slide-btn-group">
            <div className="col-md-6">
              <div className="slide-btn">
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="btn-group-holder">
                <button className="left-btn">
                  <img src={leftBtn} />
                </button>
                <button className="next-btn">
                  <img src={nextBtn} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="Subscribe-content">
            <ul>
                <li>
                    <h3>Subscribe Now for
                     <br/> Get Special Features!
                     </h3>
                     <p>Let's subscribe with us and find the fun.</p>
                </li>
                <li>
                    <button className="Subscribe-btn">Subscribe Now</button>
                </li>
            </ul>

        </div>
      </div>
    </>
  );
}
