import Blog from "./Blog";
import ContactPhone from "./ContactPhone";
import Features from "./Features";
import HeroSection from "./HeroSection";
import Services from "./Services";
import ServicesOverview from "./ServicesOverview";
import TeamMemberPage from "./TeamMember";

export default function Home() {
  return (
    <div className=" mb-5 " >

      <HeroSection />

      <ContactPhone />

      <Features />
      
      <ServicesOverview />

      <Services />

      <TeamMemberPage />

      <Blog />
      
    </div>

  );
}
