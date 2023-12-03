import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
