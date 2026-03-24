// ─── Hero ───────────────────────────────────────────────────────────────────
export type HeroContent = {
  badgeInner: string;
  badgeOuter: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  heroImageLight: string;
  heroImageDark: string;
  heroImageAlt: string;
};

// ...omitted for brevity, all type exports unchanged...

export const defaultHomeContent: HomeContent = {
  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    badgeInner: "Effortless",
    badgeOuter: "Email Marketing Made Simple",
    titleBefore: "",
    titleHighlight: "Effortless Email Marketing",
    titleAfter: "",
    subtitle:
      "Plan, send, and track powerful email campaigns with MailPilot.",
    primaryCta: { label: "Start Free", href: "/auth#signup" },
    secondaryCta: { label: "Book a Demo", href: "/#contact" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "MailPilot dashboard preview",
  },

  // Sponsors (leave unchanged for now)
  sponsors: {
    heading: "Backed by industry leaders",
    items: [
      { icon: "Crown", name: "Vercel" },
      { icon: "Vegan", name: "Stripe" },
      { icon: "Ghost", name: "OpenAI" },
      { icon: "Puzzle", name: "Supabase" },
      { icon: "Squirrel", name: "Clerk" },
      { icon: "Cookie", name: "Resend" },
      { icon: "Drama", name: "Sentry" },
    ],
  },

  // ── Benefits ─────────────────────────────────────────────────────────────
  benefits: {
    eyebrow: "Why MailPilot",
    heading: "Marketing made easy",
    description:
      "MailPilot takes the hassle out of email marketing. Organize your audience, design beautiful campaigns, and see performance insights—all in one simple dashboard.",
    items: [
      {
        icon: "Mail",
        title: "Simple Campaigns",
        description:
          "Quickly create and schedule email campaigns with our intuitive editor.",
      },
      {
        icon: "Users",
        title: "Audience Management",
        description:
          "Organize subscribers and segment your audience for targeted messaging.",
      },
      {
        icon: "BarChart3",
        title: "Real-Time Analytics",
        description:
          "Track opens, clicks, and engagement to optimize your results.",
      },
    ],
  },

  // ── Features ─────────────────────────────────────────────────────────────
  features: {
    eyebrow: "Features",
    heading: "Everything you need to grow",
    subtitle:
      "MailPilot gives you the essential tools for email campaign success.",
    items: [
      { icon: "Mail", title: "Email Campaigns", description: "Design, schedule, and send emails with ease." },
      { icon: "Users2", title: "Subscriber Segments", description: "Build targeted lists and manage your audience in one place." },
      { icon: "BarChart3", title: "Campaign Analytics", description: "See real-time stats for opens, clicks, and conversions." },
      { icon: "Send", title: "Deliverability", description: "Built-in best practices to help your emails reach inboxes." },
      { icon: "UserPlus", title: "Easy Imports", description: "Add subscribers individually or in bulk with CSV import." },
      { icon: "CheckCircle", title: "GDPR Compliance", description: "Ensure your email marketing stays compliant." },
    ],
  },

  // ── Services ─────────────────────────────────────────────────────────────
  services: {
    eyebrow: "Services",
    heading: "Your marketing co-pilot",
    subtitle:
      "Modern tools for busy teams—MailPilot handles the heavy lifting of email marketing.",
    items: [
      { title: "Campaign Management", description: "Create, manage, and analyze campaigns from one dashboard.", pro: false },
      { title: "Subscriber Database", description: "Keep your audience organized for better targeting.", pro: false },
      { title: "Team Collaboration", description: "Work together with teammates on email marketing.", pro: false },
      { title: "Performance Analytics", description: "Understand what's working in your email strategy.", pro: true },
    ],
  },

  // ── Testimonials / Team / Pricing / Contact / FAQ / Footer: retain for now but you can adapt branding when ready. (leaving as default to minimize unrelated content shifts unless specified)

  testimonials: {
    eyebrow: "Testimonials",
    heading: "What teams are saying",
    reviews: [
      { image: "/demo-img.jpg", name: "Sophie Carter", role: "Growth Manager", comment: "MailPilot made launching our first marketing campaign a breeze!", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Liam Chen", role: "CMO", comment: "We consolidated our subscribers and improved our campaign ROI instantly.", rating: 4.9 },
      { image: "/demo-img.jpg", name: "Priya Singh", role: "Marketing Lead", comment: "The analytics made all the difference. We know what resonates.", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Noah Johnson", role: "Founder", comment: "Simple, beautiful, and effective—just what we needed to grow.", rating: 5.0 },
    ],
  },
  team: {
    eyebrow: "Team",
    heading: "Meet the MailPilot team",
    members: [
      {
        imageUrl: "/team1.jpg",
        firstName: "Adan",
        lastName: "Asim",
        positions: ["Founder", "Product & Engineering"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/adan-asim/" },
          { name: "Github", url: "https://github.com/adan91" },
        ],
      },
      // ... (keep other members as before, or add new ones as team grows)
    ],
  },
  pricing: {
    eyebrow: "Pricing",
    heading: "Simple, transparent pricing",
    subtitle: "Fair pricing for growing teams.",
    priceSuffix: "/month",
    plans: [
      {
        title: "Free",
        popular: true,
        price: 0,
        description: "Start sending campaigns at no cost.",
        buttonText: "Start Free",
        benefits: [
          "Up to 500 subscribers",
          "Basic analytics",
          "All core features",
        ],
      },
      {
        title: "Pro",
        popular: false,
        price: 29,
        description: "Advanced features for scaling your marketing.",
        buttonText: "Upgrade to Pro",
        benefits: [
          "Unlimited subscribers",
          "Team collaboration",
          "Advanced analytics",
        ],
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    heading: "Let's talk MailPilot",
    description:
      "Questions, demos, or partnership ideas? The MailPilot team is here to help.",
    mailtoAddress: "adan@bidx.ai",
    info: {
      address: { label: "Location", value: "Remote, operated globally" },
      phone: { label: "Call us", value: "" },
      email: { label: "Email", value: "adan@bidx.ai" },
      hours: { label: "Hours", value: ["Monday - Friday", "9AM - 6PM"] },
    },
    formSubjects: ["Demo Request", "Partnership", "Support", "Other"],
    formSubmitLabel: "Send Message",
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Frequently Asked Questions",
    items: [
      { question: "Can I use MailPilot for free?", answer: "Yes! Our free plan lets you start sending campaigns right away." },
      { question: "How do I add subscribers?", answer: "You can manually add subscribers or import them in bulk using a CSV." },
      { question: "Is my data secure with MailPilot?", answer: "Absolutely. We take security and privacy seriously." },
      { question: "Which providers are supported?", answer: "You can connect your own SMTP or use our default delivery." },
      { question: "Can I collaborate with my team?", answer: "Yes, MailPilot supports team roles and permissions." },
    ],
  },
  footer: {
    brandName: "MailPilot",
    columns: [
      {
        heading: "Contact",
        links: [
          { label: "adan@bidx.ai", href: "mailto:adan@bidx.ai" },
          { label: "Docs", href: "/#faq" },
        ],
      },
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "Contact Us", href: "#contact" },
          { label: "FAQ", href: "#faq" },
        ],
      },
      {
        heading: "Socials",
        links: [
          { label: "GitHub", href: "https://github.com" },
        ],
      },
    ],
    copyright: "\u00a9 2026 MailPilot.",
    attribution: { label: "Built on Next.js", href: "https://nextjs.org" },
  },

  // ── Navbar ───────────────────────────────────────────────────────────────
  navbar: {
    brandName: "MailPilot",
    routes: [
      { href: "#features", label: "Features" },
      { href: "#pricing", label: "Pricing" },
      { href: "#faq", label: "Docs" },
      { href: "/auth#signin", label: "Login" },
    ],
    featureDropdownLabel: "Features",
    featureImage: { src: "/hero-image-light.jpeg", alt: "MailPilot Preview" },
    features: [
      { title: "Simple Campaigns", description: "Create, personalize, and deliver stunning email campaigns." },
      { title: "Subscriber Organization", description: "Segment and grow your audience for better results." },
      { title: "Analytics Dashboard", description: "See what’s working in real-time." },
    ],
    signInLabel: "Login",
    signUpLabel: "Start Free",
    dashboardLabel: "Dashboard",
    githubLink: {
      href: "https://github.com",
      ariaLabel: "View on GitHub"
    }
  },
};

export const homeContent: HomeContent = defaultHomeContent;

// For backward compatibility - do not remove
export function getHomeContent(): HomeContent {
  return homeContent;
}