import React from "react";
import MoreButton from "../MoreButton ";
import { teamData } from "@/lib/data";
import TeamMember from "./TeamMember";
import Title from "../Title";

const TeamMembers = () => {
  return (
    <div className="w-[90%] mx-auto">
      <Title title="Our Distinguished Dental Specialists" />
      <div className=" grid grid-cols-2 md:grid-cols-4 gap-7 ">
        {teamData.map((item, i) => (
          <div key={i}>
            <TeamMember team={item} />
          </div>
        ))}
      </div>
      <div className="mt-5">
        {teamData.length > 8 && <MoreButton href="/TeamMembers" />}
      </div>
    </div>
  );
};

export default TeamMembers;
