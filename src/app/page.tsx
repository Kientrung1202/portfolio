import MainLayout from "@/components/layout/MainLayout";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import ResumeChatbot from "@/components/layout/Chatbot";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Experience />
      <Skills />
      <ResumeChatbot />
    </MainLayout>
  );
}
