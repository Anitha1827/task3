import Header from "@/app/components/Header";
import Tabcontent from "@/app/components/Tabcontent";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <Tabcontent />
      <Contact />
      <Footer />
    </main>
  );
}
