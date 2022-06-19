import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "./Home.css";
import { features } from "../data";
import sectionImage from "../assets/ANPR-ALPR-License-plate-recognition-accurate.webp";
export default function Home() {
  return (
    <>
      <Header></Header>
      <div className="main-top">
        <div className="main-top-left">
          <h2>Accurate, Fast, Developer- Friendly ALPR</h2>
          <p>
            Automatic License Plate Recognition software that works in all
            environments, optimized for your location.
          </p>
          <div className="main-top-left-btn">
            <button>Get Started</button>
            <button>Watch Video</button>
          </div>
        </div>

        <div className="main-top-right">
          <div className="main-top-right-header">
            <div className="main-top-right-top">
              <h4>Try it out</h4>
            </div>

            <p>
              Upload an image (up to 3MB) and we will decode the license plate.
            </p>
            <div className="main-top-right-btn">
              <Link to="/upload">
                <button>Upload Image</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="home-feature">
        {features.map((item) => (
          <div key={item.id} style={{ maxWidth: "400px" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              {item.icon}
              <h3
                style={{
                  color: "#031b4f",
                  fontSize: "19px",
                  fontweight: "600",
                }}
              >
                {item.title}
              </h3>
            </div>
            {item.description}
          </div>
        ))}
      </div>
      <div className="section-1">
        <div className="section-container-1">
          <h2>Better ALPR</h2>
          <div className="section-content-1">
            <div className="section-1-paragrap">
              <p>
                <strong>Environment Matters</strong>. It’s easy to decode a
                license plate from a high-res photo of a vehicle on a sunny day.
                But we know that in reality, the weather and other conditions
                are not always ideal. We have been relentlessly enhancing our
                algorithms to support various “real-life” factors, such as sun
                glare, blurry images, fast vehicles, night-time, and many more.
              </p>
              <p>
                <strong>Self-Learning</strong>. Our ALPR engine is like a
                teenager, it continues to learn. This means we can fine-tune our
                engine to help meet your specific needs, such as a certain
                camera angle or lighting condition. See how we worked to improve
                our ALPR for India, USA, Brazil, Thailand, Germany and more!
              </p>
              <p>
                <strong>Location-Optimized</strong>. Let’s face it–not all
                plates are the same. Some have two rows of text. Some have icons
                at the beginning, middle or end of the plate. Some contain fancy
                fonts. Thankfully, our ALPR engine supports them all and is
                tuned specifically for your region.
              </p>
              <p>
                <strong>Five is Better than One</strong>. Unlike other LPR
                providers, we can return up to 5 decoded license plates from one
                image. We achieve this by utilizing two distinct neural
                networks. One identifies all the photos of license plates from
                an image and the other decodes each character of the plate.
              </p>
            </div>
            <div className="section-1-image">
              <img
                src={sectionImage}
                alt="#"
                width="500px"
                height="400px"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="section-2">
        <div className="section-2-container">
          <h2>Some ALPR Applications</h2>
          <div className="section-2-contain">
            <div>
              <h4>Parking Management</h4>
              <p>
                Ensure that vehicles are abiding to your parking policy. Get
                alerts when there is a violation. Check out our Parking
                Enforcement solution!
              </p>
            </div>
            <div>
              <h4>Toll Management</h4>
              <p>
              Monitor vehicles at different junctions of the highway, identify stolen vehicles and more!
              </p>
            </div>
            <div>
              <h4>Highway Monitoring</h4>
              <p>
              Collect toll automatically based on plate number without the need for RFID!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
