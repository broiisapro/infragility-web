"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Send, Github, Globe, Target, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

type FormData = {
  repositoryUrl: string;
  optimizationType: "seo" | "geo" | "both";
  priority: "normal" | "high" | "urgent";
  notes: string;
  requirements: {
    metaTags: boolean;
    structuredData: boolean;
    performance: boolean;
    accessibility: boolean;
    localization: boolean;
    analytics: boolean;
  };
};

const initialFormData: FormData = {
  repositoryUrl: "",
  optimizationType: "both",
  priority: "normal",
  notes: "",
  requirements: {
    metaTags: true,
    structuredData: true,
    performance: true,
    accessibility: true,
    localization: false,
    analytics: false,
  },
};

export default function OptimizationForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData(initialFormData);
    }, 3000);
  };

  const handleInputChange = (
    field: keyof FormData,
    value: string | FormData["optimizationType"] | FormData["priority"]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleRequirementChange = (requirement: keyof FormData["requirements"]) => {
    setFormData((prev) => ({
      ...prev,
      requirements: {
        ...prev.requirements,
        [requirement]: !prev.requirements[requirement],
      },
    }));
  };

  const priorityConfig = {
    normal: { color: "bg-blue-500", label: "Normal (48h)" },
    high: { color: "bg-amber-500", label: "High (24h)" },
    urgent: { color: "bg-red-500", label: "Urgent (12h)" },
  };

  return (
    <div>
      {submitted ? (
        <div className="rounded-lg border border-green-500 bg-green-500/10 p-6 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
            <Send className="h-6 w-6 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="mb-2 text-lg font-semibold">Request Submitted!</h3>
          <p className="text-muted-foreground">
            Your SEO/GEO optimization request has been received. Our CEO agent will dispatch the specialist team immediately.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="repositoryUrl" className="mb-2 flex items-center gap-2">
                <Github className="h-4 w-4" />
                GitHub Repository URL
              </Label>
              <Input
                id="repositoryUrl"
                placeholder="https://github.com/username/repository"
                value={formData.repositoryUrl}
                onChange={(e) => handleInputChange("repositoryUrl", e.target.value)}
                required
                className="font-mono"
              />
              <p className="mt-1 text-sm text-muted-foreground">
                Public repository URL. Our agents will clone and analyze it.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label className="mb-3 flex items-center gap-2">
                    <Target className="h-4 w-4" />
                    Optimization Type
                  </Label>
                  <RadioGroup
                    value={formData.optimizationType}
                    onValueChange={(value: FormData["optimizationType"]) =>
                      handleInputChange("optimizationType", value)
                    }
                    className="space-y-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="seo" id="seo" />
                      <Label htmlFor="seo" className="cursor-pointer">
                        SEO Only
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="geo" id="geo" />
                      <Label htmlFor="geo" className="cursor-pointer">
                        GEO Only
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="both" id="both" />
                      <Label htmlFor="both" className="cursor-pointer">
                        SEO + GEO (Recommended)
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="mb-3 flex items-center gap-2">
                    <Zap className="h-4 w-4" />
                    Priority Level
                  </Label>
                  <div className="space-y-2">
                    {Object.entries(priorityConfig).map(([key, config]) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() =>
                          handleInputChange("priority", key as FormData["priority"])
                        }
                        className={cn(
                          "flex w-full items-center justify-between rounded-lg border p-3 transition-colors",
                          formData.priority === key
                            ? "border-primary bg-primary/5"
                            : "hover:bg-accent"
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={cn("h-3 w-3 rounded-full", config.color)}
                          />
                          <span className="font-medium">{config.label}</span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {key === "normal" && "$499"}
                          {key === "high" && "$799"}
                          {key === "urgent" && "$1299"}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label className="mb-3 flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    Requirements
                  </Label>
                  <div className="space-y-3">
                    {Object.entries(formData.requirements).map(([key, value]) => (
                      <div key={key} className="flex items-center space-x-2">
                        <Checkbox
                          id={key}
                          checked={value}
                          onCheckedChange={() =>
                            handleRequirementChange(
                              key as keyof FormData["requirements"]
                            )
                          }
                        />
                        <Label
                          htmlFor={key}
                          className="cursor-pointer text-sm font-normal"
                        >
                          {key
                            .replace(/([A-Z])/g, " $1")
                            .replace(/^./, (str) => str.toUpperCase())}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    placeholder="Specific requirements, target keywords, geographic focus, etc."
                    value={formData.notes}
                    onChange={(e) => handleInputChange("notes", e.target.value)}
                    className="min-h-[100px]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border bg-muted/30 p-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold">Estimated Delivery</h4>
                <p className="text-sm text-muted-foreground">
                  {priorityConfig[formData.priority].label} • Includes full pipeline
                </p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">
                  {formData.priority === "normal" && "$499"}
                  {formData.priority === "high" && "$799"}
                  {formData.priority === "urgent" && "$1299"}
                </div>
                <div className="text-sm text-muted-foreground">One-time fee</div>
              </div>
            </div>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting || !formData.repositoryUrl}
            className="w-full bg-gradient-to-r from-blue-600 to-teal-400 hover:from-blue-700 hover:to-teal-500"
          >
            {isSubmitting ? (
              <>
                <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                Processing...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Submit Optimization Request
              </>
            )}
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            By submitting, you agree to our terms. Our specialist agents will
            handle the entire optimization pipeline automatically.
          </p>
        </form>
      )}
    </div>
  );
}