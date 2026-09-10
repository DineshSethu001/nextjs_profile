import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function PortfolioLayout({ children }) {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </>
  );
}