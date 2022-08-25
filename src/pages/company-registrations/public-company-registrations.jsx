import Head from 'next/head'
import Layout from "../../components/layout";
import { Container, Row, Card, Button } from 'react-bootstrap'

export default function Services() {

  const steps = [
    {
      heading: "Obtain DSC ",
      description: "Every proposed director has to obtain a Digital Signature Certificate(DSC) through the certified authorities from the MCA portal. Or you can contact CRR Services Hyderabad. Our services help you with the digital signatures and in the incorporation process of a company."
    },
    {
      heading: "Apply DIN",
      description: "All the directors must apply for Director Identification Number(DIN)."
    },
    {
      heading: "Name Approval",
      description: "The next step is getting approval of your company name through the official website of the Ministry of Corporate Affairs(MCA) portal. And the name must be unique that does not resemble the existing company.      The name of the Public Limited Company must end with the word Limited."
    },
    {
      heading: "SPICe Form",
      description: "After the name approval, the next step is to fill in the SPICe form in addition to the required documents, such as Memorandum of Association (MoA) and Article of Association (AoA). These MoA and AoA consist of objectives, company goals, and responsibilities of directors and shareholders."
    },    
    {
      heading: "Incorporation of a Company",
      description: "File MoA and AoA. List these documents in the SPICe forms with all the signatures from the directors on them.."
    },
    {
      heading: "Apply PAN & TAN",
      description: "File PAN & TAN through SPICe+ form."
    },
    {
      heading: "Certificate of Incorporation",
      description: "Upon verifying all the documents, the Registrar of Companies issues the Certificate of Incorporation."
    },

  ];

  return (
    <Layout>

      <div className="container">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"></img>
          </div>
          <div className="col-lg-6">
            <h5 className="text-crr">Start Your Business</h5>
            <h1 className="display-3 fw-bold lh-sm mb-3">Public Limited Company.</h1>
            <p className="lead">We are We are engrossed in providing high quality and reliable consultancy services for company registration.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Contact Us</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">

        <h2>What is a public limited company?</h2>
        <p>
          A public limited company is a large-scale business structure with a minimum of 7 members/shareholders, and there is no limit to maximum members/shareholders.
          A public limited company can raise capital from the public and enjoys the features of limited liability.
          Hence, listed with the stock exchange markets and issues fixed deposits.

        </p>
        <h2>Mandatory requirements</h2>
        <ul>
          <li>Minimum of three directors
          </li><li>Minimum of seven shareholders
          </li><li>DIN for directors
          </li><li>DSC
          </li><li>Minimum capital of 5lacs.</li>

        </ul>

        <h2>Features and benefits of a public limited company</h2>
        <ul>
          <li>A public limited company can raise its funds from the general public or Financial Institutions. It can raise funds through equity shares, preference shares, and debentures.
          </li><li>Transfer of shares is simple and easy by a shareholder to other legal entities, individuals, and organizations throughout India and Abroad.
          </li><li>Death, retirement, and insolvency of a member or shareholder are not affected by the existence of the public limited company.
          </li><li>The Board of directors controls and manages the public limited company. It has a minimum of three directors and a minimum of seven shareholders.
          </li><li>The minimum paid-up capital for a public limited company is 5lakhs.
          </li><li>The name of the company should not be similar to other companies, and the company name should end with the word Limited at the end.
          </li><li>It should comply with (rule 8) of the Companies incorporation rule 2014.</li>

        </ul>
        <h2>Disadvantages</h2>
        <ul>
          <li>A public limited company cannot accept deposits from the general public.
          </li><li>The public limited company requires a high cost and time to start and dissolve.
          </li><li>Not suitable for small-scale businesses.
          </li><li>Quick decision-making is not possible in a public limited company as it has a diverse number of shareholders.

          </li>
        </ul>
        <h2>
          Documents required for Public Limited Company Registration </h2>
        <ul>
          <li>Panf Card and ID proof (Aadhar Card voter ID driving license)  of all the directors and shareholders
          </li>
          <li>
            Address proof
            <ul>
              <li>ration card or
              </li><li>aadhar card or
              </li><li>driving license or
              </li><li>	voter ID
              </li>
            </ul>
          </li><li>	Residential proof
            <ul>
              <li>bank statement
              </li><li>	electricity
              </li><li>utility bill
              </li>
            </ul>
          </li>
          <li>No objection certificate(NOC)
          </li><li>Digital Signature Certificate(DSC)
          </li><li>	Director Identification Number(DIN)
          </li><li>Memorandum of association(MoA)
          </li><li>Articles of association(AoA)</li>

        </ul>

      </div>


      <div className="container">

        <h2>The Procedure of Private Limited Company Registration</h2>
        {steps.map((step, index) => (

          <div className="row py-2">
            <div className="col-md-1 text-muted display-6">
              <span>{(index + 1).toString().padStart(2, '0')}</span></div>

            <div className="col-md-11">

              <h6>{step.heading}</h6>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>

    </Layout>
  )
}
