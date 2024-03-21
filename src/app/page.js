"use client";

import Footer from "./components/Footer";
import Hero from "./components/Hero.jsx";
import Nav from "./components/Nav.jsx";
import GraphSection from "./components/graphSection.jsx";
import CardSection from "./components/cardSection.jsx";
import CommSection from "./components/CommSection";
import EcoCard from "./components/ecoCard";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <GraphSection />
      <CardSection />
      <CommSection />
      <EcoCard />
      <Footer />
    </>
  );
}
