import React from "react"
import Navbar from '../../Navcomponents/Navbar';
import Fade from 'react-reveal/Fade';
// import { IoMdCheckbox } from "react-icons/io";
import { BsArrowDownRight } from "react-icons/bs";
import aboutimg from '../../images/about.png'
import './Faq.css'
import Footer from "../../Footer/Footer";
import imggi from '../../images/00002.png';
import imggi1 from '../../images/00003.png';

const Faq = () => {
  
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
          <Fade right duration={2500}>
            <div><img src={aboutimg} className="about__img2" alt="AboutIMG"/>
            <div><img src={imggi} className="about__img03" alt="AboutIMG"/></div>
            <div><img src={imggi1} className="about__img0" alt="AboutIMG"/></div>
            </div>
          </Fade>

       
    
          <Fade left duration={2500} >
          <div className="about__data">
            <h2 className="section__title about__title2">
            Some common questions <br/> were often asked
            </h2>
            
            <p className="about__description1">
            What is a hackathon?
            </p>
            <p className="about__description">
            A hackathon is an event where individuals or teams come together to collaboratively work on creative and innovative projects, often related to software development, design, or problem-solving. It's an excellent platform to brainstorm ideas and build prototypes within a limited time frame.
            </p>
            <p className="about__description1">
            Who can participate in a hackathon?
            </p>
            <p className="about__description">
            Hackathons are usually open to a wide range of participants, including students, professionals, developers, designers, and anyone with a passion for problem-solving and innovation. Some hackathons may have specific eligibility criteria, so it's essential to check the event's details.
                        </p>
                        <p className="about__description1">
                        Do I need to be a programmer to join a hackathon?
                         </p>
                         <p className="about__description">
                         While having programming skills can be advantageous, hackathons welcome participants with various skills, including design, project management, and domain expertise. Many hackathons encourage diverse teams with a mix of talents to create well-rounded projects.                         </p>
                         <p className="about__description1">
                          How long do hackathons typically last?                         </p>
                         <p className="about__description">
                         The duration of hackathons can vary. Some are short, lasting 24 to 48 hours, while others may span a weekend or even several days. It depends on the event's organizers and their goals. Shorter hackathons are often called "hackathons," and longer ones are referred to as "hackfests.                         </p>
                         <p className="about__description1">
                         What should I bring to a hackathon?                         </p>
                         <p className="about__description">
                         It's a good idea to bring your laptop, charger, any necessary software or tools, and personal items like a water bottle and snacks. Check the hackathon's guidelines and requirements to ensure you're adequately prepared.
                         </p>
                         <p className="about__description1">
                         Can I participate alone, or do I need a team?
                         </p>
                         <p className="about__description">
                         Many hackathons allow participants to work individually, but forming a team can enhance your chances of success and create a more dynamic experience. Some hackathons even facilitate team formation during the event.                         </p>
                         <p className="about__description1">
                         How are hackathon projects judged?                         </p>
                         <p className="about__description">
                         Projects are typically judged based on various criteria, including creativity, technical complexity, functionality, presentation, and potential impact. Judges may come from diverse backgrounds, such as industry experts and mentors.                         </p>
                         <p className="about__description1">
                         Are there prizes for hackathon winners?                         </p>
                         <p className="about__description">
                         Yes, many hackathons offer prizes, which can include cash awards, tech gadgets, job opportunities, or mentorship opportunities. The specific prizes vary from one event to another, so be sure to check the event details for information on rewards.                         </p>
                         <p className="about__description1">
                         Can I attend a hackathon if I'm not a coder or developer?                         </p>
                         <p className="about__description">
                         Absolutely! Hackathons welcome participants with a wide range of skills. If you're not a coder, you can contribute your expertise in areas like design, project management, marketing, or domain-specific knowledge.
                        </p>
            <div className="about__details">
              {/* <p className="about__details-description">
                <IoMdCheckbox className='about__details-icon'/>
                We always deliver on time.
              </p>
              <p className="about__details-description">
                <IoMdCheckbox className='about__details-icon'/>
                We give you guides to protect and care for your plants.
              </p>
              <p className="about__details-description">
                <IoMdCheckbox className='about__details-icon'/>
                We always come over for a check-up after sale.
              </p>
              <p className="about__details-description">
                <IoMdCheckbox className='about__details-icon'/>
                100% money back guaranteed.
              </p> */}
            </div>
            
            <a href="#" className="button--link button--flex">
              Enrol now<BsArrowDownRight className='button__icon'/>
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
export default Faq
