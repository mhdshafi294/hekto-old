import "./globals.css";
import { Josefin_Sans } from "next/font/google";
import Navbar from "./components/navbar/Navbar";

const josefin = Josefin_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Hekto",
  description: "E-Commerce",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={josefin.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
