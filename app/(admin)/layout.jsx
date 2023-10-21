import Sidebar from "./_components/Sidebar";
import "../globals.css";
export const metadata = {
  title: "Next App",
  description: "Introduction to next js",
};

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body className="m-0">
        <header className="bg-yellow-50 p-5">
          <h1>This is Admin Layout</h1>
        </header>
        <div className="flex h-[calc(100vh-68px)]">
          <Sidebar />
          <main className="bg-red-700 mt-0 mb-0 mr-0 w-full ml-[300px] p-0 max-w-none">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
