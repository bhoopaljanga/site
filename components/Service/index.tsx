"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ContactButton from "../Contact/contactbutton";

const Service = ({service}:{service:any}) => {
 const showWidget = () => {
  (window as any).Tawk_API.maximize();
  }
  return (
    <> 
      <section className="overflow-hidden pb-20 pt-35 lg:pb-25 xl:pb-30  bg-[#E9F9FF] dark:bg-blacksection ">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0 ">
          <div className="flex items-center gap-8 lg:gap-12.5 ">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-3/5"
            >
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
                {service.title}
              </h2>

              {service.items.map((step, index) => (
              <div key={index} className="mt-7.5 flex items-center gap-2">
                <span className="mr-2 flex h-[30px] w-full max-w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                  <svg
                    width="16"
                    height="13"
                    viewBox="0 0 16 13"
                    className="fill-current"
                  >
                    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z"></path>
                  </svg>
                </span>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                   {step}
                  </h3>
                </div>
              </div>
              ))}
              
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-2/5"
            >
              <div
                className="wow fadeInUp shadow-testimonial dark:bg-blacksection rounded-lg bg-white px-8 py-10 dark:shadow-none sm:px-10 sm:py-12 md:p-[60px] lg:p-10 lg:px-10 lg:py-12 2xl:p-[60px]"
                data-wow-delay=".2s "
              >
                <h3 className="text-dark mb-8 text-2xl font-semibold dark:text-white md:text-[28px] md:leading-[1.42]">
                 Apply for a Registraion
                </h3> 
                  
                  <div className="mb-0">
                   
                  <ContactButton />
                  </div> 
              </div>
            </motion.div>
          </div>
        </div>
      </section> 

     
    </>
  );
};

export default Service;
