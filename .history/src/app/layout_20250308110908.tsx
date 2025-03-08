import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-gray-900 text-white" suppressHydrationWarning>
        <div>
        <Header />
        <main className="container mx-auto p-4">{children}</main>
        <Footer />
        </div>
      </body>
    </html>
  );
}