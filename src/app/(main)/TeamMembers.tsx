import MoreButton from "@/components/MoreButton ";
import TeamMember from "@/components/TeamMembers/TeamMember";
import Title from "@/components/Title";
import { teamData } from "@/lib/data";
import React from "react";

export default function TeamMembers() {
  return (
    <div className="w-[90%] mx-auto mt-16 ">
      <Title title="Our Distinguished Dental Specialists" />
      <div className=" grid grid-cols-2 md:grid-cols-4 gap-7 ">
        {teamData.map((item, i) => (
          <div className=" cursor-pointer" key={i}>
            <TeamMember team={item} />
          </div>
        ))}
      </div>
      <div className="mt-5">
        {teamData.length > 8 && <MoreButton href="/TeamMembers" />}
      </div>
    </div>
  );
}
