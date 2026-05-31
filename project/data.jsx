/* ===== IntegratedX content: broadened full-funnel offering ===== */

const RES = (id, path) => (window.__resources && window.__resources[id]) || path;
window.RES = RES;

// --- simple line icons (Lucide-style) ---
const Icon = {
  search:  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>,
  ai:      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/><path d="M12 8.5 13 11l2.5 1-2.5 1-1 2.5-1-2.5L8.5 12 11 11z"/></svg>,
  ads:     <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1"/></svg>,
  code:    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/></svg>,
  mail:    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>,
  chip:    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3"/></svg>,
  pen:     <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19h8"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>,
  cart:    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2 3h3l2.4 12.4a1.5 1.5 0 0 0 1.5 1.2h8.3a1.5 1.5 0 0 0 1.5-1.2L21 7H6"/></svg>,
  funnel:  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4h18l-7 8v6l-4 2v-8z"/></svg>,
  boost:   <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17 9 11l4 4 8-8"/><path d="M21 7v6h-6"/></svg>,
  money:   <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v10M9.5 9.2a2.3 2.3 0 0 1 2.5-1.4c1.4 0 2.3.8 2.3 1.9 0 2.6-4.8 1.4-4.8 4 0 1.1 1 1.9 2.5 1.9a2.4 2.4 0 0 0 2.4-1.3"/></svg>,
  briefcase:<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18"/></svg>,
  pin:     <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/></svg>,
  health:  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 1 0-7.1 7.1L12 21l8.8-8.3a5 5 0 0 0 0-7.1z"/></svg>,
  scales:  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18M7 21h10M12 6l7 2-2.5 5a3.5 3.5 0 0 0 5 0L21 8M12 6 5 8l2.5 5a3.5 3.5 0 0 1-5 0L3 8"/></svg>,
};

// --- HERO copy variants (Tweak) ---
const HERO_VARIANTS = {
  "Growth (default)": {
    attn: "ATTENTION: AMBITIOUS BRANDS READY TO SCALE",
    pre: "Guaranteed", mid: "Growth", post: "in 90 Days or Less",
    sub: "We're the full-funnel growth partner behind 70+ brands, running organic search, AI visibility, paid media and web as one system pointed at revenue.",
  },
  "Revenue": {
    attn: "ATTENTION: 7, 8 & 9 FIGURE BRANDS",
    pre: "Guaranteed", mid: "Revenue", post: "in 90 Days or Less",
    sub: "One agency for every growth channel: SEO, AI search, paid, email and web, wired together to turn traffic into measurable, predictable revenue.",
  },
  "Be Found Everywhere": {
    attn: "ATTENTION: BRANDS FIGHTING FOR ATTENTION",
    pre: "Get Found", mid: "Everywhere", post: "Google, AI & Beyond",
    sub: "Your customers search on Google and ask ChatGPT. We make sure you win both, plus the paid, email and web that turns that demand into sales.",
  },
};

const ROI_CALLOUTS = [
  { big: "3X ROI", small: "on retainer in 120 days" },
  { big: "11X ROI", small: "in the following 6 months" },
];

const LOGOS = ["LUCKY CIGAR","BRICKELL","ROKFORM","SKINSOCIETY","PROLON","SHADE&SHACK","HEMPONIX","STAPLE&CO","LUX HOMEBAR","SHAPLABOO","NORTHPRINT","LUX SQUARE"];

// --- four-pillar services ---
const SERVICES = [
  { ic:"search", name:"SEO", blurb:"The organic engine behind 70+ brands on page one. We audit, find the gaps your competitors leave open, and build the content and links that compound month over month.", tags:["SEO Audits","Competitor Analysis","Content Marketing","Keyword Research","On Page SEO","Off Page"] },
  { ic:"ai", name:"GEO / AIO", blurb:"Search is moving into the answer box. We structure your brand so it gets cited and recommended inside ChatGPT, Gemini, Perplexity and AI Overviews, not just the links people are scrolling past.", tags:["LLM Optimization","Schema Enhancement","Knowledge Graphs","Entity Mapping"] },
  { ic:"ads", name:"SEM", blurb:"Profitable demand on tap. We build and tune paid search and social around your real unit economics, then optimize every click toward conversions, not vanity traffic.", tags:["Campaign Audits","Keyword Research","Ad Optimization","Paid Search","Paid Social","Conversion Optimization"] },
  { ic:"mail", name:"Email", blurb:"Turn your list into your most reliable revenue channel. Lifecycle flows, segmentation and automation that nurture every contact from first touch to repeat buyer.", tags:["Funnel Management","Email Optimization","Marketing Automation","Lead Nurture","User Segmentation"] },
];

