import { motion } from "framer-motion";
import Image from "next/image";
import { Metadata } from "next";
import Testimonial from "@/components/Testimonial";
import Service from "@/components/Service";
import SidebarLink from "@/components/Docs/SidebarLink";

export const metadata: Metadata = {
  title:
    "Top Chartered Accountant in Madhapur, Hyderabad, Telangana, India. Contact us to File Income Tax Returns (ITR) for FY 2023-24. CRR Corporte Services handles all cases of Income from Salary, Interest Income, Capital Gains, House Property, Business and Profession. Maximize your deductions by handling all deductions under Section 80 & the rest.",
  description:
    "Top Chartered Accountant in Madhapur, Hyderabad, Telangana, India. Contact us to File Income Tax Returns (ITR) for FY 2023-24. CRR Corporte Services handles all cases of Income from Salary, Interest Income, Capital Gains, House Property, Business and Profession. Maximize your deductions by handling all deductions under Section 80 & the rest.",
  keywords:
    "efiling tax, income tax efiling, efiling india, india tax efiling, income tax filing, itr filing, itr efiling, itr filing fy 2023-24, income tax filing fy 2023-24, gst filing, gst returns filing",
  // other metadata
};

const steps = [
  {
    heading: "Obtain DSC ",
    description:
      "The first step in the procedure is to obtain a Digital Signature Certificate (DSC) for the directors. You can get digital signatures by visiting the official website of MCA. A list of certifying authorities is available in it.",
  },
  {
    heading: "Apply DIN",
    description:
      "All the directors must apply for Director Identification Number(DIN).",
  },
  {
    heading: "Name Approval",
    description:
      "You must select a unique name for your private limited company. It must end with Private Limited at the end of your company name, Reserve your company name via the SPICe+ form. ",
  },
  {
    heading: "Incorporation of a Company",
    description:
      "File MoA and AoA. List these documents in the SPICe forms with all the signatures from the directors on them..",
  },
  {
    heading: "Apply PAN & TAN",
    description: "File PAN & TAN through SPICe+ form.",
  },
  {
    heading: "Issuance of Certificate",
    description:
      "After the verification, ROC issues the certificate of incorporation with the PAN & TAN allotment.",
  },
];

const links = [
  { href: "#", title: "Overview" },
  { href: "#", title: "Requirments" },

  { href: "#", title: "Advantages" },
  { href: "#", title: "How to Register" },
   
];
const service = {
  title:'Sole Proprietorship Registration Online In India',
  items:[" Fully expert-assisted company registration process","Our packages include DIN, PAN, DSC, MOA, AOA and Compliances"]
}
export default function Home() {
  return (
    <main>
      <Service service={service} />
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/4">
              <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4  transition-all  dark:border-strokedark dark:bg-blacksection">
                <ul className="space-y-2">
                  <SidebarLink links={links} />
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h2>What is a private limited company?</h2>
                <p>
                  A private limited company is a business entity held privately
                  by shareholders. The liability is limited to the shares held
                  by shareholders.
                </p>

                <h2>Mandatory requirements</h2>
                <ul>
                  <li>
                    <strong>Minimum of two members </strong>and a maximum of 200
                    according to the statutory requirement of the Companies Act
                    2013.
                  </li>
                  <li>
                    Each of the company directors should have a DIN(director
                    identification number).
                  </li>
                  <li>
                    Among the directors, one should stay in India for not less
                    than 182 days in the previous calendar year
                  </li>
                  <li>
                    The name of the private limited company should vary from
                    other PLC names.{" "}
                  </li>
                  <li>
                    Certificates by the professionals associated with private
                    limited companies. Such as chartered accountant, secretary
                    cost, accountant, etc
                  </li>
                  <li>The company's principal address.</li>
                </ul>

                <h2>Advantages of private limited companies</h2>
                <ul>
                  <li>
                    The private limited company is a separate legal entity which
                    means shareholders are not responsible for the company's
                    assets and liabilities.
                  </li>
                  <li>
                    Shareholders' liability is limited and responsible for the
                    shares held by them. They do not have the personal risk of
                    paying debts out of their assets.
                  </li>
                  <li>
                    As the company is a separate legal entity, it is not
                    affected by the death or cession of a member from a company.
                    It can continue its existence until it dissolves legally.
                  </li>
                  <li>
                    No minimum capital is required as the company can register
                    with the amount of 10000 as a total of authorized share
                    capital.
                  </li>
                  <li>
                    A Private Limited company can raise funds from venture
                    capital or Angel markets.
                  </li>
                  <li>
                    A private limited company's shares can easily be
                    transferable by a shareholder to any other person.
                  </li>
                  <li>
                    100% FDI is allowed in a private limited company which means
                    foreign investors can invest in the private limited
                    companies directly.
                  </li>
                </ul>
                <h2>Disadvantages</h2>
                <ul>
                  <li>A limited number of shareholders and members</li>
                  <li>
                    In a private limited company, the number of shareholders
                    should not exceed 50, and members should not exceed 200.
                  </li>
                  <li>
                    Restrictions on the transfer of shares and the stock
                    exchange cannot display the PLC shares.
                  </li>
                  <li>
                    It cannot allow the issuance of prospects to the public.
                  </li>
                </ul>
                <h2>
                  Documents required for Private Limited Company Registration{" "}
                </h2>
                <ul>
                  <li>
                    ID proof PAN card and passport of Indian and foreign
                    directors
                  </li>
                  <li>
                    Address proof
                    <ul className="ms-5">
                      <li>ration card or</li>
                      <li>aadhar card or</li>
                      <li>driving license or</li>
                      <li> voter ID</li>
                    </ul>
                  </li>
                  <li>
                    {" "}
                    Residential proof
                    <ul className="ms-5">
                      <li>bank statement</li>
                      <li> electricity</li>
                      <li>utility bill</li>
                    </ul>
                  </li>
                  <li> Certified rental agreement</li>
                  <li> NOC from the landlord</li>
                  <li> Copy of sale deed or property deed</li>
                </ul>
                <h2>The Procedure of Private Limited Company Registration</h2>
                {steps.map((step, index) => (
                  <div
                    key={index.toString()}
                    className="mt-7.5 flex items-center gap-5"
                  >
                    <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                      <span className="text-metatitle2 font-semibold text-black dark:text-white">
                        {(index + 1).toString().padStart(2, "0")}
                      </span>
                    </div>
                    <div className="w-3/4">
                      <h4 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                        {step.heading}
                      </h4>
                      <p>{step.description}.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
