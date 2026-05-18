import { motion, useReducedMotion } from "framer-motion";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import {
  ShieldCheck,
  Handshake,
  MessageCircle,
  ArrowRight,
  Check,
  Globe,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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

export default function About() {
  const shouldReduceMotion = useReducedMotion();
  const fadeIn = shouldReduceMotion ? { hidden: { opacity: 0 }, visible: { opacity: 1 } } : fadeInBase;
  const stagger = shouldReduceMotion ? { hidden: { opacity: 0 }, visible: { opacity: 1 } } : staggerBase;

  return (
    <>
      <Helmet>
        <title>About – Frostfield Tech | Kenyan Website Partner</title>
        <meta name="description" content="Frostfield Tech helps Kenyan SMEs go digital – affordable websites, managed hosting, and ongoing support. Learn about our mission, values, and story." />
        <link rel="canonical" href="https://frostfieldtech.co.ke/about" />
        <meta property="og:title" content="About – Frostfield Tech | Kenyan Website Partner" />
        <meta property="og:description" content="We build, host, and support websites for Kenyan businesses. Reliable, transparent, and locally focused." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://frostfieldtech.co.ke/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Frostfield Tech",
            "url": "https://frostfieldtech.co.ke",
            "description": "Kenyan web design, hosting, and managed support for SMEs.",
            "address": { "@type": "PostalAddress", "addressLocality": "Nairobi", "addressCountry": "KE" },
            "contactPoint": { "@type": "ContactPoint", "contactType": "WhatsApp", "url": "https://wa.me/254713772408" },
            "sameAs": ["https://wa.me/254713772408"]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background text-foreground font-sans">
        {/* Ambient blobs */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute -top-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[100px]" />
          <div className="absolute top-[60%] -right-[10%] w-[35%] h-[35%] rounded-full bg-accent/5 blur-[80px]" />
          <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[50%] rounded-full bg-primary/4 blur-[150px]" />
        </div>

        {/* Hero */}
        <section className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeIn} transition={{ duration: 0.5 }}>
              <Badge variant="outline" className="mb-6 border-primary/20 bg-primary/5 text-primary px-4 py-1 text-sm">Who We Are</Badge>
            </motion.div>
            <motion.h1 variants={fadeIn} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5 tracking-tight">About Frostfield Tech</motion.h1>
            <motion.p variants={fadeIn} transition={{ duration: 0.6 }} className="text-lg text-slate-600 max-w-2xl mx-auto">We exist to help Kenyan small businesses go digital — affordably, professionally, and with lasting support.</motion.p>
          </motion.div>
        </section>

        {/* Mission */}
        <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 bg-slate-50/60">
          <div className="max-w-4xl mx-auto">
            <motion.div className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 border border-primary/20 rounded-3xl p-10 md:p-14 text-center shadow-xl" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.6 }}>
              <Globe className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
              <p className="text-slate-700 text-lg leading-relaxed max-w-2xl mx-auto">"We believe every Kenyan business deserves a professional online presence — regardless of size or budget. We make world-class websites accessible, reliable, and sustainable for the businesses that build our communities."</p>
            </motion.div>
          </div>
        </section>

        {/* Story + Stats */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div className="flex flex-col md:flex-row items-center gap-12" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
              <motion.div variants={fadeIn} transition={{ duration: 0.6 }} className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>Frostfield Tech was founded in Nairobi after seeing first-hand how many thriving local businesses — clinics, schools, law firms, shops — were being held back by a simple lack of digital infrastructure.</p>
                  <p>Most of them had tried to get websites built before. They ran into expensive one-time freelancers who disappeared after delivery, leaving a site that broke, went offline, or simply became outdated with no one to call.</p>
                  <p>We believe businesses deserve a reliable digital partner — not just a developer. We build your website, host it, maintain it, and support you as your business grows.</p>
                  <p>Our model is simple: an annual hosting plan + optional monthly support that covers everything. You focus on your business. We handle your digital presence.</p>
                </div>
              </motion.div>
              <motion.div variants={fadeIn} transition={{ duration: 0.6 }} className="flex-1 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                  {[
                    { value: "50+", label: "Clients Served" },
                    { value: "99.9%", label: "Avg. Uptime" },
                    { value: "2hr", label: "Support Response" },
                    { value: "100%", label: "Kenya-focused" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white/70 backdrop-blur-md border border-white/50 rounded-2xl p-5 text-center shadow-md min-h-[110px] flex flex-col justify-center">
                      <div className="text-3xl font-extrabold text-primary mb-1">{stat.value}</div>
                      <div className="text-xs text-slate-500 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/60">
          <div className="max-w-6xl mx-auto">
            <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What we stand for</h2>
            </motion.div>
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
              {[
                { icon: Users, color: "text-amber-600", bg: "bg-amber-50", title: "Harambee", desc: "Community and mutual support. We succeed when our clients succeed. We build digital tools that empower local communities and businesses." },
                { icon: ShieldCheck, color: "text-blue-600", bg: "bg-blue-50", title: "Transparency", desc: "No hidden charges, no vague deliverables. You always know exactly what you're paying for and what you'll get." },
                { icon: Check, color: "text-primary", bg: "bg-primary/10", title: "Reliability", desc: "We don't disappear. You get a reliable ongoing partner who keeps your digital presence running smoothly without excuses." },
                { icon: Handshake, color: "text-green-600", bg: "bg-green-50", title: "Long-term Partnership", desc: "We grow with you. Our ongoing support means we're committed to your digital success for the long run." },
              ].map((value) => (
                <motion.div key={value.title} variants={fadeIn} transition={{ duration: 0.5 }}>
                  <Card className="h-full min-h-[240px] bg-white/70 backdrop-blur-md border-white/50 shadow-lg text-center p-4 flex flex-col">
                    <CardHeader className="pb-2">
                      <div className={`w-12 h-12 rounded-xl ${value.bg} flex items-center justify-center mx-auto mb-4`}>
                        <value.icon className={`w-7 h-7 ${value.color}`} />
                      </div>
                      <CardTitle className="text-lg text-slate-900">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 text-center">Why businesses trust Frostfield Tech</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { title: "We don't disappear", desc: "Freelancers often become unreachable after payment. We're your ongoing partner with a direct WhatsApp line." },
                  { title: "Everything in one retainer", desc: "Hosting, updates, support, backups — all covered. No juggling separate vendors for each service." },
                  { title: "We know Kenyan businesses", desc: "M-Pesa integration, local SEO, Swahili-friendly copy — we understand what Kenyan customers need." },
                  { title: "Predictable monthly cost", desc: "No surprise invoices. One flat monthly fee covers everything your website needs to keep running well." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 p-5 bg-white/60 backdrop-blur-md border border-white/40 rounded-2xl shadow-md min-h-[130px]">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 bg-slate-50/60">
          <motion.div className="max-w-2xl mx-auto text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">A small team with real commitment</h2>
            <p className="text-slate-600 leading-relaxed mb-8">Our small but dedicated team works directly with every client — no outsourcing, no middlemen. When you contact Frostfield Tech, you're talking to the people who will actually build and manage your website.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-200">
                <MessageCircle className="w-4 h-4" /> Chat With Us
              </a>
              <Link href="/contact">
                <Button variant="outline" className="gap-2">Contact Page <ArrowRight className="w-4 h-4" /></Button>
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}