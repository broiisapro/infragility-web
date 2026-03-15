"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, Bot, User, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type Message = {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
};

const initialMessages: Message[] = [
  {
    id: "1",
    content: "Welcome to Infragility Labs. I'm your CEO agent. How can I help with your SEO/GEO optimization today?",
    role: "assistant",
    timestamp: new Date(Date.now() - 3600000),
  },
  {
    id: "2",
    content: "I need SEO optimization for my React repository.",
    role: "user",
    timestamp: new Date(Date.now() - 1800000),
  },
  {
    id: "3",
    content: "Perfect. Please share the GitHub repository URL. I'll dispatch our specialist team to analyze and optimize it immediately.",
    role: "assistant",
    timestamp: new Date(Date.now() - 900000),
  },
];

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "I'll analyze your repository and dispatch our optimization team immediately.",
        "Our specialist agents are reviewing your codebase for SEO improvements.",
        "Perfect. I'm initiating the SEO/GEO optimization pipeline now.",
        "Repository received. Starting comprehensive SEO audit.",
        "Our team will handle everything from analysis to deployment.",
      ];

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: responses[Math.floor(Math.random() * responses.length)],
        role: "assistant",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="flex flex-col h-[500px]">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-teal-400 flex items-center justify-center">
          <Bot className="h-5 w-5 text-white" />
        </div>
        <div>
          <h3 className="font-semibold">CEO Agent</h3>
          <p className="text-sm text-muted-foreground">AI-powered SEO/GEO specialist</p>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-green-500" />
          <span className="text-sm text-muted-foreground">Online</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto rounded-lg border bg-muted/30 p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex gap-3",
              message.role === "user" ? "flex-row-reverse" : "flex-row"
            )}
          >
            <div
              className={cn(
                "h-8 w-8 rounded-full flex items-center justify-center",
                message.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-gradient-to-br from-blue-600 to-teal-400 text-white"
              )}
            >
              {message.role === "user" ? (
                <User className="h-4 w-4" />
              ) : (
                <Bot className="h-4 w-4" />
              )}
            </div>
            <div
              className={cn(
                "max-w-[70%] rounded-lg px-4 py-2",
                message.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-background border"
              )}
            >
              <p className="text-sm">{message.content}</p>
              <p className="text-xs opacity-70 mt-1">
                {formatTime(message.timestamp)}
              </p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-600 to-teal-400 flex items-center justify-center">
              <Bot className="h-4 w-4 text-white" />
            </div>
            <div className="bg-background border rounded-lg px-4 py-2">
              <div className="flex gap-1">
                <div className="h-2 w-2 rounded-full bg-blue-600 animate-bounce" />
                <div className="h-2 w-2 rounded-full bg-blue-600 animate-bounce delay-100" />
                <div className="h-2 w-2 rounded-full bg-blue-600 animate-bounce delay-200" />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="mt-4">
        <div className="flex gap-2">
          <Textarea
            placeholder="Type your message here... (e.g., 'Optimize https://github.com/user/repo')"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="min-h-[80px] resize-none"
          />
          <Button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="h-auto bg-gradient-to-r from-blue-600 to-teal-400 hover:from-blue-700 hover:to-teal-500"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setInput("Optimize https://github.com/example/react-repo")}
            className="text-xs"
          >
            <Sparkles className="h-3 w-3 mr-1" />
            Example Request
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setInput("What's the status of my project?")}
            className="text-xs"
          >
            Status Check
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setInput("Need GEO optimization for local business")}
            className="text-xs"
          >
            GEO Request
          </Button>
        </div>
      </div>
    </div>
  );
}