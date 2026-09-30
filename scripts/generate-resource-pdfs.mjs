import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

// Small, dependency-free, single-page PDF worksheets with selectable text.
const destination = fileURLToPath(new URL("../public/resources/downloads/", import.meta.url));
mkdirSync(destination, { recursive: true });
const documents = [
  ["individual-tax-checklist.pdf", "Tax Preparation Checklist", "For individuals - organize your consultation", [
    "Tax year: __________________  Meeting date: __________________",
    "Use this list to discuss which records apply to your situation.",
    "[ ] Prior return and notices or correspondence received from the CRA",
    "[ ] Income slips and records received for the year",
    "[ ] Records of self-employment, rental, or other income, if relevant",
    "[ ] Receipts or statements you would like your preparer to review",
    "[ ] Notes about changes in work, family, residence, or dependants",
    "[ ] Questions about documents that may still be missing",
    "Questions for my tax preparer:",
    "____________________________________________________________",
    "____________________________________________________________",
    "Confirm deadlines and required documents with your preparer and CRA.",
    "Official information: https://www.canada.ca/en/revenue-agency.html",
  ]],
  ["corporate-tax-checklist.pdf", "Corporate Tax Preparation", "Business records discussion checklist", [
    "Business name: __________________  Year-end: _________________",
    "[ ] Prior financial statements and corporate tax correspondence",
    "[ ] Bookkeeping records and account reconciliations",
    "[ ] Bank, credit card, loan, and financing statements",
    "[ ] Sales invoices, expense records, and supporting receipts",
    "[ ] Payroll and contractor payment records, where relevant",
    "[ ] Asset purchases, disposals, and inventory records",
    "[ ] Notes on ownership changes and significant transactions",
    "Items to discuss with the accountant:",
    "____________________________________________________________",
    "____________________________________________________________",
    "Ask your accountant which records and filing obligations apply.",
    "Official information: https://www.canada.ca/en/revenue-agency.html",
  ]],
  ["financial-planning-worksheet.pdf", "Financial Planning Worksheet", "Five prompts for your next planning conversation", [
    "1. My main financial goals and desired timeframes:",
    "____________________________________________________________",
    "2. My monthly income and regular spending categories:",
    "____________________________________________________________",
    "3. My current savings, debts, and financial commitments:",
    "____________________________________________________________",
    "4. Changes or unexpected expenses I want to prepare for:",
    "____________________________________________________________",
    "5. Questions I want to ask a financial professional:",
    "____________________________________________________________",
    "Next step: __________________  Review date: __________________",
    "Learning resources:",
    "https://www.canada.ca/en/financial-consumer-agency.html",
  ]],
  ["business-startup-worksheet.pdf", "Small Business Startup Worksheet", "Turn your business idea into a focused conversation", [
    "Business idea: ______________________________________________",
    "Who are my intended customers? ______________________________",
    "What problem does my business solve? ________________________",
    "What will I sell and how will I reach customers?",
    "____________________________________________________________",
    "What startup and ongoing costs should I investigate?",
    "____________________________________________________________",
    "Which registrations, permits, and tax questions need review?",
    "____________________________________________________________",
    "Who can help with accounting, legal, or operational questions?",
    "____________________________________________________________",
    "Next three actions: _________________________________________",
    "Business resources: https://www.canada.ca/en/services/business.html",
  ]],
  ["segregated-funds-questions.pdf", "Segregated Funds: Questions to Ask", "A discussion worksheet for your insurance professional", [
    "My goals and intended timeframe: ____________________________",
    "[ ] How does this product work, and who provides the contract?",
    "[ ] What risks, fees, and ongoing charges should I understand?",
    "[ ] What guarantees apply, and what conditions limit them?",
    "[ ] What happens if I withdraw early or change my plan?",
    "[ ] What beneficiary and estate considerations should I discuss?",
    "[ ] What alternatives should I compare before deciding?",
    "[ ] Which contract documents should I read before proceeding?",
    "Questions or terms that need clarification:",
    "____________________________________________________________",
    "____________________________________________________________",
    "Record the professional's answers and review the actual contract.",
    "Consumer resources: https://www.clhia.ca/en-ca",
  ]],
];

function escapePdf(value) { return value.replaceAll("\\", "\\\\").replaceAll("(", "\\(").replaceAll(")", "\\)"); }
function makePdf(title, subtitle, lines) {
  const text = (value, x, y, size, color = "0.12 0.2 0.32") => `${color} rg BT /F1 ${size} Tf ${x} ${y} Td (${escapePdf(value)}) Tj ET\n`;
  let stream = "0.01 0.12 0.23 rg 0 690 612 102 re f\n";
  stream += text("RD PRESTIGE SERVICES CORP.", 42, 755, 11, "0.4 0.75 1");
  stream += text(title, 42, 722, 23, "1 1 1");
  stream += text(subtitle, 42, 665, 12);
  stream += "0 0.42 0.85 RG 1.5 w 42 649 m 570 649 l S\n";
  lines.forEach((line, i) => { stream += text(line, 42, 619 - i * 29, 10); });
  stream += text("Preparation aid only; not a filing guide or personalized advice.", 42, 95, 9);
  stream += text("Keep completed worksheets private. Share sensitive records securely.", 42, 80, 9);
  stream += text("RD Prestige Services Corp. | info@rdpsc.ca | +1 (437) 214-8299", 42, 50, 9);
  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    `<< /Length ${Buffer.byteLength(stream)} >>\nstream\n${stream}endstream`,
  ];
  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  objects.forEach((object, i) => { offsets.push(Buffer.byteLength(pdf)); pdf += `${i + 1} 0 obj\n${object}\nendobj\n`; });
  const xref = Buffer.byteLength(pdf);
  pdf += `xref\n0 6\n0000000000 65535 f \n${offsets.slice(1).map((n) => `${String(n).padStart(10, "0")} 00000 n \n`).join("")}trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`;
  return pdf;
}
for (const [file, title, subtitle, lines] of documents) writeFileSync(`${destination}/${file}`, makePdf(title, subtitle, lines));
console.log(`Created ${documents.length} PDF worksheets.`);
