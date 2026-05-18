import { motion, useReducedMotion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { 
  Check, 
  ShieldCheck, 
  Zap, 
  Server,
  ArrowRight,
  Clock,
  Wallet,
  CreditCard,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { WHATSAPP_URL } from "@/lib/constants";

const fadeInBase = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainerBase = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Pricing() {
  const shouldReduceMotion = useReducedMotion();
  const fadeIn = shouldReduceMotion ? { hidden: { opacity: 0 }, visible: { opacity: 1 } } : fadeInBase;
  const staggerContainer = shouldReduceMotion ? { hidden: { opacity: 0 }, visible: { opacity: 1 } } : staggerContainerBase;

  return (
    <>
      <Helmet>
        <title>Pricing – Frostfield Tech | Transparent Website Packages in Kenya</title>
        <meta name="description" content="Clear, honest pricing for website development, hosting, and managed support. Pay via M-Pesa Paybill 522533. No hidden fees – pay only for what you need." />
        <link rel="canonical" href="https://frostfieldtech.co.ke/pricing" />
        <meta property="og:title" content="Pricing – Frostfield Tech | Transparent Website Packages" />
        <meta property="og:description" content="Website design, hosting, and support – separate services, clear costs. M-Pesa payments accepted." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://frostfieldtech.co.ke/pricing" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Frostfield Tech Website Packages",
            "description": "Custom website development, hosting, and support services for Kenyan businesses.",
            "brand": { "@type": "Brand", "name": "Frostfield Tech" },
            "offers": [
              { "@type": "Offer", "name": "Bronze Development", "price": "25000", "priceCurrency": "KES", "availability": "https://schema.org/InStock" },
              { "@type": "Offer", "name": "Silver Development", "price": "60000", "priceCurrency": "KES", "availability": "https://schema.org/InStock" },
              { "@type": "Offer", "name": "Gold Development", "price": "110000", "priceCurrency": "KES", "availability": "https://schema.org/InStock" }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background relative overflow-hidden font-sans text-foreground selection:bg-primary/20">
        {/* Background ambient shapes */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px]" />
          <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-accent/5 blur-[100px]" />
          <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[60%] rounded-full bg-primary/5 blur-[150px]" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          {/* Header */}
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-6 border-primary/20 bg-primary/5 text-primary text-sm font-medium px-4 py-1">
              Transparent Pricing
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
              Website design <span className="text-primary">+</span> hosting <span className="text-accent">+</span> support
              <br className="hidden sm:block" />
              <span className="text-slate-600 text-3xl md:text-4xl lg:text-5xl font-medium mt-2 block">Clear, honest pricing.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              We've separated each service so you only pay for exactly what you need. Choose your one-time build package, add annual hosting, and opt-in for monthly support if you want us to manage it all.
            </p>
          </motion.div>

          {/* Anchor Nav */}
          <motion.div 
            className="flex flex-wrap justify-center gap-2 mb-16"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.7 }}
          >
            <a href="#development" className="px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium transition-colors text-sm md:text-base border border-slate-200">
              Website Development
            </a>
            <a href="#hosting" className="px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium transition-colors text-sm md:text-base border border-slate-200">
              Website Hosting
            </a>
            <a href="#support" className="px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium transition-colors text-sm md:text-base border border-slate-200">
              Managed Support
            </a>
          </motion.div>

          {/* SECTION 1: Website Development */}
          <div id="development" className="scroll-mt-24 mb-24">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Website Development</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">One-time fee to build and launch your custom website.</p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 items-start"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Bronze */}
              <motion.div variants={fadeIn} className="h-full">
                <Card className="h-full flex flex-col bg-white/60 backdrop-blur-xl border-amber-700/20 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-amber-700">Bronze</CardTitle>
                    <CardDescription className="text-slate-500">Ideal for startups & small businesses.</CardDescription>
                    <div className="mt-6">
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">One-time fee</div>
                      <div className="flex items-baseline">
                        <span className="text-3xl font-extrabold text-slate-900">KES 25k-35k</span>
                      </div>
                      <div className="mt-4 flex items-center text-sm text-slate-500 gap-4">
                        <div className="flex items-center"><Clock className="w-4 h-4 mr-1 text-primary" /> 7-10 days</div>
                        <div className="flex items-center"><Wallet className="w-4 h-4 mr-1 text-primary" /> 50% deposit</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-4">
                      <li className="flex items-start"><Check className="w-5 h-5 text-amber-700 shrink-0 mr-3 mt-0.5" /><span className="text-slate-700">Up to 5 pages</span></li>
                      <li className="flex items-start"><Check className="w-5 h-5 text-amber-700 shrink-0 mr-3 mt-0.5" /><span className="text-slate-700">Mobile responsive design</span></li>
                      <li className="flex items-start"><Check className="w-5 h-5 text-amber-700 shrink-0 mr-3 mt-0.5" /><span className="text-slate-700">WhatsApp & Contact forms</span></li>
                      <li className="flex items-start"><Check className="w-5 h-5 text-amber-700 shrink-0 mr-3 mt-0.5" /><span className="text-slate-700">Basic SEO & Google Maps</span></li>
                      <li className="flex items-start"><Check className="w-5 h-5 text-amber-700 shrink-0 mr-3 mt-0.5" /><span className="text-slate-700">Free SSL Certificate</span></li>
                      <li className="flex items-start"><Check className="w-5 h-5 text-amber-700 shrink-0 mr-3 mt-0.5" /><span className="text-slate-700">Fast launch</span></li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300" onClick={() => window.open(WHATSAPP_URL, "_blank")}>
                      Start Your Website
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>

              {/* Silver (featured) */}
              <motion.div variants={fadeIn} className="h-full relative">
                <div className="absolute -top-4 left-0 right-0 flex justify-center z-20">
                  <Badge className="bg-slate-300 hover:bg-slate-400 text-slate-900 border-none shadow-md px-4 py-1 font-semibold text-xs tracking-wider uppercase">Most Popular</Badge>
                </div>
                <Card className="h-full flex flex-col bg-white/90 backdrop-blur-xl border-slate-400/50 shadow-2xl shadow-slate-300/30 hover:shadow-slate-300/50 transition-all duration-300 ring-1 ring-slate-400/20 transform md:-translate-y-4">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-slate-800">Silver</CardTitle>
                    <CardDescription className="text-slate-500">Ideal for growing SMEs & professional businesses.</CardDescription>
                    <div className="mt-6">
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">One-time fee</div>
                      <div className="flex items-baseline"><span className="text-4xl font-extrabold text-slate-900">KES 60k-120k</span></div>
                      <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
                        <div className="flex items-center"><Clock className="w-4 h-4 mr-1 text-slate-600" /> 15-20 days</div>
                        <div className="flex items-center"><Wallet className="w-4 h-4 mr-1 text-slate-600" /> 40% deposit</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-4">
                      <li className="flex items-start"><Check className="w-5 h-5 text-slate-600 shrink-0 mr-3 mt-0.5" /><span className="text-slate-900 font-medium">Up to 12 pages</span></li>
                      <li className="flex items-start"><Check className="w-5 h-5 text-slate-600 shrink-0 mr-3 mt-0.5" /><span className="text-slate-700">CMS/admin dashboard</span></li>
                      <li className="flex items-start"><Check className="w-5 h-5 text-slate-600 shrink-0 mr-3 mt-0.5" /><span className="text-slate-700">Blog functionality</span></li>
                      <li className="flex items-start"><Check className="w-5 h-5 text-slate-600 shrink-0 mr-3 mt-0.5" /><span className="text-slate-700">M-Pesa integration</span></li>
                      <li className="flex items-start"><Check className="w-5 h-5 text-slate-600 shrink-0 mr-3 mt-0.5" /><span className="text-slate-700">Booking/contact systems</span></li>
                      <li className="flex items-start"><Check className="w-5 h-5 text-slate-600 shrink-0 mr-3 mt-0.5" /><span className="text-slate-700">Improved SEO & speed optimization</span></li>
                      <li className="flex items-start"><Check className="w-5 h-5 text-slate-600 shrink-0 mr-3 mt-0.5" /><span className="text-slate-700">3 revision rounds</span></li>
                      <li className="flex items-start"><Check className="w-5 h-5 text-slate-600 shrink-0 mr-3 mt-0.5" /><span className="text-slate-700">Free .co.ke domain 1st year</span></li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-slate-800 hover:bg-slate-900 text-white shadow-lg" onClick={() => window.open(WHATSAPP_URL, "_blank")}>
                      Book Consultation <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>

              {/* Gold */}
              <motion.div variants={fadeIn} className="h-full">
                <Card className="h-full flex flex-col bg-white/60 backdrop-blur-xl border-yellow-500/30 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-yellow-600">Gold</CardTitle>
                    <CardDescription className="text-slate-500">Ideal for e-commerce & advanced systems.</CardDescription>
                    <div className="mt-6">
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">One-time fee</div>
                      <div className="flex items-baseline"><span className="text-3xl lg:text-4xl font-extrabold text-slate-900">KES 110k-180k</span></div>
                      <div className="mt-4 flex items-center text-sm text-slate-500 gap-4">
                        <div className="flex items-center"><Clock className="w-4 h-4 mr-1 text-yellow-600" /> 20-30 days</div>
                        <div className="flex items-center"><Wallet className="w-4 h-4 mr-1 text-yellow-600" /> 30% deposit</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-4">
                      <li className="flex items-start"><Check className="w-5 h-5 text-yellow-600 shrink-0 mr-3 mt-0.5" /><span className="text-slate-700">Full e-commerce/online store</span></li>
                      <li className="flex items-start"><Check className="w-5 h-5 text-yellow-600 shrink-0 mr-3 mt-0.5" /><span className="text-slate-700">M-Pesa + card payments</span></li>
                      <li className="flex items-start"><Check className="w-5 h-5 text-yellow-600 shrink-0 mr-3 mt-0.5" /><span className="text-slate-700">Inventory management</span></li>
                      <li className="flex items-start"><Check className="w-5 h-5 text-yellow-600 shrink-0 mr-3 mt-0.5" /><span className="text-slate-700">Custom features & Advanced analytics</span></li>
                      <li className="flex items-start"><Check className="w-5 h-5 text-yellow-600 shrink-0 mr-3 mt-0.5" /><span className="text-slate-700">Automation & Premium UI/UX</span></li>
                      <li className="flex items-start"><Check className="w-5 h-5 text-yellow-600 shrink-0 mr-3 mt-0.5" /><span className="text-slate-700">Priority support & 3-4 revisions</span></li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-yellow-50 hover:bg-yellow-100 text-yellow-800 border border-yellow-200" onClick={() => window.open(WHATSAPP_URL, "_blank")}>
                      Request Custom Quote
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </motion.div>

            {/* Custom Quote Callout */}
            <motion.div
              className="max-w-4xl mx-auto mb-16 text-center bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">Need something completely custom?</h3>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">If your project involves complex web applications, high-volume e-commerce, or enterprise-grade requirements, let's discuss a tailored solution.</p>
              <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800" onClick={() => window.open(WHATSAPP_URL, "_blank")}>
                Get a Custom Quote
              </Button>
            </motion.div>

            {/* Feature Comparison Table */}
            <motion.div 
              className="max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-white/50 shadow-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-slate-50/80 border-b border-slate-200/60">
                      <tr>
                        <th className="py-4 px-6 font-semibold text-slate-900 w-2/5">Features</th>
                        <th className="py-4 px-6 font-semibold text-slate-900 text-center">Bronze</th>
                        <th className="py-4 px-6 font-semibold text-slate-800 text-center bg-slate-100/50">Silver</th>
                        <th className="py-4 px-6 font-semibold text-slate-900 text-center">Gold</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {[
                        { name: "Pages", e: "Up to 5", b: "Up to 12", p: "Full Store/Custom" },
                        { name: "Mobile responsive", e: "Yes", b: "Yes", p: "Yes", check: true },
                        { name: "CMS / Admin Dashboard", e: "No", b: "Yes", p: "Yes" },
                        { name: "WhatsApp & Contact Forms", e: "Yes", b: "Yes", p: "Yes", check: true },
                        { name: "SEO Optimization", e: "Basic", b: "Improved", p: "Advanced" },
                        { name: "Speed Optimization", e: "Basic", b: "Optimized", p: "Premium" },
                        { name: "M-Pesa Integration", e: "No", b: "Yes", p: "Yes (+ Cards)" },
                        { name: "Revisions", e: "1 Round", b: "3 Rounds", p: "3-4 Rounds" },
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                          <td className="py-4 px-6 font-medium text-slate-700">{row.name}</td>
                          <td className="py-4 px-6 text-center text-slate-600">
                            {row.e === "Yes" && row.check ? <Check className="w-4 h-4 mx-auto text-amber-700" /> : row.e === "No" ? <span className="text-slate-300">–</span> : row.e}
                          </td>
                          <td className="py-4 px-6 text-center font-medium text-slate-900 bg-slate-50/30">
                            {row.b === "Yes" && (row.check || true) ? <Check className="w-4 h-4 mx-auto text-slate-600" /> : row.b === "No" ? <span className="text-slate-300">–</span> : row.b}
                          </td>
                          <td className="py-4 px-6 text-center text-slate-600">
                            {row.p === "Yes" && (row.check || true) ? <Check className="w-4 h-4 mx-auto text-yellow-600" /> : row.p === "No" ? <span className="text-slate-300">–</span> : row.p}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          </div>

          {/* SECTION 2: Hosting */}
          <div id="hosting" className="scroll-mt-24 mb-24">
            <motion.div 
              className="mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Website Hosting</h2>
                <p className="text-slate-600 max-w-2xl mx-auto text-lg">Hosting keeps your website live, secure, and accessible online. Billed annually.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="h-full flex flex-col bg-slate-50/50 border-none shadow-md">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-4"><Server className="w-5 h-5 text-blue-600" /></div>
                    <CardTitle className="text-lg">Essential Hosting</CardTitle>
                    <CardDescription className="text-slate-500">Perfect for small sites</CardDescription>
                    <div className="mt-4"><span className="text-3xl font-bold text-slate-900">KES 6,000</span><span className="text-slate-500">/year</span></div>
                  </CardHeader>
                  <CardContent className="flex-1 text-sm text-slate-600 space-y-3">
                    <p className="flex items-center"><Check className="w-4 h-4 mr-2 text-blue-600" /> 5GB SSD Storage</p>
                    <p className="flex items-center"><Check className="w-4 h-4 mr-2 text-blue-600" /> Free SSL Certificate</p>
                    <p className="flex items-center"><Check className="w-4 h-4 mr-2 text-blue-600" /> Daily Backups</p>
                    <p className="flex items-center"><Check className="w-4 h-4 mr-2 text-blue-600" /> 1 Business Email</p>
                  </CardContent>
                </Card>

                <Card className="h-full flex flex-col bg-white/80 border-primary/20 shadow-lg ring-1 ring-primary/10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4"><Zap className="w-12 h-12 text-primary/10" /></div>
                  <CardHeader>
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4"><Zap className="w-5 h-5 text-primary" /></div>
                    <CardTitle className="text-lg text-primary">Business Hosting</CardTitle>
                    <CardDescription className="text-slate-500">For growing businesses</CardDescription>
                    <div className="mt-4"><span className="text-3xl font-bold text-slate-900">KES 15,000</span><span className="text-slate-500">/year</span></div>
                  </CardHeader>
                  <CardContent className="flex-1 text-sm text-slate-700 space-y-3 font-medium">
                    <p className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" /> 20GB SSD Storage</p>
                    <p className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" /> Malware Scanning</p>
                    <p className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" /> Enhanced Performance</p>
                    <p className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" /> 5 Business Emails</p>
                  </CardContent>
                </Card>

                <Card className="h-full flex flex-col bg-slate-50/50 border-none shadow-md">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mb-4"><ShieldCheck className="w-5 h-5 text-purple-600" /></div>
                    <CardTitle className="text-lg">Premium Hosting</CardTitle>
                    <CardDescription className="text-slate-500">High-traffic websites</CardDescription>
                    <div className="mt-4"><span className="text-3xl font-bold text-slate-900">KES 30,000</span><span className="text-slate-500">/year</span></div>
                  </CardHeader>
                  <CardContent className="flex-1 text-sm text-slate-600 space-y-3">
                    <p className="flex items-center"><Check className="w-4 h-4 mr-2 text-purple-600" /> High-Performance Servers</p>
                    <p className="flex items-center"><Check className="w-4 h-4 mr-2 text-purple-600" /> CDN Integration</p>
                    <p className="flex items-center"><Check className="w-4 h-4 mr-2 text-purple-600" /> Advanced Security</p>
                    <p className="flex items-center"><Check className="w-4 h-4 mr-2 text-purple-600" /> Priority Uptime Monitoring</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>

          {/* SECTION 3: Support */}
          <div id="support" className="scroll-mt-24 mb-24">
            <motion.div 
              className="mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Managed Support & Maintenance</h2>
                <p className="text-slate-600 max-w-2xl mx-auto text-lg">Optional monthly plans to keep your website updated, secure, and optimized while you focus on your business.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="h-full flex flex-col bg-slate-50/50 border-none shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg">Bronze Support</CardTitle>
                    <CardDescription className="text-slate-500">Essential maintenance</CardDescription>
                    <div className="mt-4"><span className="text-3xl font-bold text-slate-900">KES 2,500-5k</span><span className="text-slate-500">/month</span></div>
                  </CardHeader>
                  <CardContent className="flex-1 text-sm text-slate-600 space-y-3 border-t border-slate-200 pt-4 mt-2">
                    <p className="flex items-start"><Check className="w-4 h-4 mr-2 text-amber-700 shrink-0 mt-0.5" /> Weekly backups</p>
                    <p className="flex items-start"><Check className="w-4 h-4 mr-2 text-amber-700 shrink-0 mt-0.5" /> Security updates</p>
                    <p className="flex items-start"><Check className="w-4 h-4 mr-2 text-amber-700 shrink-0 mt-0.5" /> 1hr edits/mo</p>
                    <p className="flex items-start"><Check className="w-4 h-4 mr-2 text-amber-700 shrink-0 mt-0.5" /> WhatsApp support</p>
                    <p className="flex items-start"><Check className="w-4 h-4 mr-2 text-amber-700 shrink-0 mt-0.5" /> Uptime monitoring</p>
                  </CardContent>
                </Card>

                <Card className="h-full flex flex-col bg-white/80 border-slate-300/50 shadow-lg ring-1 ring-slate-200/50">
                  <CardHeader>
                    <CardTitle className="text-lg text-slate-800">Silver Support</CardTitle>
                    <CardDescription className="text-slate-500">Active management</CardDescription>
                    <div className="mt-4"><span className="text-3xl font-bold text-slate-900">KES 9,000-15k</span><span className="text-slate-500">/month</span></div>
                  </CardHeader>
                  <CardContent className="flex-1 text-sm text-slate-700 space-y-3 border-t border-slate-200 pt-4 mt-2 font-medium">
                    <p className="flex items-start"><Check className="w-4 h-4 mr-2 text-slate-600 shrink-0 mt-0.5" /> Daily backups</p>
                    <p className="flex items-start"><Check className="w-4 h-4 mr-2 text-slate-600 shrink-0 mt-0.5" /> 3hrs edits/mo</p>
                    <p className="flex items-start"><Check className="w-4 h-4 mr-2 text-slate-600 shrink-0 mt-0.5" /> Faster support response</p>
                    <p className="flex items-start"><Check className="w-4 h-4 mr-2 text-slate-600 shrink-0 mt-0.5" /> Performance optimization</p>
                    <p className="flex items-start"><Check className="w-4 h-4 mr-2 text-slate-600 shrink-0 mt-0.5" /> Cloudflare protection</p>
                  </CardContent>
                </Card>

                <Card className="h-full flex flex-col bg-slate-50/50 border-none shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg">Gold Support</CardTitle>
                    <CardDescription className="text-slate-500">Complete peace of mind</CardDescription>
                    <div className="mt-4"><span className="text-3xl font-bold text-slate-900">KES 15k-40k</span><span className="text-slate-500">/month</span></div>
                  </CardHeader>
                  <CardContent className="flex-1 text-sm text-slate-600 space-y-3 border-t border-slate-200 pt-4 mt-2">
                    <p className="flex items-start"><Check className="w-4 h-4 mr-2 text-yellow-600 shrink-0 mt-0.5" /> Priority support</p>
                    <p className="flex items-start"><Check className="w-4 h-4 mr-2 text-yellow-600 shrink-0 mt-0.5" /> 5hrs edits/mo</p>
                    <p className="flex items-start"><Check className="w-4 h-4 mr-2 text-yellow-600 shrink-0 mt-0.5" /> Advanced SEO reports</p>
                    <p className="flex items-start"><Check className="w-4 h-4 mr-2 text-yellow-600 shrink-0 mt-0.5" /> Emergency fixes</p>
                    <p className="flex items-start"><Check className="w-4 h-4 mr-2 text-yellow-600 shrink-0 mt-0.5" /> Dedicated support</p>
                    <p className="flex items-start"><Check className="w-4 h-4 mr-2 text-yellow-600 shrink-0 mt-0.5" /> Monthly analytics</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>

          {/* PAYMENT SECTION – Secure M-Pesa Paybill */}
          <motion.div 
            className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="inline-block p-4 rounded-full bg-green-50 mb-6">
              <Wallet className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Simple & Secure Payments</h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto text-lg">We accept M‑Pesa Paybill, card, and bank transfers (invoiced).</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="bg-green-50/50 rounded-xl p-6 border border-green-100 relative overflow-hidden group hover:border-green-300 transition-colors">
                <div className="absolute -right-4 -top-4 bg-green-500 text-white text-[10px] font-bold py-1 px-8 rotate-45 transform translate-y-4 shadow-sm">
                  PREFERRED
                </div>
                <h4 className="font-semibold text-green-900 mb-2 flex items-center justify-center text-lg">M-Pesa Paybill</h4>
                <p className="text-2xl font-mono font-bold text-green-800 mb-1">522 533</p>
                <p className="text-sm text-green-700">Account Number: <span className="font-mono font-bold">8012541</span></p>
                <p className="text-xs text-green-600 mt-2">Business Name: <strong>Frostfield Tech</strong></p>
              </div>
              
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-slate-300 transition-colors">
                <h4 className="font-semibold text-slate-900 mb-2 flex items-center justify-center text-lg">
                  <CreditCard className="w-5 h-5 mr-2 text-slate-500" />
                  Card / Bank Transfer
                </h4>
                <p className="text-sm text-slate-600 mb-3">We accept debit/credit cards and direct bank deposits.</p>
                <p className="text-sm text-slate-600">Bank details are provided on your invoice – <strong>never sent via WhatsApp or email without verification</strong>.</p>
              </div>
            </div>

            {/* Security warning */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800 text-left mb-6">
              <p className="font-semibold mb-1">⚠️ Important security notice</p>
              <p>We will <strong>never</strong> change our Paybill number or bank details via WhatsApp, email, or SMS. Always verify payment instructions through our official website or by calling us directly. If in doubt, contact us before sending any money.</p>
            </div>
            
            <div className="flex flex-col items-center justify-center pt-6 border-t border-slate-100">
              <p className="text-slate-700 font-medium">Transparent Project Payment Terms</p>
              <p className="text-sm text-slate-500 mt-2 max-w-lg">
                For web development: Pay a deposit (30-50% depending on package) to begin, and the balance upon completion. We never launch before final payment.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </>
  );
}