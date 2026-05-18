import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppFAB from "./WhatsAppFAB";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:p-3 focus:rounded-lg">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="flex-grow">
        {children}
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}