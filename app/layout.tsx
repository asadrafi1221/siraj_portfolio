import "./globals.css";
import { Inter, Newsreader, JetBrains_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import ClientLayout from "@/components/ClientLayout";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-inter",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jetbrains",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${newsreader.variable} ${jetbrainsMono.variable}`}
      style={{ backgroundColor: "#020410", color: "#ffffff" }}
    >
      <body className="antialiased">
        <div className="noise-overlay" />
        {/* We wrap everything in the navigation state provider */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
