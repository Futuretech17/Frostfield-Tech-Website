import { motion, useReducedMotion } from "framer-motion";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import {
  Globe,
  Server,
  Check,
  MessageCircle,
  ArrowRight,
  TrendingUp,
  Users,
  Wifi,
  PlusCircle,
  LifeBuoy
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WHATSAPP_URL } from "@/lib/constants";

const fadeInBase = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerBase = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const categories = [
  {
    title: "Website Development",
    desc: "One-time fee for a custom, professional website.",
    icon: Globe,
    color: "text-blue-600",
    bg: "bg-blue-50",
    priceAnchor: "From KES 25,000 one-time",
  },
  {
    title: "Annual Hosting",
    desc: "Keep your site live, secure, and fast. Billed yearly.",
    icon: Server,
    color: "text-cyan-600",
    bg: "bg-cyan-50",
    priceAnchor: "From KES 6,000/yr",
  },
  {
    title: "Monthly Support",
    desc: "Updates, backups, and ongoing maintenance.",
    icon: LifeBuoy,
    color: "text-violet-600",
    bg: "bg-violet-50",
    priceAnchor: "From KES 2,500/mo",
  },
  {
    title: "Add-On Services",
    desc: "Logo design, SEO, social media, and more.",
    icon: PlusCircle,
    color: "text-orange-600",
    bg: "bg-orange-50",
    priceAnchor: "Custom Quotes",
  },
];

const services = [
  {
    icon: Globe,
    color: "text-blue-600",
    bg: "bg-blue-50",
    title: "Website Development (One-time)",
    desc: "Every Frostfield website is built from scratch to match your brand — no cookie-cutter templates. A transparent one-time investment for a professional digital asset.",
    points: [
      "Custom design tailored to your industry and brand",
      "Mobile-first and fully responsive on all devices",
      "Fast loading times for a better user experience",
      "WhatsApp integration and contact forms out of the box",
    ],
  },
  {
    icon: Server,
    color: "text-cyan-600",
    bg: "bg-cyan-50",
    title: "Managed Website Hosting (Annual)",
    desc: "Your website lives on reliable, fast infrastructure managed entirely by our team. Simple annual billing so your site stays online 24/7.",
    points: [
      "99.9% uptime with automatic monitoring",
      "Fast SSD storage and included SSL certificates",
      "Business emails included (e.g. info@yourbiz.co.ke)",
      "Daily or weekly backups depending on your plan",
    ],
  },
  {
    icon: LifeBuoy,
    color: "text-violet-600",
    bg: "bg-violet-50",
    title: "Managed Support & Maintenance (Monthly)",
    desc: "We handle updates, security patches, and content changes so you never have to worry about your site breaking. Predictable monthly support.",
    points: [
      "Regular plugin and system updates",
      "Security scanning and malware protection",
      "Monthly content edits included in your plan",
      "Issue resolution with fast response times",
    ],
  },
  {
    icon: PlusCircle,
    color: "text-orange-600",
    bg: "bg-orange-50",
    title: "Add-On Services",
    desc: "Everything else you need to establish a strong brand and reach more customers online.",
    points: [
      "Logo design and branding packages",
      "Social media setup and management",
      "Google Business Profile optimization",
      "Copywriting, SEO campaigns, and e-commerce enhancements",
    ],
  },
];

const features = [
  { name: "Pages", s: "Up to 5", b: "Up to 12", p: "Fully custom" },
  { name: "Emails", s: "1", b: "5", p: "10+" },
  { name: "Mobile responsive", s: true, b: true, p: true },
  { name: "CMS (Admin dashboard)", s: false, b: true, p: true },
  { name: "WhatsApp & Contact forms", s: true, b: true, p: true },
  { name: "Basic SEO setup", s: true, b: "Improved", p: "Advanced" },
  { name: "Speed Optimization", s: "Basic", b: "Advanced", p: "Premium" },
  { name: "E-commerce / M-Pesa", s: false, b: "M-Pesa integration", p: "Yes" },
  { name: "Revisions", s: "1", b: "3", p: "3–4" },
  { name: "Delivery Time", s: "7-10 days", b: "15-20 days", p: "20-30 days" },
];

function CellValue({ val }: { val: boolean | string }) {
  if (val === true) return <Check className="w-4 h-4 mx-auto text-primary" />;
  if (val === false) return <span className="text-slate-300">—</span>;
  return <span className="text-sm">{val}</span>;
}

