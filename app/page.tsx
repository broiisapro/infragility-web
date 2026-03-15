import ChatInterface from "@/components/dashboard/ChatInterface";
import ProjectStatus from "@/components/dashboard/ProjectStatus";
import OptimizationForm from "@/components/dashboard/OptimizationForm";
import MetricsOverview from "@/components/dashboard/MetricsOverview";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight gradient-text">Infragility Labs Dashboard</h1>
        <p className="text-lg text-muted-foreground mt-2">
          AI-powered SEO & GEO optimization platform. Interact with our specialist agents, track projects, and request optimizations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Tabs defaultValue="chat" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="chat">Agent Chat</TabsTrigger>
              <TabsTrigger value="projects">Active Projects</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            <TabsContent value="chat" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>CEO Agent Interface</CardTitle>
                  <CardDescription>
                    Chat directly with the Infragility Labs CEO agent. Request SEO/GEO optimizations and get real-time updates.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ChatInterface />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="projects" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Active Projects</CardTitle>
                  <CardDescription>
                    Track the status of your SEO/GEO optimization projects.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ProjectStatus />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="analytics" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Analytics</CardTitle>
                  <CardDescription>
                    Monitor SEO metrics and GEO performance over time.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <MetricsOverview />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Card>
            <CardHeader>
              <CardTitle>Quick Optimization Request</CardTitle>
              <CardDescription>
                Submit a new SEO/GEO optimization request. Our specialist agents will handle the entire pipeline.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <OptimizationForm />
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Agent Team Status</CardTitle>
              <CardDescription>Specialist availability</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="font-medium">CEO Agent</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Online</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="font-medium">Repo Reader</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Online</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="font-medium">Optimizer</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Online</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="font-medium">QA Reviewer</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Online</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="font-medium">Publisher</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Online</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest agent actions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">testrepo-themostbroken</span>
                    <span className="text-xs text-muted-foreground">2h ago</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    SEO/GEO optimization completed. PR #1 opened.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Vercel Preview</span>
                    <span className="text-xs text-muted-foreground">1h ago</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Deployment successful. Preview URL generated.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                <button className="flex flex-col items-center justify-center p-4 rounded-lg border hover:bg-accent transition-colors">
                  <div className="h-8 w-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-2">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">+</span>
                  </div>
                  <span className="text-sm font-medium">New Project</span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 rounded-lg border hover:bg-accent transition-colors">
                  <div className="h-8 w-8 rounded-lg bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mb-2">
                    <span className="text-teal-600 dark:text-teal-400 font-bold">📊</span>
                  </div>
                  <span className="text-sm font-medium">Analytics</span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 rounded-lg border hover:bg-accent transition-colors">
                  <div className="h-8 w-8 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-2">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">📄</span>
                  </div>
                  <span className="text-sm font-medium">Reports</span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 rounded-lg border hover:bg-accent transition-colors">
                  <div className="h-8 w-8 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-2">
                    <span className="text-amber-600 dark:text-amber-400 font-bold">⚙️</span>
                  </div>
                  <span className="text-sm font-medium">Settings</span>
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}