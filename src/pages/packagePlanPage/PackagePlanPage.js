import React from "react";
import "./package.css";
import Free from "../../assest/Free.jpg";
import rightBtn from "../../assest/rightBtn.jpg";

export default function PackagePlanPage() {
  let PremiumPlanLIst = [
    "Unlimited Bandwitch",
    "Encrypted Connection",
    "Yes Traffic Logs",
    "Works on All Devices",
    "Connect Anyware",
    "Get New Features",
  ];
  let StandardPlanList = [
    "Unlimited Bandwitch",
    "Encrypted Connection",
    "Yes Traffic Logs",
    "Works on All Devices",
    "Connect Anyware",
  ];
  let freePlanLIst = [
    "Unlimited Bandwitch",
    "Encrypted Connection",
    "No Traffic Logs",
    "Works on All Devices",
  ];
  return (
    <>
      <div className="package-plan-content-wapper">
        <div className="package-plan-content-heading">
          <h3>Choose Your Plan</h3>
          <p>
            Let's choose the package that is best for you and
            <br /> explore it happily and cheerfully.
          </p>
        </div>

        <div className="row box-packge-wapper">
          <div className="col-md-4">
            <div className="package-plan-box">
              <img src={Free} className="imgs-box" />
              <h4 className="heding-free-package">Free Plan</h4>
              <ul>
                {freePlanLIst.map((x) => (
                  <li className="binifits-choosing-plan">
                    <span>
                      <img src={rightBtn} />
                    </span>{" "}
                    {x}
                  </li>
                ))}
              </ul>
              <div>
                <div className="btn-holder-packegs">
                  <h4>Free</h4>
                  <button className="packe-plan-btn">select</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="package-plan-box">
              <img src={Free} className="imgs-box" />
              <h4 className="heding-free-package">Standard Plan</h4>
              <ul>
                {StandardPlanList.map((x) => (
                  <li className="binifits-choosing-plan">
                    <span>
                      <img src={rightBtn} />
                    </span>{" "}
                    {x}
                  </li>
                ))}
              </ul>
              <div>
                <div className="btn-holder-packegs">
                <h4><strong>$9</strong>/mo</h4>
                  <button className="packe-plan-btn">select</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="package-plan-box active">
              <img src={Free} className="imgs-box" />
              <h4 className="heding-free-package">Premium Plan</h4>
              <ul>
                {PremiumPlanLIst.map((x) => (
                  <li className="binifits-choosing-plan">
                    <span>
                      <img src={rightBtn} />
                    </span>{" "}
                    {x}
                  </li>
                ))}
              </ul>
              <div>
                <div className="btn-holder-packegs">
                  <h4><strong>$12</strong>/mo</h4>
                  <button className="packe-plan-btn">select</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
