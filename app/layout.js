import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cleanenenrgy Cafe",
  description:
    "We are led by our vision to encourage transition to clean and renewable energy through celebrating the creativity of the African people in transforming Africa into a brighter and cleaner continent.",
  logo: "../public/energy1.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <div className="bg-white hidden lg:block sticky top-0 z-10">
            <Navbar />
          </div>
          <div className="lg:hidden bg-white sticky top-0 z-10">
            <Menu />
          </div>

          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
