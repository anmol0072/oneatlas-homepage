import { MegaMenu } from "@/components/navigation/MegaMenu";
import { Footer } from "@/components/navigation/Footer";
import { Hero } from "@/components/sections/Hero";
import { FeaturesStrip } from "@/components/sections/FeaturesStrip";
import { WorkflowSteps } from "@/components/sections/WorkflowSteps";
import { Templates } from "@/components/sections/Templates";
import { Testimonials } from "@/components/sections/Testimonials";
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
      <FeaturesStrip />
      <WorkflowSteps />
      <Integrations />
      <Templates />
      <CodeExport />
      <Roles />
      <Pricing />
      <WhyAtlas />
      <Testimonials />
      <Footer />
    </main>
  );
}
