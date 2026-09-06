/* ============================================================
   CIMSL central content store — CMS-ready.
   To adopt a headless CMS later, replace the arrays below with
   fetch() calls returning the same shape. No markup changes needed.
   DO NOT invent statistics, testimonials, partners or events here.
   ============================================================ */
window.CIMSL = window.CIMSL || {};

window.CIMSL.site = {
  name: "Children Intergrated Missions International",
  short: "CIMSL",
  tagline: "Restoring Hope. Empowering Children. Building a Better Future.",
  phoneDisplay: "+232 766 16259",
  phoneHref: "+23276616259",
  phoneIntl: "23276616259",
  email: "samuelmabonakamara468@gmail.com",
  address: "5D Conton Street, Peacock Farm, Wellington, Freetown, Sierra Leone, West Africa",
  mapsQuery: "5D Conton Street, Peacock Farm, Wellington, Freetown, Sierra Leone",
  donate: { method: "Orange Money", number: "076616259", name: "Samuel Mabona Kamara" }
};

window.CIMSL.programs = [
  {
    slug: "child-care-protection",
    file: "programs-child-care-protection.html",
    tag: "Protection",
    title: "Child Care & Protection",
    img: "images/cimsl/programs/protection.jpg",
    alt: "Woman with a child during a CIMSL family visit in Sierra Leone",
    desc: "Safe, caring and protective environments where vulnerable children can grow physically, emotionally and spiritually.",
    points: ["Safe accommodation", "Emotional support", "Mentorship", "Values development"],
    objectives: ["Provide safe, loving and secure environments for vulnerable children", "Support physical, emotional and spiritual wellbeing", "Strengthen safeguarding awareness among caregivers and communities"],
    activities: ["Shelter and day-to-day care support", "One-to-one mentorship and counselling", "Life-skills and values sessions", "Caregiver and community safeguarding sensitisation"],
    impact: ["Children experience stability, safety and belonging", "Improved emotional wellbeing and confidence", "Communities better equipped to protect children"]
  },
  {
    slug: "education",
    file: "programs-education.html",
    tag: "Education",
    title: "Education Support",
    img: "images/cimsl/programs/education.jpg",
    alt: "Children holding new school supply kits during a CIMSL distribution",
    desc: "Helping disadvantaged children access education through scholarships, materials, tuition support and literacy initiatives.",
    points: ["Scholarships", "School materials", "Literacy", "Computer education"],
    objectives: ["Keep vulnerable children enrolled and learning", "Close material and tuition gaps", "Build literacy and digital foundations"],
    activities: ["Scholarships and tuition support", "School supplies and uniforms", "Homework assistance and tutoring", "Literacy programmes and computer education", "Academic forums and competitive debate"],
    impact: ["Better attendance and retention", "Stronger reading, writing and digital skills", "Children able to compete and collaborate academically"]
  },
  {
    slug: "healthcare",
    file: "programs-healthcare.html",
    tag: "Health",
    title: "Healthcare & Nutrition",
    img: "images/cimsl/programs/healthcare.jpg",
    alt: "Children sharing a meal during a CIMSL nutrition outreach",
    desc: "Supporting children's health through healthcare access, check-ups, vaccination, nutrition, clean water and hygiene.",
    points: ["Check-ups", "Vaccination", "Nutrition", "Clean water"],
    objectives: ["Improve access to essential healthcare services", "Promote hygiene, clean water and good nutrition", "Support preventive care for children"],
    activities: ["Medical check-ups and referrals", "Vaccination support", "Nutritious meals and nutrition guidance", "Clean drinking water and hygienic supplies", "Dental care support"],
    impact: ["Healthier children with fewer preventable illnesses", "Better nutrition and hygiene habits", "Earlier identification of health needs"]
  },
  {
    slug: "community-development",
    file: "programs-community-development.html",
    tag: "Community",
    title: "Community Development",
    img: "images/cimsl/programs/community.jpg",
    alt: "Community members gathered for a CIMSL outreach meeting",
    desc: "Working with families, schools, churches and institutions to strengthen child welfare and protection systems.",
    points: ["Families", "Schools", "Faith groups", "Institutions"],
    objectives: ["Strengthen families and community safety nets", "Improve collaboration between schools, churches and authorities", "Support child-friendly community systems"],
    activities: ["Family and caregiver engagement", "School and church partnerships", "Engagement with councils, ministries and local authorities", "Community awareness on child rights and referral pathways"],
    impact: ["Stronger community ownership of child welfare", "Better coordination around vulnerable children", "More protective everyday environments"]
  }
];