const CHIPS = ["Technical SEO","On-Page SEO","Off-Page SEO","AI Search / GEO","Google Ads","Meta Ads","Amazon PPC","Content Writing","Page Development","Email & Automation","PR & Backlinks","Crawling","CRO","Analytics"];

// --- how it works (generalized growth model) ---
const STEPS = [
  { n:"01.", pre:"Deep-Dive", post:"Audit & Opportunity Map", body:"We tear into your site, channels and competitors to find the highest-leverage gaps. Usually 1 to 3 days, focused only on what actually moves revenue." },
  { n:"02.", pre:"Custom", post:"Growth Roadmap", body:"You get a channel-by-channel blueprint across search, AI, paid, web and email, sequenced by impact so each sprint builds on the last." },
  { n:"03.", pre:"Full-Funnel", post:"Production", body:"We build everything in-house: pages, content, campaigns and flows. No handoffs, no waiting on freelancers. Design, dev and copy under one roof." },
  { n:"04.", pre:"Authority &", post:"Demand Building", body:"Rankings and revenue need fuel. We run tiered link-building, digital PR and paid amplification to grow authority and capture demand fast." },
  { n:"05.", pre:"Leaderboard &", post:"Performance Tracking", body:"Every page, keyword and campaign lives in one dashboard. We double down on what's working and react the moment something slips." },
];

// --- industries (Tweak controls which show) ---
const INDUSTRIES = [
  { key:"SaaS", ic:"chip", code:"01 / SAAS", name:"SaaS", desc:"Drive demos and signups with content-led growth and full-funnel demand generation." },
  { key:"B2B", ic:"briefcase", code:"02 / B2B", name:"B2B", desc:"Reach decision-makers through hyper-targeted, content-driven pipeline strategies." },
  { key:"Ecommerce", ic:"cart", code:"03 / ECOM", name:"Ecommerce", desc:"Capture high-intent buyers and scale organic + paid revenue across Shopify, Woo and Amazon." },
  { key:"Local / SMB", ic:"pin", code:"04 / LOCAL", name:"Local / SMB", desc:"Own your map pack and region with location-first search and reputation strategies." },
  { key:"Healthcare", ic:"health", code:"05 / HEALTH", name:"Healthcare", desc:"Connect practices and wellness brands with patients through compliant, targeted campaigns." },
  { key:"Legal", ic:"scales", code:"06 / LEGAL", name:"Legal", desc:"Position firms as trusted authorities and generate qualified, high-value client leads." },
];

// --- why search & AI in 2026 ---
const WHY_FEATURES = [
  { img:RES("icShopping","assets/ic-shopping.svg"), t:"Capture High-Intent Buyers" },
  { img:RES("icBoost","assets/ic-boost.svg"), t:"Improve Unit Economics" },
  { img:RES("icFunnel","assets/ic-funnel.svg"), t:"Bulletproof Your Funnel" },
  { img:RES("icMoney","assets/ic-money.png"), t:"Boost Brand Valuation" },
];

// --- stats ---
const STATS = [
  { tag:"Visits", num:"5M+", lbl:"Sessions Generated" },
  { tag:"Total", num:"$13M", lbl:"Revenue Generated" },
  { tag:"Optimized", num:"76+", lbl:"Brands Scaled" },
  { tag:"ROI", num:"6x", lbl:"Average ROI" },
];

// --- pricing ---
const PRICING = [
  { name:"Growth Consultation", price:"FREE", sub:"Founders & operators", feat:["Opportunity Audit","Growth Model Intro","Channel Fit Review","Qualification Process"], featured:false },
  { name:"Managed Growth", price:"$2,500", unit:"/mo", sub:"Prices may vary", feat:["Custom Roadmap","Full Page & Content Production","SEO + AI Search","Paid, Email & PR"], featured:true },
  { name:"Full Marketing Audit", price:"$2,999", sub:"Prices may vary", feat:["On-Page & Technical","Paid & Channel Audit","Traffic Analysis","AI Visibility Check"], featured:false },
];

