import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedVillas from "@/components/FeaturedVillas";
import Testimonials from "@/components/Testimonials";
import ExperiencesSlider from "@/components/ExperiencesSlider";
import CaboMap from "@/components/CaboMap";
import ExperienceDetails from "@/components/ExperienceDetails";
import Footer from "@/components/Footer";
import ReservationBar from "@/components/ReservationBar";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Navbar />

      <main>
        {/* Hero - sticky, stays pinned while content scrolls over it */}
        <div className="relative h-[200vh]">
          <div className="sticky top-0 h-screen z-[1]">
            <Hero />
          </div>
        </div>

        {/* Content sections scroll over the hero - negative margin pulls it up over the hero */}
        <div className="relative z-[100] -mt-[100vh] bg-dark">
          <FeaturedVillas />
          <Testimonials />
          <ExperiencesSlider />
          <CaboMap />
          <ExperienceDetails />
        </div>
      </main>

      <Footer />
      <ReservationBar />
    </>
  );
}
