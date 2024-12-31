import React from 'react';
import './Footer.css';
// import linkedin_icon from '../assets/linkedin.png';
// import discord_icon from '../assets/discord.png';
import instagram_icon from '../assets/instagram.png';
import youtube_icon from '../assets/youtube.png';
import logo from '../assets/negativelogo.png';

const Footer = () => {
  return (
    <div className='footer'>
      <footer>
        <div className="footer_main">
          <div className="tag">
            <h1>Contact</h1>
           
            <a href="/"><i className="fa-solid fa-envelope"></i>vivek.sarangi90@gmail.com</a>
          </div>
          <div className="tag">
            <h1>Follow Us</h1>
            <div className="social_link">
              {/* <a href="https://www.linkedin.com/in/vivek-kumar-sarangi-3b377b62?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " rel="noopener noreferrer">
                <img src={linkedin_icon} alt="Pinterest" />
              </a>
              <a href="https://discord.gg/vuVGWbGx" target="_blank" rel="noopener noreferrer">
                <img src={discord_icon} alt="Pinterest" />
              </a> */}
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={instagram_icon} alt="Pinterest" />
              </a>
              <a href="https://youtube.com/@beingsarangi?si=ryKU-YwJzZevRj1r " target="_blank" rel="noopener noreferrer">
                <img src={youtube_icon} alt="Pinterest" />
              </a>
            </div>
          </div>
          <div className="tag">
          
            <div >
                <img src={logo} alt="FOOTERLOGO" style={{ height: '70px', width: '70px' , marginTop : '5px' }} /> 
                <p style={{ marginTop: '5px', color: '#cb6328', fontSize: '1rem' }}>This app is presented by BeingSarangi</p> 
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;