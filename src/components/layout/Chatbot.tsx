"use client";

import { ChatInterface } from "@kientrung1202/mastra-chatbot";
import { useState } from "react";
import "@kientrung1202/mastra-chatbot/style.css";
import { chatbotConfig } from "@/config/chatbot";

function ResumeChatbot() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="relative bg-gray-50 rounded-lg p-4 mb-8">
      <ChatInterface
        baseUrl={chatbotConfig.baseUrl}
        isOpen={isOpen}
        onToggle={setIsOpen}
        showToggleButton={true}
        agentEndpoint={chatbotConfig.agentEndpoint}
        className={isOpen ? chatbotConfig.defaultClassName : ""}
      />
    </div>
  );
}

export default ResumeChatbot;
