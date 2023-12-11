import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./(components)/footer/footer";
import Header from "./(components)/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Doctor Appointment System",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
