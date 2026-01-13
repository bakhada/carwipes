
import React, { useState, useRef, useEffect } from 'react';
import { getCarCareAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIAdvisor: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: "Welcome to the Lab. I'm your detailing specialist. Looking for high-GSM drying towels or pH-neutral cleaners? Tell me your car's needs.",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const aiResponse = await getCarCareAdvice(input);
    const modelMsg: ChatMessage = { role: 'model', text: aiResponse, timestamp: new Date() };
    
    setMessages(prev => [...prev, modelMsg]);
    setIsLoading(false);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <span className="text-brand-primary text-[10px] font-black uppercase tracking-[0.2em] mb-4 block">Neural Detailing Advisor</span>
        <h2 className="text-4xl font-bold font-outfit text-slate-900 mb-4">Smart Detailing <span className="text-brand-primary">Assistant</span></h2>
        <p className="text-slate-500 max-w-lg mx-auto">Get instant product matches for paint correction, interior restoration, and glass clarity.</p>
      </div>

      <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden flex flex-col h-[650px]">
        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-slate-50/50">
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[85%] rounded-[1.5rem] px-6 py-4 shadow-sm ${
                msg.role === 'user' 
                  ? 'bg-brand-primary text-white' 
                  : 'bg-white text-slate-800 border border-slate-100'
              }`}>
                <p className="whitespace-pre-wrap text-sm leading-relaxed font-medium">{msg.text}</p>
                <span className={`text-[9px] mt-2 block font-bold uppercase tracking-widest opacity-40 ${msg.role === 'user' ? 'text-right' : ''}`}>
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white border border-slate-100 rounded-[1.5rem] px-6 py-4 shadow-sm">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse [animation-delay:0.2s]"></div>
                  <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse [animation-delay:0.4s]"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-6 border-t border-slate-100 bg-white">
          <div className="flex gap-3">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="E.g., What is the best cloth for gloss black trim?"
              className="flex-1 px-6 py-4 rounded-2xl border border-slate-100 focus:outline-none focus:ring-4 focus:ring-indigo-50 focus:border-brand-primary transition-all bg-slate-50 font-medium placeholder:text-slate-400"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-brand-primary text-white p-4 rounded-2xl hover:bg-brand-dark transition-all disabled:opacity-50 shadow-lg shadow-indigo-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
          <p className="text-[10px] text-slate-400 mt-4 text-center uppercase tracking-[0.2em] font-black">
            Powered by Gemini AI • Real-time Hardware Analysis
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIAdvisor;