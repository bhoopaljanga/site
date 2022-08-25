import Head from 'next/head'
import Layout from "../components/layout";
import { Container, Row, Card, Button } from 'react-bootstrap'

export default function Services() {

  const iconGRid = [
    {
      title: "Chat With Us",
      desc: "We are always happy to chat with you during our business hours: Mon - Sat: 8am - 8pm"
    },
    {
      title: "Call Us",
      desc: "You can call our team during our business hours Landline: 9140-40050954  Phone: +91-9985100360"
    },
    {
      title: "Email Us",
      desc: "Send an email with your questions to our  CRR team.  Email: info@crrcs.in"
    } 
  ];

  return (
    <Layout>

      <div className="bg-primary text-white px-4 py-5 text-center">
        <div className="py-5">
          <h1 className="display-5 fw-bold">We help founders start and manage their business.</h1>
          <div className="col-lg-6 mx-auto">
            <p className="fs-5 mb-4">
              Our team of business experts is here to answer any questions about starting and growing your business..</p>

          </div>
        </div>
      </div>

      <div className="container">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-lg-12 text-center">
            <h3 className="text-crr">GET IN TOUCH</h3>
            <h1 className="display-3 fw-bold lh-sm mb-3">Customer Team Contact Information</h1>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-sm-3 px-5 g-4 py-5 text-center">

          {iconGRid.map((item) =>
            <div className="col d-flex align-items-center">

              <div>
                <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-headset" viewBox="0 0 16 16">
                    <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" />
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
