"use client";

import Footer from "./components/Footer";
import Hero from "./components/Hero.jsx";
import Nav from "./components/Nav.jsx";
import GraphSection from "./components/graphSection.jsx";
import CardSection from "./components/CardSection.jsx";
import CommSection from "./components/CommSection.jsx";
import EcoCard from "./components/EcoCard.jsx";
import FooterAbout from "./components/FooterAbout.jsx";

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
