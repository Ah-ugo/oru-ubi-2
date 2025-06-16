import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import WhyWeExist from '@/components/sections/WhyWeExist';
import WhatWereBuilding from '@/components/sections/WhatWereBuilding';
import WhoThisIsFor from '@/components/sections/WhoThisIsFor';
import JoinWaitlist from '@/components/sections/JoinWaitlist';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="vision">
        <WhyWeExist />
      </div>
      <div id="building">
        <WhatWereBuilding />
      </div>
      <WhoThisIsFor />
      <div id="waitlist">
        <JoinWaitlist />
      </div>
      <Footer />
    </main>
  );
}