window.CIMSL.objectives = [
  { n: "01", title: "Child welfare & hygiene", text: "Seek the welfare of children through provision of hygienic supplies." },
  { n: "02", title: "Child protection advocacy", text: "Engage decision makers to formulate and enforce laws protecting children." },
  { n: "03", title: "Academic development", text: "Create academic forums where school-going children can interact, learn and participate in competitive debate." },
  { n: "04", title: "Child rights awareness", text: "Raise awareness among children about their rights, responsibilities and referral pathways when rights are violated." },
  { n: "05", title: "Institutional collaboration", text: "Engage line ministries, district councils and local authorities so children receive the benefits and protections intended for them." },
  { n: "06", title: "Support for marginalised children", text: "Identify marginalised and vulnerable children and provide opportunities that improve their living conditions." }
];

/* Honest placeholders only — no fabricated stories, events or numbers. */
window.CIMSL.news = [
  {
    slug: "welcome-to-new-cimsl-website",
    category: "CIMSL News",
    date: "2026-03-02",
    dateDisplay: "02 Mar 2026",
    title: "Welcome to the new CIMSL website",
    img: "images/cimsl/hero/hero-community-meal.jpg",
    alt: "Group of children at a CIMSL community gathering",
    excerpt: "Our new website makes it easier to understand our mission, explore our programs and find safe ways to donate, volunteer or partner with us.",
    body: ["Children Intergrated Missions International (CIMSL) exists to restore hope and create opportunities for orphaned, abandoned, vulnerable and disadvantaged children.", "This new website brings our mission, programs, objectives and contact information together in one clear, accessible place. You can now explore each program in detail, learn how to sponsor a child, volunteer or partner with us, and donate through our verified Orange Money channel.", "As we grow, this space will carry program updates, community activities and — only with proper consent and safeguarding — stories of hope from the communities we serve."]
  },
  {
    slug: "how-your-donation-is-used",
    category: "Program Updates",
    date: "2026-02-10",
    dateDisplay: "10 Feb 2026",
    title: "How your donation is used",
    img: "images/cimsl/programs/education.jpg",
    alt: "Children holding new school supply kits",
    excerpt: "Your support helps a vulnerable child access education, healthcare, nutrition and protection. Here is what donations can support.",
    body: ["Every contribution, regardless of size, helps CIMSL continue caring for vulnerable and disadvantaged children.", "Donations can support school fees, educational materials, nutritious meals, clothing and footwear, healthcare access, hygiene supplies and safe accommodation.", "We currently receive donations through Orange Money (076616259 — Samuel Mabona Kamara). Always confirm details on our Donate page before sending."]
  },
  {
    slug: "safeguarding-children-first",
    category: "Community Activities",
    date: "2026-01-20",
    dateDisplay: "20 Jan 2026",
    title: "Safeguarding: children first in everything we publish",
    img: "images/cimsl/programs/protection.jpg",
    alt: "Caregiver with a child during a community visit",
    excerpt: "We never publish identifying or sensitive information about children without proper authorisation. Anonymisation comes first.",
    body: ["CIMSL works with orphaned, abandoned, vulnerable and disadvantaged children. That responsibility extends to our communications.", "We do not publish names, faces or sensitive details of children without proper authorisation, and we use anonymisation where appropriate.", "If you share our work online, please help us protect children's privacy too."]
  }
];

window.CIMSL.gallery = [
  { src: "images/cimsl/gallery/gallery-01-school-kits.jpg", cat: "Education", cap: "Children showing new school supply kits" },
  { src: "images/cimsl/gallery/gallery-02-supply-distribution.jpg", cat: "Education", cap: "School supply distribution day" },
  { src: "images/cimsl/gallery/gallery-03-shared-meal.jpg", cat: "Healthcare", cap: "Sharing a community meal together" },
  { src: "images/cimsl/gallery/gallery-04-family-visit.jpg", cat: "Child Support", cap: "Family support visit in the community" },
  { src: "images/cimsl/gallery/gallery-05-caregiver-children.jpg", cat: "Child Support", cap: "Caregiver with children during outreach" },
  { src: "images/cimsl/gallery/gallery-06-community-care.jpg", cat: "Community", cap: "Community members supporting children" },
  { src: "images/cimsl/gallery/gallery-07-support-visit.jpg", cat: "Child Support", cap: "Support visit with a local family" },
  { src: "images/cimsl/gallery/gallery-08-mother-child.jpg", cat: "Community", cap: "Mother and child at a community gathering" },
  { src: "images/cimsl/gallery/gallery-09-family-outreach.jpg", cat: "Outreach", cap: "Family outreach in Wellington" },
  { src: "images/cimsl/gallery/gallery-10-home-visit.jpg", cat: "Outreach", cap: "Home visit with vulnerable children" },
  { src: "images/cimsl/gallery/gallery-11-community-support.jpg", cat: "Community", cap: "Community support for children" },
  { src: "images/cimsl/gallery/gallery-12-public-event.jpg", cat: "Events", cap: "CIMSL speaker at a public event" },
];
