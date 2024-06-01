import Head from 'next/head'
import Layout from "../components/layout"; 

import Services from "../components/services"; 

export default function Home() {

  const iconGRid = [
    {
      title: "Track Record",
      desc: "We'll file the paperwork and file on your behalf."
    },
    {
      title: "Get Your Clarifications",
      desc: "It’s usual to hear back from support agents within the hour."
    },
    {
      title: "24*7 Support",
      desc: "Higlly available teams."
    }, {
      title: "Problem Free",
      desc: "you wont look for another comany again."
    }
  ];

  return (


    <Layout>
     
      <div className="container">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src="images/hero-img.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"></img>
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 text-crr fw-bold lh-sm mb-3">Leave your concerns about filing taxes behind.</h1>
            <p className="lead">Our Experts helps you save time & money without compromiaing accuracy in income tax filing.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
 
 <Services></Services>

      <div className="container px-4 py-5" id="icon-grid">

        <div className="row flex-lg-row align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">

            <div className="card border-0">
              <div className="testimonials">
                <svg viewBox="0 0 24 24">
                  <path fill="currentColor" d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"></path></svg>
                <blockquote className="TwoColumnWithFeaturesAndTestimonial__Quote-sc-7wvgyg-19">
                Best service provided. A new and yet best corporate advisors in town to solve the problem and provide consultation for the best.
                </blockquote>
                <div >Jaya Banerjee
</div>
                <div >Founder.</div>

              </div>
              <div className="p-image  mx-auto">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" width="350"></img>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h2 className="pb-2">Why CRR Corporate Services?</h2>

            <div className="row row-cols-1 row-cols-sm-2 g-4 py-5">

              {iconGRid.map((item, index) =>
                <div key={index.toString()} className="col d-flex align-items-start">
                  <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em" viewBox="0 0 16 16">
                    <path d="M9.465 10H12a2 2 0 1 1 0 4H9.465c.34-.588.535-1.271.535-2 0-.729-.195-1.412-.535-2z" />
                    <path d="M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm.535-10a3.975 3.975 0 0 1-.409-1H4a1 1 0 0 1 0-2h2.126c.091-.355.23-.69.41-1H4a2 2 0 1 0 0 4h2.535z" />
                    <path d="M14 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
                  </svg>
                  <div>
                    <h4 className="fw-bold mb-0">{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              )
              }

            </div>
          </div>

        </div>
      </div>
      
    </Layout>
  )
}
