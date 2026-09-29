import { ChartNoAxesColumnIncreasing, FileText, GraduationCap, Shield, Target, Trophy, UsersRound } from "lucide-react";

export default function ServicesGraphic() {
  return (
    <svg viewBox="0 0 800 640" role="img" aria-labelledby="services-graphic-title services-graphic-description" style={{ width: "100%", height: "auto", overflow: "visible" }}>
      <title id="services-graphic-title">Five departments. One trusted partner.</title>
      <desc id="services-graphic-description">Accounting and Corporate Tax: accurate, compliant, strategic. Personal Income Tax: simple, reliable, maximized. Professional Training: build skills, create opportunities. Insurance and Segregated Funds: protect, grow, secure tomorrow. Consultancy and Project Management: plan, execute, achieve. Over 40 years of combined professional experience. Customized fractional financial services designed around your business and your budget.</desc>
      <defs>
        <linearGradient id="department-blue" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#0860ed" /><stop offset="1" stopColor="#0025a1" /></linearGradient>
        <linearGradient id="department-cyan" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#2aaeea" /><stop offset="1" stopColor="#0075c8" /></linearGradient>
        <linearGradient id="department-navy" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#064897" /><stop offset="1" stopColor="#00143e" /></linearGradient>
        <linearGradient id="department-red" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#ff252b" /><stop offset="1" stopColor="#c90009" /></linearGradient>
        <linearGradient id="department-gray" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#8c939c" /><stop offset="1" stopColor="#414853" /></linearGradient>
        <radialGradient id="logo-disc"><stop offset=".75" stopColor="#fff" /><stop offset="1" stopColor="#edf1f5" /></radialGradient>
        <filter id="card-shadow" x="-30%" y="-40%" width="170%" height="200%"><feDropShadow dx="0" dy="10" stdDeviation="15" floodColor="#446c9e" floodOpacity=".12" /></filter>
      </defs>
      <g aria-hidden="true" fontFamily="Arial, sans-serif">
        <g filter="url(#card-shadow)"><rect x="3" y="15" width="248" height="102" rx="14" fill="white" /><rect x="552" y="6" width="237" height="117" rx="14" fill="white" /></g>
        <UsersRound x="22" y="45" width="42" height="42" color="#0037b7" fill="#0037b7" strokeWidth="1.5" />
        <g fill="#06245c"><text x="85" y="52" fontSize="20" fontWeight="700">5 Departments</text><text x="85" y="77" fontSize="14" fill="#4e6387">Comprehensive services</text><text x="85" y="96" fontSize="14" fill="#4e6387">under one roof</text></g>
        <Trophy x="573" y="31" width="43" height="43" color="#0037b7" fill="#0037b7" strokeWidth="1.6" />
        <g fill="#06245c"><text x="641" y="41" fontSize="20" fontWeight="700">40+ Years</text><text x="641" y="65" fontSize="20" fontWeight="700">Experience</text><text x="641" y="88" fontSize="13" fill="#4e6387">Combined professional</text><text x="641" y="107" fontSize="13" fill="#4e6387">expertise.</text></g>
        <g transform="translate(-5 22)">
          <path d="M350 7Q360 7 371 16L620 197Q634 207 629 223L532 529Q526 547 510 547H192Q175 547 170 530L73 223Q68 207 82 197L332 16Q343 7 350 7Z" fill="#e5eef9" stroke="#e5eef9" strokeWidth="15" />
          <g stroke="#fff" strokeWidth="8" strokeLinejoin="round">
            <path d="M337 15Q350 5 363 15L477 98Q484 104 479 113L350 310L221 113Q215 104 223 98Z" fill="url(#department-blue)" />
            <path d="M491 116Q497 107 506 113L619 196Q632 205 627 222L586 352Q583 365 570 361L350 310Z" fill="url(#department-cyan)" />
            <path d="M350 310L570 373Q581 376 577 388L531 530Q527 545 512 545H362Q350 545 350 533Z" fill="url(#department-navy)" />
            <path d="M350 310V533Q350 545 338 545H190Q175 545 171 530L126 388Q121 376 134 372Z" fill="url(#department-red)" />
            <path d="M350 310L133 361Q119 365 115 352L74 222Q69 206 82 196L195 113Q204 107 210 116Z" fill="url(#department-gray)" />
          </g>
          <g fill="#fff" color="#fff" textAnchor="middle">
            <ChartNoAxesColumnIncreasing x="325" y="47" width="50" height="50" strokeWidth="4" />
            <text x="350" y="121" fontSize="20" fontWeight="700"><tspan x="350">Accounting &amp;</tspan><tspan x="350" dy="23">Corporate Tax</tspan></text>
            <text x="350" y="171" fontSize="14" fill="#e0eaff"><tspan x="350">Accurate. Compliant.</tspan><tspan x="350" dy="19">Strategic.</tspan></text>
            <FileText x="493" y="176" width="49" height="49" strokeWidth="2.3" />
            <text x="518" y="255" fontSize="20" fontWeight="700"><tspan x="518">Personal</tspan><tspan x="518" dy="23">Income Tax</tspan></text>
            <text x="518" y="305" fontSize="14" fill="#e0f4ff"><tspan x="518">Simple. Reliable.</tspan><tspan x="518" dy="19">Maximized.</tspan></text>
            <GraduationCap x="433" y="379" width="60" height="49" strokeWidth="2" />
            <text x="463" y="451" fontSize="20" fontWeight="700"><tspan x="463">Professional</tspan><tspan x="463" dy="23">Training</tspan></text>
            <text x="463" y="501" fontSize="14" fill="#e0eaff"><tspan x="463">Build Skills.</tspan><tspan x="463" dy="19">Create Opportunities.</tspan></text>
            <Shield x="216" y="380" width="49" height="49" fill="#fff" strokeWidth="1.5" />
            <path d="M240 393V415" stroke="#e20c16" strokeWidth="4" />
            <text x="240" y="451" fontSize="19" fontWeight="700"><tspan x="240">Insurance &amp;</tspan><tspan x="240" dy="23">Segregated Funds</tspan></text>
            <text x="240" y="501" fontSize="14" fill="#fff0f0"><tspan x="240">Protect. Grow.</tspan><tspan x="240" dy="19">Secure Tomorrow.</tspan></text>
            <UsersRound x="150" y="178" width="56" height="48" fill="#fff" strokeWidth="1.5" />
            <text x="178" y="246" fontSize="18" fontWeight="700"><tspan x="178">Consultancy &amp;</tspan><tspan x="178" dy="23">Project Management</tspan></text>
            <text x="178" y="296" fontSize="14" fill="#edf1f7"><tspan x="178">Plan. Execute.</tspan><tspan x="178" dy="19">Achieve.</tspan></text>
          </g>
          <circle cx="350" cy="310" r="88" fill="url(#logo-disc)" stroke="#fff" strokeWidth="5" />
          <svg x="278" y="237" width="144" height="143" viewBox="495 0 1000 950" preserveAspectRatio="xMidYMid meet"><image href="/logo/rdcsp_logo.png" width="2000" height="1302" /></svg>
        </g>
        <ellipse cx="727" cy="289" rx="105" ry="103" fill="#deecff" opacity=".35" />
        <text x="649" y="271" fill="#0b306b" fontSize="17"><tspan x="649">Businesses.</tspan><tspan x="649" dy="24">Nonprofits.</tspan><tspan x="649" dy="24">Growing Enterprises.</tspan></text>
        <path d="M650 338H688" stroke="#0052ef" strokeWidth="3" strokeLinecap="round" />
        <rect x="581" y="398" width="221" height="131" rx="13" fill="white" filter="url(#card-shadow)" />
        <Target x="597" y="420" width="37" height="37" color="#003bc1" strokeWidth="2.4" />
        <text x="652" y="431" fill="#05235b" fontSize="14" fontWeight="700"><tspan x="652">Customized</tspan><tspan x="652" dy="18">Fractional Financial</tspan><tspan x="652" dy="18">Services</tspan></text>
        <text x="652" y="490" fill="#4e6387" fontSize="12"><tspan x="652">Designed around your</tspan><tspan x="652" dy="18">business and your budget.</tspan></text>
        <text x="414" y="620" textAnchor="middle" fontSize="20" fontStyle="italic" letterSpacing="2" fill="#5976a4">Accessible. Practical. Scalable. Affordable.</text>
      </g>
    </svg>
  );
}
