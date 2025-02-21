import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Grace Adegunle Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="scroll-smooth scroll-mt-20"
      suppressHydrationWarning
    >
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-black dark:text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
