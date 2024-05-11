import "./globals.css";
import { Quicksand } from "next/font/google";

const font = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "Unnamed",
  description: "Unnamed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
          {children}
      </body>
    </html>
  );
}
