// API Client for connecting to the Infragility Bridge Server
// In production, this should point to your actual bridge server URL
// For development: http://localhost:3001/api
// For production: https://your-bridge-server.com/api

const BRIDGE_API_URL = process.env.NEXT_PUBLIC_BRIDGE_API_URL || 'http://localhost:3001/api';
const BRIDGE_WS_URL = process.env.NEXT_PUBLIC_BRIDGE_WS_URL || 'ws://localhost:3001';

export type Message = {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
};

export type OptimizationRequest = {
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

export type Project = {
  id: string;
  name: string;
  repository: string;
  status: "completed" | "in-progress" | "pending" | "failed";
  progress: number;
  lastUpdated: string;
  prUrl?: string;
  previewUrl?: string;
  agent: string;
};

// Send a message to the CEO agent
export async function sendMessage(message: string, sessionKey?: string): Promise<{
  success: boolean;
  message: string;
  response: Message;
}> {
  const response = await fetch(`${BRIDGE_API_URL}/send-message`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message, sessionKey }),
  });

  if (!response.ok) {
    throw new Error(`Failed to send message: ${response.statusText}`);
  }

  return response.json();
}

// Submit an optimization request
export async function submitOptimizationRequest(request: OptimizationRequest): Promise<{
  requestId: string;
  status: string;
  message: string;
  estimatedCompletion: string;
  timestamp: string;
}> {
  const response = await fetch(`${BRIDGE_API_URL}/optimization-request`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw new Error(`Failed to submit optimization request: ${response.statusText}`);
  }

  return response.json();
}

// Get project status
export async function getProjects(): Promise<{ projects: Project[] }> {
  const response = await fetch(`${BRIDGE_API_URL}/projects`);

  if (!response.ok) {
    throw new Error(`Failed to get projects: ${response.statusText}`);
  }

  return response.json();
}

// Get WebSocket info
export async function getWebSocketInfo(): Promise<{
  wsEndpoint: string;
  supportedEvents: string[];
}> {
  const response = await fetch(`${BRIDGE_API_URL}/ws-info`);

  if (!response.ok) {
    throw new Error(`Failed to get WebSocket info: ${response.statusText}`);
  }

  return response.json();
}

// Create WebSocket connection for real-time updates
export function createWebSocketConnection(
  onMessage: (data: any) => void,
  onOpen?: () => void,
  onClose?: () => void,
  onError?: (error: Event) => void
): WebSocket {
  const ws = new WebSocket(BRIDGE_WS_URL);

  ws.onopen = () => {
    console.log('WebSocket connected');
    onOpen?.();
  };

  ws.onmessage = (event) => {
    try {
      const data = JSON.parse(event.data);
      onMessage(data);
    } catch (error) {
      console.error('Failed to parse WebSocket message:', error);
    }
  };

  ws.onclose = () => {
    console.log('WebSocket disconnected');
    onClose?.();
  };

  ws.onerror = (error) => {
    console.error('WebSocket error:', error);
    onError?.(error);
  };

  return ws;
}