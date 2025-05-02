"use client";

import { portfolioData } from "@/data/portfolio";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  const { personalInfo } = portfolioData;

  return (
    <footer className="w-full border-t bg-background" id="contact">
      <div className="container mx-auto max-w-6xl px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4 text-primary">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>{personalInfo.contact.mobile}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>{personalInfo.contact.email}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4 text-primary">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              <a href="#home" className="hover:underline">Home</a>
              <a href="#about" className="hover:underline">About</a>
              <a href="#experience" className="hover:underline">Experience</a>
              <a href="#skills" className="hover:underline">Skills</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 