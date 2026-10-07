export type CompanyRelationship = { name: string; displayName?: string; category?: string; href?: string; logoSrc: string };
export type CustomerCategory = { id: string; title: string; companies: CompanyRelationship[] };

// Logos use public/Partners and public/CustomerCategory; preserve filename casing.
// Example: logoSrc: "/images/relationships/ivari.svg". Empty paths show names.
export const strategicPartners: CompanyRelationship[] = [
  { name: "World Financial Group", displayName: "WFG", category: "Financial Education", href: "https://www.worldfinancialgroup.com/", logoSrc: "/Partners/World Financial Group.png" },
  { name: "ivari", category: "Life Insurance", href: "https://ivari.ca/", logoSrc: "/Partners/ivari.png" },
  { name: "iA Financial Group", displayName: "iA", category: "Insurance & Savings", href: "https://ia.ca/individuals", logoSrc: "/Partners/iA Financial Group.png" },
  { name: "Manulife", category: "Insurance", href: "https://id.manulife.ca/", logoSrc: "/Partners/Manulife.png" },
  { name: "QuickBooks", category: "Accounting", href: "https://quickbooks.intuit.com/", logoSrc: "/Partners/QuickBooks.jpg" },
  { name: "Zoho", category: "Cloud Software", href: "https://www.zoho.com/", logoSrc: "/Partners/zoho.png" },
  { name: "UFile", category: "Tax Software", href: "https://www.ufile.ca/", logoSrc: "/Partners/ufile.png" },
];

export const customerCategories: CustomerCategory[] = [
  { id: "not-for-profits", title: "Not-for-profits", companies: [
    { name: "Overcomers Chapel", href: "https://www.rccgovercomerschapel.org", logoSrc: "/CustomerCategory/Overcomers Chapel.png" },
    { name: "He Cares We Care", href: "https://hecareswecare.org/", logoSrc: "/CustomerCategory/He Cares We Care.jpg" },
    { name: "Feast of Esther", href: "https://feastofesther.ca/about-us/", logoSrc: "/CustomerCategory/Feast of Esther.png" },
  ] },
  { id: "restaurants-logistics", title: "Restaurants & Logistics", companies: [
    { name: "Holy Guacamole Canada Inc.", displayName: "Holy Guacamole", href: "http://holy-guacamole.ca/", logoSrc: "/CustomerCategory/Holy Guacamole Canada Inc.png" },
    { name: "Maple Logistics Trading Inc.", displayName: "Maple Logistics", href: "https://www.maplelogisticstrading.ca/", logoSrc: "/CustomerCategory/maple logistics trading.png" },
  ] },
  { id: "consulting-tech", title: "Consulting & Tech", companies: [
    { name: "Zadesta", href: "https://zadesta.com/", logoSrc: "/CustomerCategory/zadesta.jpg" },
    { name: "Restar Framos Technologies", displayName: "Restar Framos", href: "https://www.restarframos.com/", logoSrc: "/CustomerCategory/restarframos.png" },
  ] },
  { id: "property-construction", title: "Property & Construction", companies: [
    { name: "Canada Home Renos Inc.", displayName: "Canada Home Renos", logoSrc: "/CustomerCategory/Canada Home Renos Inc.jpg" },
    { name: "LG Key Property Solutions", displayName: "LG Key", logoSrc: "/CustomerCategory/LG Key Property Solutions.png" },
    { name: "Concept 24 group", displayName: "Concept 24", href: "https://www.concept24group.com/contact-4", logoSrc: "/CustomerCategory/concept24group.png" },
    { name: "Buildesigners Inc.", displayName: "Buildesigners", href: "https://buildesigners.ca/", logoSrc: "/CustomerCategory/Buildesigners.jpg" },
  ] },
  { id: "professional-training", title: "Professional Training", companies: [
    { name: "Astranti", href: "https://www.astranti.com/", logoSrc: "/CustomerCategory/Astranti.png" },
  ] },
];
