import "../globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Form Layout",
  description: "Introduction to next js",
};

export default function FormLayout({ children }) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
