import Head from 'next/head'
import Layout from "../../components/layout";
import { Container, Row, Card, Button } from 'react-bootstrap'

export default function Services() {

  const steps = [
    {
      heading: "Obtain DSC ",
      description: "The first step in the procedure is to obtain a Digital Signature Certificate (DSC) for the directors. You can get digital signatures by visiting the official website of MCA. A list of certifying authorities is available in it."
    },
    {
      heading: "Apply DIN",
      description: "All the directors must apply for Director Identification Number(DIN)."
    },
    {
      heading: "Name Approval",
      description: "You must select a unique name for your private limited company. It must end with Private Limited at the end of your company name, Reserve your company name via the SPICe+ form. "
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
      heading: "Issuance of Certificate",
      description: "After the verification, ROC issues the certificate of incorporation with the PAN & TAN allotment."
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
            <h1 className="display-3 fw-bold lh-sm mb-3">Nidhi Company Registration.</h1>
            <p className="lead">We are We are engrossed in providing high quality and reliable consultancy services for company registration.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Contact Us</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">

        <h2>What is a Nidhi company?</h2>
        <p>
          The Entity structure of Nidhi company is a non-banking financial company NBFC, recognized under (Section 406) of the Companies Act 2013, under the companies rules of 2014. The main objective of Nidhi company's incorporation is to borrow and lend money to its members only. That is to say, Nidhi company funds come from its members or shareholders and are utilized by members or shareholders.
          The principle of a company is by mutual benefit and inculcates the habit of savings among its members.
          No mandatory registration from RBI.
          However, the Nidhi companies have to register as public companies, and their names should end with Nidhi Limited.
          The purpose of loans under Nidhi includes renovation/ manufacturing of houses or child education.

        </p>
        <h2>Mandatory requirements</h2>
        <ul>
          <li>yr The minimum number of shareholders or members is 7
          </li><li>The minimum number of directors is 3
          </li><li>The minimum capital is 5 lakhs.
          </li><li>DIN for directors
          </li><li>No issuance of preference shares.
          </li><li>The main objective of Nidhi companies is to instil the habit of saving by deposits and lending to its members only for mutual benefits.
          </li><li>At the end of 1 year, the number of members or shareholders of the Nidhi company must be 200. at least.
          </li><li>Within the 1st year, the increase of its NOFs at least 10 lakh rupees or more.
          </li><li>The ratio of the net on funds to deposits should not be more than 1:20.

          </li>
        </ul>

        <h2>Benefits of Nidhi Company Registration</h2>
        <ul>
          <li>Nidhi company is a separate legal entity, and its members or shareholders are not responsible for the assets or liability of the company.
          </li><li>Directors and shareholders are not responsible for any liability or personal assets.
          </li><li>Nidhi company members are not at risk of being seized by bank creditors and the government.
          </li><li>Nidhi company's main objective is to encourage savings among the members.
          </li><li>Nidhi company invites deposits from the general public to make sure they register as company members.
          </li><li>Nidhi company provides micro banking services to remote and rural public in India.
          </li><li>Nidhi company gives financial help to low-income earners with fewer formalities and documentation.

          </li>
        </ul>
        <h2> Prohibited Activities in a Nidhi Company</h2>

        <ul>
          <li>Nidhi Company cannot deal with
          </li><li>	Lease of finances
          </li><li>	Chit Funds
          </li>zuy mn<li>	Hire Purchase system
          </li><li>	Insurance Business
          </li><li>	Securities Business
          </li><li>	Accept Deposits or Lend funds from others except for members of a Nidhi Company.
          </li><li>Nidhi Company cannot issue shares or Debentures
          </li><li>It can grant loans under securities like life insurance certificates, fixed deposits, gold, and government securities.

          </li>
        </ul>
        <h2>
          Documents required for Private Limited Company Registration </h2>
        <ul>
          <li>ID proof PAN card and passport of Indian and foreign directors
          </li><li>
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
          </li><li>	Certified rental agreement
          </li><li>	NOC from the landlord
          </li><li>	Copy of sale deed or property deed
          </li>
        </ul>

      </div>


      <div className="container">

        <h2>Procedure for Nidhi Company Registration</h2>

        <div className="row py-2">
          <div className="col-md-1 text-muted display-6">
            <span>01</span></div>
          <div className="col-md-11">

            <h6>Obtain DSC</h6>
            <p>  Obtain DSC from the authorized certifying agencies. A list of certified agencies is available on the official website of MCA. You can avail Digital Signature Certificate by submitting a few details.
              You can contact CRR Services Hyderabad. Our services help you in obtaining, Digital Signature Certificate and hassle-free your work in the incorporation process of a company.
            </p>
          </div>
        </div>

        <div className="row py-2">
          <div className="col-md-1 text-muted display-6">
            <span>02</span></div>
          <div className="col-md-11">

            <h6> SPICe+ Form</h6>
            <p>

              Head over to the MCA website to file the SPICe form. It is divided into two parts SPICe+Part A and SPICe+ Part B.
              Under Part A Form, you have to fill in the basic details of the company name reservation, such as
              Type of Company
              Class of Company
              Category and Subcategory
            </p>
          </div>
        </div>

        <div className="row py-2">
          <div className="col-md-1 text-muted display-6">
            <span>04</span></div>
          <div className="col-md-11">

            <h6>Part B consists of</h6>
            <p>
              Structure of the company
              Address of the company
              DIN allotment to subscribers
              Details of Subscribers
              PAN/TAN allotment
              Stamp Duty
              GSTIN
            </p>
          </div>
        </div>
        <div className="row py-2">
          <div className="col-md-1 text-muted display-6">
            <span>03</span></div>
          <div className="col-md-11">

            <h6>Attachments</h6>
            <p>

              Upload linked forms in SPICe+ as shown below
              Agile Pro(mandatory)
              SPICe+AoA(if applicable)
              SPICe+MoA(if applicable)
              INC-9(if applicable)

              Note: Authorised signature from a CA
            </p>
          </div>
        </div>
        <div className="row py-2">
          <div className="col-md-1 text-muted display-6">
            <span>05</span></div>
          <div className="col-md-11">

            <h6> Secure SRN</h6>
            <p>      
               After entering the details and uploading the linked forms, the portal generates a Service Request Number (SRN). And, then the next step is to pay the stamp duty via a payment gateway.

            </p>
          </div>
        </div>
        <div>




        </div>
      </div>

    </Layout>
  )
}
