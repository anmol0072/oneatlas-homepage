import { MegaMenu } from "@/components/navigation/MegaMenu";
import { Footer } from "@/components/navigation/Footer";
import { Hero } from "@/components/sections/Hero";
import { ModelMarquee } from "@/components/sections/ModelMarquee";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Templates } from "@/components/sections/Templates";
import { Pricing } from "@/components/sections/Pricing";
import { Roles } from "@/components/sections/Roles";
import { WhyAtlas } from "@/components/sections/WhyAtlas";
import { Integrations } from "@/components/sections/Integrations";
import { CodeExport } from "@/components/sections/CodeExport";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <MegaMenu />
      <Hero />
      <ModelMarquee />
      <HowItWorks />
      <Integrations />
      <Templates />
      <CodeExport />
      <Roles />
      <Pricing />
      <WhyAtlas />
      <Footer />
    </main>
  );
}
