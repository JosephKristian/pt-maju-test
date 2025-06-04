import React from "react";
import SectionHeader from "../Headers/SectionHeader";
import TeamCard from "./TeamCard";
import teamData from "./data/teamData";


const TheTeamSection = () => {
    return (
        <>
            <SectionHeader
                badgeText="THE TEAM"
                badgeMinWidth="min-w-[91px]"
                headingText="Meet our team of experts"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
                {teamData.map((member, index) => (
                    <TeamCard
                        key={index}
                        image={member.imageUrl}
                        title={member.title}
                        position={member.position}
                        email={member.email}
                    />
                ))}
            </div>

        </>
    )
}

export default TheTeamSection;