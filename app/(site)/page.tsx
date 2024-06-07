import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Top Chartered Accountant in Madhapur, Hyderabad, Telangana, India. Contact us to File Income Tax Returns (ITR) for FY 2023-24. CRR Corporte Services handles all cases of Income from Salary, Interest Income, Capital Gains, House Property, Business and Profession. Maximize your deductions by handling all deductions under Section 80 & the rest.",
  description: "Top Chartered Accountant in Madhapur, Hyderabad, Telangana, India. Contact us to File Income Tax Returns (ITR) for FY 2023-24. CRR Corporte Services handles all cases of Income from Salary, Interest Income, Capital Gains, House Property, Business and Profession. Maximize your deductions by handling all deductions under Section 80 & the rest.",
  keywords: "efiling tax, income tax efiling, efiling india, india tax efiling, income tax filing, itr filing, itr efiling, itr filing fy 2023-24, income tax filing fy 2023-24, gst filing, gst returns filing"
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero /> 
      <Feature /> 
      <Testimonial />
      <Pricing /> 
    </main>
  );
}
