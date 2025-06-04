import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SectionHeader from "../Headers/SectionHeader";
import TeamCard from "./TeamCard";
import teamData from "./data/teamData";

gsap.registerPlugin(ScrollTrigger);

const TheTeamSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".team-card");

    gsap.fromTo(
      cards,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <>
      <SectionHeader
        badgeText="THE TEAM"
        badgeMinWidth="min-w-[91px]"
        headingText="Meet our team of experts"
      />
      <div
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]"
      >
        {teamData.map((member, index) => (
          <TeamCard
            key={index}
            image={member.imageUrl}
            title={member.title}
            position={member.position}
            email={member.email}
            className="team-card"  // penting agar GSAP bisa target elemen
          />
        ))}
      </div>
    </>
  );
};

export default TheTeamSection;
