import "../globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
//components

export const metadata = {
  title: "Next App",
  description: "Introduction to next js",
};

export default function FormLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-yellow-50 p-5">
          <h1>This is Form Layout</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
