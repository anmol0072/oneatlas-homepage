import Link from "next/link";
import { Code, Hash, Globe, MessageCircle } from "lucide-react";

const FOOTER_LINKS = {
  Product: [
    { name: "Features", href: "#" },
    { name: "Templates", href: "#" },
    { name: "Enterprise", href: "#" },
    { name: "Security", href: "#" },
    { name: "Pricing", href: "#" },
  ],
  Resources: [
    { name: "Documentation", href: "#" },
    { name: "Help Center", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Updates", href: "#" },
  ],
  Community: [
    { name: "Discord", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "Reddit", href: "#" },
    { name: "GitHub", href: "#" },
  ],
  Company: [
    { name: "About", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Legal", href: "#" },
    { name: "Contact", href: "#" },
  ]
};

export function Footer() {
  return (
    <footer className="bg-background-secondary border-t border-border-light pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-xl font-bold bg-brand-gradient bg-clip-text text-transparent mb-4 inline-block">
              OneAtlas
            </Link>
            <p className="text-sm text-foreground-muted mb-6 max-w-xs">
              AI-native platform for generating and deploying business applications.
            </p>
            <div className="flex space-x-4 text-foreground-muted">
              <Link href="#" className="hover:text-brand-primary transition-colors"><Hash className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-brand-primary transition-colors"><Code className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-brand-primary transition-colors"><Globe className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-brand-primary transition-colors"><MessageCircle className="w-5 h-5" /></Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground-heading mb-4">Product</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.Product.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-foreground-muted hover:text-brand-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground-heading mb-4">Resources</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.Resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-foreground-muted hover:text-brand-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground-heading mb-4">Community</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.Community.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-foreground-muted hover:text-brand-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground-heading mb-4">Company</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.Company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-foreground-muted hover:text-brand-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border-light flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground-muted mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} OneAtlas, Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-foreground-muted">
            <Link href="#" className="hover:text-brand-primary">Privacy Policy</Link>
            <Link href="#" className="hover:text-brand-primary">Terms of Service</Link>
            <Link href="#" className="hover:text-brand-primary">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
