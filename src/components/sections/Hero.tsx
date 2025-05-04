"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import {
  GitBranch,
  Cloud,
  Code2,
  Boxes
} from "lucide-react";
import Image from "next/image";
import React from "react";

const icons = [
  { src: "/icons/typescript.svg", alt: "TypeScript", delay: 0 },
  { src: "/icons/nextjs.svg", alt: "Next.js", delay: 2 },
  { src: "/icons/nestjs.svg", alt: "NestJS", delay: 4 },
  { src: "/icons/tailwind.svg", alt: "Tailwind CSS", delay: 5 },
  { src: "/icons/angular.svg", alt: "Angular", delay: 6 },
  { src: "/icons/nodejs.svg", alt: "Node.js", delay: 7 },
  { src: "/icons/mongodb.svg", alt: "MongoDB", delay: 9 },
  { src: "/icons/graphql.svg", alt: "GraphQL", delay: 12 },
  { src: "/icons/django.svg", alt: "Django", delay: 13 },
];

type RoleType = 'Software Engineer' | 'Data Engineer';

// Calculate YOE based on roles
const calculateYOE = (roles: RoleType[]) => {
  const now = new Date();
  const experienceDates: Record<RoleType, Date> = {
    'Software Engineer': new Date('2022-02'), // Assuming started Software Engineer in Jan 2021
    'Data Engineer': new Date('2024-09'),   // Assuming started Data ETL in June 2022
  };

  const yearsMap = roles.reduce((acc, role) => {
    const startDate = experienceDates[role];
    const diffTime = Math.abs(now.getTime() - startDate.getTime());
    const years = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25));
    acc[role] = Math.max(years, 1); // Ensure minimum 1 year
    return acc;
  }, {} as Record<RoleType, number>);

  return yearsMap;
};

const FloatingIcon = ({ src, alt, initialX, initialY, delay }: { src: string; alt: string; initialX: number; initialY: number; delay: number }) => {
  const moveRange = Math.random() * 100 + 50; // Random movement range between 50 and 150 pixels

  return (
    <motion.div
      initial={{ x: initialX, y: initialY, opacity: 0 }}
      animate={{
        x: [
          initialX,
          initialX + moveRange,
          initialX - moveRange,
          initialX
        ],
        y: [
          initialY,
          initialY - moveRange,
          initialY + moveRange,
          initialY
        ],
        opacity: [0.3, 0.8, 0.3],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: Math.random() * 10 + 15, // Random duration between 15-25 seconds
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
        delay,
      }}
      className="absolute pointer-events-none"
    >
      <Image
        src={src}
        alt={alt}
        width={50}
        height={50}
        className="opacity-70 dark:opacity-50"
      />
    </motion.div>
  );
};

const FloatingIcons = () => {
  const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 });
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden">
      {icons.map((icon) => {
        // Generate random positions within the viewport
        const randomX = Math.random() * (dimensions.width || 1000);
        const randomY = Math.random() * (dimensions.height || 800);

        return (
          <FloatingIcon
            key={icon.alt}
            src={icon.src}
            alt={icon.alt}
            initialX={randomX}
            initialY={randomY}
            delay={icon.delay * 0.5}
          />
        );
      })}
    </div>
  );
};

const FloatingCard = ({
  children,
  className = "",
  initialX = 0,
  initialY = 0
}: {
  children: React.ReactNode;
  className?: string;
  initialX?: number;
  initialY?: number;
}) => (
  <motion.div
    initial={{ x: initialX, y: initialY, opacity: 0 }}
    animate={{
      x: initialX,
      y: initialY,
      opacity: 1,
      rotate: [0, -3, 3, 0],
    }}
    transition={{
      opacity: { duration: 0.5 },
      rotate: {
        repeat: Infinity,
        duration: 5,
        ease: "easeInOut"
      },
      y: {
        repeat: Infinity,
        duration: 3,
        ease: "easeInOut",
        repeatType: "reverse"
      }
    }}
    className={`absolute backdrop-blur-sm bg-background/50 border rounded-xl p-4 shadow-lg ${className}`}
  >
    {children}
  </motion.div>
);

export default function Hero() {
  const { personalInfo } = portfolioData;
  const yearsOfExperience = React.useMemo(() => 
    calculateYOE(['Software Engineer', 'Data Engineer']), 
    []
  );

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden snap-start"
    >
      <FloatingIcons />
      <div className="w-full max-w-7xl px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8 text-left"
        >
          <div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
              {personalInfo.name}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mt-2">
              {personalInfo.role}
            </p>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground">
            <Cloud className="w-5 h-5" />
            <span>Cloud Native</span>
            <GitBranch className="w-5 h-5 ml-2" />
            <span>Clean Code</span>
          </div>

          <div className="space-y-4">
            <p className="text-muted-foreground">
              Passionate about building scalable systems and creating impactful solutions
              through modern technologies and best practices.
            </p>
          </div>

          <motion.div
            className="flex gap-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            <Button asChild className="group">
              <a href="#contact" className="flex items-center gap-2">
                Get in touch
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  →
                </motion.span>
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#experience">View my work</a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center md:justify-end relative"
        >
          <Image
            src="/fullstack.png"
            alt="Hero Image"
            width={400}
            height={500}
            className="rounded-lg"
            priority
          />

          {/* Floating Cards */}
          <FloatingCard
            initialX={0}
            initialY={-100}
            className="left-[5%] hidden md:block"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Software Engineer</h4>
                <p className="text-sm text-muted-foreground">{yearsOfExperience['Software Engineer']}+ Years</p>
              </div>
            </div>
          </FloatingCard>

          <FloatingCard
            initialX={0}
            initialY={-150}
            className="right-[5%] hidden md:block"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Boxes className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Data Engineer</h4>
                <p className="text-sm text-muted-foreground">
                  {yearsOfExperience['Data Engineer']}+ Years (ETL processing)
                </p>
              </div>
            </div>
          </FloatingCard>
        </motion.div>
      </div>
    </section>
  );
}