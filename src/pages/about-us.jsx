import Head from 'next/head'
import Layout from "../components/layout";
import { Container, Row, Card, Button } from 'react-bootstrap'

export default function Services() {

  const iconGRid = [

    {
      title: "24*7 Support",
      desc: "Highly available teams."
    },
    {
      title: "Strong Teams",
      desc: "We'll file the paperwork and file on your behalf."
    },
    {
      title: "Customer Satisfaction",
      desc: "It’s usual to hear back from support agents within the hour."
    },
  ];

  return (
    <Layout>
      <div class="page-header bg-light py-3 mb-3">
        <div class="container">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">About Us</li>
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
            <p className="lead">We offer a range of services to meet the complex and evolving ACCOUNTING, TAX & COMPLIANCE challenges that you face on multiple fronts.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Contact Us</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">

          <div className="col-lg-6">
            <h3 className="text-crr">Our Vision</h3>
            <h1 className="display-3 fw-bold lh-sm mb-3">ONE STOP SOLUTION</h1>
            <p className="lead">Our Mission is to provide clients with the 'ONE STOP SOLUTION' for all their businesses, financial requirement.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Contact Us</button>
            </div>
          </div>

          <div className="col-10 col-sm-8 col-lg-6">
            <img src="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"></img>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-lg-12 text-center">
            <h3 className="text-crr">Our Values</h3>
            <h1 className="display-3 fw-bold lh-sm mb-3">We follow these.</h1>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-sm-3 px-5 g-4 py-5 text-center">

          {iconGRid.map((item) =>
            <div className="col d-flex align-items-center">

              <div>
              <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-headset" viewBox="0 0 16 16">
  <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z"/>
</svg>
            </div>
                <h4 className="fw-bold mb-0">{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          )
          }

        </div>
      </div>


    </Layout>
  )
}
