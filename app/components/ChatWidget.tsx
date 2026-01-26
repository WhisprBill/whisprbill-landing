// app/components/ChatWidget.tsx
"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  // Add welcome message when chat opens for first time
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: "welcome",
          text: "Hey there! 👋 I'm WhisprBot, your AI assistant.\n\nI can help you with:\n✓ Pricing & plans\n✓ Features & capabilities\n✓ GST compliance\n✓ Getting started\n\nWhat would you like to know?",
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
    }
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage.text }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.overloaded) {
          setError(data.error);
          return;
        }
        throw new Error(data.error || "Something went wrong");
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err: any) {
      setError(
        err.message || "Failed to send message. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Convert markdown-style links [text](#anchor) to clickable links
  const renderMessageText = (text: string) => {
    const parts = text.split(/(\[.*?\]\(#.*?\))/g);
    return parts.map((part, index) => {
      const linkMatch = part.match(/\[(.*?)\]\((#.*?)\)/);
      if (linkMatch) {
        return (
          <a
            key={index}
            href={linkMatch[2]}
            className="text-blue-600 hover:text-blue-800 underline"
            onClick={() => setIsOpen(false)}
          >
            {linkMatch[1]}
          </a>
        );
      }
      return part.split("\n").map((line, i) => (
        <span key={`${index}-${i}`}>
          {line}
          {i < part.split("\n").length - 1 && <br />}
        </span>
      ));
    });
  };

  return (
    <>
      {/* Floating Chat Bubble - Responsive */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group z-50"
          aria-label="Open chat"
        >
          <svg
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white group-hover:scale-110 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
          {/* Pulse animation */}
          <span className="absolute w-full h-full rounded-full bg-blue-600 opacity-75 animate-ping"></span>
        </button>
      )}

      {/* Chat Window - Fully Responsive */}
      {isOpen && (
        <div className="fixed inset-4 sm:inset-auto sm:bottom-4 sm:right-4 sm:w-[380px] md:w-96 sm:h-[500px] md:h-[600px] bg-white rounded-2xl sm:rounded-2xl shadow-2xl flex flex-col z-50 border border-gray-200">
          {/* Header - Responsive */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 sm:p-4 rounded-t-2xl flex justify-between items-center shrink-0">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-sm sm:text-base">WhisprBot</h3>
                <p className="text-[10px] sm:text-xs text-white/80">Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 rounded-full p-1.5 sm:p-2 transition-colors shrink-0"
              aria-label="Close chat"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Messages Container - Responsive */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] sm:max-w-[80%] rounded-2xl px-3 py-2 sm:px-4 sm:py-2 ${
                    message.sender === "user"
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                      : "bg-white text-gray-800 shadow-sm border border-gray-200"
                  }`}
                >
                  <p className="text-xs sm:text-sm whitespace-pre-wrap leading-relaxed">
                    {renderMessageText(message.text)}
                  </p>
                  <p
                    className={`text-[10px] sm:text-xs mt-1 ${
                      message.sender === "user"
                        ? "text-white/70"
                        : "text-gray-500"
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}

            {/* Typing Indicator - Responsive */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3 shadow-sm border border-gray-200">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}

            {/* Error Message - Responsive */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-2.5 sm:p-3">
                <p className="text-xs sm:text-sm text-red-800">{error}</p>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area - Responsive */}
          <div className="p-3 sm:p-4 border-t border-gray-200 bg-white rounded-b-2xl shrink-0">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about pricing, features..."
                maxLength={500}
                disabled={isLoading}
                className="flex-1 px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed text-xs sm:text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 sm:p-2.5 rounded-full hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
                aria-label="Send message"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
            <p className="text-[10px] sm:text-xs text-gray-500 mt-1.5 sm:mt-2 text-center">
              {inputValue.length}/500 characters
            </p>
          </div>
        </div>
      )}
    </>
  );
}
