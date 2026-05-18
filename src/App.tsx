import { Route } from "wouter";
import Layout from "@/components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";   // <-- import

function App() {
  return (
    <Layout>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      {/* Catch-all route – must be last */}
      <Route path="*" component={NotFound} />
    </Layout>
  );
}

export default App;