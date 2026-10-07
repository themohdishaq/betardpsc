// Transcribed from Terms of use & privacy policy (1).docx.
// Contact phone numbers follow the company details confirmed by the owner.
export type LegalBlock =
  | { type: "paragraph" | "heading" | "subheading"; text: string }
  | { type: "list"; items: string[] };

export type LegalPolicy = {
  title: string;
  href: string;
  effectiveDate?: string;
  blocks: LegalBlock[];
};

export const legalPolicies = {
  "privacy": {
    "title": "Privacy Policy",
    "href": "/privacy-policy",
    "effectiveDate": "October 1, 2026",
    "blocks": [
      {
        "type": "paragraph",
        "text": "RD Prestidge Services Corp. uses the information received in the course of providing the aforementioned services for the intended purposes, keeps all records in its custody safe and secure while still in its custody, and safely disposes of records thereafter in line with its document management policy."
      },
      {
        "type": "paragraph",
        "text": "Clients may be required to appoint RD Prestidge Services Corp. as an authorized representative for tax filing purposes and to represent the clients in correspondences with the CRA and other government agencies when necessary. Clients will provide, on request, any authorization and information subsequently required and requested to enable RD Prestidge Services Corp. to execute these tasks in a timely and professional manner."
      },
      {
        "type": "paragraph",
        "text": "Clients will be required to consent to RD Prestidge Services Corp., its employees, and representatives obtaining information, including some which may be personal by nature, to provide the Clients with the services requested."
      },
      {
        "type": "paragraph",
        "text": "Clients, directors and representatives agree to answer all service intake questions to the best of their knowledge and abilities."
      },
      {
        "type": "paragraph",
        "text": "RD Prestidge Services Corp. treats all personal, financial, tax, payroll, and business information as confidential and implements reasonable administrative, physical, and technological safeguards to protect such information against unauthorized access, use, disclosure, alteration, or loss."
      },
      {
        "type": "paragraph",
        "text": "RD Prestidge Services Corp. does not sell, rent, trade, or otherwise disclose personal information to third parties except as required to provide services, comply with legal obligations, or with the consent of the individual concerned."
      },
      {
        "type": "paragraph",
        "text": "RD Prestidge Services Corp. may collect the following categories of personal information:"
      },
      {
        "type": "heading",
        "text": "Information You Provide Directly"
      },
      {
        "type": "list",
        "items": [
          "Name",
          "Business email address",
          "Company name",
          "Job title",
          "Phone number",
          "Information submitted through contact forms",
          "Newsletter subscription information",
          "Communication content"
        ]
      },
      {
        "type": "paragraph",
        "text": "RD Prestidge Services Corp. may use personal information for the following purposes:"
      },
      {
        "type": "list",
        "items": [
          "To operate and maintain our website",
          "To respond to inquiries and requests",
          "To provide products, services, and support",
          "To manage business relationships",
          "To send marketing communications and newsletters",
          "To improve website functionality and user experience",
          "To analyze website traffic and performance",
          "To detect security incidents and prevent fraud",
          "To comply with legal obligations"
        ]
      },
      {
        "type": "paragraph",
        "text": "Personal information is retained only for as long as necessary to fulfill the purposes for which it was collected and to satisfy legal, regulatory, tax, and professional obligations."
      },
      {
        "type": "paragraph",
        "text": "Clients should be aware that communication by email or other electronic means might not be completely secure. RD Prestidge Services Corp. recommends using secure methods when sharing highly confidential information. Contact RD Prestidge Services Corp. directly to share or discuss financial or personal transactions. We accept no liability for any errors, omissions, or damages resulting from Clients failing to adhere to this advice."
      },
      {
        "type": "heading",
        "text": "Third-Party Services"
      },
      {
        "type": "subheading",
        "text": "Google Analytics"
      },
      {
        "type": "paragraph",
        "text": "We use Google Analytics to understand website usage and improve website performance. Google Analytics may collect information such as IP addresses, device information, and browsing behaviour. IP anonymization features may be enabled where applicable."
      },
      {
        "type": "subheading",
        "text": "Google Ads"
      },
      {
        "type": "paragraph",
        "text": "We use Google Ads and remarketing technologies to provide relevant advertising and measure campaign effectiveness."
      },
      {
        "type": "subheading",
        "text": "Google Maps"
      },
      {
        "type": "paragraph",
        "text": "Google Maps may be integrated into our website to provide location-related functionality."
      },
      {
        "type": "heading",
        "text": "User Rights"
      },
      {
        "type": "paragraph",
        "text": "Individuals may request access to, correction of, or deletion of their personal information, subject to applicable legal and professional record retention requirements."
      },
      {
        "type": "heading",
        "text": "Effective Date"
      },
      {
        "type": "paragraph",
        "text": "Effective Date: October 1, 2026"
      },
      {
        "type": "heading",
        "text": "Privacy Contact Information"
      },
      {
        "type": "paragraph",
        "text": "Privacy Officer"
      },
      {
        "type": "paragraph",
        "text": "RD Prestidge Services Corp."
      },
      {
        "type": "paragraph",
        "text": "Email: services@rdpsc.ca"
      }
    ]
  },
  "terms": {
    "title": "Terms of Use",
    "href": "/terms-of-service",
    "effectiveDate": "October 1, 2026",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Effective Date: October 1, 2026"
      },
      {
        "type": "paragraph",
        "text": "Welcome to the website of RD Prestidge Services Corp. (\"RD Prestidge,\" \"we,\" \"our,\" or \"us\"). By accessing or using this website, you agree to be bound by these Terms of Use. If you do not agree with these Terms, please discontinue use of the website immediately."
      },
      {
        "type": "heading",
        "text": "1. Acceptance of Terms"
      },
      {
        "type": "paragraph",
        "text": "By accessing, browsing, or using this website, you acknowledge that you have read, understood, and agree to comply with these Terms of Use and our Privacy Policy."
      },
      {
        "type": "heading",
        "text": "2. Informational Purposes Only"
      },
      {
        "type": "paragraph",
        "text": "The content provided on this website is intended for general informational purposes only and does not constitute accounting, tax, financial, treasury, legal, consulting, or other professional advice."
      },
      {
        "type": "paragraph",
        "text": "The information contained on this website should not be relied upon as a substitute for professional advice tailored to your specific circumstances. You should consult RD Prestidge Services Corp. or another qualified professional before making any business, tax, accounting, financial, or investment decision."
      },
      {
        "type": "heading",
        "text": "3. No Client Relationship"
      },
      {
        "type": "paragraph",
        "text": "Your use of this website, including submitting inquiries through contact forms, email, or other communication channels, does not create an accountant-client, consultant-client, advisor-client, or any other professional relationship between you and RD Prestidge Services Corp."
      },
      {
        "type": "paragraph",
        "text": "A professional relationship is established only upon execution of a formal engagement agreement."
      },
      {
        "type": "heading",
        "text": "4. Accuracy of Information"
      },
      {
        "type": "paragraph",
        "text": "While RD Prestidge Services Corp. strives to ensure that website content is accurate and current, we make no representations or warranties regarding the completeness, accuracy, reliability, suitability, or availability of any information contained on the website."
      },
      {
        "type": "paragraph",
        "text": "Tax legislation, accounting standards, government policies, and business regulations may change over time. Information on this website may become outdated without notice."
      },
      {
        "type": "heading",
        "text": "5. Limitation of Liability"
      },
      {
        "type": "paragraph",
        "text": "To the fullest extent permitted by applicable law, RD Prestidge Services Corp., its directors, officers, employees, contractors, and representatives shall not be liable for any direct, indirect, incidental, consequential, special, punitive, or other damages arising out of or related to:"
      },
      {
        "type": "list",
        "items": [
          "Use of or reliance upon website content;",
          "Inability to access or use the website;",
          "Website interruptions or technical failures;",
          "Viruses, malware, or other harmful components;",
          "Errors, omissions, or inaccuracies in website content; or",
          "Unauthorized access to information transmitted through the website."
        ]
      },
      {
        "type": "paragraph",
        "text": "Use of this website is solely at your own risk."
      },
      {
        "type": "heading",
        "text": "6. Intellectual Property"
      },
      {
        "type": "paragraph",
        "text": "All website content, including text, graphics, logos, images, designs, documents, downloads, branding, and other materials, is owned by or licensed to RD Prestidge Services Corp. and is protected by applicable intellectual property laws."
      },
      {
        "type": "paragraph",
        "text": "You may view, download, and print content for personal, non-commercial use only."
      },
      {
        "type": "paragraph",
        "text": "You may not:"
      },
      {
        "type": "list",
        "items": [
          "Reproduce, distribute, modify, publish, or transmit website content;",
          "Use website content for commercial purposes;",
          "Create derivative works from website content; or",
          "Remove copyright or proprietary notices."
        ]
      },
      {
        "type": "paragraph",
        "text": "Without the prior written consent of RD Prestidge Services Corp."
      },
      {
        "type": "heading",
        "text": "7. User Conduct"
      },
      {
        "type": "paragraph",
        "text": "Users agree not to:"
      },
      {
        "type": "list",
        "items": [
          "Use the website for unlawful purposes;",
          "Upload malicious software or harmful code;",
          "Attempt to gain unauthorized access to the website or its systems;",
          "Interfere with website functionality or security;",
          "Submit false, misleading, or fraudulent information; or",
          "Use the website in any manner that could damage the reputation or operations of RD Prestidge Services Corp."
        ]
      },
      {
        "type": "heading",
        "text": "8. Electronic Communications"
      },
      {
        "type": "paragraph",
        "text": "Communications sent through email, website forms, or other electronic means may not be completely secure."
      },
      {
        "type": "paragraph",
        "text": "Users should avoid sending sensitive personal, financial, banking, payroll, tax, or confidential information through unsecured electronic channels."
      },
      {
        "type": "paragraph",
        "text": "RD Prestidge Services Corp. is not responsible for interception, alteration, loss, or unauthorized disclosure of information transmitted over the internet."
      },
      {
        "type": "heading",
        "text": "9. Third-Party Websites"
      },
      {
        "type": "paragraph",
        "text": "This website may contain links to third-party websites for convenience or informational purposes."
      },
      {
        "type": "paragraph",
        "text": "RD Prestidge Services Corp. does not endorse, control, or assume responsibility for the content, privacy practices, products, services, or information provided by third-party websites."
      },
      {
        "type": "paragraph",
        "text": "Users access third-party websites at their own risk."
      },
      {
        "type": "heading",
        "text": "10. Privacy"
      },
      {
        "type": "paragraph",
        "text": "The collection, use, disclosure, and protection of personal information are governed by our Privacy Policy, which forms part of these Terms of Use."
      },
      {
        "type": "paragraph",
        "text": "Users are encouraged to review the Privacy Policy before providing any personal information through this website."
      },
      {
        "type": "heading",
        "text": "11. Website Availability"
      },
      {
        "type": "paragraph",
        "text": "RD Prestidge Services Corp. does not guarantee that the website will operate without interruption, error, delay, or security vulnerabilities."
      },
      {
        "type": "paragraph",
        "text": "We reserve the right to modify, suspend, restrict, or discontinue any portion of the website at any time without notice."
      },
      {
        "type": "heading",
        "text": "12. Indemnification"
      },
      {
        "type": "paragraph",
        "text": "You agree to indemnify and hold harmless RD Prestidge Services Corp., its directors, officers, employees, contractors, and representatives from any claims, damages, liabilities, costs, and expenses, including reasonable legal fees, arising from:"
      },
      {
        "type": "list",
        "items": [
          "Your use of the website;",
          "Your violation of these Terms of Use; or",
          "Your violation of applicable laws or the rights of any third party."
        ]
      },
      {
        "type": "heading",
        "text": "13. Governing Law"
      },
      {
        "type": "paragraph",
        "text": "These Terms of Use shall be governed by and interpreted in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein."
      },
      {
        "type": "paragraph",
        "text": "Any dispute arising from these Terms or the use of this website shall be subject to the exclusive jurisdiction of the courts of Ontario."
      },
      {
        "type": "heading",
        "text": "14. Changes to These Terms"
      },
      {
        "type": "paragraph",
        "text": "RD Prestidge Services Corp. reserves the right to amend these Terms of Use at any time without prior notice."
      },
      {
        "type": "paragraph",
        "text": "Updated versions will be posted on this website, and continued use of the website constitutes acceptance of any revised Terms."
      },
      {
        "type": "heading",
        "text": "15. Contact Information"
      },
      {
        "type": "paragraph",
        "text": "Questions regarding these Terms of Use may be directed to:"
      },
      {
        "type": "paragraph",
        "text": "RD Prestidge Services Corp."
      },
      {
        "type": "paragraph",
        "text": "Ottawa, Ontario, Canada"
      },
      {
        "type": "paragraph",
        "text": "Email: services@rdpsc.ca"
      },
      {
        "type": "paragraph",
        "text": "Phone: +1-613-668-6848 and +1-873-353-5905"
      }
    ]
  },
  "cookies": {
    "title": "Cookies and Analytics",
    "href": "/cookies-policy",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Our website may use cookies and similar technologies to improve functionality, understand website usage, and enhance user experience. Cookies are small text files placed on a visitor's device that help websites operate efficiently and collect certain information about website activity."
      },
      {
        "type": "paragraph",
        "text": "We may use analytics services such as Google Analytics or similar tools to understand how visitors interact with our website. These services may collect information such as IP address, browser type, pages visited, and time spent on the website."
      },
      {
        "type": "paragraph",
        "text": "Visitors may modify their browser settings to refuse cookies or alert them when cookies are being used. Disabling cookies may affect the functionality of certain portions of the website."
      },
      {
        "type": "paragraph",
        "text": "Copyright © 2026 RD Prestidge Services Corp. All rights reserved."
      }
    ]
  }
} satisfies Record<string, LegalPolicy>;
