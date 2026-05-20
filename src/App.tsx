import { Route, Switch } from "wouter";   // import Switch
import Layout from "@/components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        {/* Catch-all route – must be last */}
        <Route path="*" component={NotFound} />
      </Switch>
    </Layout>
  );
}

export default App;