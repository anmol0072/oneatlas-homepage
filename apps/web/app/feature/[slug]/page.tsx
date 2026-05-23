import Link from "next/link";
import { ArrowLeft, Construction } from "lucide-react";

export default async function FeatureComingSoonPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  // Format the slug to look like a title (e.g., "soc2-compliance" -> "Soc2 Compliance")
  const title = resolvedParams.slug
    .split("-")
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="min-h-screen bg-background-main flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white border border-border-light shadow-xl rounded-2xl p-8 text-center relative overflow-hidden">
        {/* Background gradient blob */}
        <div className="absolute -top-[20%] -right-[20%] w-[50%] h-[50%] bg-brand-primary/10 blur-3xl rounded-full" />
        
        <div className="relative z-10">
          <div className="w-16 h-16 bg-background-secondary rounded-full flex items-center justify-center mx-auto mb-6 border border-border-light">
            <Construction className="w-8 h-8 text-foreground-muted" />
          </div>
          
          <h1 className="text-2xl font-bold text-foreground-heading mb-2">
            {title}
          </h1>
          
          <p className="text-foreground-body mb-8">
            This module is currently under active development. Check back soon for updates as we finalize our MVP roadmap!
          </p>
          
          <Link 
            href="/"
            className="inline-flex items-center justify-center w-full px-4 py-2 bg-foreground-heading text-white font-medium rounded-lg hover:bg-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
