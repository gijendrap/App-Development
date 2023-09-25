import React from "react"
import Navbar from '../../Navcomponents/Navbar';
import Fade from 'react-reveal/Fade';
import { IoMdCheckbox } from "react-icons/io";
import { BsArrowDownRight } from "react-icons/bs";
import aboutimg from '../../00004.jpg'
import './About.css'
import Footer from "../../Footer/Footer";

const About = () => {
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
    <section className='ab1'>
        <div className="about__container grid">
          <Fade left duration={2500}>
            <img src={aboutimg} className="about__img" alt="AboutIMG"/>
          </Fade>

          <Fade right duration={2500} >
          <div className="about__data">
            <h2 className="section__title about__title">
              Who we really are & <br/> why choose us
            </h2>
            
            <p className="about__description">
            Our mission is simple: to transform your vision into reality. Whether it's a grand wedding, a corporate conference. 
            </p>
            
            
            <div className="about__details">
              <p className="about__details-description">
                <IoMdCheckbox className='about__details-icon'/>
                We go above and beyond to design unique               </p>
              <p className="about__details-description">
                <IoMdCheckbox className='about__details-icon'/>
                we take care of all aspects of event planning            </p>
              <p className="about__details-description">
                <IoMdCheckbox className='about__details-icon'/>
                We have strong relationships with top vendors  
  </p>
              <p className="about__details-description">
                <IoMdCheckbox className='about__details-icon'/>
                Our team is known for its innovative ideas and creative 
          </p>
            </div>
            
            <a href="#" className="button--link button--flex">
              Shop Now <BsArrowDownRight className='button__icon'/>
            </a>

          </div>
          </Fade>
    </div>
    
    </section>
      <section className='hero'>
      </section>
      <Footer/>
    </>
  )
}
export default About
