import { Inter } from "next/font/google";
import "./reset.css";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import Header from "./ui/header/header";
import Footer from "./ui/footer/footer";

config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Newspaper",
  description: "News from the world.",
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
