import { Header } from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jiraal Blog",
  description: "Welcome Jiraal blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="md:w-[70%] w-[90%]  mx-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
