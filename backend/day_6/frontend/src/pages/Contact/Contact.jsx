import React from "react"
import Navbar from '../../Navcomponents/Navbar';
import homeimg from '../../images/00001.png'
import Fade from 'react-reveal/Fade';
import './Contact.css'
import Footer from "../../Footer/Footer";


const Contact = () => {
  window.onscroll = function () {
    if (window.pageYOffset < 20) {
      document.querySelector(".NavbarItems").style.top = "20px";
    } else {
      document.querySelector(".NavbarItems").style.top = "-100px";
    }
  };
  return (
    <>
    <Navbar/>
    <Fade bottom duration={2500}>
          <img src={homeimg} alt="" className="home__img"/>
    </Fade> 
    <div>
      
      <section className='hero'>
      </section>
       <div className="form-container1">
      <h1 className="sendmsg">Send a message to us!</h1>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Subject" />
        <textarea placeholder="Message" rows="4"></textarea>
        <button className="but01">Send Message</button>
      </form>
    </div>
     <Footer/>
      </div>
      
    </>
    
  )
}
export default Contact
