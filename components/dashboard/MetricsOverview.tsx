"use client";

import { TrendingUp, TrendingDown, Target, Globe, Zap, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Metric = {
  id: string;
  title: string;
  value: string;
  change: number;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
};

const metrics: Metric[] = [
  {
    id: "1",
    title: "SEO Score",
    value: "92",
    change: 12,
    icon: Target,
    color: "text-blue-600",
  },
  {
    id: "2",
    title: "GEO Coverage",
    value: "78%",
    change: 8,
    icon: Globe,
    color: "text-teal-600",
  },
  {
    id: "3",
    title: "Page Speed",
    value: "94",
    change: -2,
    icon: Zap,
    color: "text-amber-600",
  },
  {
    id: "4",
    title: "Mobile Traffic",
    value: "64%",
    change: 15,
    icon: Users,
    color: "text-purple-600",
  },
];

const chartData = [
  { month: "Jan", seo: 65, geo: 45, traffic: 1200 },
  { month: "Feb", seo: 70, geo: 50, traffic: 1500 },
  { month: "Mar", seo: 75, geo: 55, traffic: 1800 },
  { month: "Apr", seo: 80, geo: 60, traffic: 2100 },
  { month: "May", seo: 85, geo: 65, traffic: 2400 },
  { month: "Jun", seo: 90, geo: 70, traffic: 2700 },
  { month: "Jul", seo: 92, geo: 78, traffic: 3000 },
];

const topKeywords = [
  { keyword: "SEO optimization", position: 1, change: 3 },
  { keyword: "React SEO", position: 2, change: 1 },
  { keyword: "GEO targeting", position: 3, change: 5 },
  { keyword: "Technical SEO", position: 4, change: -1 },
  { keyword: "Local SEO", position: 5, change: 2 },
];

export default function MetricsOverview() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric) => (
          <Card key={metric.id}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {metric.title}
                  </p>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-3xl font-bold">{metric.value}</span>
                    <div
                      className={cn(
                        "flex items-center text-sm font-medium",
                        metric.change >= 0
                          ? "text-green-600"
                          : "text-red-600"
                      )}
                    >
                      {metric.change >= 0 ? (
                        <TrendingUp className="h-4 w-4 mr-1" />
                      ) : (
                        <TrendingDown className="h-4 w-4 mr-1" />
                      )}
                      {metric.change >= 0 ? "+" : ""}
                      {metric.change}%
                    </div>
                  </div>
                </div>
                <div className={cn("p-3 rounded-lg", metric.color.replace("text-", "bg-") + "20")}>
                  <metric.icon className={cn("h-6 w-6", metric.color)} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>SEO & GEO Performance</CardTitle>
            <CardDescription>Monthly improvement metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-blue-500" />
                    <span>SEO Score</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-teal-500" />
                    <span>GEO Coverage</span>
                  </div>
                </div>
                <div className="text-muted-foreground">Last 7 months</div>
              </div>

              <div className="h-64 relative">
                {/* Simplified chart visualization */}
                <div className="absolute inset-0 flex items-end gap-1">
                  {chartData.map((data, index) => (
                    <div
                      key={data.month}
                      className="flex-1 flex flex-col items-center justify-end"
                      style={{ height: "100%" }}
                    >
                      <div className="flex items-end gap-1">
                        <div
                          className="w-4 bg-blue-500 rounded-t"
                          style={{ height: `${(data.seo / 100) * 80}%` }}
                        />
                        <div
                          className="w-4 bg-teal-500 rounded-t"
                          style={{ height: `${(data.geo / 100) * 80}%` }}
                        />
                      </div>
                      <div className="text-xs text-muted-foreground mt-2">
                        {data.month}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Keywords</CardTitle>
            <CardDescription>Ranking performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topKeywords.map((item) => (
                <div
                  key={item.keyword}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-accent transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={cn(
                        "flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold",
                        item.position <= 3
                          ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                          : "bg-muted text-muted-foreground"
                      )}
                    >
                      {item.position}
                    </div>
                    <div>
                      <div className="font-medium">{item.keyword}</div>
                      <div className="text-sm text-muted-foreground">
                        Position change
                      </div>
                    </div>
                  </div>
                  <div
                    className={cn(
                      "flex items-center text-sm font-medium",
                      item.change >= 0
                        ? "text-green-600"
                        : "text-red-600"
                    )}
                  >
                    {item.change >= 0 ? (
                      <TrendingUp className="h-4 w-4 mr-1" />
                    ) : (
                      <TrendingDown className="h-4 w-4 mr-1" />
                    )}
                    {item.change >= 0 ? "+" : ""}
                    {item.change}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Agent Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Repo Reader</span>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-32 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: "95%" }} />
                  </div>
                  <span className="text-sm font-medium">95%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Optimizer</span>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-32 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: "92%" }} />
                  </div>
                  <span className="text-sm font-medium">92%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">QA Reviewer</span>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-32 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full" style={{ width: "89%" }} />
                  </div>
                  <span className="text-sm font-medium">89%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Publisher</span>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-32 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 rounded-full" style={{ width: "96%" }} />
                  </div>
                  <span className="text-sm font-medium">96%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg">Recent Optimizations</CardTitle>
            <CardDescription>Latest completed projects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg border">
                <div>
                  <div className="font-medium">testrepo-themostbroken</div>
                  <div className="text-sm text-muted-foreground">SEO + GEO • 2 hours ago</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                    Completed
                  </div>
                  <div className="text-sm font-medium">+92% SEO</div>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg border">
                <div>
                  <div className="font-medium">ecommerce-platform</div>
                  <div className="text-sm text-muted-foreground">GEO Only • 1 day ago</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                    In Progress
                  </div>
                  <div className="text-sm font-medium">+65%</div>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg border">
                <div>
                  <div className="font-medium">portfolio-site</div>
                  <div className="text-sm text-muted-foreground">SEO Only • 3 days ago</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                    Completed
                  </div>
                  <div className="text-sm font-medium">+78% SEO</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}