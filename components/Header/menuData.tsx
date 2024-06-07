import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,

    path: "/",
  },
  {
    id: 2,
    title: "Company Registrations",
    newTab: false,
    footer: true,
    submenu: [
      {
        id: 31,
        title: "Private Limited Company",
        newTab: false,
        path: "/private-limited-company-registrations",
      },
      {
        id: 34,
        title: "Limited Liability Partnership",
        newTab: false,
        path: "/limited-liability-partnership-registrations",
      },
      {
        id: 35,
        title: "One Person Company",
        newTab: false,
        path: "/one-person-company-registrations",
      },
      {
        id: 35,
        title: "Sole Proprietorship",
        newTab: false,
        path: "/sole-proprietorship-registrations",
      },
       
    ],
  },
  {
    id: 2.1,
    title: "Tax & Compliance",
    newTab: false,
    footer: true, 
    submenu: [
      {
        id: 31,
        title: "GST Registration",
        newTab: false,
        path: "/gst-registration",
      },
      {
        id: 34,
        title: "GST Filing",
        newTab: false,
        path: "/gst-filing",
      },
      {
        id: 35,
        title: "Accounting and Book keeping",
        newTab: false,
        path: "/accounting-book-keeping",
      },
      {
        id: 35,
        title: "TDS Returns Filing",
        newTab: false,
        path: "/tds-returns-filing",
      },
      {
        id: 35,
        title: "Income Tax Filing",
        newTab: false,
        path: "/income-tax-filing",
      },
    ],
  },
  {
    id: 3,
    title: "Documentaion",
    newTab: false, 
    footer: true,
    submenu: [
      {
        id: 31,
        title: "Servie level Agreements",
        newTab: false,
        path: "/service-level-agreements",
      },
      {
        id: 34,
        title: "Non Disclosure Agreements",
        newTab: false,
        path: "/non-disclosure-agreements",
      },
      {
        id: 35,
        title: "Servie level Agreements",
        newTab: false,
        path: "/service-level-agreements",
      },
      {
        id: 35,
        title: "Master Servie Agreements",
        newTab: false,
        path: "/master-service-agreements",
      },
      {
        id: 35,
        title: "Finance Agreements",
        newTab: false,
        path: "/finance-agreements",
      },
    ],
  }, 
  {
    id: 4,
    title: "Company",
    newTab: false, 
    submenu: [ {
      id: 31,
      title: "About Us",
      newTab: false,
      path: "/about",
    },
      {
        id: 31,
        title: "Contact",
        newTab: false,
        path: "/support",
      },
    ]
  },
];

export default menuData;
