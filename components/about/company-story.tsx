import Image from "next/image";

const sections = [
  {
    id: "our-network",
    title: "Our Professional Network",
    paragraphs: [
      "Our team brings together professionals with experience spanning a wide range of industries, including nonprofits, public companies, government entities, and small to medium-sized businesses. Within our network are Chartered Professional Accountants (CPAs), Certified Treasury Professionals (CTPs), Certified Management Accountants (CMAs), insurance professionals, and other highly qualified specialists whose credentials and expertise rival those found in top-tier organizations around the world.",
    ],
  },
  {
    id: "tailored-solutions",
    title: "Solutions Built Around Your Business",
    statement: "What sets us apart is our commitment to building financial solutions around your business, not forcing your business into a generic solution.",
    paragraphs: [
      "We take the time to understand your current operations, growth stage, challenges, and future plans. Using this insight, we design and implement scalable, end-to-end financial processes that support both today's priorities and tomorrow's ambitions. Whether your organization needs support with budgeting, forecasting, cash flow management, accounting operations, payroll, risk management, financial reporting, or system implementation, our solutions are tailored to your specific requirements and budget.",
    ],
  },
  {
    id: "our-experience",
    title: "Experience & Expertise",
    paragraphs: [
      "Collectively, our professionals bring more than 40 years of experience supporting organizations ranging from start-ups to some of the world's largest corporations. Our expertise includes developing efficient and cost-effective financial processes, streamlining accounts payable and receivable functions, inventory management, payroll administration, budgeting and planning, treasury operations, and implementing complex ERP systems.",
      "Beyond traditional financial services, RDPSC also helps clients identify and manage business risks through licensed insurance brokerage services. We complement our technical expertise with financial literacy, professional education, and strategic guidance, empowering business owners and leadership teams to make informed decisions with confidence.",
    ],
  },
] as const;

export default function CompanyStory() {
  return (
    <section aria-labelledby="story-heading" className="mx-auto max-w-360 px-6 py-10 sm:py-12 lg:px-[clamp(24px,5vw,72px)]">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="min-w-0">
          <p className="mb-3 text-caption font-semibold uppercase tracking-[.14em] text-brand">Our Story</p>
          <h2 id="story-heading">Financial Expertise<br /><span className="text-brand">Within Reach</span></h2>
          <span aria-hidden="true" className="my-5 block h-0.75 w-13 bg-[#ff233b]" />
          <div className="space-y-5 text-body text-copy">
            <p>Too often, businesses, nonprofits, and growing enterprises face a difficult choice: either stretch limited resources to afford quality financial leadership or settle for inadequate services that fail to provide the insight and strategic guidance needed for sustainable growth. We saw this gap in the marketplace and came together to change it.</p>
            <p>RDPSC is a network of experienced finance professionals dedicated to delivering customized fractional financial services that align with each client&apos;s unique needs, goals, and budget. We believe that every organization, regardless of size, deserves access to high-quality financial expertise without the cost of maintaining a full-time finance department.</p>
          </div>
        </div>
        <figure className="relative m-0 aspect-[4/3] overflow-hidden rounded-2xl bg-[#103c5c] lg:aspect-auto lg:min-h-110 lg:self-stretch">
          <Image src="/images/about/story.png" alt="Modern glass building with the message A Brighter Financial Tomorrow Together engraved on its facade" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
        </figure>
      </div>

      <div className="mt-10 sm:mt-14">
        {sections.map((section) => (
          <section key={section.id} aria-labelledby={section.id} className="grid gap-5 border-t border-[#dce6f2] py-8 sm:py-10 lg:grid-cols-[.45fr_1fr] lg:gap-12">
            <div>
              <span aria-hidden="true" className="mb-4 block h-0.75 w-9 bg-[#299ee8]" />
              <h3 id={section.id} className="max-w-75 text-card-heading text-brand">{section.title}</h3>
            </div>
            <div className="max-w-[76ch] space-y-5 text-body text-copy">
              {"statement" in section && <p className="rounded-xl border-l-4 border-[#299ee8] bg-[#f3f7fc] px-5 py-4 font-medium text-ink">{section.statement}</p>}
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </section>
        ))}
      </div>

      <div className="rounded-2xl border border-[#dce6f2] bg-[#f3f7fc] p-6 sm:p-8">
        <p className="max-w-[76ch] text-body font-semibold text-brand">Our mission is simple: to provide world-class financial expertise that is accessible, practical, scalable, and affordable.</p>
        <p className="mt-5 max-w-[76ch] text-body text-copy">We handle the complexities of finance so you can focus on what matters most: growing your business, serving your customers, and achieving your vision. Every service we deliver is designed specifically for your organization because we know that successful businesses are built on solutions tailored to their unique needs, not on one-size-fits-all approaches.</p>
        <p className="mt-6 max-w-[76ch] border-t border-[#dce6f2] pt-5 text-body font-semibold text-ink">RDPSC: Professional Financial Solutions Designed Around Your Business and Your Budget.</p>
      </div>
    </section>
  );
}
