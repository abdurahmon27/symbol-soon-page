"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MinecraftBackground } from "./minecraft-background";
import Image from "next/image";

export default function ComingSoonPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [typewriterText, setTypewriterText] = useState("");
  const fullText = "SOMETHING EPIC IS LOADING...";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypewriterText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <MinecraftBackground />
      </div>

      <div className="absolute inset-0 bg-white/80 z-10" />

      <div className="text-center space-y-8 max-w-2xl mx-auto relative z-20">
        <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <Image
            src={"/logo.png"}
            width={500}
            height={250}
            className="w-auto h-[150px]"
            alt="symbol.uz"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-7xl font-mono font-bold tracking-wider pixel-text overflow-hidden">
            <span
              className="inline-block animate-slide-in-left"
              style={{ animationDelay: "0.4s" }}
            >
              C
            </span>
            <span
              className="inline-block animate-slide-in-left"
              style={{ animationDelay: "0.5s" }}
            >
              O
            </span>
            <span
              className="inline-block animate-slide-in-left"
              style={{ animationDelay: "0.6s" }}
            >
              M
            </span>
            <span
              className="inline-block animate-slide-in-left"
              style={{ animationDelay: "0.7s" }}
            >
              I
            </span>
            <span
              className="inline-block animate-slide-in-left"
              style={{ animationDelay: "0.8s" }}
            >
              N
            </span>
            <span
              className="inline-block animate-slide-in-left"
              style={{ animationDelay: "0.9s" }}
            >
              G
            </span>
          </h1>
          <h1 className="text-4xl md:text-7xl font-mono font-bold tracking-wider pixel-text overflow-hidden">
            <span
              className="inline-block animate-slide-in-right"
              style={{ animationDelay: "1.0s" }}
            >
              S
            </span>
            <span
              className="inline-block animate-slide-in-right"
              style={{ animationDelay: "1.1s" }}
            >
              O
            </span>
            <span
              className="inline-block animate-slide-in-right"
              style={{ animationDelay: "1.2s" }}
            >
              O
            </span>
            <span
              className="inline-block animate-slide-in-right"
              style={{ animationDelay: "1.3s" }}
            >
              N
            </span>
          </h1>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: "1.5s" }}>
          <p className="text-sm md:text-base font-mono font-medium tracking-wide text-black/70 max-w-md mx-auto pixel-text min-h-[3rem] flex flex-col items-center justify-center">
            <span className="typewriter-cursor">
              {typewriterText}
              <span className="animate-blink">|</span>
            </span>
            <Link href={"https://t.me/symbol.uz"}>
              <span
                className="mt-2 animate-fade-in"
                style={{ animationDelay: "3s" }}
              >
                TELEGRAM: @symbol_uz
              </span>
            </Link>
          </p>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in-up z-20"
        style={{ animationDelay: "2.4s" }}
      >
        <p className="text-xs font-mono tracking-widest text-black/40 hover:text-black/60 transition-colors duration-300">
          © 2025 — SYMBOL.UZ
        </p>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700;800&display=swap");

        .pixel-text {
          font-family: "JetBrains Mono", "Courier New", monospace;
          text-shadow: 2px 0 0 currentColor, -2px 0 0 currentColor,
            0 2px 0 currentColor, 0 -2px 0 currentColor, 2px 2px 0 currentColor,
            -2px -2px 0 currentColor, 2px -2px 0 currentColor,
            -2px 2px 0 currentColor;
          image-rendering: pixelated;
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
        }

        .pixel-border {
          border: 4px solid black;
          image-rendering: pixelated;
        }

        .pixel-dot {
          image-rendering: pixelated;
        }

        /* Text slide animations */
        @keyframes slide-in-left {
          0% {
            transform: translateX(-100px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slide-in-right {
          0% {
            transform: translateX(100px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.6s ease-out forwards;
          opacity: 0;
        }

        /* Gentle animations */
        @keyframes gentle-pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes pixel-pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }

        @keyframes gentle-bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        .animate-gentle-pulse {
          animation: gentle-pulse 4s ease-in-out infinite;
        }
        .animate-pixel-pulse {
          animation: pixel-pulse 2s ease-in-out infinite;
        }
        .animate-gentle-bounce {
          animation: gentle-bounce 3s ease-in-out infinite;
        }

        /* Typewriter cursor */
        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }

        .animate-blink {
          animation: blink 1s infinite;
        }

        /* Enhanced progress animation */
        @keyframes progress-wave {
          0% {
            width: 0%;
            transform: translateX(0);
          }
          50% {
            width: 70%;
          }
          100% {
            width: 0%;
            transform: translateX(100%);
          }
        }

        .animate-progress-wave {
          animation: progress-wave 3s ease-in-out infinite;
        }

        /* Success animations */
        @keyframes success-bounce {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes success-pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.7;
          }
        }

        .animate-success-bounce {
          animation: success-bounce 0.6s ease-out;
        }
        .animate-success-pulse {
          animation: success-pulse 1.5s ease-in-out infinite;
        }

        /* Base animations */
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }

        /* Enhanced form styling */
        .pixel-button {
          font-family: "JetBrains Mono", "Courier New", monospace !important;
          font-weight: 700 !important;
          border: 3px solid black !important;
          image-rendering: pixelated;
          transform-origin: center;
        }

        .pixel-input {
          font-family: "JetBrains Mono", "Courier New", monospace !important;
          border: 3px solid rgba(0, 0, 0, 0.2) !important;
          image-rendering: pixelated;
          transform-origin: center;
        }

        .pixel-input:focus {
          border: 3px solid black !important;
          box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
}
