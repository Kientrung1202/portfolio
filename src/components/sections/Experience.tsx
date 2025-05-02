"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useRef } from "react";

export default function Experience() {
  const { experience } = portfolioData;
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="py-16 relative overflow-x-hidden min-h-screen snap-start">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.1 }}
        className="space-y-8"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary">Experience</h2>
          <p className="text-muted-foreground mt-2">My professional journey</p>
        </div>

        <div ref={containerRef} className="relative space-y-8 pt-8">
          {/* Vertical line - only visible on desktop */}
          <motion.div
            className="absolute left-[50%] top-0 h-full w-[2px] bg-border origin-top hidden md:block"
            style={{ scaleY: scaleX }}
          />

          {/* Mobile timeline line */}
          <motion.div
            className="absolute left-4 top-0 h-full w-[2px] bg-border origin-top md:hidden"
            style={{ scaleY: scaleX }}
          />

          {experience.map((job, index) => (
            <motion.div
              key={job.company}
              initial={{ 
                opacity: 0,
                scale: 0.95,
                y: 20
              }}
              whileInView={{ 
                opacity: 1,
                scale: 1,
                y: 0
              }}
              transition={{ 
                duration: 0.4,
                delay: index * 0.1
              }}
              viewport={{ 
                once: true,
                amount: 0.2
              }}
              className={`relative flex items-start ${
                // Desktop layout
                index % 2 === 0 
                  ? "md:justify-start" 
                  : "md:justify-end"
              } gap-4 md:gap-8`}
            >
              {/* Timeline dot - desktop */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="absolute left-[50%] w-4 h-4 rounded-full bg-primary transform -translate-x-1/2 group-hover:scale-150 transition-transform hidden md:block"
              />

              {/* Timeline dot - mobile */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="absolute left-4 w-3 h-3 rounded-full bg-primary transform -translate-x-1/2 mt-8 md:hidden"
              />

              {/* Content */}
              <Card className={`
                w-[calc(100%-2rem)] ml-8
                md:w-[calc(50%-2rem)] md:ml-0 md:mr-0
                ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}
                transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg
              `}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row justify-between items-start gap-2">
                    <div>
                      <CardTitle>{job.company}</CardTitle>
                      <CardDescription>{job.role}</CardDescription>
                    </div>
                    <div className="text-left md:text-right">
                      <div className="text-sm font-medium">{job.location}</div>
                      <div className="text-sm text-muted-foreground">{job.period}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {job.projects.map((project) => (
                      <motion.div
                        key={project.name}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="space-y-3"
                      >
                        <h4 className="font-semibold">{project.name}</h4>
                        <p className="text-sm text-muted-foreground">{project.description}</p>
                        
                        <div className="space-y-2">
                          <h5 className="text-sm font-medium">Key Achievements:</h5>
                          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                            {project.specificWork.map((work, i) => (
                              <li key={i}>{work}</li>
                            ))}
                          </ul>
                        </div>

                        {project.techStack && (
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                              <Badge key={tech} variant="secondary">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    ))}

                    {job.architectureAndMethodologies && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="space-y-2"
                      >
                        <h4 className="text-sm font-medium">Methodologies & Architecture:</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.architectureAndMethodologies.map((item) => (
                            <Badge key={item} variant="outline">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 