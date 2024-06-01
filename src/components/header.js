import React from "react";
import NavDropdown from 'react-bootstrap/NavDropdown';

export default () => {

  const [navbarOpen, setNavbarOpen] = React.useState(false)
  const onClick = () => setNavbarOpen(!navbarOpen)
  const services = [
    {
      heading: "ITR Filings",

      url: "/itr-filings"
    },
    {
      heading: "GST Services",

      url: "/services/gst-services"
    },
    {
      heading: "Company Registations",

      url: "/company-registrations/public-company-registrations"
    } , {
      heading: "Digital Signatures",

      url: "/company-registrations"
    }, 
  ]


  const cservices = [
    
    {
      heading: "HR Services",

      url: "/company-registrations"
    },
   
    {
      heading: "FCRA Services",

      url: "/company-registrations"
    }
  ]

  return (
    <header className="fixed-top bg-white">
<section id="topbar" class="d-flex align-items-center">
    <div class="container d-flex justify-content-center justify-content-md-between">
      <div class="contact-info d-flex align-items-center">
        <i class="bi bi-envelope d-flex align-items-center">
          <a href="mailto:info@crrcs.in">info@crrcs.in</a></i>
        <i class="bi bi-phone d-flex align-items-center ms-4">
          <span>18008892499</span>
          </i>
      </div>
      <div class="social-links d-none d-md-flex align-items-center"> 
        <a href="https://www.instagram.com/crrservices4/" class="instagram"><i class="bi bi-instagram"></i></a>
        <a href="https://www.instagram.com/crrservices4/" class="linkedin"><i class="bi bi-linkedin"></i></a>
      </div>
    </div>
  </section>
      <div className="container">
        <nav className="navbar navbar-expand-lg">

          <a href="/" title="CRR" className=" logo d-flex align-items-center col-md-4 mb-2 mb-md-0 text-dark text-decoration-none">
            <img src="/images/logo.jpeg" />
          </a>
          <button className="navbar-toggler" onClick={onClick} type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={'collapse navbar-collapse flex-wrap align-items-center justify-content-md-center justify-content-md-between'+ (navbarOpen ? ' d-flex' : ' hidden')} >

            <ul className="navbar-nav nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">

              <li className="dropdown"><a href="/services" className="nav-link fw-bold  px-3 link-dark">Services</a>
                <div className="dropdown-menu text-small border-0 p-3" data-popper-placement="top-start">
                  <div className="row">

                    <div className="col-md-4">
                      <nav className="d-grid gap-2 w-100">
                        <a href="#" className="btn btn-hover-light border-0 rounded-2 d-flex align-items-center gap-3 py-2 px-3 lh-sm text-start border-bottom">
                          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" fill="currentColor" className="bi bi-collection" viewBox="0 0 16 16">
                            <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z" />
                          </svg>
                          <div>
                            <strong className="d-block">Expert Services</strong> 
                          </div>
                        </a>

                        {services.map((service, index) =>
                          <a key={index.toString()} href={service.url} className="btn btn-hover-light border-0 rounded-2 d-flex align-items-center gap-3 py-3 px-3 lh-sm text-start">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-text" viewBox="0 0 16 16">
                              <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
                              <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                            </svg>
                            <div>
                              <strong className="d-block">{service.heading}</strong>
                            </div>
                          </a>
                        )
                        }

                      </nav>
                    </div>

                    <div className="col-md-4">
                      <nav className="d-grid gap-2 w-100">
                        <a href="#" className="btn btn-hover-light border-0 rounded-2 d-flex align-items-center gap-3 py-2 px-3 lh-sm text-start border-bottom">
                          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" fill="currentColor" className="bi bi-collection" viewBox="0 0 16 16">
                            <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z" />
                          </svg>
                          <div>
                            <strong className="d-block">Corporate Services</strong> 
                          </div>
                        </a>

                        {cservices.map((service, index) =>
                          <a key={index.toString()} href={service.url} className="btn btn-hover-light border-0 rounded-2 d-flex align-items-center gap-3 py-3 px-3 lh-sm text-start">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-receipt" viewBox="0 0 16 16">
                              <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
                              <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                            </svg>
                            <div>
                              <strong className="d-block">{service.heading}</strong>
                            </div>
                          </a>
                        )
                        }
                      </nav>
                    </div>
                    <div className="col-md-4">
                      <div className="py-5 text-center">
                        <h1 className="display-6">Interested in our services</h1>
                        <div className="col-lg-6 mx-auto">

                          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <a href="/contact-us" className="btn btn-primary btn-lg px-4 me-sm-3 fw-bold">Contact Us</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </li>
              <li><a href="/about-us" className="nav-link fw-bold px-3 link-dark">About Us</a></li>
              <li><a href="/faq" className="nav-link fw-bold px-3 link-dark">FAQ</a></li>
              <li><a href="/pricing" className="nav-link fw-bold px-3 link-dark">Pricing</a></li>
            </ul>

            <div className="col-md-3 text-end">
              <a href="/contact-us" className="btn btn-primary">Contact Us</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
