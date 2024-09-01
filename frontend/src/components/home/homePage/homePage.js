import Navbar from "../../navbar/navbar";
import React from "react";
import homePageCover from "../../photos/homePageCover.png";
import informationImg from "../../photos/information-img.png";
import "./homePage.css";
import Footer from "../../footer/footer";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="homePage">
        <h1>About: </h1>
        
        <div className="information">
          <div className="text">
            <div className="title">
              <h2>Women Safety Analytics</h2>
              <p>Protecting Women from safety threats</p>
            </div>
            <p>
              At Women Safety Analytics, we are dedicated to creating safer
              environments for women by leveraging real-time monitoring and
              advanced analytics. Our software continuously tracks gender
              distribution and identifies unusual patterns to generate alerts,
              enabling law enforcement to act proactively and prevent potential
              incidents. By providing early detection and valuable data, we aim to
              enhance public safety and support strategic planning to protect
              women in cities.
            </p>
          </div>
          <div className="information-img">
            <img className="infoImg" src={informationImg}></img>
          </div>
        </div>
        <div className="img">
          <img className="homeCover" src={homePageCover}></img>
        </div>
      </div>
      <Footer />
    </div>
  );
}
