import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Music from "./components/Music";
import Tracker from "./components/Tracker";
import Affirmation from "./components/Affirmation";
import Games from "./components/Games";
import AIChat from "./components/AIChat";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Music />
      <Tracker />
      <Affirmation />
      <Games />
      <AIChat />
      <Footer />
    </>
  );
}