import React from 'react'
import "./aboutus.css";
import Header from '../Header';
import Footer from '../Footer';
import Contact from '../Contact';
const ContactUs = () => {
  return (
    <>
    <Header/>
    <section className="contact-part">
         <div className="container">
           <div className="about-part-details text-center">
            
             <div className="about-part-content">
               <div className="breadcrumbs">
                 <div className="container">
                   <h3 style={{ color: "#fff" }}>
                   Contact Us
                   </h3>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>
       <Contact/>
       <address className='responsive-map'>
       <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.772975294238!2d75.87416237205939!3d22.69949372831377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd3f8f988287%3A0xad7dfabace781c5f!2sEverPeak%20IT%20Solution!5e0!3m2!1sen!2sin!4v1713400708138!5m2!1sen!2sin"
  width={600}
  height={450}
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

       </address>
       <Footer/>
       </>
  )
}
export default ContactUs;