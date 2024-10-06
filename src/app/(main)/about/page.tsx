import AboutCart from "@/components/about/AboutCart";
import ServicesCart from "@/components/ServicesCart";
import TeamMembers from "@/components/TeamMembers/TeamMembers";
import TitlePage from "@/components/TitlePage";
import { AboutData, historyData } from "@/lib/data";
import React from "react";

const page = () => {
  return (
    <div>
      <TitlePage title="About Us" breadcrumb="About" />

      <div className="w-[90%] mx-auto  mt-16">
        {AboutData.map((item, i) => (
          <div key={i}>
            <ServicesCart
              image={item.image}
              title={item.title}
              description={item.description}
              rotate
            />
          </div>
        ))}
      </div>

      <div className="relative">
        {historyData.map((item, i) => (
          <div key={i} className="mt-16 w-[90%] mx-auto ">
            <AboutCart
              image={item.image}
              title={item.title}
              description={item.description}
            />
          </div>
        ))}

        <div className="absolute top-[50%] -translate-y-[50%] -z-10 w-full h-[400px] bg-blue"></div>
      </div>

      <TeamMembers />
    </div>
  );
};

export default page;
