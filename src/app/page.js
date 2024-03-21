"use client";

import Footer from "./components/Footer";
import Hero from "./components/Hero.jsx";
import Nav from "./components/Nav.jsx";
import GraphSection from "./components/graphSection.jsx";
import CardSection from "./components/CardSection";
import CommSection from "./components/CommSection";
import EcoCard from "./components/EcoCard";
import FooterAbout from "./components/FooterAbout";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <GraphSection />
      <CardSection />
      <CommSection />
      <EcoCard />
      <FooterAbout />
      <Footer />
    </>
  );
}
