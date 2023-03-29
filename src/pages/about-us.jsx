import Head from 'next/head'
import Layout from "../components/layout";
import { Container, Row, Card, Button } from 'react-bootstrap'

export default function Services() {
 

  return (
    <Layout>
      <div className="page-header bg-light py-3 mb-3">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">About Us</li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="container">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"></img>
          </div>
          <div className="col-lg-6">
            <h5 className="text-crr">ABOUT CRR CORPORATE SERVICES</h5>
            <h1 className="display-3 fw-bold lh-sm mb-3">Your Financial accounting partner.</h1>
            <p className="lead">Welcome to CRR Corporate Services, your trusted partner for corporate services in India. 
            We are a team of experienced professionals dedicated to providing comprehensive solutions for businesses of all sizes.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Contact Us</button>
            </div>
          </div>
        </div>
         <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          
          <div className="col-lg-12"> 
          <p className="lead">Our company was founded with the goal of simplifying the complex process of corporate compliance and offering expert guidance to our clients. We understand that navigating the Indian corporate landscape can be a daunting task, especially for new businesses, which is why we strive to make the process as smooth and hassle-free as possible.</p>
           <p className="lead">At CRR Corporate Services, we believe in building long-term relationships with our clients based on trust, transparency, and mutual respect. Our team of experts has in-depth knowledge of the Indian corporate laws and regulations and can help you navigate the complexities of compliance, taxation, and other legal requirements.</p>
            <p className="lead">We offer a wide range of services, including company incorporation, compliance management, tax advisory, accounting and bookkeeping, and more. Our services are tailored to meet the specific needs of each client, and we work closely with you to understand your business goals and objectives.</p>
             <p className="lead">Our team is made up of highly qualified professionals with extensive experience in their respective fields. We believe in continuous learning and development and invest in training and upskilling our team to ensure that we stay up-to-date with the latest industry trends and best practices.</p>
             <p className="lead">At CRR Corporate Services, we pride ourselves on our commitment to excellence, and we strive to exceed our clients' expectations in everything we do. We believe in providing personalized attention and timely service to ensure that our clients receive the best possible support.</p>
             <p className="lead">Thank you for considering CRR Corporate Services for your corporate services needs in India. We look forward to the opportunity to serve you and help your business thrive.</p>
          </div>
          </div>
      </div>
 
     
    </Layout>
  )
}
