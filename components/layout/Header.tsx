import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { MessageSquare, BarChart3, User } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-teal-400" />
            <span className="text-xl font-bold gradient-text">Infragility Labs</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/dashboard" className="text-sm font-medium hover:text-primary transition-colors">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                Dashboard
              </div>
            </Link>
            <Link href="/chat" className="text-sm font-medium hover:text-primary transition-colors">
              <div className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Agent Chat
              </div>
            </Link>
            <Link href="/projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="/reports" className="text-sm font-medium hover:text-primary transition-colors">
              Reports
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button variant="outline" size="sm" className="hidden md:inline-flex">
            <User className="mr-2 h-4 w-4" />
            Sign In
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-blue-600 to-teal-400 hover:from-blue-700 hover:to-teal-500">
            New Project
          </Button>
        </div>
      </div>
    </header>
  );
}