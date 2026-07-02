import { motion, useReducedMotion } from "framer-motion";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import {
  Building2,
  GraduationCap,
  Scale,
  Home as HomeIcon,
  UtensilsCrossed,
  MessageCircle,
  ArrowRight,
  FlaskConical,
  ExternalLink,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { WHATSAPP_URL } from "@/lib/constants";

const fadeInBase = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerBase = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const projects = [
    // 🆕 Lexxy Spa – LIVE PROJECT
    {
    icon: Building2,
    gradient: "from-pink-500 to-rose-400",
    name: "Lexxy Spa",
    tag: "Beauty / Wellness",
    label: "Live Project",
    tagColor: "border-pink-200 bg-pink-50 text-pink-700",
    tier: "Custom Business",
    timeline: "Spa Website",
    url: "https://futuretech17.github.io/Lexxy-Spa-Clean/",
    isLive: true,
    screenshot: "/images/lexxy-spa-screenshot.png",

    problem:
      "Lexxy Spa needed a premium online presence that reflected a luxury wellness experience and made it easier for potential clients to discover services.",

    solution:
      "Built a modern responsive spa website with elegant branding, service sections, smooth animations, immersive visuals, and mobile-first design.",

    result:
      "A polished live website that presents Lexxy Spa as a premium wellness brand and creates a stronger digital presence."
  },
  {
    // 🆕 DR. JOEL LESSAN – LIVE PROJECT
    icon: Building2,
    gradient: "from-blue-600 to-indigo-500",
    name: "Dr. Joel Lessan",
    tag: "Healthcare / Medical",
    label: "Live Project",
    tagColor: "border-blue-200 bg-blue-50 text-blue-700",
    tier: "Custom Enterprise",
    timeline: "Live Website",
    url: "https://futuretech17.github.io/dr-lessan-website/",
    isLive: true,
    screenshot: "/images/dr-lessan-screenshot.png",
    problem: "A leading paediatric surgeon in Nairobi had no professional online presence to showcase his expertise, services, and hospital affiliations.",
    solution: "Built a modern, responsive React website with Tailwind CSS featuring a clean medical brand aesthetic, doctor profile, services/conditions pages, hospital locations, and WhatsApp integration for consultations.",
    result: "A live, professional website that positions Dr. Lessan as a trusted consultant paediatric surgeon with clear patient pathways.",
  },
  {
    icon: Building2,
    gradient: "from-teal-500 to-cyan-400",
    name: "MediLife Medical Center",
    tag: "Healthcare / Medical",
    label: "Live Project",
    tagColor: "border-teal-200 bg-teal-50 text-teal-700",
    tier: "Custom Enterprise",
    timeline: "Live Website",
    url: "https://futuretech17.github.io/medilife-website/",
    isLive: true,
    screenshot: "/images/medilife-screenshot.png",
    problem: "A growing medical center in Nairobi needed a professional website to showcase their comprehensive healthcare services, build trust, and make it easy for patients to find them.",
    solution: "Built a modern, responsive website with a clean medical aesthetic, clear service listings, patient testimonials, location map, and easy-to-find contact information.",
    result: "A professional website that establishes MediLife as a trusted, patient-first medical center with a strong local presence.",
  },
  {
    // REAL PROJECT – Twokay Chemicals
    icon: Building2,
    gradient: "from-emerald-500 to-teal-400",
    name: "Twokay Chemicals Ltd",
    tag: "Healthcare / B2B",
    label: "Live Project",
    tagColor: "border-emerald-200 bg-emerald-50 text-emerald-700",
    tier: "Custom Enterprise",
    timeline: "Client website",
    url: "https://www.twokaychemicalsltd.com",
    isLive: true,
    screenshot: "/images/twokay-screenshot.png",
    problem: "The company needed a professional B2B website to establish credibility and showcase their pharmaceutical and surgical supplies.",
    solution: "We built a clean, trust‑oriented website with clear service descriptions, contact forms, and fast loading – tailored for healthcare procurement.",
    result: "A live, professional website that positions Twokay Chemicals as a premier supplier in the region.",
  }
];

export default function Portfolio() {
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
        <title>Portfolio – Frostfield Tech | Websites Built for Kenyan Businesses</title>
        <meta name="description" content="Real client websites: Dr. Joel Lessan (Paediatric Surgeon) and Twokay Chemicals. Concept projects for healthcare, education, legal, real estate, and restaurants." />
        <link rel="canonical" href="https://frostfield.co.ke/portfolio" />
        <meta property="og:title" content="Portfolio – Frostfield Tech | Websites Built for Kenyan Businesses" />
        <meta property="og:description" content="See our live client work: Dr. Joel Lessan, Twokay Chemicals, and concept showcases for healthcare, education, legal, real estate, and restaurants." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://frostfield.co.ke/portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Portfolio of Frostfield Tech",
            "description": "Real client websites and concept projects for Kenyan businesses",
            "url": "https://frostfield.co.ke/portfolio",
            "hasPart": projects.map(p => ({
              "@type": "CreativeWork",
              "name": p.name,
              "description": p.solution,
              "about": p.tag
            }))
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background text-foreground font-sans">
        {/* Ambient blobs */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute -top-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[100px]" />
          <div className="absolute top-[50%] -right-[10%] w-[35%] h-[35%] rounded-full bg-accent/5 blur-[80px]" />
          <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[50%] rounded-full bg-primary/4 blur-[150px]" />
        </div>

        {/* Hero */}
        <section className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeIn} transition={{ duration: 0.5 }}>
              <Badge variant="outline" className="mb-6 border-primary/20 bg-primary/5 text-primary px-4 py-1 text-sm">
                Our Work
              </Badge>
            </motion.div>
            <motion.h1 variants={fadeIn} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5 tracking-tight">
              Websites built for Kenyan businesses
            </motion.h1>
            <motion.p variants={fadeIn} transition={{ duration: 0.6 }} className="text-lg text-slate-600 max-w-2xl mx-auto">
              We deliver real, live websites for clients and create concept/demo projects to show what's possible. Every project reflects our commitment to quality.
            </motion.p>
            <motion.div variants={fadeIn} transition={{ duration: 0.5 }} className="mt-6 inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 text-sm font-medium px-4 py-2 rounded-full">
              <FlaskConical className="w-4 h-4" />
              Projects marked "Concept Project" or "Demo Showcase" are samples – live client work is clearly indicated
            </motion.div>
          </motion.div>
        </section>

        {/* Portfolio Grid */}
        <section className="relative z-10 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
            >
              {projects.map((project) => (
                <motion.div key={project.name} variants={fadeIn} transition={{ duration: 0.5 }}>
                  <Card className="h-full min-h-[640px] overflow-hidden bg-white/70 backdrop-blur-md border-white/50 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                    {/* Gradient header – with screenshot support */}
                    <div 
                      className={`relative h-52 flex items-center justify-center overflow-hidden shrink-0 ${project.isLive ? 'cursor-pointer' : ''}`}
                      onClick={() => project.isLive && window.open(project.url, '_blank', 'noopener noreferrer')}
                    >
                      {/* Background gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
                      
                      {/* Screenshot image if it exists */}
                      {project.screenshot && (
                        <img 
                          src={project.screenshot} 
                          alt={`${project.name} preview`}
                          className="absolute inset-0 w-full h-full object-cover object-top"
                        />
                      )}
                      
                      {/* Dark overlay for text readability */}
                      <div className="absolute inset-0 bg-black/30" />
                      
                      {/* Icon */}
                      <project.icon className="w-20 h-20 text-white/90 relative z-10" />
                      
                      {/* Badges */}
                      <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between">
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1.5 inline-flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${project.label === 'Live Project' ? 'bg-green-400' : 'bg-amber-300'}`} />
                          <span className="text-white text-xs font-medium">{project.label}</span>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1.5 text-white text-xs font-medium">
                          {project.timeline}
                        </div>
                      </div>
                      
                      {/* External link icon */}
                      {project.isLive && (
                        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-1.5 z-10">
                          <ExternalLink className="w-3.5 h-3.5 text-white" />
                        </div>
                      )}
                    </div>
                    
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline" className={`text-xs ${project.tagColor}`}>{project.tag}</Badge>
                        <span className="text-xs text-slate-400">{project.tier}</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-4">{project.name}</h3>
                      <div className="space-y-3 flex-1">
                        <div>
                          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Challenge</div>
                          <p className="text-sm text-slate-600 leading-relaxed">{project.problem}</p>
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Solution</div>
                          <p className="text-sm text-slate-600 leading-relaxed">{project.solution}</p>
                        </div>
                        <div className="bg-blue-50 border border-blue-100 rounded-xl p-3">
                          <div className="text-xs font-semibold text-blue-700 uppercase tracking-wider mb-1">What this demonstrates</div>
                          <p className="text-sm text-blue-800 leading-relaxed font-medium">{project.result}</p>
                        </div>
                      </div>
                      {project.isLive && (
                        <div className="mt-4 pt-3 border-t border-slate-100">
                          <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:gap-2 transition-all">
                            Visit Live Site <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Your business could be next</h2>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              We build websites for clinics, schools, law firms, restaurants, shops, and any Kenyan business ready to grow online. Chat with us to discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="portfolio-cta-whatsapp-btn"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" /> Start Your Project
              </a>
              <Link href="/pricing" data-testid="portfolio-cta-pricing-link">
                <span className="inline-flex items-center gap-2 text-primary font-medium hover:underline cursor-pointer">
                  View Pricing <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}