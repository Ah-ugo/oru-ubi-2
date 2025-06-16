import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import WhyWeExist from "@/components/sections/WhyWeExist";
import WhatWereBuilding from "@/components/sections/WhatWereBuilding";
import WhoThisIsFor from "@/components/sections/WhoThisIsFor";
import JoinWaitlist from "@/components/sections/JoinWaitlist";
import Footer from "@/components/sections/Footer";
import FarmerStoriesSection from "@/components/sections/FarmerStories";
import CrisisSection from "@/components/sections/CrisisSection";
import SolutionJourney from "@/components/sections/SolutionJourney";
import TestimonialsSection from "@/components/sections/TestimonialSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <div id="hero">
        <HeroSection />
      </div>

      <div id="stories">
        <FarmerStoriesSection />{" "}
      </div>
      <div id="vision">
        <WhyWeExist />
      </div>

      <div id="vision">
        <CrisisSection />
      </div>

      <div id="building">
        <WhatWereBuilding />
      </div>
      {/* <div id="stories">
        <TestimonialsSection />
      </div> */}
      <WhoThisIsFor />
      <div id="waitlist">
        <JoinWaitlist />
      </div>
      <Footer />
    </main>
  );
}