// --- why founders love us ---
const LOVE = {
  team: [
    ["🇺🇸 🇨🇦 US & Canada-Based Talent","We don't outsource. Everything is done in-house by senior operators."],
    ["Boutique by Design","We cap our roster so every brand gets senior attention, never a junior queue."],
    ["Revenue, Not Reports","We optimize for the number that pays your bills, not a prettier dashboard."],
    ["8 Months of Work in 3","Our rapid sprint model ships more in a quarter than most agencies do in a year."],
  ],
  guarantee: [
    ["Speed to Results","Get the blueprint and senior team to hit your targets in the shortest timeframe possible."],
    ["Proven Track Record","We've helped 70+ brands scale organic, paid and AI-driven revenue."],
    ["No Internal Resources Needed","No hand-holding required, just access to your platforms and properties."],
    ["Full Production In-House","Most agencies can't build pages, sites and campaigns from scratch. We can."],
  ],
};

// --- testimonials ---
const TESTIMONIALS = [
  { q:"We love working with the Integrated team. We've been growing our sales organically month over month for the last 2 years.", nm:"Simon Cohen", rl:"CEO · LuckyCigar", in:"S", img:RES("avatarSimon","assets/avatar-simon.png") },
  { q:"Marketing has never been more clear and straightforward to us. Elie and his team know exactly what they're doing.", nm:"Max Vasilchikov", rl:"CEO · Shaplaboo", in:"M", img:RES("avatarMax","assets/avatar-max.png") },
  { q:"Elie added $85,000 USD to our bottom-line revenue in under 6 months. A no-brainer investment.", nm:"Charles Akl", rl:"COO · SkinSociety", in:"C", img:RES("avatarCharles","assets/avatar-charles.png") },
  { q:"We ranked for our most important keywords in under 3 months and generated over $50K from a single SKU.", nm:"Jordan Dominguez", rl:"CEO · Luxury Homebar", in:"J", img:RES("avatarJordan","assets/avatar-jordan.png") },
];

// --- case studies ---
const CASES = [
  { tag:"Case Study", title:"Skincare Brand", win:"$82K added in 150 Days", desc:"How we took this retailer from $100k to $182k in organic revenue using our growth model in under 5 months.",
    before:[["Traffic","3,900"],["Revenue","$4,000"],["Conv. Rate","0.82%"]], after:[["Traffic","40,000"],["Revenue","$20k/mo"],["Conv. Rate","2.42%"]] },
  { tag:"Case Study", title:"Cigar Brand", win:"$122K added in 190 Days", desc:"A complete full-funnel implementation across search, content and AI visibility, start to finish.",
    before:[["Traffic","300"],["Revenue","$900/mo"],["Conv. Rate","1.02%"]], after:[["Traffic","7,000"],["Revenue","$25k/mo"],["Conv. Rate","3.70%"]] },
];

// --- faq ---
const FAQS = [
  ["How soon will I see a return on my investment?","Most clients see early traction within 90 days, and it builds from there. Because we run every channel together (search, AI, paid, email and web), momentum arrives faster than any single tactic on its own. Not every brand is the same; some see major leaps in the first month."],
  ["Is this just SEO, or do you run the whole funnel?","The whole funnel. One team owns SEO, AI search (GEO), paid media, email, content and web for you. That means no stitching together five vendors, and every channel reinforcing the others toward one revenue number."],
  ["What is AI Search / GEO, and why does it matter now?","A fast-growing share of buyers now research inside ChatGPT, Gemini, Perplexity and Google's AI Overviews instead of the classic ten blue links. GEO optimizes your brand to be cited and recommended in those answers, so you stay visible as search behavior shifts, not just on the pages people are leaving behind."],
  ["What makes you different from other agencies?","We run the entire production cycle in-house: strategy, design, development, copy, on-page, paid and link building across every major channel. That lets us move autonomously and deliver in 2 to 3 months what takes most agencies 6 to 8, with senior operators on every account rather than a junior queue."],
  ["What kinds of businesses do you work with?","We run growth across SaaS, B2B, ecommerce, local and more. The growth model is the same; we adapt the channel mix and messaging to the buyers you're chasing, whatever you sell."],
  ["How much does it cost, and is there a guarantee?","This is a premium service at a premium price, though you choose your own pace, so book a call to walk through pricing for your goals. And yes: we guarantee results in 120 days. If we don't hit the agreed KPIs, we keep working for free until we deliver."],
];

Object.assign(window, {
  Icon, HERO_VARIANTS, ROI_CALLOUTS, LOGOS, SERVICES, CHIPS, STEPS,
  INDUSTRIES, WHY_FEATURES, STATS, PRICING, LOVE, TESTIMONIALS, CASES, FAQS,
});
