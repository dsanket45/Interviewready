import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Experience-level SEO pages for Java
      {
        source: "/java/fresher-interview-questions",
        destination: "/java/experience/fresher-interview-questions",
      },
      {
        source: "/java/1-2-years-experience-interview-questions",
        destination:
          "/java/experience/1-2-years-experience-interview-questions",
      },
      {
        source: "/java/2-4-years-experience-interview-questions",
        destination:
          "/java/experience/2-4-years-experience-interview-questions",
      },
      {
        source: "/java/4-7-years-experience-interview-questions",
        destination:
          "/java/experience/4-7-years-experience-interview-questions",
      },
      {
        source: "/java/senior-developer-interview-questions",
        destination: "/java/experience/senior-developer-interview-questions",
      },
      // Experience-level SEO pages for Spring Boot
      {
        source: "/spring-boot/fresher-interview-questions",
        destination:
          "/spring-boot/experience/fresher-interview-questions",
      },
      {
        source: "/spring-boot/2-4-years-experience-interview-questions",
        destination:
          "/spring-boot/experience/2-4-years-experience-interview-questions",
      },
      {
        source: "/spring-boot/senior-developer-interview-questions",
        destination:
          "/spring-boot/experience/senior-developer-interview-questions",
      },
    ];
  },
};

export default nextConfig;

