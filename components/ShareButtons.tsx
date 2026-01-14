
import React, { useState } from 'react';
import { Share2, Link as LinkIcon, Facebook, Twitter, Send, Check } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
  url: string;
  className?: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ title, url, className = "" }) => {
  const [copied, setCopied] = useState(false);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareNative = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    }
  };

  const platforms = [
    {
      name: 'Facebook',
      icon: <Facebook className="w-4 h-4" />,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-4 h-4" />,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: 'bg-slate-900 hover:bg-slate-800'
    },
    {
      name: 'WhatsApp',
      icon: <Send className="w-4 h-4" />,
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      color: 'bg-green-500 hover:bg-green-600'
    }
  ];

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Share this with others</span>
      <div className="flex flex-wrap gap-2">
        {platforms.map((p) => (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${p.color} text-white p-3 rounded-xl transition-all shadow-lg shadow-black/5 hover:scale-110 active:scale-95`}
            title={`Share on ${p.name}`}
          >
            {p.icon}
          </a>
        ))}
        
        <button
          onClick={copyToClipboard}
          className="bg-teal-50 text-teal-600 p-3 rounded-xl transition-all border border-teal-100 hover:bg-teal-100 shadow-lg shadow-teal-600/5 hover:scale-110 active:scale-95 relative"
          title="Copy Link"
        >
          {copied ? <Check className="w-4 h-4" /> : <LinkIcon className="w-4 h-4" />}
          {copied && (
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-1 px-2 rounded whitespace-nowrap animate-bounce">
              Link Copied!
            </span>
          )}
        </button>

        {navigator.share && (
          <button
            onClick={shareNative}
            className="bg-slate-100 text-slate-600 p-3 rounded-xl transition-all border border-slate-200 hover:bg-slate-200 shadow-lg shadow-black/5 hover:scale-110 active:scale-95"
            title="More Options"
          >
            <Share2 className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ShareButtons;
