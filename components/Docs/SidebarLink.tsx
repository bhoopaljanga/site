"use client";
import { link } from "fs";
import Link from "next/link";

const SidebarLink = ({ links }: { links:any [] }) => {
  return (
    <>
      <li className="block">
      {links.map((link, key) => (
               <Link  key={key}
              href={link.href}
              className={`flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white `}
            >
             {link.title}
            </Link>
            ))}
        
        
      </li>
    </>
  );
};

export default SidebarLink;
