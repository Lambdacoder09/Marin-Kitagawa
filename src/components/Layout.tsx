import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-100 to-red-50">
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
