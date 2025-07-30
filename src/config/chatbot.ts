// Chatbot configuration
export const chatbotConfig = {
  baseUrl: process.env.NEXT_PUBLIC_CHATBOT_BASE_URL || "http://localhost:4111",
  agentEndpoint: process.env.NEXT_PUBLIC_CHATBOT_AGENT_ENDPOINT || "resumeAgent",
  defaultClassName: "fixed bottom-4 right-4 w-96 !h-[590px] z-50",
} as const;

// Type definitions for better type safety
export type ChatbotConfig = typeof chatbotConfig; 