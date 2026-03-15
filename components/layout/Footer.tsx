import Link from "next/link";
import { Github, Twitter, Linkedin, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-auto border-t py-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-blue-600 to-teal-400" />
              <span className="text-lg font-bold gradient-text">Infragility Labs</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Premium technical agency specializing in SEO and GEO optimization.
              AI-driven solutions for maximum search visibility.
            </p>
            <div className="flex items-center gap-4">
              <Link href="https://github.com" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://discord.com" className="text-muted-foreground hover:text-foreground">
                <MessageSquare className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/services/seo" className="hover:text-foreground">SEO Optimization</Link>
              </li>
              <li>
                <Link href="/services/geo" className="hover:text-foreground">GEO Optimization</Link>
              </li>
              <li>
                <Link href="/services/technical" className="hover:text-foreground">Technical Audits</Link>
              </li>
              <li>
                <Link href="/services/analytics" className="hover:text-foreground">Analytics & Reporting</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/documentation" className="hover:text-foreground">Documentation</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-foreground">Blog</Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-foreground">Case Studies</Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-foreground">Pricing</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>contact@infragility.com</li>
              <li>+1 (555) 123-4567</li>
              <li>San Francisco, CA</li>
              <li>
                <Link href="/contact" className="hover:text-foreground underline">Schedule a Call</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Infragility Labs. All rights reserved.</p>
          <p className="mt-2">AI-powered SEO & GEO optimization for the modern web.</p>
        </div>
      </div>
    </footer>
  );
}