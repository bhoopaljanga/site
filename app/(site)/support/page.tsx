import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Chartered Accountant in Madhapur, Hyderabad, Telangana, India. Contact us to File Income Tax Returns (ITR) for FY 2023-24. CRR Corporte Services handles all cases of Income from Salary, Interest Income, Capital Gains, House Property, Business and Profession. Maximize your deductions by handling all deductions under Section 80 & the rest.",
  description: "Top Chartered Accountant in Madhapur, Hyderabad, Telangana, India. Contact us to File Income Tax Returns (ITR) for FY 2023-24. CRR Corporte Services handles all cases of Income from Salary, Interest Income, Capital Gains, House Property, Business and Profession. Maximize your deductions by handling all deductions under Section 80 & the rest.",
  keywords: "efiling tax, income tax efiling, efiling india, india tax efiling, income tax filing, itr filing, itr efiling, itr filing fy 2023-24, income tax filing fy 2023-24, gst filing, gst returns filing"
 
  // other metadata
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-30">
      <Contact />
    </div>
  );
};

export default SupportPage;
