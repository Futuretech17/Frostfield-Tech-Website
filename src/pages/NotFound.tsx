import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, ArrowRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 relative overflow-hidden">
      {/* Ambient blobs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-[10%] -right-[10%] w-[35%] h-[35%] rounded-full bg-accent/5 blur-[80px]" />
      </div>

      <Card className="w-full max-w-md mx-auto bg-white/80 backdrop-blur-md border-white/50 shadow-xl relative z-10">
        <CardContent className="pt-8 pb-8 text-center">
          <div className="flex flex-col items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">
              <AlertCircle className="h-10 w-10 text-red-600" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900">404 – Page Not Found</h1>
          </div>

          <p className="text-slate-600 mb-6">
            The page you are looking for doesn't exist or has been moved.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/">
              <Button className="gap-2">
                <Home className="w-4 h-4" /> Go Home
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="gap-2">
                Contact Support <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