export default function Services() {
  const shouldReduceMotion = useReducedMotion();
  const fadeIn = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : fadeInBase;
  const stagger = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : staggerBase;

  return (
    <>
      <Helmet>
        <title>Services – Frostfield Tech | Web Design, Hosting, Support</title>
        <meta name="description" content="Explore Frostfield Tech's services: custom website development, managed hosting, monthly support, and add-ons for Kenyan businesses." />
        <link rel="canonical" href="https://frostfield.co.ke/services" />
        <meta property="og:title" content="Services – Frostfield Tech" />
        <meta property="og:description" content="From design to hosting to ongoing support – everything a Kenyan business needs online." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://frostfield.co.ke/services" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground font-sans">
        {/* Ambient blobs */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute -top-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[100px]" />
          <div className="absolute top-[50%] -right-[10%] w-[35%] h-[35%] rounded-full bg-accent/5 blur-[80px]" />
          <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[50%] rounded-full bg-primary/4 blur-[150px]" />
        </div>

        {/* Hero Section */}
        <section className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeIn} transition={{ duration: 0.5 }}>
              <Badge variant="outline" className="mb-6 border-primary/20 bg-primary/5 text-primary px-4 py-1 text-sm">
                What We Offer
              </Badge>
            </motion.div>
            <motion.h1 variants={fadeIn} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5 tracking-tight">
              Our Services
            </motion.h1>
            <motion.p variants={fadeIn} transition={{ duration: 0.6 }} className="text-lg text-slate-600 max-w-2xl mx-auto">
              From design to hosting to ongoing support — we provide everything a Kenyan business needs to establish and maintain a strong online presence.
            </motion.p>
          </motion.div>
        </section>

        {/* 4-Category Overview with fixed heights */}
        <section className="relative z-10 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((cat, i) => (
                <motion.div
                  key={cat.title}
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { delay: i * 0.1 } }
                  }}
                >
                  <Card className="h-full min-h-[260px] flex flex-col border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="pb-4 flex-1">
                      <div className={`w-12 h-12 rounded-xl ${cat.bg} flex items-center justify-center mb-4`}>
                        <cat.icon className={`w-6 h-6 ${cat.color}`} />
                      </div>
                      <CardTitle className="text-lg font-bold text-slate-900">{cat.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-600 mb-4">{cat.desc}</p>
                      <div className="text-sm font-semibold text-primary">{cat.priceAnchor}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Service Sections */}
        <section className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-16">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-10 items-center`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeIn}
                transition={{ duration: 0.6 }}
              >
                <div className="flex-1 flex items-center justify-center">
                  <div className={`w-40 h-40 rounded-3xl ${service.bg} flex items-center justify-center shadow-xl`}>
                    <service.icon className={`w-20 h-20 ${service.color}`} />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">{service.title}</h2>
                  <p className="text-slate-600 mb-6 text-base leading-relaxed">{service.desc}</p>
                  <ul className="space-y-3">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Websites Matter */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/60">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why websites matter in Kenya</h2>
              <p className="text-slate-600 max-w-xl mx-auto">The numbers are clear — digital presence is no longer optional for Kenyan businesses.</p>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
            >
              {[
                { icon: Wifi, color: "text-blue-600", bg: "bg-blue-50", stat: "85%+", label: "Internet Penetration in Kenya", desc: "More Kenyans are online than ever. Your customers are already searching for you." },
                { icon: TrendingUp, color: "text-green-600", bg: "bg-green-50", stat: "3x", label: "More Trust with a Website", desc: "Businesses with professional websites earn significantly more trust from prospective clients." },
                { icon: Users, color: "text-violet-600", bg: "bg-violet-50", stat: "90%", label: "Mobile-first Internet Users", desc: "Kenyan internet users predominantly browse on smartphones — mobile-first design is critical." },
              ].map((item) => (
                <motion.div key={item.stat} variants={fadeIn} transition={{ duration: 0.5 }}>
                  <Card className="h-full min-h-[280px] bg-white/70 backdrop-blur-md border-white/50 shadow-lg text-center p-4">
                    <CardContent className="pt-6">
                      <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mx-auto mb-4`}>
                        <item.icon className={`w-6 h-6 ${item.color}`} />
                      </div>
                      <div className="text-4xl font-extrabold text-slate-900 mb-1">{item.stat}</div>
                      <div className="text-sm font-semibold text-slate-700 mb-3">{item.label}</div>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Compare plans</h2>
              <p className="text-slate-600">See exactly what's included across our three tiers.</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="bg-white/80 backdrop-blur-md rounded-2xl border border-white/50 shadow-xl overflow-hidden"
            >
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-50/80 border-b border-slate-200/60">
                    <tr>
                      <th className="py-4 px-6 font-semibold text-slate-900 w-2/5">Feature</th>
                      <th className="py-4 px-6 font-semibold text-slate-700 text-center">Bronze</th>
                      <th className="py-4 px-6 font-semibold text-primary text-center bg-primary/5">Silver</th>
                      <th className="py-4 px-6 font-semibold text-slate-700 text-center">Gold</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {features.map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                        <td className="py-4 px-6 font-medium text-slate-700">{row.name}</td>
                        <td className="py-4 px-6 text-center text-slate-600"><CellValue val={row.s} /></td>
                        <td className="py-4 px-6 text-center text-slate-800 font-medium bg-primary/[0.02]"><CellValue val={row.b} /></td>
                        <td className="py-4 px-6 text-center text-slate-600"><CellValue val={row.p} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
            <div className="text-center mt-8">
              <Link href="/pricing" data-testid="services-view-pricing-btn">
                <Button className="gap-2 bg-primary hover:bg-primary/90 text-white shadow-lg">
                  See Full Pricing Details <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/60">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to get started?</h2>
            <p className="text-slate-600 mb-8">Chat with us on WhatsApp — we'll recommend the right plan for your business within 2 hours.</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="services-cta-whatsapp-btn"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
            </a>
          </motion.div>
        </section>
      </div>
    </>
  );
}