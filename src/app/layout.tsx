import type { Metadata } from "next";
import { Geist, Geist_Mono, Open_Sans, Lato,Nunito } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";



/* Fonts */
export const geistSans = Geist({variable: "--font-geist-sans", subsets: ["latin"]});
export const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], });
export const openSans = Open_Sans({ variable: "--font-open-sans" })
export const latoLight = Lato({ weight: "400", subsets: ["latin"], });
export const latoBold = Lato({ weight: "700", subsets: ["latin"], });


const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Choose the weights you need
  variable: '--font-nunito',     // Define your custom CSS variable
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Hawk Human Resources",
  description: "Soon to be the pre-eminent human resources application in the world.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-US" className={`${openSans.variable} ${geistSans.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}</body>
    </html>
  );
}
