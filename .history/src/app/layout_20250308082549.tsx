import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-gray-900 text-white">
        <Header />
        <main className="container mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}