import React from "react";

export default ({ services = null, heading = "Our Professional Services" }) => {

    const defaultServices = [
        {
            title: "ITR Filings",
            desc: "Our Experts helps you save time & money without compromiaing accuracy in income tax filing",
            url: "/itr-filings",
            className: "blue"
        },
        {
            title: "GST Services",
            desc: "We can take care of your GST filing process and help to claim your right input credits",
            url: "/services/gst-services",
            className: "orange"
        }
        , {
            title: "HR Services",
            desc: "We are service provider engaged in rendering superior quality FCRA services to our valuable clients",
            url: "/company-registrations",
            className: "green"
        },
        {
            title: "Company Registations",
            desc: "We are engrossed in providing high quality and reliable consultancy services for company registration",
            url: "/company-registrations",
            className: "pink"
        },
        {
            title: "Digital Signatures",
            desc: "We help you provide all digital signature certificate related services at reasonable cost and premium service",
            url: "/company-registrations",
            className: "red"
        },
        {
            title: "FCRA Consultants",
            desc: "We are service provider engaged in rendering superior quality FCRA services to our valuable clients",
            url: "/company-registrations",
            className: "purple"
        },

    ]

    services = services || defaultServices;

    return (
        <section id="services" className="services py-4">
            <div className="container" >
                <header className="pb-2 mb-2 text-center section-header position-relative">
                    <h2>{heading}</h2>
                </header>
                <div className="row gy-4 py-4">
                    {
                        services.map((service) =>
                            <div className="col-lg-4 col-md-6 ">
                                <div className={"service-box " + service.className}>

                                    <span className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                            <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z" />
                                        </svg>
                                    </span>
                                    <h3>{service.title}</h3>
                                    <p>{service.desc}</p>
                                    <a href={service.url} className="read-more"><span>Read More</span>
                                        <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
};