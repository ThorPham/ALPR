import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <div className="footer">
       <div className="footer-layout">
       <div className="footer-content">
          <ul>
             <li><h4>Useful Links</h4></li>
             <li>Sign Up, Sign In</li>
             <li>Help Center</li>
             <li>Contact Us</li>
             <li>GDPR Compliance</li>
             <li>Terms & Privacy</li>
          </ul>
       </div>

       <div className="footer-content">
          <ul>
             <li><h4>Helpful Info</h4></li>
             <li>Snapshot API Documentation </li>
             <li>Camera Setup for ANPR</li>
             <li>VMS, Camera Integrations</li>
             <li>License Plate Datasets</li>
             <li>ANPR Research</li>
          </ul>
       </div>

       <div className="footer-content">
          <ul>
             <li><h4>Awesome Blog</h4></li>
             <li>Vehicle Make Model Color Recognition</li>
             <li>ALPR on Jetson Nano, AGX</li>
             <li>ANPR on Raspberry Pi</li>
             <li>ALPR in the News</li>
             <li>OpenALPR</li>
          </ul>
       </div>
       </div>
    </div>
  )
}
