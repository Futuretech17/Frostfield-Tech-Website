import { motion, useReducedMotion } from "framer-motion";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import {
  MessageCircle,
  ArrowRight,
  Globe,
  Server,
  Wrench,
  Search,
  Mail,
  AlertCircle,
  TrendingDown,
  DollarSign,
  Zap,
  Smartphone,
  ShieldCheck,
  Building2,
  GraduationCap,
  Scale,
  Home as HomeIcon,
  Utensils,
  Sparkles,
  Stethoscope,
  Scissors,
  Hammer,
  Briefcase,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { WHATSAPP_URL } from "@/lib/constants";

const fadeInBase = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerBase = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  const fadeIn = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : fadeInBase;
  const stagger = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : staggerBase;

  return (
    <>
      {/* SEO – added for best practices */}
      <Helmet>
        <title>Frostfield Tech – Professional Websites & Managed Support for Kenyan Businesses</title>
        <meta name="description" content="Professional website design, secure hosting, daily backups, and WhatsApp support for Kenyan SMEs. We build, host, and maintain — so you can focus on your business." />
        <meta name="keywords" content="web design kenya, website hosting kenya, SEO kenya, business website kenya, M-Pesa website" />
        <link rel="canonical" href="https://frostfield.co.ke/" />
        <meta property="og:title" content="Frostfield Tech – Professional Websites for Kenyan Businesses" />
        <meta property="og:description" content="Reliable websites and long-term support for Kenyan SMEs. Get online with confidence." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://frostfield.co.ke/" />
        <meta property="og:image" content="https://frostfield.co.ke/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Frostfield Tech",
            "description": "Professional website design, secure hosting, and managed support for Kenyan SMEs.",
            "url": "https://frostfield.co.ke",
            "telephone": "+254713772408",
            "email": "info@frostfieldtech.co.ke",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Nairobi",
              "addressCountry": "KE"
            },
            "areaServed": { "@type": "Country", "name": "Kenya" },
            "priceRange": "KES 2,500 – 25,000",
            "paymentAccepted": "M-Pesa, Bank Transfer"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background text-foreground overflow-hidden font-sans">
        {/* Ambient blobs */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px]" />
          <div className="absolute top-[30%] -right-[10%] w-[40%] h-[40%] rounded-full bg-accent/5 blur-[100px]" />
          <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[50%] rounded-full bg-primary/4 blur-[150px]" />
        </div>

        {/* ── HERO ── */}
        <section className="relative z-10 pt-20 pb-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeIn} transition={{ duration: 0.5 }}>
                <Badge variant="outline" className="mb-6 border-primary/20 bg-primary/5 text-primary px-4 py-1 text-sm font-medium">
                  Kenya's Managed Digital Partner
                </Badge>
              </motion.div>
              <motion.h1
                variants={fadeIn}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.05]"
              >
                Reliable Websites & Managed Support for <span className="text-primary">Kenyan Businesses</span>
              </motion.h1>
              <motion.p
                variants={fadeIn}
                transition={{ duration: 0.6 }}
                className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto"
              >
                We help Kenyan SMEs launch professional websites with secure hosting, ongoing maintenance, daily backups, and fast WhatsApp support — without the stress.
              </motion.p>
              <motion.div variants={fadeIn} transition={{ duration: 0.5 }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Link
                  href="/contact"
                  data-testid="hero-get-quote-btn"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-200 text-base"
                >
                  Get a Free Quote <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="hero-whatsapp-btn"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-200 text-base"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us
                </a>
              </motion.div>
              <motion.div variants={fadeIn} transition={{ duration: 0.5 }} className="flex flex-wrap justify-center gap-3">
                {[
                  "WhatsApp Support",
                  "Secure Hosting",
                  "M-Pesa Payments",
                  "Fast Launch",
                  "Mobile Optimized",
                ].map((label) => (
                  <span key={label} className="inline-flex items-center gap-1.5 bg-white/80 border border-slate-200 text-slate-700 text-sm font-medium px-4 py-2 rounded-full shadow-sm">
                    {label}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── PROBLEM ── */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/60">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-14"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Most Kenyan businesses are invisible online</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Without a website, your business misses the trust, visibility, and clients it deserves.</p>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
            >
              {[
                {
                  icon: AlertCircle,
                  color: "text-red-500",
                  bg: "bg-red-50",
                  title: "Customers can't find you online",
                  desc: "If you're not on Google when someone searches for your services, you effectively don't exist to new clients.",
                },
                {
                  icon: TrendingDown,
                  color: "text-orange-500",
                  bg: "bg-orange-50",
                  title: "Your competitors look more professional",
                  desc: "Businesses with a professional website look more established, winning leads that could have been yours.",
                },
                {
                  icon: Users,
                  color: "text-amber-500",
                  bg: "bg-amber-50",
                  title: "You rely only on Facebook or WhatsApp",
                  desc: "Social media is great, but it limits how much information you can share and doesn't build long-term SEO value.",
                },
              ].map((item) => (
                <motion.div key={item.title} variants={fadeIn} transition={{ duration: 0.5 }}>
                  <Card className="h-full bg-white/70 backdrop-blur-md border-white/50 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className={`w-11 h-11 rounded-xl ${item.bg} flex items-center justify-center mb-4`}>
                        <item.icon className={`w-6 h-6 ${item.color}`} />
                      </div>
                      <CardTitle className="text-lg text-slate-900">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <p className="text-xl font-semibold text-primary">Frostfield Tech helps fix that.</p>
            </motion.div>
          </div>
        </section>

        {/* ── SERVICES OVERVIEW ── */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-14"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Everything you need in one place</h2>
              <p className="text-slate-600 max-w-xl mx-auto">One partner. Every digital service your business needs to grow online.</p>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
            >
              {[
                { icon: Globe, color: "text-blue-600", bg: "bg-blue-50", title: "Web Design", desc: "Custom, beautiful websites designed around your brand and business goals." },
                { icon: Server, color: "text-cyan-600", bg: "bg-cyan-50", title: "Website Hosting", desc: "Fast, reliable managed hosting with 99.9% uptime and automatic security updates." },
                { icon: Wrench, color: "text-violet-600", bg: "bg-violet-50", title: "Maintenance", desc: "We keep your site fresh, secure, and running — so you never have to worry." },
                { icon: Search, color: "text-green-600", bg: "bg-green-50", title: "SEO Optimization", desc: "Get found on Google by Kenyan customers searching for what you offer." },
                { icon: Mail, color: "text-orange-600", bg: "bg-orange-50", title: "Business Email", desc: "Professional emails like you@yourbusiness.co.ke that build trust instantly." },
              ].map((s) => (
                <motion.div key={s.title} variants={fadeIn} transition={{ duration: 0.5 }}>
                  <Link href="/services" data-testid={`service-card-${s.title.toLowerCase().replace(/\s/g, "-")}`}>
                    <Card className="h-full bg-white/60 backdrop-blur-xl border-white/40 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                      <CardHeader>
                        <div className={`w-11 h-11 rounded-xl ${s.bg} flex items-center justify-center mb-3`}>
                          <s.icon className={`w-6 h-6 ${s.color}`} />
                        </div>
                        <CardTitle className="text-lg text-slate-900">{s.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              className="text-center mt-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <Link href="/services" data-testid="btn-view-services">
                <Button variant="outline" className="gap-2">
                  Explore All Services <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── INDUSTRIES WE SERVE ── */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/60 border-y border-slate-100">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-14"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Industries We Serve</h2>
              <p className="text-slate-600 max-w-xl mx-auto">Tailored digital solutions for every type of business in Kenya.</p>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
            >
              {[
                { icon: Stethoscope, title: "Clinics & Healthcare", desc: "A professional website builds patient trust and makes booking appointments easy." },
                { icon: Scale, title: "Law Firms", desc: "Look authoritative online. Attract high-value clients and display your practice areas professionally." },
                { icon: Utensils, title: "Restaurants & Hospitality", desc: "Showcase your menu, accept reservations, and drive foot traffic with an appetizing online presence." },
                { icon: HomeIcon, title: "Real Estate Agencies", desc: "Display property listings with photos, lead forms, and WhatsApp for quick enquiries." },
                { icon: Scissors, title: "Salons & Beauty", desc: "Attract bookings, showcase your work, and build a loyal client base online." },
                { icon: Hammer, title: "Hardware & Retail", desc: "List your products, accept M-Pesa orders, and reach customers beyond your neighbourhood." },
                { icon: Briefcase, title: "Professional SMEs", desc: "From accountants to consultants — a website makes you credible and easy to hire." },
              ].map((industry) => (
                <motion.div key={industry.title} variants={fadeIn} transition={{ duration: 0.5 }}>
                  <Card className="h-full bg-white/70 backdrop-blur-md border-white/50 shadow-sm hover:shadow-md transition-all duration-300">
                    <CardHeader className="pb-3">
                      <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center mb-3">
                        <industry.icon className="w-5 h-5 text-slate-700" />
                      </div>
                      <CardTitle className="text-base text-slate-900">{industry.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 text-sm leading-relaxed">{industry.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── PRICING PREVIEW ── */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-14"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Three services, one digital partner</h2>
              <p className="text-slate-600 max-w-xl mx-auto">Website design, hosting, and ongoing support — each clearly priced, each chosen to match your needs.</p>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 items-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
            >
              {[
                { name: "Website Development", billing: "One-time fee", price: "KES 25,000", desc: "Bronze, Silver & Gold packages", featured: false, prefix: "from", color: "blue", icon: Globe },
                { name: "Annual Hosting", billing: "Per year", price: "KES 6,000/year", desc: "Fast, secure hosting that keeps your site live 24/7", featured: true, prefix: "from", color: "cyan", icon: Server },
                { name: "Managed Support", billing: "Per month", price: "KES 2,500/month", desc: "Ongoing maintenance, updates, and WhatsApp support", featured: false, prefix: "from", color: "violet", icon: Wrench },
              ].map((tier) => (
                <motion.div key={tier.name} variants={fadeIn} transition={{ duration: 0.5 }} className="relative">
                  {tier.featured && (
                    <div className="absolute -top-4 left-0 right-0 flex justify-center z-10">
                      <Badge className="bg-cyan-500 text-white border-none shadow-md px-4 py-1 text-xs font-semibold uppercase tracking-wider">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <Card className={`h-full flex flex-col min-h-[350px] ${tier.featured ? "bg-white/90 ring-1 ring-cyan-500/20 border-cyan-500/20 shadow-2xl shadow-cyan-500/10 md:-translate-y-3" : "bg-white/60 border-white/40 shadow-xl"} backdrop-blur-xl transition-all duration-300`}>
                    <CardHeader className="flex-1">
                      <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center ${tier.color === 'blue' ? 'bg-blue-50 text-blue-600' : tier.color === 'cyan' ? 'bg-cyan-50 text-cyan-600' : 'bg-violet-50 text-violet-600'}`}>
                        <tier.icon className="w-6 h-6" />
                      </div>
                      <CardTitle className={`text-xl font-bold ${tier.color === 'blue' ? 'text-blue-700' : tier.color === 'cyan' ? 'text-cyan-700' : 'text-violet-700'}`}>{tier.name}</CardTitle>
                      <p className="text-sm text-slate-500">{tier.desc}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="mt-5">
                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">{tier.billing}</div>
                        <div className="flex items-baseline gap-1">
                          {tier.prefix && <span className="text-sm text-slate-500 mr-1">{tier.prefix}</span>}
                          <span className="text-4xl font-extrabold text-slate-900">{tier.price}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            <div className="text-center">
              <Link href="/pricing" data-testid="btn-view-full-pricing">
                <Button className="gap-2 bg-primary hover:bg-primary/90 text-white shadow-lg">
                  View Full Pricing & Features <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ── BUNDLE OFFER ── */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <div className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 border border-primary/20 rounded-3xl p-10 md:p-16 text-center shadow-xl overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/10 blur-[80px] -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-accent/10 blur-[60px] translate-y-1/2 -translate-x-1/2" />
                </div>
                <div className="relative z-10">
                  <Badge variant="outline" className="mb-6 border-primary/30 bg-primary/10 text-primary px-4 py-1">Bundle & Save</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Get everything under one roof</h2>
                  <p className="text-slate-600 max-w-xl mx-auto mb-8">
                    Website + hosting + support — and never worry about your digital presence again.
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="btn-bundle-whatsapp"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-200"
                  >
                    <MessageCircle className="w-4 h-4" /> Discuss Bundle on WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── HOW WE WORK ── */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-14"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How We Work</h2>
              <p className="text-slate-600 max-w-xl mx-auto">Our transparent 7-step process from idea to launch.</p>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
            >
              {[
                { num: 1, title: "Free Consultation", desc: "We discuss your goals and requirements." },
                { num: 2, title: "Quote & Timeline", desc: "Clear pricing and delivery schedule." },
                { num: 3, title: "Deposit Payment", desc: "Project kicks off with an initial deposit." },
                { num: 4, title: "Website Development", desc: "We design and build your website." },
                { num: 5, title: "Review & Revisions", desc: "You review and we make adjustments." },
                { num: 6, title: "Final Payment", desc: "Balance paid upon your approval." },
                { num: 7, title: "Launch & Support", desc: "Your site goes live with our ongoing support." },
              ].map((step) => (
                <motion.div key={step.num} variants={fadeIn} transition={{ duration: 0.5 }}>
                  <Card className="h-full bg-slate-50/50 border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden">
                    <div className="absolute -right-4 -top-6 text-9xl font-extrabold text-slate-100/80 pointer-events-none select-none z-0">
                      {step.num}
                    </div>
                    <CardHeader className="relative z-10">
                      <CardTitle className="text-lg text-slate-900 flex items-center gap-2">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold">
                          {step.num}
                        </span>
                        {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <p className="text-slate-600 text-sm">{step.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── PORTFOLIO PREVIEW (updated: real project + clear labels) */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/60">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-14"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Work we have done for Kenyan businesses</h2>
              <p className="text-slate-600 max-w-xl mx-auto">Real websites built for real businesses across Kenya.</p>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
            >
              {/* Real project – twokaychemicals */}
              {/* Real project – twokaychemicals */}
              {/* Real project – twokaychemicals (accurate description from client) */}
              <motion.div variants={fadeIn} transition={{ duration: 0.5 }}>
                <a href="https://www.twokaychemicalsltd.com" target="_blank" rel="noopener noreferrer" className="block h-full">
                  <Card className="h-full bg-white/60 backdrop-blur-md border-white/40 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                    <div className="bg-gradient-to-br from-emerald-500 to-teal-400 h-44 flex items-center justify-center">
                      <Building2 className="w-16 h-16 text-white/80" />
                    </div>
                    <CardContent className="pt-5 pb-6">
                      <Badge variant="outline" className="mb-3 text-xs bg-emerald-50 text-emerald-700 border-emerald-200">Live Project</Badge>
                      <h3 className="font-bold text-slate-900 text-lg mb-2">Twokay Chemicals Ltd</h3>
                        <p className="text-sm text-slate-600">
                          A professional website built for a premier supplier of surgical and pharmaceutical products in Kenya. 
                          Clean design, easy navigation, and fast loading – tailored for healthcare procurement.
                        </p>
                      <div className="mt-4 inline-flex items-center gap-1 text-primary text-sm font-medium">
                        View Live Site <ArrowRight className="w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
              {/* Sample projects (clearly labelled as inspiration) */}
              {[
                { icon: GraduationCap, gradient: "from-green-500 to-emerald-400", name: "Bright Future Academy", desc: "A vibrant school website to attract new students and showcase programmes." },
                { icon: Scale, gradient: "from-slate-600 to-slate-500", name: "Kimani & Associates", desc: "A professional law firm site that builds client confidence from the first visit." },
                { icon: HomeIcon, gradient: "from-amber-500 to-orange-400", name: "Savannah Realty Group", desc: "A property listings site with lead capture forms for a growing real estate agency." },
                { icon: Utensils, gradient: "from-rose-500 to-red-400", name: "The Coastal Grill", desc: "An appetizing restaurant website with an interactive digital menu and reservations." },
              ].map((project) => (
                <motion.div key={project.name} variants={fadeIn} transition={{ duration: 0.5 }}>
                  <Link href="/portfolio" className="block h-full group">
                    <Card className="h-full bg-white/60 backdrop-blur-md border-white/40 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden">
                      <div className={`bg-gradient-to-br ${project.gradient} h-44 flex items-center justify-center`}>
                        <project.icon className="w-16 h-16 text-white/80" />
                      </div>
                      <CardContent className="pt-5 pb-6">
                        <Badge variant="outline" className="mb-3 text-xs bg-slate-100 text-slate-600">Inspiration</Badge>
                        <h3 className="font-bold text-slate-900 text-lg mb-2">{project.name}</h3>
                        <p className="text-sm text-slate-600">{project.desc}</p>
                        <div className="mt-4 inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                          View Sample <ArrowRight className="w-4 h-4" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            <div className="text-center">
              <Link href="/portfolio" data-testid="btn-view-portfolio">
                <Button variant="outline" className="gap-2">See All Work <ArrowRight className="w-4 h-4" /></Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ── TRUST METRICS ── */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
            >
              {[
                { value: "99.9%", label: "Uptime Guaranteed", icon: ShieldCheck },
                { value: "48hr", label: "Edit Turnaround", icon: Zap },
                { value: "KSh 2.5k", label: "Starting Monthly", icon: DollarSign },
                { value: "WhatsApp", label: "Direct Support", icon: MessageCircle },
              ].map((metric) => (
                <motion.div
                  key={metric.label}
                  variants={fadeIn}
                  transition={{ duration: 0.5 }}
                  className="text-center p-6 bg-white/60 backdrop-blur-md border border-white/40 rounded-2xl shadow-md"
                >
                  <metric.icon className="w-7 h-7 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-extrabold text-slate-900 mb-1">{metric.value}</div>
                  <div className="text-sm text-slate-500">{metric.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── WHY CHOOSE FROSTFIELD ── */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/60">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-14"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose Frostfield</h2>
              <p className="text-slate-600 max-w-xl mx-auto">We eliminate the risks and frustrations of getting a website in Kenya.</p>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
            >
              {[
                { title: "We don't disappear after launch", desc: "Unlike freelancers, we provide long-term managed support to keep your site updated.", icon: ShieldCheck },
                { title: "Reliable ongoing support", desc: "From security updates to content changes, we handle the technical heavy lifting.", icon: Wrench },
                { title: "We understand Kenyan business", desc: "We integrate M-Pesa, optimize for local SEO, and know what your customers expect.", icon: Globe },
                { title: "Mobile-first websites", desc: "We build for mobile devices first, ensuring a seamless experience for your mobile users.", icon: Smartphone },
                { title: "Transparent pricing, no hidden costs", desc: "Clear upfront pricing and packages. You always know exactly what you're paying for.", icon: DollarSign },
                { title: "Scalable — grows with your business", desc: "Start small and add features like bookings or e-commerce as your business expands.", icon: Sparkles },
              ].map((feature) => (
                <motion.div key={feature.title} variants={fadeIn} transition={{ duration: 0.5 }}>
                  <Card className="h-full bg-white/70 backdrop-blur-md border-white/50 shadow-sm hover:shadow-md transition-all duration-300">
                    <CardHeader>
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                        <feature.icon className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg text-slate-900">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── BLOG PREVIEW (updated with external links – no dead href="#") */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeIn}
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Latest Insights</h2>
                <p className="text-slate-600 max-w-xl">Curated articles to help you grow your Kenyan business online.</p>
              </div>
              <Link href="/resources" data-testid="btn-view-blog">
                <Button variant="outline" className="gap-2">
                  More Resources <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
            >
              {[
                { title: "Why Your Business Needs a Website in Kenya", url: "https://www.brighterkenya.com/why-business-needs-website", source: "Brighter Kenya" },
                { title: "How Much Does a Website Cost in Kenya?", url: "https://www.cio.co.ke/website-cost-kenya", source: "CIO Kenya" },
                { title: "Why M-Pesa Integration Matters", url: "https://www.safaricom.co.ke/mpesa-business", source: "Safaricom" },
                { title: "Signs Your Business Needs a Better Website", url: "https://www.businessdailyafrica.com/signs-better-website", source: "Business Daily" },
              ].map((post, i) => (
                <motion.div key={post.title} variants={fadeIn} transition={{ duration: 0.5 }}>
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full group"
                    data-testid={`blog-card-${i}`}
                  >
                    <Card className="h-full bg-slate-50 border-slate-100 shadow-sm group-hover:shadow-md group-hover:border-primary/20 transition-all duration-300">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-primary font-medium">External Article</span>
                          <span className="text-xs text-slate-400">{post.source}</span>
                        </div>
                        <CardTitle className="text-base leading-snug group-hover:text-primary transition-colors duration-200">
                          {post.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center text-sm text-slate-500 font-medium gap-1">
                          Read Article
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          <span className="text-xs text-slate-400 ml-1">(opens new tab)</span>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── FAQ SECTION ── */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/60">
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="text-center mb-14"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-slate-600 max-w-xl mx-auto">Common questions about our web design and hosting services.</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left font-semibold text-slate-900">Do I own my website?</AccordionTrigger>
                  <AccordionContent className="text-slate-600">Yes, 100% yours after final payment. Full source code provided.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left font-semibold text-slate-900">Do you offer hosting?</AccordionTrigger>
                  <AccordionContent className="text-slate-600">Yes, annual plans from KES 6,000/yr.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left font-semibold text-slate-900">Can I pay via M-Pesa?</AccordionTrigger>
                  <AccordionContent className="text-slate-600">Yes, it is our primary payment method.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left font-semibold text-slate-900">What happens after launch?</AccordionTrigger>
                  <AccordionContent className="text-slate-600">Managed support plans available to keep your site updated and secure.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left font-semibold text-slate-900">Can you redesign my current website?</AccordionTrigger>
                  <AccordionContent className="text-slate-600">Yes, we specialise in redesigns and upgrades for existing sites.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left font-semibold text-slate-900">How long does a website take?</AccordionTrigger>
                  <AccordionContent className="text-slate-600">Bronze 7-10 days, Silver 15-20, Gold 20-30 days depending on requirements.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-left font-semibold text-slate-900">What is included in monthly support?</AccordionTrigger>
                  <AccordionContent className="text-slate-600">Hosting, backups, security, edits, and dedicated WhatsApp support.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                  <AccordionTrigger className="text-left font-semibold text-slate-900">Do you provide SEO?</AccordionTrigger>
                  <AccordionContent className="text-slate-600">Basic SEO on all packages, with advanced strategies available on demand.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-9">
                  <AccordionTrigger className="text-left font-semibold text-slate-900">Can I update the website myself?</AccordionTrigger>
                  <AccordionContent className="text-slate-600">CMS access is provided on Silver/Gold, or you can request edits easily via WhatsApp.</AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-blue-700 to-cyan-600 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-white/5 blur-[80px]" />
          </div>
          <motion.div
            className="max-w-3xl mx-auto text-center relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
              Ready to grow your business online?
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
              Join Kenyan businesses already benefiting from a managed digital presence. Let's build something great together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="final-cta-whatsapp-btn"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-8 py-3 rounded-lg shadow-xl transition-all duration-200 text-lg"
              >
                <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
              </a>
              <Link href="/pricing" data-testid="final-cta-pricing-link">
                <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-3 text-base gap-2">
                  View Pricing <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}