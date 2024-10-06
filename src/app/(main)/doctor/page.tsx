import ServicesCart from "@/components/ServicesCart";
import TeamMembers from "@/components/TeamMembers/TeamMembers";
import TitlePage from "@/components/TitlePage";
import { doctorTitleData } from "@/lib/data";
import React from "react";

const page = () => {
  return (
    <div>
      <TitlePage title="Our Doctor" breadcrumb="Doctor" />

      <div className="w-[90%] mx-auto  mt-16">
        {doctorTitleData.map((item, i) => (
          <div key={i}>
            <ServicesCart
              image={item.image}
              title={item.title}
              description={item.description}
            />
          </div>
        ))}
      </div>

      <TeamMembers />
    </div>
  );
};

export default page;
