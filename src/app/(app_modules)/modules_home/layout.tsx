import type { Metadata } from "next";
import { Open_Sans, Lato, Nunito } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../new.css";



/* Fonts */
export const nunito = Nunito({
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
    <html lang="en-US" className={`${nunito.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>

          {children}
      </body>
    </html>
  );
}
