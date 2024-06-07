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
  title:'GST Registration Online In India',
  items:[" Simple process for new GST registration, application status tracking, and filing for clarifications",
  "Assistance for GST e-invoicing, ledger, and invoice maintenance",
"GST Application filing in 2 business days T&C* ",
"Ensure compliance with our expert fliings"]
}
export default function Home() {
  return (
    <main>
      <Service service={service} />
     
    </main>
  );
}
