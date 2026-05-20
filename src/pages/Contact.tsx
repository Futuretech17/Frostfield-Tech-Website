import { motion, useReducedMotion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { MessageCircle, Mail, Clock, Phone, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useForm } from "react-hook-form";
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { WHATSAPP_URL } from "@/lib/constants";

// ===== WEB3FORMS CONFIGURATION =====
// Replace with your actual Access Key from web3forms.com
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

const fadeInBase = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerBase = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  businessName: z.string().min(2, "Please enter your business name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(5, "Please enter a valid phone number"),
  businessType: z.string().min(1, "Please select your business type"),
  existingWebsite: z.enum(["yes", "no"], { error: "Please select an option" }),
  onlinePayments: z.enum(["yes", "no"], { error: "Please select an option" }),
  budget: z.string().min(1, "Please select an approximate budget"),
  timeline: z.string().min(1, "Please select a timeline"),
  message: z.string().min(10, "Please briefly describe your project"),
});

type ContactForm = z.infer<typeof contactSchema>;

const faqs = [
  {
    q: "How long does a website take to build?",
    a: "Starter sites take 7–10 days, Business sites 14–21 days, and E-commerce Pro sites 21–30 days. Timelines start from when the deposit is received and content is provided.",
  },
  {
    q: "What is the difference between hosting and managed support?",
    a: "Hosting (billed annually) keeps your website live on our servers — it covers server space, SSL, uptime, and backups. Managed Support (billed monthly) is a separate service that covers content updates, security monitoring, optimization checks, and WhatsApp support. You can have hosting without managed support, but most clients find the combination gives them complete peace of mind.",
  },
  {
    q: "Do I have to pay for hosting every year?",
    a: "Yes — hosting is billed annually starting from KES 6,000/year. This covers your server space, SSL certificate, daily backups, and email accounts. We will remind you before renewal so you are never caught off guard.",
  },
  {
    q: "Is SEO included in the website build?",
    a: "Basic on-page SEO — meta tags, fast loading, mobile optimization, and secure HTTPS — is included in all packages. Advanced SEO strategy and monthly reporting is available as an add-on or within our Premium Care support plan.",
  },
  {
    q: "Will my website work on mobile phones?",
    a: "Absolutely. We build with a mobile-first approach. Your website will look and function perfectly on smartphones, tablets, and desktops — which matters because over 90% of Kenyan internet users browse on mobile.",
  },
  {
    q: "Who owns the website once it's completed?",
    a: "You own 100% of the website, its content, and its assets once final payment is made. If you ever want to move hosting to another provider, you are free to do so at any time.",
  },
  {
    q: "How many revisions do I get?",
    a: "Starter packages include 1 round of revisions. Business includes 3 rounds. E-commerce Pro includes 3–4 rounds. Revisions are applied during the build — not after launch.",
  },
  {
    q: "What payment methods do you accept?",
    a: "M-Pesa is our primary payment method (Till or Paybill details provided on invoice). We also accept bank transfers and debit/credit cards. We never ask for full payment upfront — payment is split per your package terms.",
  },
  {
    q: "Do you register domain names?",
    a: "Yes. We handle domain registration (.co.ke, .com, .africa, etc.) on your behalf. A free domain for the first year is included in Business and E-commerce packages.",
  },
  {
    q: "What happens if something breaks after launch?",
    a: "All clients receive basic post-launch support for the first 30 days at no extra charge. For ongoing peace of mind, our Managed Support plans (Basic Care, Pro Care, Premium Care) cover bug fixes, updates, and priority WhatsApp response on a monthly basis.",
  },
  {
    q: "Can I upgrade my plan later?",
    a: "Yes — you can add managed support, upgrade your hosting tier, or request additional website features at any point. We are a long-term partner, not a one-and-done service.",
  },
];

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();
  const fadeIn = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : fadeInBase;
  const stagger = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : staggerBase;

  const { toast } = useToast();

  const form = useForm<ContactForm>({
    resolver: standardSchemaResolver(contactSchema),
    defaultValues: {
      name: "",
      businessName: "",
      email: "",
      phone: "",
      businessType: "",
      existingWebsite: undefined,
      onlinePayments: undefined,
      budget: "",
      timeline: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactForm) {
    try {
      // Prepare form data for Web3Forms API
      const formData = new URLSearchParams();
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      formData.append("name", data.name);
      formData.append("business_name", data.businessName);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("business_type", data.businessType);
      formData.append("existing_website", data.existingWebsite);
      formData.append("online_payments", data.onlinePayments);
      formData.append("budget", data.budget);
      formData.append("timeline", data.timeline);
      formData.append("message", data.message);
      // Honeypot field to prevent spam (Web3Forms recommends this)
      formData.append("botcheck", "");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        toast({
          title: "Quote request sent!",
          description: "Thank you — we'll get back to you within 2 hours.",
        });
        form.reset();
      } else {
        console.error("Web3Forms error:", result);
        toast({
          title: "Submission failed",
          description: result.message || "Please try again or contact us directly on WhatsApp.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Network error:", error);
      toast({
        title: "Something went wrong",
        description: "Please check your internet connection or try again later.",
        variant: "destructive",
      });
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact – Frostfield Tech | Request a Quote for Your Website</title>
        <meta name="description" content="Get a custom quote for your business website. Chat on WhatsApp, email, or fill out our detailed form. We respond within 2 hours." />
        <link rel="canonical" href="https://frostfieldtech.co.ke/contact" />
        <meta property="og:title" content="Contact – Frostfield Tech | Request a Quote" />
        <meta property="og:description" content="Tell us about your project and get a detailed proposal for your website." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://frostfieldtech.co.ke/contact" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Frostfield Tech",
            "url": "https://frostfieldtech.co.ke/contact",
            "mainEntity": {
              "@type": "Organization",
              "name": "Frostfield Tech",
              "url": "https://frostfieldtech.co.ke",
              "email": "info@frostfieldtech.co.ke",
              "telephone": "+254713772408",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Nairobi",
                "addressCountry": "KE"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "WhatsApp",
                "url": "https://wa.me/254713772408"
              }
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background text-foreground font-sans">
        {/* Ambient blobs */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute -top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[100px]" />
          <div className="absolute bottom-[10%] -left-[10%] w-[35%] h-[35%] rounded-full bg-accent/5 blur-[80px]" />
          <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[50%] rounded-full bg-primary/4 blur-[150px]" />
        </div>

        {/* Hero */}
        <section className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeIn} transition={{ duration: 0.5 }}>
              <Badge variant="outline" className="mb-6 border-primary/20 bg-primary/5 text-primary px-4 py-1 text-sm">
                Get A Custom Quote
              </Badge>
            </motion.div>
            <motion.h1 variants={fadeIn} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5 tracking-tight">
              Let's Build Something Great
            </motion.h1>
            <motion.p variants={fadeIn} transition={{ duration: 0.6 }} className="text-lg text-slate-600 max-w-xl mx-auto">
              Fill out the form below to request a detailed quote, or chat with us directly on WhatsApp. We respond within 2 hours.
            </motion.p>
          </motion.div>
        </section>

        {/* Main content */}
        <section className="relative z-10 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

              {/* Left column – WhatsApp + contact info */}
              <div className="lg:col-span-4 space-y-6 flex flex-col">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ duration: 0.6 }}
                  className="flex-1 flex flex-col"
                >
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block flex-1">
                    <Card className="h-full bg-gradient-to-br from-[#25D366]/10 to-[#20bd5a]/10 border-[#25D366]/30 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                      <CardContent className="pt-8 pb-8 text-center">
                        <div className="w-16 h-16 bg-[#25D366] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                          <MessageCircle className="w-9 h-9 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Chat on WhatsApp</h3>
                        <p className="text-slate-600 text-sm mb-5">The fastest way to reach us. We reply within 2 hours.</p>
                        <span className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-6 py-2.5 rounded-lg shadow transition-colors">
                          <MessageCircle className="w-4 h-4" /> Start Chat
                        </span>
                      </CardContent>
                    </Card>
                  </a>

                  <Card className="bg-white/70 backdrop-blur-md border-white/50 shadow-md mt-6 flex-1">
                    <CardContent className="pt-6 space-y-5">
                      <div className="flex items-start gap-4">
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <Mail className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-0.5">Email</div>
                          <a href="mailto:info@frostfieldtech.co.ke" className="text-slate-800 font-medium hover:text-primary transition-colors text-sm">info@frostfieldtech.co.ke</a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-9 h-9 rounded-lg bg-[#25D366]/10 flex items-center justify-center shrink-0">
                          <Phone className="w-5 h-5 text-[#25D366]" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-0.5">WhatsApp</div>
                          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-slate-800 font-medium hover:text-primary transition-colors text-sm">+254 713 772 408</a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-9 h-9 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
                          <MapPin className="w-5 h-5 text-indigo-600" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-0.5">Location</div>
                          <span className="text-slate-800 font-medium text-sm block">Nairobi, Kenya</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center shrink-0">
                          <Clock className="w-5 h-5 text-amber-600" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-0.5">Business Hours</div>
                          <span className="text-slate-800 font-medium text-sm block">Mon-Fri: 8:00 AM - 6:00 PM</span>
                          <span className="text-slate-600 text-sm block">Sat: 9:00 AM - 1:00 PM</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Right column – Form */}
              <div className="lg:col-span-8">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.6 }}>
                  <Card className="bg-white/80 backdrop-blur-md border-white/50 shadow-xl">
                    <CardContent className="pt-8 pb-8 px-5 sm:px-8">
                      <h2 className="text-2xl font-bold text-slate-900 mb-2">Request a Quote</h2>
                      <p className="text-slate-600 mb-8">Tell us about your project so we can prepare a detailed proposal.</p>

                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="quote-form">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField control={form.control} name="name" render={({ field }) => (
                              <FormItem><FormLabel>Full Name</FormLabel><FormControl><Input placeholder="e.g. Jane Wanjiku" {...field} /></FormControl><FormMessage /></FormItem>
                            )} />
                            <FormField control={form.control} name="businessName" render={({ field }) => (
                              <FormItem><FormLabel>Business Name</FormLabel><FormControl><Input placeholder="e.g. Acme Tech" {...field} /></FormControl><FormMessage /></FormItem>
                            )} />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField control={form.control} name="email" render={({ field }) => (
                              <FormItem><FormLabel>Email Address</FormLabel><FormControl><Input placeholder="e.g. jane@example.com" type="email" {...field} /></FormControl><FormMessage /></FormItem>
                            )} />
                            <FormField control={form.control} name="phone" render={({ field }) => (
                              <FormItem><FormLabel>Phone Number (WhatsApp preferred)</FormLabel><FormControl><Input placeholder="e.g. 0712 345 678" {...field} /></FormControl><FormMessage /></FormItem>
                            )} />
                          </div>

                          <div className="border-t border-slate-100 pt-6"></div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField control={form.control} name="businessType" render={({ field }) => (
                              <FormItem><FormLabel>Business Type</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl><SelectTrigger><SelectValue placeholder="Select industry" /></SelectTrigger></FormControl>
                                <SelectContent>
                                  <SelectItem value="retail">Retail & E-commerce</SelectItem>
                                  <SelectItem value="service">Service Business</SelectItem>
                                  <SelectItem value="corporate">Corporate / B2B</SelectItem>
                                  <SelectItem value="restaurant">Restaurant / Hospitality</SelectItem>
                                  <SelectItem value="real-estate">Real Estate</SelectItem>
                                  <SelectItem value="health">Healthcare / Clinic</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select><FormMessage /></FormItem>
                            )} />
                            <FormField control={form.control} name="budget" render={({ field }) => (
                              <FormItem><FormLabel>Approximate Budget</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl><SelectTrigger><SelectValue placeholder="Select budget range" /></SelectTrigger></FormControl>
                                <SelectContent>
                                  <SelectItem value="15k-30k">KSh 15,000 - 30,000 (Starter)</SelectItem>
                                  <SelectItem value="30k-60k">KSh 30,000 - 60,000 (Business)</SelectItem>
                                  <SelectItem value="60k-120k">KSh 60,000 - 120,000 (E-commerce)</SelectItem>
                                  <SelectItem value="120k+">KSh 120,000+ (Custom)</SelectItem>
                                  <SelectItem value="not-sure">Not sure yet</SelectItem>
                                </SelectContent>
                              </Select><FormMessage /></FormItem>
                            )} />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField control={form.control} name="timeline" render={({ field }) => (
                              <FormItem><FormLabel>Timeline</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl><SelectTrigger><SelectValue placeholder="Select timeline" /></SelectTrigger></FormControl>
                                <SelectContent>
                                  <SelectItem value="asap">As soon as possible</SelectItem>
                                  <SelectItem value="1month">Within 1 month</SelectItem>
                                  <SelectItem value="1-3months">1–3 months</SelectItem>
                                  <SelectItem value="3+months">3+ months / Planning ahead</SelectItem>
                                </SelectContent>
                              </Select><FormMessage /></FormItem>
                            )} />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField control={form.control} name="existingWebsite" render={({ field }) => (
                              <FormItem className="space-y-3"><FormLabel>Do you have an existing website?</FormLabel>
                                <FormControl><RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                                  <FormItem className="flex items-center space-x-3"><FormControl><RadioGroupItem value="yes" /></FormControl><FormLabel className="font-normal cursor-pointer">Yes, looking to redesign</FormLabel></FormItem>
                                  <FormItem className="flex items-center space-x-3"><FormControl><RadioGroupItem value="no" /></FormControl><FormLabel className="font-normal cursor-pointer">No, starting from scratch</FormLabel></FormItem>
                                </RadioGroup></FormControl><FormMessage />
                              </FormItem>
                            )} />
                            <FormField control={form.control} name="onlinePayments" render={({ field }) => (
                              <FormItem className="space-y-3"><FormLabel>Will you need to accept online payments?</FormLabel>
                                <FormControl><RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                                  <FormItem className="flex items-center space-x-3"><FormControl><RadioGroupItem value="yes" /></FormControl><FormLabel className="font-normal cursor-pointer">Yes (M-Pesa/Cards)</FormLabel></FormItem>
                                  <FormItem className="flex items-center space-x-3"><FormControl><RadioGroupItem value="no" /></FormControl><FormLabel className="font-normal cursor-pointer">No, just an informational site</FormLabel></FormItem>
                                </RadioGroup></FormControl><FormMessage />
                              </FormItem>
                            )} />
                          </div>

                          <FormField control={form.control} name="message" render={({ field }) => (
                            <FormItem><FormLabel>Short Project Description</FormLabel>
                              <FormControl><Textarea placeholder="Tell us a bit about your business, what you want the website to achieve, and any features you need..." className="resize-none" rows={5} {...field} /></FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />

                          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg py-6 text-lg rounded-xl mt-4">
                            Request Custom Quote
                          </Button>
                        </form>
                      </Form>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/60">
          <div className="max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn} transition={{ duration: 0.6 }}>
              <div className="text-center mb-10">
                <Badge variant="outline" className="mb-4 border-primary/20 bg-primary/5 text-primary">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
              </div>
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="bg-white/80 backdrop-blur-md border border-white/50 rounded-xl px-5 shadow-sm hover:border-primary/20 transition-colors">
                    <AccordionTrigger className="text-left font-semibold text-slate-800 py-5 hover:no-underline text-base">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-slate-600 text-sm md:text-base leading-relaxed pb-5">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}