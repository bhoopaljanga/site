"use client";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";
import pricingData from "./pricingData";

const Pricing = () => {
  return (
    <>
      {/* <!-- ===== Pricing Table Start ===== --> */}
      <section className="overflow-hidden pb-20 pt-10">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `PRICING PLANS`, 
                description: `Our pricing plans at glance no hidden charges.`,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="absolute -bottom-15 -z-1 h-full w-full">
            <Image
              fill
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5"> 
           
            {pricingData.map((pricingItem, key) => (
                <div key={key} className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
                <h3 className="mb-7.5  font-bold text-black dark:text-white ">                  
                {pricingItem.title}
                </h3>
                <h4 className="mb-2.5 text-xl3 font-medium text-black dark:text-white xl:text-sectiontitle3">
                {pricingItem.price}
                </h4>
                <p> {pricingItem.description}.</p>
  
                <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                  <ul>
                  {pricingItem.items.map((item, key) => (
                    <li key={key} className="mb-4 text-black last:mb-0 dark:text-manatee">
                     {item}
                    </li>
                  ))}
                  </ul>
                </div>
  
                <button
                  aria-label="Get the Plan button"
                  className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
                >
                  <span className="duration-300 group-hover/btn:pr-2">
                    Contact Us
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
  
            ))}
           
          </div>
        </div>
      </section>
      {/* <!-- ===== Pricing Table End ===== --> */}
    </>
  );
};

export default Pricing;
