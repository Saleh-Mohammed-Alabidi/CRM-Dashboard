export const sidebarLinks = [
  {
    icon: "flaticon-025-dashboard",
    name: "Home",
    link: "/home",
    active:false
   
  },
  {
    icon: "flaticon-093-waving",
    name: "Leads",
    link: "/leads",
    active:false
    
  },
  {
    icon: "fa-solid fa-gear",
    name: "Contacts",
    link: "#",
    active:false
    
  },
  {
    icon: "flaticon-050-info",
    name: "Accounts",
    link: "#",
    active:false
    
  },
  {
    icon: "flaticon-093-waving",
    name: "Reports",
    link: "#",
    active:false,
   
    subItems: [
      {
        name: "Leads Report",
        link: "/leads-report",
      },
      {
        name: "Contacts Report",
        link: "contacts-report",
      },
      {
        name: "Accounts Report",
        link: "accounts-report",
      },
    ],
  },
];
